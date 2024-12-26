import express from "express";
import {
  create,
  deleteProduct,
  edit,
  getProducts,
} from "../controllers/product.controller.js";

const router = express.Router();

router.get("/", getProducts);

router.post("/", create);

router.put("/:id", edit);

router.delete("/:id", deleteProduct);

export default router;
