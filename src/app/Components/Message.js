import React from 'react'
import styled from 'styled-components'

export default function Message({ message, timestamp, user, userImage }) {
  return (
    <MessageContainer>
        <img src={userImage} alt="User" />
        <MessageInfo>
            <h4>
                {user} {' '}
                <span className='text-greenish font-light ml-[4px] text-xs'>
                    {new Date(timestamp?.toDate()).toUTCString()}
                </span>
            </h4>
            <p>{message}</p>

        </MessageInfo>
    </MessageContainer>
  )
}

const MessageContainer = styled.div`
    display: flex;
    padding: 20px;
    >  img {
        height: 50px;
        border-radius: 8px;
    }
`;

const MessageInfo = styled.div`
    padding-left: 10px;
`;


