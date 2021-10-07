import { AttachFile, MoreVert, SearchOutlined } from '@material-ui/icons';
import { Avatar } from "@material-ui/core";
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import MicIcon from '@mui/icons-material/Mic';
import React, {useState} from 'react';
import "./Chat.css";
import axios from "./axios";

function Chat( { messages } ) {

    const [input, setInput] = useState("");

    const sendMessage = async (e) => {
        e.preventDefault(); 
        await axios.post('/messages/new', 
        {
            message: input,
            name: "Vishesh",
            timestamp: "rn",
            received: true, 
        });

        
    };

    return (
        <div className = "chat"> 
            <div className = "chat__header">
                <Avatar />
                <div className = "chat__headerInfo">
                    <h3>Yaashie</h3>
                    <p>online</p>
                </div>

                <div className = "chat__headerRight">
                    < SearchOutlined />
                    <AttachFile />
                    <MoreVert />
                </div>
            </div> 

            <div className = "chat__body">

                {messages.map( (message) => (
                    <p className = {`chat__message ${message.received && "chat__receiver"}`}>
                        <span className = "chat__name">{ message.name }</span>
                            {message.message}
                        <span className = "chat__timestamp">{message.timestamp}</span>
                    </p>
                ))}

            </div>

            <div  className = "chat__footer">
                <InsertEmoticonIcon /> 
                <form>
                    <input value = {input} 
                    onChange = {e => setInput(e.target.value)} 
                    placeholder = "Type a message" 
                    type = "text" />

                    <button onClick = { sendMessage } type = "submit"> 
                        Send a message 
                    </button>
                </form>
                <MicIcon />
            </div>
        </div>
    )
}

export default Chat