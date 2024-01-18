import {Types, Schema, model, mongoose } from "mongoose";
const transferSchema = new Schema({
    senderId: {
        type: Types.ObjectId,
        ref: 'Customer'
    },
    receiverId: {
        type: Types.ObjectId,
        ref: 'Customer'
    },
    amount: {
        type: Number,
        required: true
    } 
}, {
    timestamps: true
});
const transferModel = mongoose.models.Transfer || model("Transfer", transferSchema);
export default transferModel;
