import PropTypes from 'prop-types';

const ChatMessage = ({ message, location }) => {
  const isCurrentUser = message.sender === location;

  return (
    <div className={`chat-message mb-2 ${isCurrentUser ? 'text-right' : 'text-left'}`}>
      <p className="font-bold">{message.sender}:</p>
      <p className="text-black bg-gray-100 p-2 rouded-lg">{message.message}</p>
    </div>
  );
};

ChatMessage.propTypes = {
  message: PropTypes.shape({
    sender: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired
  }).isRequired,
  location: PropTypes.string.isRequired
};

export default ChatMessage;

