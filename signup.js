let socket;
const connectButton = document.querySelector("#connect");
const nameInput = document.querySelector("#name");

connectButton.addEventListener("click", function () {
    socket = new WebSocket('ws://localhost:8888/echo-protocol');
    socket.onopen = function (e) {
        console.log("Connection established");
        let name = nameInput.value;
        socket.send(JSON.stringify({ type: "name", name: name }));
    };
});
