import PropTypes from 'prop-types';

const ChatMessage = ({ message, location }) => {
  const isCurrentUser = message.sender === location;

  return (
    <div className={`chat-message mb-2 w-full max-w-3xl ${isCurrentUser ? 'text-right' : 'text-left'}`}>
      <p className="font-bold text-black">{message.sender}</p>
      <p className={`text-black p-2 rounded-lg inline-block max-w-full ${
        isCurrentUser ? 'bg-green-300' : 'bg-gray-200'
      }`}>
        {message.message}
      </p>
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

