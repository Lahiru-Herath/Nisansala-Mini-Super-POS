import mongoose from 'mongoose'

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    barcode: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        default: "No description",
    },
    buyingPrice: {
        type: Number,
        required: true,
    },
    sellingPrice: {
        type: Number,
        required: true,
    },
    category: {
        type: String,
        default: "none",
    },
    stockQuantity: {
        type: Number,
        default: 0,
    },
    status: {
        type: String,
        default: "Active"
    }
},
    { timestamps: true }
);

export default mongoose.model("Product", ProductSchema);