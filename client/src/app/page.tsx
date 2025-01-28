"use client"; 

import { useState, useEffect } from 'react';
import ChatWindow from '../components/ChatWindow';

interface Message {
  message: string;
  sender: string;
}

const Home = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [socket, setSocket] = useState<WebSocket | null>(null);

  useEffect(() => {
    const newSocket = new WebSocket('ws://localhost:3001');

    newSocket.onopen = () => {
      console.log('Connected to server');
    };

    newSocket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      console.log('Incoming:', data)
      setMessages((prevMessages) => [...prevMessages, data]);
    };

    setSocket(newSocket);

    return () => {
      newSocket.close();
    }
  }, []);

  const sendMessage = (message: string, sender: string) => {
    if (socket) {
      socket?.send(JSON.stringify({ message, sender }));
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="flex space-x-4">
        <ChatWindow
          title="Left Chat"
          messages={messages}
          location={"left"}
          onSendMessage={(message: string) => sendMessage(message, 'left')}
        />
        <ChatWindow
          title="Right Chat"
          messages={messages}
          location={"right"}
          onSendMessage={(message: string) => sendMessage(message, 'right')}
        />
      </div>
    </div>
  )
}

export default Home;
