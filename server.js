import http from 'http';
import app from './app.js';
import dotenv from 'dotenv';
import { initSocket } from './socket/index.js';

dotenv.config();

const PORT = process.env.PORT || 3000;

const server = http.createServer(app);

initSocket(server);

server.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 Сервер запущен на порту ${PORT} (HTTP + WebSocket)`);
});
