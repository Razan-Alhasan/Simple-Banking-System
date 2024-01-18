import {Schema, model, mongoose } from "mongoose";
const customerSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    accountNumber: {
        type: Number,
        required: true,
        unique: true,
        min: 6
    },
    currentBalance: {
        type: Number
    }
}, {
    timestamps: true
});
const customerModel = mongoose.models.Customer || model("Customer", customerSchema);
export default customerModel;
