import React from 'react'
import ChatInput from './ChatInput';
import Message from './Message';
import styled from 'styled-components'
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { useSelector } from 'react-redux';
import { useCollection, useDocument } from 'react-firebase-hooks/firestore';
import { collection , doc, query, orderBy } from 'firebase/firestore';
import { selectRoomId } from '../../features/appSlice';
import { useRef, useEffect, useState } from 'react';
import { auth, db } from '../../firebase';

function Chat() {
    const chatRef = useRef(null); 
    const roomId = useSelector(selectRoomId);
    const [roomDetails] = useDocument(
        roomId && doc(db, `rooms/${roomId.id}`)
    );

    const [roomMessages, loading] = useCollection(
        roomId && query(collection(db, `rooms/${roomId.id}/messages`), orderBy("timestamp", "asc")),
    );
    

    useEffect(() => {
        chatRef?.current?.scrollIntoView(
            {behavior: "smooth"}
        );
    }, [roomId, loading, roomMessages]);

  return (
    <ChatContainer>
        {roomDetails && roomMessages && (
            <>
            <Header>
                <HeaderLeft>
                    <h4><strong>#{roomDetails?.data().name.channelName}</strong></h4>
                    <span>&#127775;</span>
                </HeaderLeft>
                <HeaderRight>
                    <p>
                        <InfoOutlinedIcon />Details
                    </p>
                </HeaderRight>
            </Header>
            <ChatMessages>
            { roomMessages?.docs.map(doc => {
                    const { message, timestamp, user, userImage } = doc.data();
                    return (
                        <Message
                            key={doc.id}
                            message={message}
                            timestamp={timestamp}
                            user={user}
                            userImage = {userImage}
                        />
                    );
            })}
            <ChatBottom ref={chatRef} />
            </ChatMessages>
            <ChatInput
                chatRef={chatRef}
                channelName={roomDetails?.data().name.channelName}
                channelId= { roomId }
            />
        </>
        )}
    </ChatContainer>
  )
}

export default Chat

const ChatContainer = styled.div`
    flex: 0.7;
    flex-grow: 1;
    overflow-y: scroll;
    margin-top: 60px;
`;

const Header = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 20px;
    border-bottom: 1px solid lightgray;
`;

const ChatMessages = styled.div`

`;

const HeaderLeft = styled.div`
    display: flex;
    align-items: center;
    >h4 {
        display: flex;
        text-transform: lowercase;
        margin-right: 10px;
    }
    > h4 > .MuiSvgIcon-root {
        margin-left: 20px;
        font-size: 18px;
    }
`;

const HeaderRight = styled.div`
    > p {
        display: flex;
        align-items: center;
        font-size: 14px;
    }
    > p > .MuiSvgIcon-root {
        margin-right: 5px !important;
        font-size: 16px;
    }
`;

const ChatBottom = styled.div`
    padding-bottom: 150px;
`;