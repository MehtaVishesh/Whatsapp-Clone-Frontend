import React from 'react'
import "./Sidebar.css"
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import ChatIcon from '@mui/icons-material/Chat';
import { Avatar } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { SearchOutlined } from "@material-ui/icons";
import SidebarChat from './SidebarChat';
import MyProfilePicture from './myProfilePicture.JPG';

function Sidebar() {
    return (
        <div className = "sidebar">
            <div className = "sidebar__header">
                <Avatar src = {MyProfilePicture}/>
                <div className = "sidebar__headerRight">
                    <DonutLargeIcon />
                    <ChatIcon />
                    <MoreVertIcon />
                </div>
            </div>

        <div className = "sidebar__search">
            <div className = "sidebar__searchContainer">
                <SearchOutlined />
                <input placeholder = "Search or start new chat" type = "text" />

            </div>
        </div>
        <div className = "sidebar__chats">
            <SidebarChat />
        </div>
    </div>
    );
}

export default Sidebar
