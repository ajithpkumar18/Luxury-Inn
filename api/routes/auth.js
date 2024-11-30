import express from "express";
import { register, getUser, login } from "../controllers/auth.js";

const router = express.Router();

router.post("/register", register);

router.post("/login", login);
router.get("/", getUser);

export default router;
