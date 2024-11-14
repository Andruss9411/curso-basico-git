import express, { json } from "express";
import dotenv from "dotenv";
import userRoutes from "./routes/v1/userRoutes.js"

const app = express();
dotenv.config();

//Middleware
app.use(json());
app.use((req,res) => {
    res.status(404).send("Not found");
})

//Routing
app.use("/api/v1/user", userRoutes);

//Escucha de servidor
const PORT = process.env.PORT || 3000;

app.listen(process.env.PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});