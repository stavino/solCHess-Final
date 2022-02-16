const io= require('socket.io')(3002);

io.on('connection', socket => {
    socket.emit('chat-message', 'Hello World')
  });