import { useState, useEffect, useRef } from "react";
import ChatMessage from "./ChatMessage";
import PropTypes from 'prop-types';

const ChatWindow = ({ title, messages, onSendMessage, location }) => {
  const [input, setInput] = useState('');
  const messagesEndRef = useRef(null);
  const [wiggle, setWiggle] = useState(false);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
    if (messages.length > 0) {
      setWiggle(true);
      setTimeout(() => setWiggle(false), 500);
    }
  }, [messages]);

  const handleSendMessage = () => {
    if (input.trim() === '') return;
    onSendMessage(input);
    setInput('');
  };

  return (
    <div className={`w-1/2 p-4 border rounded-lg bg-white shadow-md ${wiggle ? 'animate-wiggle' : ''}`}>
      <h2 className="text-x1 font-bold mb-4">{title}</h2>
      <div className="h-64 overflow-y-auto mb-4">
        {messages.map((message, index) => (
          <ChatMessage key={index} message={message} location={location} />
        ))}
        <div ref={messagesEndRef} />
      </div>
      <div className="flex">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              handleSendMessage();
            }
          }}
          className="flex-1 p-2 border rounded-l-lg"
          placeholder="Type a message..."
        />
        <button
          onClick={handleSendMessage}
          className="bg-blue-500 text-white p-2 rounded-r-lg"
        >
          Send
        </button>
      </div>
    </div>
  );
};

ChatWindow.propTypes = {
  title: PropTypes.string.isRequired,
  messages: PropTypes.array.isRequired,
  onSendMessage: PropTypes.func.isRequired,
  location: PropTypes.string.isRequired
};

export default ChatWindow;
