const http = require('http')
const express = require("express")
const path = require('path')
const {Server} = require('socket.io')


const app = express()
const server = http.createServer(app)
const io = new Server(server)

// Socket.io
let users = {}

io.on('connection',(socket)=>{

    socket.on('new-user-joined',name=>{
        users[socket.id] = name
        console.log('New user connceted:', name)
        socket.broadcast.emit('user-joined',name)
        socket.emit('usersObj',users)


    })

    socket.on('user-message',message=>{
        let messageObj = {
            name:users[socket.id],
            message:message
        }
        socket.broadcast.emit('message',messageObj)
    })


   
});




const staticPath = path.join(__dirname,'../Public')
app.use(express.static(staticPath))

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname, './Public', 'index.html'));
})


server.listen(9000, '0.0.0.0',()=>console.log("Server started on PORT:9000"))

