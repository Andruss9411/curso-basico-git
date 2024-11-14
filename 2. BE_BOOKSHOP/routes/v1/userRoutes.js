import { Router } from "express";
import userController from "../../controllers/userController.js";

const router = new Router();

router
.get("/", userController.getUser)
.post("/", userController.createUser)
.put("/", userController.updateUser)
.delete("/", userController.deleteUser);

 export default router;