import React from 'react'
import styled from 'styled-components'
import { db } from '../../firebase';
import { collection, addDoc } from 'firebase/firestore'; 
import { useDispatch } from 'react-redux';
import { enterRoom } from '../../features/appSlice';

function SidebarOption({ Icon, title, addChannelOption, id }) {
    // const [channels, loading, error] = useCollection(collection(db, "rooms")); 
    const dispatch = useDispatch();
    const addChannel = () => {
        const channelName = prompt('Enter a channel name');
        if (channelName) {
            try {
                addDoc(collection(db, "rooms"), {
                    name: {channelName}
                });
            } catch (e) {
               console.error("Error adding document: ", e);
            }
        }
    }

    const selectChannel = () => {
        if (id) {
            dispatch(enterRoom({
                roomId: {id},
            }));
        }
    }

  return (
    <SidebarOptionContainer 
        onClick={addChannelOption ? addChannel : selectChannel}>
        {Icon && <Icon fontSize='large' style={{padding: 10}} />}
        {Icon ? (
            <h3>{title}</h3>
        ): (
            <SidebarOptionChannel>
                <span>#</span> {title}
            </SidebarOptionChannel>
        )}
    </SidebarOptionContainer>
  )
}

export default SidebarOption;

const SidebarOptionContainer = styled.div`
    display: flex;
    font-size: 12px;
    align-items: center;
    margin-top: 5px;
    padding-left: 2px;
    cursor: pointer;
    :hover {
        opacity: 0.9;
        background-color: #340e36;
    }
    > h3 {
        font-weight: 500;
    }
    > h3 > span {
        padding: 15px;
    }
`;

const SidebarOptionChannel = styled.h3`
    padding: 10px 0;
    font-weight: 300;
`;