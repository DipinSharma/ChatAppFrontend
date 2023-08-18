import React, { useEffect, useState } from 'react'
import { apiClient } from '../../../shared/services/api-client';
import { Button, Container, Typography } from '@mui/material';
import ChatInput from './ChatInput';

export const Chat = ({selectedUser, currentUser,selectedUserName,socket}) => {
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await apiClient.post(process.env.REACT_APP_ALL_MESSAGES, {"from":currentUser,"to":selectedUser}); // Replace with your backend endpoint
        setMessages(response.data);
        console.log(messages);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    }

    fetchUsers();
  }, [selectedUser]);
  const handleSendMsg = async (msg) => {
    console.log(msg);
    socket.current.emit("send-msg", {
      to: currentUser,
      from: selectedUser,
      message:msg,
    });
    await apiClient.post(process.env.REACT_APP_SEND_MESSAGES, {
      from: selectedUser,
      to: currentUser,
      message: msg,
    });
    const msgs = [...messages];
    msgs.push({ fromSelf: true, message: msg });
    setMessages(msgs);
  };

  return (
    <>
    <Container>
      <Typography>{selectedUserName}</Typography>
    </Container>
    {messages.map((message, index) => (
        <div key={index}>
          {message.fromSelf ? <h1>{message.message}</h1> : <h3>{message.message}</h3>}
        </div>
      ))}
      <ChatInput handleSendMsg={handleSendMsg}/>
    </>
  )
}
