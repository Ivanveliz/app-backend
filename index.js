const dotEnv = require('dotenv')
dotEnv.config()
const HTTP = require("http");

function requestController(){
    console.log("recibimos una nueva REQUEST!!!!")
}

const PORT = process.env.PORT
const server = HTTP.createServer(requestController)

server.listen(PORT, function () {
    console.log(`aplicación corriendo en ${PORT}`)
})