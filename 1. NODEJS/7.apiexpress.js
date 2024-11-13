import express, { json } from "express";

//Crear Servidor
const app = express();

//Objetos de prueba
const users  = [
    {
        id: 1,
        emai: "afsr@gmail.com",
        password: 123456
    },
    {
        id: 2,
        emai: "dfsr@gmail.com",
        password: 5476767
    }
]

//Middleware
app.use(json());
/*app.use((req,res)=> {
    res.status(404).send("Not found");
})*/

app.get("/user", (req,res)=>{
    res.json(users);
});
app.post("/user", (req,res)=>{
    const body = req.body;
    users.push(body);
    res.json(users);
});

//Escuchar el servidor
app.listen(3000, () => {
    console.log("Servidor escuchando en el puerto 3000");
});
