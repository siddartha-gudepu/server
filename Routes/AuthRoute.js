import { loginUser,registerUser } from "../Controllers/AuthController.js";

const express = require("express");

const router = express.Router();

router.post('/register',registerUser)

router.post('/login',loginUser)

export default router
