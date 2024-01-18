import { Router } from "express";
const router = Router();
import * as customerControllers from "../Controllers/customerControllers.js";
router.get("/", customerControllers.getAllCustomers)
router.post("/number", customerControllers.getCustomerByAccountNumber)
router.get("/:customerId", customerControllers.getCustomerById)
export default router;
