import http from "node:http";

const estudiantes = [{
  "nombre":"Cristian",
  "edad":20,
  "email":"cmartinez@gmail.com"},
  {"nombre":"Maria",
    "edad":25,
    "email":"mmartinez@gmail.com"
  }];

//api
var servidor = "";
//crear un servidor
function main() {
  crearServidor();
  escucharServidor();
}

function crearServidor() {
  servidor = http.createServer((req, res) => {
    console.log("url: ", req.url);
    console.log("method: ", req.method);
    res.writeHead(200, { "Content-Type": "application/jsom" });
    res.end(JSON.stringify(estudiantes));
  });
}

//escuchar el servidor
function escucharServidor() {
  servidor.listen(3000, () => {
    console.log("Servidor escuchando en el puerto 3000");
  });
}
main();