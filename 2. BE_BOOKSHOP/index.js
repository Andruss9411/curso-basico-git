import express, { json } from "express";
import dotenv from "dotenv";
import userRoutes from "./routes/v1/userRoutes.js";
import bookRoutes from "./routes/v1/bookRoutes.js";
import authorRoutes from "./routes/v1/authorRoutes.js";
import editorialRoutes from "./routes/v1/editorialRoutes.js";
import cookieParser from "cookie-parser";

//crear servidor
const app = express();
dotenv.config();
app.use(cookieParser());
app.use(json());

//routing
app.use("/api/v1/user", userRoutes);
app.use("/api/v1/book", bookRoutes);
app.use("/api/v1/author", authorRoutes);
app.use("/api/v1/editorial", editorialRoutes);

//midlewares
app.use((req, res) => {
  res.status(404).json({
    error: {
      status: 400,
      message: "string",
    },
  });
});

//esuchar el servidor
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});