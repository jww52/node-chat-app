var socket = io();

socket.on('connect', function () {
  console.log('connected to server');
});
  // socket.emit('createEmail', {
  //   to: 'jen@example.com',
  //   text: 'hey this is Andrew'
  // });

//   socket.emit('createMessage', {
//     to: 'Andrew@example.com',
//     text: 'this is the new message'
//   });


socket.on('disconnect', function () {
  console.log('disconnected from server');
});

// socket.on('newEmail', function (email) {
//   console.log('new email', email);

socket.on('newMessage', function (message) {
  console.log('new message', message);
  var li = jQuery('<li></li>');
  li.text(`${message.from}: ${message.text}`);

  jQuery('#messages').append(li);
  });

jQuery('#message-form').on('submit', function (e) {
  e.preventDefault();

  socket.emit('createMessage', {
    from: 'User',
    text: jQuery('[name=message]').val()
  }, function () {

  })
});
