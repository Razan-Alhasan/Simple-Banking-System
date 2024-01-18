import * as customerServices from "../Services/customerServices.js";
import { asyncHandler } from "../Utils/errorHandling.js";
export const getAllCustomers = asyncHandler(async (req, res, next) => {
    const customers = await customerServices.getAllCustomers();
    if (customers.length == 0) {
        return next(new Error("No customers", { cause: 404 }));
    }
    res.status(200).json({ message: "success", customers });
});
export const getCustomerById = asyncHandler(async (req, res, next) => {
    const {customerId} = req.params
    const customer = await customerServices.getCustomerById(customerId);
    if (!customer) {
        return next(new Error("customer not found", { cause: 404 }));
    }
    res.status(200).json({ message: "success", customer });
});
export const getCustomerByAccountNumber = asyncHandler(async (req, res, next) => {
    const {accountNumber} = req.body
    const customer = await customerServices.getCustomerByAccountNumber(accountNumber);
    if (!customer) {
        return next(new Error("customer not found", { cause: 404 }));
    }
    res.status(200).json({ message: "success", customer });
});
