import express from 'express'
import { createSupplier, deleteSupplier, getSupplier, getSuppliers, updateSupplier } from '../controllers/supplier.js';

const router = express.Router();

// CREATE SUPPLIER
router.post("/", createSupplier);

// UPDATE SUPPLIER
router.put("/:id", updateSupplier);

// DELETE SUPPLIER
router.delete("/:id", deleteSupplier);

// GET SUPPLIER BY ID
router.get("/:id", getSupplier);

// GET ALL SUPPLIERS
router.get("/", getSuppliers);


export default router;