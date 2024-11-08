import http from "node:http";
import { MongoClient } from "mongodb";
import url from "node:url";

const uriDB = "mongodb+srv://andruss9411:Ack3rman9411*@cluster0.oabbw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(uriDB);
const dbName = "bookshop";

var servidor = "";

async function main() {
    await client.connect();
    console.log("Conectando al cluster ...");
    const db = client.db(dbName);
    console.log("Conectando a la base de datos ...");
    createServer(db);
    listenToServer();
  }
  
  function createServer(db) {     
    servidor = http.createServer((req, res) => {
        const urlParse= url.parse(req.url, true);
        //console.log(urlParse);

        if(urlParse.pathname == "/user"){
            switch(req.method){
                case "GET":
                    getUser(db)
                    .then((user) => {
                        res.writeHead(200, { "Content-Type": "application/json" });
                        res.end(JSON.stringify(user));  
                    })
                    .catch((error) => 
                        {console.log(error);                            
                    });  
                    break;
                case "POST":
                    let body = "";
                    req.on("data", (data => {
                        body += data.toString();
                    }));
                    req.on("end", () => {
                        body = JSON.parse(body);
                        createUser(db, body).then((resp) => {
                            res.writeHead(201, { "Content-Type": "application/json" });
                            res.end(JSON.stringify(resp)); 
                        });                         
                    })
                    break;
                case "PUT":
                    updateUser();
                    break;
                case "DELETE":
                    deleteUser();
                    break;
                default:
                    break;
            }
        }
    })
}; 

  async function getUser(db){
    const collection = db.collection("user");
    const users = await collection.find().toArray();
    return users;
  }  

  async function createUser(db, body){
    const collection = db.collection("user");
    const query = await collection.insertOne(body);
    console.log(query);
    return query;
  }  

  async function updateUser(){
  }  

  async function deleteUser(){
  }  


  //escuchar el servidor
  function listenToServer() {
    servidor.listen(3000, () => {
      console.log("Servidor escuchando en el puerto 3000");
    });
  }

  main();