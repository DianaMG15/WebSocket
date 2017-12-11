var io=require('socket.io').listen(3000);
io.sockets.on("connection", arranque);

function arranque(socketn){
	socketn.on("datos_cliente", regresar_mesanje);
}

function regresar_mesanje(data)
{
	io.sockets.emit("datos_servidor", data);
}