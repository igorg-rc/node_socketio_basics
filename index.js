const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
  socket.on('chat message', (msg) => {
    io.emit('chat message', msg);
  });
});

http.listen(port, () => {
  console.log('listening on *:5000');
});