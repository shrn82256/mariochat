var express = require("express");
var socket = require("socket.io");
const PORT = 4000;

var app = express();

app.use(express.static("public"));

var server = app.listen(PORT, () => {
  console.log(`listening to requests on port ${PORT}`);
});

var io = socket(server);

io.on("connection", () => {
  console.log(`made socket connection`);
});
