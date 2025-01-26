const ChatMessage = ({ message }) => {
  return (
    <div className="chat-message mb-2">
      <p className="font-bold">{message.sender}:</p>
      <p className="text-black bg-gray-100 p-2 rouded-lg">{message.message}</p>
    </div>
  );
};

export default ChatMessage;

