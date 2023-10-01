const HTTP = require("http");

function requestController(){
    console.log("recibimos una nueva REQUEST!!!!")
}


const server = HTTP.createServer(requestController)

server.listen(4000)