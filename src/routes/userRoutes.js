import express from "express";
import { createUser, deleteuser, getAllUsers, getUserById, updateUser } from "../controllers/useController.js";

const router = express.Router();

router.post("/user", createUser);
router.get("/user", getAllUsers);
router.get("/user/:id", getUserById);
router.put("/user/:id", updateUser);
router.delete("/user/:id",deleteuser);

export default router;