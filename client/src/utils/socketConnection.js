import io from "socket.io-client"
let socket = io.connect("http://localhost:8181",
{transports: ['websocket', 'polling', 'flashsocket']})

socket.emit("clientAuth","sdfasdfasdf")
export default socket