import customerModel from "../../DB/Models/customerModel.js";
export const getAllCustomers = async () => {
    return await customerModel.find();
};
export const getCustomerById = async (customerId) => {
    return await customerModel.findById(customerId);
};
export const getCustomerByAccountNumber = async (accountNumber) => {
    return await customerModel.findOne({accountNumber});
};
export const updateCustomerBalance = async (Id, data) => {
    return await customerModel.findByIdAndUpdate(Id, {currentBalance: data}, {new: true});
};
