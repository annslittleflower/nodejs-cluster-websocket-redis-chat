const socketIo = require('socket.io');
const redisAdapter = require('socket.io-redis');

function SocketService (server) {
  this.io = socketIo(server);
  this.io.adapter(redisAdapter({ host: 'the_redis', port: 6379 }));


  // this.chats = new Set();

  this.io.on('connection', socket => {
    socket.on('user-connected-to-chat', (chatId) => {
      socket.join(chatId);
      // this.chats.add(chatId);
    });

    socket.on('posted-message-to-chat', (chatId, message) => {
      this.io.to(chatId).emit('show-chat-message', { message });
    });
  });

  this.emiter = (event, body) => {
    console.log('trying to emit', event, body);
    this.io.emit(event, body);
  };
}

module.exports = SocketService;
