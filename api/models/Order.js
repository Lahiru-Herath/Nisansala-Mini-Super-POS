import mongoose from 'mongoose'

const ItemSchema = new mongoose.Schema({
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
});

const OrderSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
    },
    totalAmount: {
        type: Number,
        required: true,
    },
    paymentMethod: {
        type: String,
        default: "cash",
    },
    items: {
        type: [ItemSchema],
    }
},
    { timestamps: true }
);

export default mongoose.model("Order", OrderSchema);