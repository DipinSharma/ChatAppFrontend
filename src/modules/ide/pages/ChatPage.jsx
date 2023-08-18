// /* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef, useState } from 'react'
import { apiClient } from '../../../shared/services/api-client';
import Stack from '@mui/material/Stack';
import { Button, Container, Grid } from '@mui/material';
import { Chat } from '../components/Chat';
import { io } from "socket.io-client";
import { Socket } from 'socket.io-client';
export const ChatPage = (props) => {
  const [users, setUsers] = useState([]);
  const [selected,setSelected]=useState(undefined);
  const [selectedName,setSelectedName]=useState(undefined);
  const [currentUser, setCurrentUser] = useState(undefined);
  const socket = useRef();
  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await apiClient.get(process.env.REACT_APP_ALL_USER + '/1'); // Replace with your backend endpoint
        setUsers(response.data); // Assuming the response data is an array of user objects
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    }

    fetchUsers();
  }, []); // Empty dependency array ensures this runs only once on component mount
  const handleUserClick=(user)=>{
    // console.log(user._id);
    setSelected(user._id);
    setSelectedName(user.name)
  }
  useEffect(() => {
    socket.on('connect',()=>{
      console.log("socket connected");
    })
    
    if (currentUser) {
      socket.current = io(process.env.REACT_APP_HOST);
      socket.current.emit("add-user", currentUser._id);
    }
  }, [currentUser]);

  return (
    <>
      <Container>
        <Grid container>
          {/* {console.log(contacts)} */}
          <Grid xs={4} >
          <Stack >
            {users.map(user => (
              <Button key={user._id}
                onClick={() => handleUserClick(user)}
                variant={user === selected ? 'contained' : 'outlined'}
              >{user.name}</Button>
            ))}

          </Stack>
          </Grid>
          <Grid xs={8}>
            <Chat selectedUser={selected} currentUser={props.currentUser} selectedUserName={selectedName} socket={socket}/>
          </Grid>
        </Grid>
      </Container>
    </>
  )

  // return (
  //   <div>
  //     <h1>User List</h1>
  //     <ul>
  //     </ul>
  //   </div>
  // );
};
