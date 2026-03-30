import express from "express";
import { registerUser, loginUser } from "../controllers/authController.js";

const router = express.Router();

// Routes
router.post("/signup", registerUser);  // matches frontend /signup
router.post("/login", loginUser);      // matches frontend /login

export default router;