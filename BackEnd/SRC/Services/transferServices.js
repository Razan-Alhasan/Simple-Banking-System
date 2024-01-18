import transferModel from "../../DB/Models/transferModel.js"
export const createTransferProcess = async (data) => {
    return await transferModel.create(data)
};


