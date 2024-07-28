import express from 'express'

import { createProduct, updateProduct, deleteProduct, getProducts, getProduct } from '../controllers/product.js'

const router = express.Router();

// CREATE 
router.post("/", createProduct);

// UPDATE
router.put("/:id", updateProduct);

// DELETE
router.delete("/:id", deleteProduct);

// GET PRODUCT
router.get("/:id", getProduct);

// GET PRODUCTS
router.get("/", getProducts);

export default router