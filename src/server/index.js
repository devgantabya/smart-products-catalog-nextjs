const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Mock product data
let products = [
    {
        id: 1,
        name: "Smart Watch",
        price: 120,
        description: "Modern smart watch with health tracking",
    },
    {
        id: 2,
        name: "Wireless Headphones",
        price: 90,
        description: "Noise cancelling wireless headphones",
    },
];

// Routes

// Health check
app.get("/", (req, res) => {
    res.send("🚀 Product API is running");
});

// Get all products
app.get("/products", (req, res) => {
    res.json(products);
});

// Get product by ID
app.get("/products/:id", (req, res) => {
    const product = products.find(
        (item) => item.id === Number(req.params.id)
    );

    if (!product) {
        return res.status(404).json({ message: "Product not found" });
    }

    res.json(product);
});

// Add new product
app.post("/products", (req, res) => {
    const { name, price, description } = req.body;

    if (!name || !price || !description) {
        return res.status(400).json({ message: "All fields are required" });
    }

    const newProduct = {
        id: Date.now(),
        name,
        price,
        description,
    };

    products.push(newProduct);
    res.status(201).json(newProduct);
});

// Start server
app.listen(PORT, () => {
    console.log(`✅ Server running at http://localhost:${PORT}`);
});
