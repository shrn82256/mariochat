var express = require("express");
var socket = require("socket.io");
const PORT = process.env.PORT || 4000;

var app = express();

app.use(express.static("public"));

var server = app.listen(PORT, () => {
  console.log(`listening to requests on port ${PORT}`);
});

var io = socket(server);

io.on("connection", socket => {
  console.log(`made socket connection`, socket.id);

  socket.on("chat", data => {
    io.sockets.emit("chat", data);
  });

  socket.on("typing", data => {
    socket.broadcast.emit("typing", data);
  });
});
