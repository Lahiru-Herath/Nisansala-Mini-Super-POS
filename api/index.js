import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import cors from 'cors'

// Routes
import authRoute from './routes/auth.js'
import inventoryRoute from './routes/inventory.js'
import ordersRoute from './routes/orders.js'
import productsRoute from './routes/products.js'
import usersRoutes from './routes/users.js'
import supplierRoutes from './routes/suppliers.js'

const app = express();
const port = 3000;

dotenv.config()

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO);
        console.log("Connected to MongoDB");
    } catch (err) {
        console.log("Error connecting to database.");
        throw err;
    }
};

// Middlewares
app.use(cors({
    origin: process.env.CLIENT_ORIGIN,
    credentials: true,
}));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/inventory", inventoryRoute);
app.use("/api/orders", ordersRoute);
app.use("/api/products", productsRoute);
app.use("/api/users", usersRoutes);
app.use("/api/suppliers", supplierRoutes);

app.use((err, req, res, next) => {
    const errorStatus = err.status || 500;
    const errorMessage = err.message || "Something went wrong!";
    return res.status(errorStatus).json({
        success: false,
        status: errorStatus,
        message: errorMessage,
        stack: err.stack,
    });
});

app.listen(port, () => {
    connect();
    console.log(`Server running on port ${port}`);
});