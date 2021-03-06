import React from 'react'
import { Avatar, IconButton } from '@material-ui/core'
import { Chat, DonutLarge, SearchOutlined } from '@material-ui/icons'
import MoreVertIcon from '@material-ui/icons/MoreVert';
import './Sidebar.css';
import SidebarChat from './SidebarChat';
function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar__header">
            <Avatar />
            <div className="sidebar__headerRight">
                <IconButton>
                    <DonutLarge />
                </IconButton>
                <IconButton>
                    <Chat />
                </IconButton>
                <IconButton>
                     <MoreVertIcon/>
                </IconButton>
          
            </div>
            </div>

            
            <div className="sidebar__search">

                <div className="sidebar__searchContainer">
                <SearchOutlined />
                <input placeholder="Search or start new channel">

                 </input>
                </div>
      
            </div>
            <div className="sidebar__chats">
            <SidebarChat addNewChat />
                <SidebarChat/>
                <SidebarChat/>
                <SidebarChat/>
            </div>
        
        </div>
    )
}

export default Sidebar
