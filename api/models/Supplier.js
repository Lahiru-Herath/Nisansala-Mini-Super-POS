import mongoose from 'mongoose'

const SupplierSchema = new mongoose.Schema({
    representativeName: {
        type: String,
        required: true,
    },
    dealersName: {
        type: String,
        required: true,
    },
    contactNo: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    }
},
    { timestamps: true }
);

export default mongoose.model('Supplier', SupplierSchema);