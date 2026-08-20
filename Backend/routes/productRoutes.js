const express = require("express");

const router = express.Router();

const products = [
    {
        id: 1,
        name: "Saharanpur Wooden Dining Table",
        category: "Tables",
        artisan: "Local Woodcraft Maker",
        city: "Saharanpur",
        price: 22000,
        description: "Handcrafted wooden dining table made by local artisans."
    },
    {
        id: 2,
        name: "Hand Carved Wooden Chair",
        category: "Chairs",
        artisan: "Saharanpur Craftsman",
        city: "Saharanpur",
        price: 4500,
        description: "Traditional hand-carved wooden chair."
    },
    {
        id: 3,
        name: "Handcrafted Wooden Sofa",
        category: "Sofa",
        artisan: "Local Furniture Maker",
        city: "Saharanpur",
        price: 28000,
        description: "Beautiful handcrafted wooden sofa with traditional detailing."
    },
    {
        id: 4,
        name: "Carved Wooden Bed",
        category: "Beds",
        artisan: "Traditional Woodworker",
        city: "Saharanpur",
        price: 35000,
        description: "Traditional wooden bed featuring detailed handcrafted carving."
    },
    {
        id: 5,
        name: "Wooden Coffee Table",
        category: "Tables",
        artisan: "Saharanpur Craftsman",
        city: "Saharanpur",
        price: 8500,
        description: "Elegant handcrafted coffee table for modern homes."
    },
    {
        id: 6,
        name: "Wooden Side Table",
        category: "Tables",
        artisan: "Local Artisan",
        city: "Saharanpur",
        price: 6000,
        description: "Compact handcrafted wooden side table."
    },
    {
        id: 7,
        name: "Carved Wooden Cabinet",
        category: "Storage",
        artisan: "Saharanpur Wood Artist",
        city: "Saharanpur",
        price: 18000,
        description: "Decorative wooden cabinet with traditional carving."
    },
    {
        id: 8,
        name: "Handcrafted Wooden Bookshelf",
        category: "Storage",
        artisan: "Local Woodcraft Maker",
        city: "Saharanpur",
        price: 12000,
        description: "Handcrafted bookshelf combining storage and traditional design."
    },
    {
        id: 9,
        name: "Wooden TV Unit",
        category: "Furniture",
        artisan: "Saharanpur Furniture Maker",
        city: "Saharanpur",
        price: 16000,
        description: "Handcrafted wooden TV unit designed for modern homes."
    },
    {
        id: 10,
        name: "Traditional Wooden Swing",
        category: "Furniture",
        artisan: "Traditional Woodworker",
        city: "Saharanpur",
        price: 25000,
        description: "Handcrafted wooden swing inspired by traditional Indian designs."
    },
    {
        id: 11,
        name: "Wooden Wall Art",
        category: "Home Decor",
        artisan: "Local Wood Artist",
        city: "Saharanpur",
        price: 1800,
        description: "Decorative wooden artwork handcrafted by a local artist."
    },
    {
        id: 12,
        name: "Handcrafted Wooden Lamp",
        category: "Home Decor",
        artisan: "Local Artisan",
        city: "Saharanpur",
        price: 2200,
        description: "Unique wooden lamp made with traditional craftsmanship."
    },
    {
        id: 13,
        name: "Carved Wooden Mirror Frame",
        category: "Home Decor",
        artisan: "Saharanpur Wood Artist",
        city: "Saharanpur",
        price: 5500,
        description: "Beautiful handcrafted wooden mirror frame."
    },
    {
        id: 14,
        name: "Decorative Wooden Panel",
        category: "Wood Carving",
        artisan: "Saharanpur Wood Artist",
        city: "Saharanpur",
        price: 3500,
        description: "Intricately carved wooden panel for home interiors."
    },
    {
        id: 15,
        name: "Custom Wooden Door",
        category: "Wood Carving",
        artisan: "Traditional Wood Carver",
        city: "Saharanpur",
        price: 12000,
        description: "Custom carved wooden door made according to your requirements."
    },
    {
        id: 16,
        name: "Wooden Room Divider",
        category: "Home Decor",
        artisan: "Traditional Woodworker",
        city: "Saharanpur",
        price: 15000,
        description: "Intricately carved wooden partition for elegant interiors."
    },
    {
        id: 17,
        name: "Wooden Storage Chest",
        category: "Storage",
        artisan: "Local Craftsman",
        city: "Saharanpur",
        price: 9000,
        description: "Traditional wooden storage chest with handcrafted details."
    },
    {
        id: 18,
        name: "Decorative Wooden Box",
        category: "Decor",
        artisan: "Local Wood Artist",
        city: "Saharanpur",
        price: 2500,
        description: "Small decorative wooden box with detailed craftsmanship."
    },
    {
        id: 19,
        name: "Handcrafted Wooden Temple",
        category: "Traditional",
        artisan: "Traditional Wood Carver",
        city: "Saharanpur",
        price: 12000,
        description: "Handcrafted wooden home temple with traditional detailing."
    },
    {
        id: 20,
        name: "Custom Wooden Furniture",
        category: "Custom",
        artisan: "Saharanpur Furniture Maker",
        city: "Saharanpur",
        price: 20000,
        description: "Custom-made furniture created according to your requirements."
    }
];

router.get("/", (req, res) => {
    res.json(products);
});

router.get("/search", (req, res) => {

    const query = req.query.q;

    if (!query) {
        return res.json(products);
    }

    const results = products.filter(product =>
        product.name.toLowerCase().includes(query.toLowerCase()) ||
        product.category.toLowerCase().includes(query.toLowerCase()) ||
        product.artisan.toLowerCase().includes(query.toLowerCase())
    );

    res.json(results);
});

router.get("/:id", (req, res) => {

    const product = products.find(
        item => item.id === parseInt(req.params.id)
    );

    if (!product) {
        return res.status(404).json({
            message: "Product not found"
        });
    }

    res.json(product);
});

module.exports = router;