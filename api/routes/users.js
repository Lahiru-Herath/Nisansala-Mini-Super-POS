import express from 'express'

import { deleteUser, getUser, getUsers, updateUser } from '../controllers/user.js';

const router = express.Router();

// UPDATE USER
router.put("/:id", updateUser);

// DELETE USER
router.delete("/:id", deleteUser);

// GET USER
router.get("/:id", getUser);

// GET ALL USERS
router.get("/", getUsers);

export default router