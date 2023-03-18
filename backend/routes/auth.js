import express from "express";
import { loginUser, registerUser } from "../controller/auth.js";

const router = express.Router();

router.post("/login", loginUser);

export default router;
