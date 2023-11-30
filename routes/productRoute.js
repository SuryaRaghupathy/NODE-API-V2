const express = require("express");
const Product = require("../models/productModel");
const {
  getProducts,
  getProduct,
  updateProduct,
  deleteProduct,
  createProduct,
} = require("../controller/productController");

const router = express.Router();

router.get("/", getProducts);

router.get("/:id", getProduct);

router.put("/:id", updateProduct);

router.delete("/:id", deleteProduct);

router.post("/", createProduct);

module.exports = router;
