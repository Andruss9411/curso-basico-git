import http, { createServer } from "node:http";

//API
//Crear un servidor
var servidor = "";

function main(){
  awaitServer();
}

function crteServer(){
    servidor = http.createServer((req, res) => {
        res.writeHead(200, {"content-type": "text/plain"});
        res.end("Hola mundo");
    });
}

function awaitServer() {
    servidor.listen(3000, () => {
        console.log("Servidor escuchando en el puerto 3000");
    });
}
//Escuchar un servidor
main();