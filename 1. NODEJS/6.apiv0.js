import http from "node:http";
import { MongoClient, ObjectId } from "mongodb";
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
                default:
                    break;
            }
        }
        else if(urlParse.pathname.includes("/user")){
            switch(req.method){
                case "PUT":
                    const id = urlParse.pathname.split("/")[2];
                    let body = "";
                    req.on("data", (data => {
                        body += data.toString();
                    }));
                    req.on("end", () => {
                        body = JSON.parse(body);
                        updateUser(db,id, body).then((resp) => {
                            res.writeHead(201, { "Content-Type": "application/json" });
                            res.end(JSON.stringify(resp)); 
                        });                       
                    })
                break;
                case "DELETE":
                    req.on("end", () => {
                        deleteUser(db,id).then((resp) => {
                            res.writeHead(201, { "Content-Type": "application/json" });
                            res.end(JSON.stringify(resp)); 
                        });                       
                    })
                break;            
            }
        }
       /* else if(req.method ="PUT" && urlParse.pathname.includes("/user")){
            const id = urlParse.pathname.split("/")[2];
            let body = "";
            req.on("data", (data => {
                body += data.toString();
            }));
            req.on("end", () => {
                body = JSON.parse(body);
                updateUser(db,id, body).then((resp) => {
                    res.writeHead(201, { "Content-Type": "application/json" });
                    res.end(JSON.stringify(resp)); 
                });             
            })
        }*/
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
    return query;
  }  

  async function updateUser(db, id, body){
    const collection = db.collection("user");
    const query = await collection.updateOne(
        {_id: new ObjectId(id)},
        { $set: body});
    return query;
  }  

  async function deleteUser(db,id){
    const collection = db.collection("user");
    const query = await collection.deleteOne({_id: new ObjectId(id)});
    return query;
  }  


  //escuchar el servidor
  function listenToServer() {
    servidor.listen(3000, () => {
      console.log("Servidor escuchando en el puerto 3000");
    });
  }

  main();