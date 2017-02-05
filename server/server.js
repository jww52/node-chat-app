const express =  require('express');
const http = require('http');
const path = require('path');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
  console.log('new user connected');

  // socket.emit('newEmail', {
  //   from: 'mike@example.com',
  //   text: 'Hey.  What is going on',
  //   createAt: 123
  // });

  socket.emit('newMessage', {
    from: 'john@example.com',
    text: 'Hey.  this is new message event',
    createAt: 1234
  });

  // socket.on('createEmail', (newEmail) => {
  //   console.log('createEmail', newEmail)
  // });

  socket.on('createMessage', (message) => {
    console.log('createMessage', message)
  });

  socket.on('disconnect', (socket) => {
    console.log('client has disconnected');
  });
});

server.listen(port, () => {
  console.log(`started on port ${port}`);
});
