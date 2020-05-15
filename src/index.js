Hooks.on("ready", () => {
  const data = {
    name: "Hello",
    message: "world",
  };

  console.log(game.socket);
  game.socket.emit("module.vtta-socke", data);

  game.socket.on("module.vtta-socke", data => {
    console.log("Received socket data");
    console.log(data);
  });
});
