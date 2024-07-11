import express from 'express'

import { createOrder, deleteOrder, getOrder, getOrders, updateOrder } from '../controllers/order.js';

const router = express.Router();

// CREATE ORDER
router.post("/", createOrder);

// UPDATE ORDER
router.put("/:id", updateOrder);

// DELETE ORDER
router.delete("/:id", deleteOrder);

// GET ORDER
router.get("/:id", getOrder);

// GET ALL ORDERS
router.get("/", getOrders);

export default router