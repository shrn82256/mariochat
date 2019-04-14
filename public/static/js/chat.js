var socket = io.connect("/");

var message = $("#message");
var handle = $("#handle");
var btn = $("#send");
var output = $("#output");
var feedback = $("#feedback");

btn.on("click", () => {
  socket.emit("chat", {
    message: message.val(),
    handle: handle.val()
  });
});

message.on("keypress", () => {
  socket.emit("typing", {
    handle: handle.val()
  });
});

socket.on("chat", data => {
  feedback.html("");
  output.html(
    output.html() + `<p><strong>${data.handle}: </strong>${data.message}</p>`
  );
});

socket.on("typing", data => {
  feedback.html(`<p><em>${data.handle} is typing a message...</em></p>`);
});
