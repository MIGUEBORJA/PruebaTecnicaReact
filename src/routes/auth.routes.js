import { Router } from "express";
import { createnote } from "../controller/auth.controller.js";

const router = Router(); 

router.post('/createnote', createnote); 

export default router; 