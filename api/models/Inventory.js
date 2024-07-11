import mongoose from 'mongoose'

const ItemSchema = new mongoose.Schema({
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        res: 'Product',
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    }
})

const InventorySchema = new mongoose.Schema({
    products: [ItemSchema],
    type: {
        type: String,
        required: true,
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    },
    supplierId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    },
},
    { timestamps: true }
);

export default mongoose.model('Inventory', InventorySchema);