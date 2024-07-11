import express from 'express'

import { createInventory, deleteInventory, getInventories, getInventory, updateInventory } from '../controllers/inventory.js';


const router = express.Router();

// CREATE INVENTORY
router.post("/", createInventory);

// UPDATE INVENTORY
router.put("/:id", updateInventory);

// DELETE INVENTORY
router.delete("/:id", deleteInventory);

// GET INVENTORY
router.get("/:id", getInventory);

// GET INVENTORIES
router.get("/", getInventories);

export default router