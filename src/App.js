import React, { useEffect, useState } from "react"
import './App.css';
import Chat from "./Chat";
import Sidebar from "./Sidebar";
import Pusher from 'pusher-js';
import axios from "./axios"; 

function App() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    axios.get('/messages/sync').then(response => {
      setMessages(response.data);
    })
  }, []);

  useEffect(() => {
    var pusher = new Pusher('cae233d07340d41a40ad', {
      cluster: 'ap2'
    });

    var channel = pusher.subscribe('messages');
    channel.bind('inserted', (newMessage) => {
      setMessages([...messages, newMessage])
    });
    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    };
  }, [messages])

  console.log(messages)

  return (
    <div className = "app">
      <div className = "app__body">
        <Sidebar /> 
        <Chat messages = {messages} />
      </div>
    </div>
  );
}

export default App;
