const WebSocket = require('ws');
const port = process.env.PORT || 3001;

const wss = new WebSocket.Server({ port });

wss.on('connection', ws => {
  console.log('new client connected');

  ws.on('message', (message) => {
    const msgString = message.toString();
    const data = JSON.parse(msgString);
    console.log('Received:', data);

    // Broadcast to all connected clients
    wss.clients.forEach(client => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(JSON.stringify(data));
      }
    });
  });

  ws.on('close', () => {
    console.log('client has disconnected');
  });
});

console.log(`WebSocket server is running on ws://localhost:${port}`);
