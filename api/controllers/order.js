import Order from '../models/Order.js'
import Product from '../models/Product.js'

export const createOrder = async (req, res, next) => {
    const newOrder = new Order(req.body);

    try {
        const savedOrder = await newOrder.save();

        // STOCK REDUCING
        for (let item of savedOrder.items) {
            let product = await Product.findById(item.productId);
            product.stockQuantity -= item.quantity;

            await product.save();
        }

        res.status(200).json(savedOrder);
    } catch (err) {
        next(err);
    }
}

export const updateOrder = async (req, res, next) => {
    try {
        const existingOrder = await Order.findById(req.params.id);

        // UNDO THE STOCK REMOVAL
        for (let item of existingOrder.items) {
            let product = await Product.findById(item.productId);
            product.stockQuantity += item.quantity;

            await product.save();
        }

        const updatedOrder = await Order.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });

        // UPDATING STOCK AGAIN
        for (let item of updatedOrder.items) {
            let product = await Product.findById(item.productId);
            product.stockQuantity -= item.quantity;

            await product.save();
        }
        res.status(200).json(updatedOrder);
    } catch (err) {
        next(err);
    }
}

export const deleteOrder = async (req, res, next) => {
    try {
        const deletingOrder = await Order.findById(req.params.id);

        // UNDO THE STOCK REMOVAL
        for (let item of deletingOrder.items) {
            let product = await Product.findById(item.productId);
            product.stockQuantity += item.quantity;

            await product.save();
        }

        await Order.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "Order deleted successfully" });
    } catch (err) {
        next(err);
    }
}

export const getOrder = async (req, res, next) => {
    try {
        const order = await Order.findById(req.params.id);
        res.status(200).json(order);
    } catch (err) {
        next(err);
    }
}

export const getOrders = async (req, res, next) => {
    try {
        const orders = await Order.find();
        res.status(200).json(orders);
    } catch (err) {
        next(err);
    }
}