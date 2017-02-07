//SOCKET REFERENCE GUIDE
//io.emit emits message to every connected user
//io.emit -> io.to(params.room).emit
//socket.broadcast.emit sends message to everyone connected to socket server except for current user(sender)
//socket.broadcast.to(params.room).emit
//socket.emit emits event specfically to one user
