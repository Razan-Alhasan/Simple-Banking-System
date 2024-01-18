import { Router } from "express";
const router = Router();
import * as transferControllers from "../Controllers/transferControllers.js";
router.post("/", transferControllers.createTransferProcess)
export default router;
