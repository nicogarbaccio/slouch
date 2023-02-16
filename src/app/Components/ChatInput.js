import React, { useState } from 'react'
import { db, auth } from '../../firebase';
import { collection, addDoc, serverTimestamp  } from 'firebase/firestore'; 
import styled from 'styled-components';
import Button from '@mui/material/Button';


function ChatInput({ channelName, channelId, chatRef }) {
    const [userInput, setUserInput] = useState("");

    const sendMessage = e => {
        e.preventDefault();
        if (!channelId) {
            return false;
        }

    const messagesRef = collection(db, `rooms/${channelId.id}/messages`);
    const general = addDoc(messagesRef, {
        message: userInput,
        timestamp: serverTimestamp(),
        user: auth.currentUser.displayName,
        userImage: auth.currentUser.photoURL
    });

    chatRef.current.scrollIntoView({
        behavior: "smooth"
    });

    setUserInput("");

    }

  return (
    <ChatInputContainer>
        <form>
        <input
            onChange={e => setUserInput(e.target.value)} 
            value={userInput} 
            placeholder={`Message #${channelName}`} />
            <Button 
                type="submit" 
                onClick={sendMessage}>
                    Send
            </Button>
        </form>
    </ChatInputContainer>
  )
}

export default ChatInput

const ChatInputContainer = styled.div`
    border-radius: 20px;
    > form {
        position: relative;
        display: flex;
        justify-content: center;
    }
    > form > input {
        position: fixed;
        bottom: 30px;
        width: 60%;
        border: 1px solid gray;
        border-radius: 3px;
        padding: 20px;
        outline: none;
    }
    > form > button {
        display: none !important;
    }
`;