import React from 'react'
import SidebarOption from './SidebarOption';
import "./Sidebar.style"
import { SidebarContainer, SidebarHeader, SidebarInfo } from "./Sidebar.style"
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import CreateIcon from '@mui/icons-material/Create';
import InsertCommentIcon from '@mui/icons-material/InsertComment';
import InboxIcon from '@mui/icons-material/Inbox';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddIcon from '@mui/icons-material/Add';
import { collection } from 'firebase/firestore'; 
import { useCollection } from 'react-firebase-hooks/firestore';
import { db, auth } from '../../firebase';

function Sidebar() {
    const [channels, loading, error] = useCollection(
        collection(db, 'rooms'),
        {
          snapshotListenOptions: { includeMetadataChanges: true },
        }
      );

  return (
        <SidebarContainer>
            <SidebarHeader>
                <SidebarInfo>
                    <h2>HQ</h2>
                    <h3>
                        <FiberManualRecordIcon />
                        {auth.currentUser.displayName}
                    </h3>
                </SidebarInfo>
                <CreateIcon />
            </SidebarHeader>
            <SidebarOption Icon={InsertCommentIcon} title="Threads" />
            <SidebarOption Icon={InboxIcon} title="Mentions & reactions" />
            <hr />
            <SidebarOption Icon={ExpandMoreIcon} title="Channels" />
            <hr />
            <SidebarOption Icon={AddIcon} addChannelOption title="Add channel" />
            {/* {channels?.docs.map((doc) => (
              <SidebarOption 
              key={doc.id}
              id={doc.id}
              title={doc.data().name.channelName} />
            ))} */}
            {channels && (
            <span>
              {channels?.docs.map((doc) => (
                <SidebarOption key={doc.id} id={doc.id} title={doc.data().name.channelName} />
              ))}
            </span>
        )}
        </SidebarContainer>
  )
}

export default Sidebar