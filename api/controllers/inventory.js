import Inventory from '../models/Inventory.js'
import Product from '../models/Product.js';

export const createInventory = async (req, res, next) => {
    try {
        const newInventory = new Inventory(req.body);
        const savedInventory = await newInventory.save();

        for (let item of req.body.products) {
            let product = await Product.findById(item.productId);

            // UPDATING PRODUCT STOCK
            newInventory.type == "stock" ? product.stockQuantity += item.quantity : product.stockQuantity -= item.quantity;

            await product.save();
        }
        res.status(200).json(savedInventory);
    } catch (err) {
        next(err);
    }
}

export const updateInventory = async (req, res, next) => {
    try {
        const existingInventory = await Inventory.findById(req.params.id);

        // CLEARING THE PREVIOUS STOCK
        for (let item of existingInventory.products) {
            let product = await Product.findById(item.productId);

            existingInventory.type == "stock" ? product.stockQuantity -= item.quantity : product.stockQuantity += item.quantity;

            await product.save();
        }

        // REASSIGNING NEW INVENTORY
        const updatedInventory = await Inventory.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });

        // UPDATING STOCK BACK AGAIN
        for (let item of updatedInventory.products) {
            let product = await Product.findById(item.productId);

            updatedInventory.type == "stock" ? product.stockQuantity += item.quantity : product.stockQuantity -= item.quantity;

            await product.save();
        }

        // const updatedInventory = await Inventory.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
        res.status(200).json(updatedInventory);
    } catch (err) {
        next(err);
    }
}

export const deleteInventory = async (req, res, next) => {
    try {
        const deletingInventory = await Inventory.findById(req.params.id);

        // REMOVING FROM STOCK
        for (let item of deletingInventory.products) {
            let product = await Product.findById(item.productId);

            deletingInventory.type == "stock" ? product.stockQuantity -= item.quantity : product.stockQuantity += item.quantity;

            await product.save();
        }

        await Inventory.findByIdAndDelete(req.params.id);

        res.status(200).json({ message: "Inventory deleted successfully" });
    } catch (err) {
        next(err);
    }
}

export const getInventory = async (req, res, next) => {
    try {
        const inventory = await Inventory.findById(req.params.id);
        res.status(200).json(inventory);
    } catch (err) {
        next(err);
    }
}

export const getInventories = async (req, res, next) => {
    try {
        const inventories = await Inventory.find();
        res.status(200).json(inventories);
    } catch (err) {
        next(err);
    }
}

