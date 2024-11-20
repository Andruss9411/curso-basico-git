import { Router } from "express";
import editorialController from "../../controllers/editorialController.js";

const router = new Router();

router
  .get("/", editorialController.getEditorial)
  .post("/", editorialController.createEditorial)
  .put("/:id", editorialController.updateEditorial)
  .delete("/:id", editorialController.deleteEditorial);

export default router;