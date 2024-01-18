import axiosInstance from "../utils/axiosUtils";

export const getCustomerById = async (id) => {
    try {
        const response = await axiosInstance.get(`/customer/${id}`);
        if (response.status === 200) {
            return response.data;
        }
    } catch (error) {
        console.log("get user by id error:", error);
    }
};
export const getCustomerByAccountNumber = async (accountNumber) => {
    try {
        const response = await axiosInstance.post('/customer/number', {accountNumber});
        if (response.status === 200) {
            return response.data;
        }
    } catch (error) {
        console.log("get user by account number error:", error);
    }
};
export const getAllCustomers = async () => {
    try {
        const response = await axiosInstance.get("/customer");
        if (response.status === 200) {
            return response.data;
        }
    } catch (error) {
        console.log("get users error:", error);
    }
};
