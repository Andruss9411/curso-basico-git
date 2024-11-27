import { Router } from "express";
import authorController from "../../controllers/authorController.js";

const router = new Router();

router
  .get("/", authorController.getAuthor)
  .post("/", authorController.createAuthor)
  .put("/:id", authorController.updateAuthor)
  .delete("/:id", authorController.deleteAuthor);

export default router;