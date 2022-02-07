const io= require('socket.io')(3001);

io.on('connection', socket => {
    socket.emit('chat-message', 'Hello World')
  });