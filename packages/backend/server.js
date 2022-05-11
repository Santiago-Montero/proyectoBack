const { app } = require('./routes/routes.js')
const parseArgs = require('minimist')
require('dotenv').config()


const args = parseArgs(process.argv.slice(2))
const MODE = args.MODE || process.env.NODE_ENV
const PORT =  args.PORT || process.env.PORT

const server = app.listen(PORT, () =>{
    console.log(`Server is runnig in port ${PORT} and the enviroment is ${MODE}`)
});

const io = require('socket.io')(server, {
    /*
    cors: {
      origin: "https://your-box-ecommerce.000webhostapp.com",
    },*/
    origins:'your-box-ecommerce.000webhostapp.com:* https://your-box-ecommerce.000webhostapp.com:* https://www.your-box-ecommerce.000webhostapp.com:*'
  });

io.on("connection", (socket) => {
  //console.log(socket.id);

  socket.on("join_room", (data) => {
    socket.join(data);
    //console.log("User Joined Room: " + data);
  });

  socket.on("send_message", (data) => {
    //console.log(data);
    socket.to('yourBoxChat').emit("receive_message", data.content);
  });

  socket.on("disconnect", () => {
    console.log("USER DISCONNECTED");
  });
});

  