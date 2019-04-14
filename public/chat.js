const PORT = process.env.PORT || 4000;

var socket = io.connect(`http://localhost:${PORT}`);
