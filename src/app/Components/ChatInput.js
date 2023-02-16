import React from 'react'
import styled from 'styled-components';
import Button from '@mui/material/Button';

function ChatInput({channelName, channelId}) {
    const sendMessage = e => {
        e.preventDefault();
    }

  return (
    <ChatInputContainer>
        <form action="">
            <input placeholder={`Message #ROOM`} />
            <Button hidden type="submit" onClick={sendMessage}>SEND</Button>
        </form>
    </ChatInputContainer>
  )
}

export default ChatInput

const ChatInputContainer = styled.div`
`;