import { Avatar } from '@mui/material';
import React from 'react';
import "./SidebarChat.css";

function SidebarChat() {
    return (
        <div className = "sidebarChat">
            <Avatar />
            <div className = "sidebarChat__info">
                <h2>Yaashie</h2>
                <p>Click the chat for more info!</p>
            </div>
        </div>
    )
}

export default SidebarChat
