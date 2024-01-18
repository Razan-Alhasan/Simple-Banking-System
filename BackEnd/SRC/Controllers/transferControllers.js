import * as transferServices from "../Services/transferServices.js";
import * as customerServices from "../Services/customerServices.js";
import { asyncHandler } from "../Utils/errorHandling.js";
export const createTransferProcess = asyncHandler(async (req, res, next) => {
    const { senderId, receiverId, amount } = req.body;
    const sender = await customerServices.getCustomerById(senderId)
    const receiver = await customerServices.getCustomerById(receiverId)
    if (!sender || !receiver) {
        return next(new Error('Sender or receiver not found', {cause: 404}))
    }
    if (sender.currentBalance < amount) {
        return next(new Error("your current Balance is less than amount you want to transfer", {cause: 400}))
    }
    await customerServices.updateCustomerBalance(senderId, sender.currentBalance - amount)
    await customerServices.updateCustomerBalance(receiverId, parseInt(receiver.currentBalance) + parseInt(amount))
    const transfer = await transferServices.createTransferProcess({senderId, receiverId, amount});
    if (!transfer) {
        return next(new Error("error", { cause: 400}));
    }
    res.status(201).json({ message: "success", transfer });
});
