# Next.js Chat Application

A real-time chat application built with Next.js, Socket.IO, and Express.

## Project Structure
```
nextjs-chat-app/
├── client/             # Next.js frontend application
├── server/             # Express & Socket.IO server
└── package.json        # Root package.json for workspace
```

## Technologies Used

- **Frontend**:
  - Next.js 14
  - Socket.IO Client
  - Tailwind CSS
  - TypeScript

- **Backend**:
  - Express.js
  - Socket.IO
  - TypeScript

## Getting Started

1. Clone repository
```bash
git clone [repository-url]
cd nextjs-chat-app
```

2. Install dependencies
```bash
npm install
```

3. Run the application
```bash
npm run dev
```

This command will run both server and client simultaneously:
- Client: http://localhost:3000
- Server: http://localhost:5000

## Available Scripts

- `npm run dev` - Run both server and client concurrently
- `npm run client` - Run client application only
- `npm run server` - Run server only

## Features

- Real-time chat
- Multiple room support
- Typing indicators
- Online status
- Message history

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)