require("dotenv").config();
const express = require("express");
const cors = require("cors");

const connectDB = require("./config/db");
const Product = require("./models/Product");

const User = require("./models/User");
const bcrypt = require("bcryptjs");

const app = express();
const PORT = 5000;

// Connect MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Health check
app.get("/", (req, res) => {
    res.send("Product API with MongoDB is running");
});

// Get all products
app.get("/products", async (req, res) => {
    try {
        const { category, search } = req.query;

        const filter = {};

        if (category) {
            // Case-insensitive match
            filter.category = { $regex: `^${category}$`, $options: "i" };
        }

        if (search) {
            filter.name = { $regex: search, $options: "i" };
        }

        const products = await Product.find(filter).sort({ createdAt: -1 });

        res.json(products);
    } catch (error) {
        res.status(500).json({ message: "Failed to fetch products" });
    }
});





// Get single product
app.get("/products/:id", async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);

        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }

        res.json(product);
    } catch (error) {
        res.status(400).json({ message: "Invalid product ID" });
    }
});

// Add new product
app.post("/products", async (req, res) => {
    const { name, price, description, image } = req.body;

    if (!name || !price || !description) {
        return res.status(400).json({ message: "All fields required" });
    }

    try {
        const product = await Product.create({
            name,
            price,
            description,
            image,
        });

        res.status(201).json(product);
    } catch (error) {
        res.status(500).json({ message: "Product creation failed" });
    }
});

// Signup route
app.post("/signup", async (req, res) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password)
        return res.status(400).json({ message: "All fields are required" });

    try {
        const existingUser = await User.findOne({ email });
        if (existingUser)
            return res.status(400).json({ message: "Email already registered" });

        const user = await User.create({ name, email, password });

        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
        });
    } catch (error) {
        console.error("Signup error:", error);
        res.status(500).json({ message: "User registration failed" });
    }
});



// Start server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
