import mongoose from "mongoose";
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;


const paymentSchema = new Schema({
    orderDate : { type: Date, default: Date.now },
    payStaus : { type: String, default: 'Pending' },
} , { strict: false });

export const Payment = mongoose.model('Payment', paymentSchema);