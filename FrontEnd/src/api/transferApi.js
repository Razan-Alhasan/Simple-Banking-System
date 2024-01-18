import axiosInstance from "../utils/axiosUtils";
export const createTransferProcess = async (data) => {
    try {
        const response = await axiosInstance.post("/transfer/", data);
        if (response.status === 201) {
            return response.data;
        }
        throw new Error('Failed to create transfer process');
    } catch (error) {
        console.error('Error creating transfer process:', error);
        throw error;
    }
};

