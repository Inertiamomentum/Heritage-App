const express = require("express");

const router = express.Router();

const heritagePlaces = [

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
        name: "Traditional Wooden Sofa",
        category: "Sofas",
        artisan: "Heritage Woodworks",
        city: "Saharanpur",
        price: 28000,
        description: "Elegant handcrafted wooden sofa with traditional carving."
    },

    {
        id: 4,
        name: "Carved Wooden Bed",
        category: "Beds",
        artisan: "Saharanpur Furniture House",
        city: "Saharanpur",
        price: 35000,
        description: "Beautiful wooden bed featuring detailed handcrafted designs."
    },

    {
        id: 5,
        name: "Wooden Coffee Table",
        category: "Tables",
        artisan: "Local Wood Artist",
        city: "Saharanpur",
        price: 8500,
        description: "Compact handcrafted coffee table for modern homes."
    },

    {
        id: 6,
        name: "Carved Wooden Side Table",
        category: "Tables",
        artisan: "Traditional Woodcraft",
        city: "Saharanpur",
        price: 6500,
        description: "Decorative side table with traditional wooden carving."
    },

    {
        id: 7,
        name: "Handcrafted Wooden Bench",
        category: "Furniture",
        artisan: "Saharanpur Craftsman",
        city: "Saharanpur",
        price: 9000,
        description: "Strong handcrafted wooden bench made from quality wood."
    },

    {
        id: 8,
        name: "Traditional Wooden Stool",
        category: "Furniture",
        artisan: "Local Artisan",
        city: "Saharanpur",
        price: 3500,
        description: "Small traditional wooden stool with handcrafted details."
    },

    {
        id: 9,
        name: "Carved Wooden Mirror Frame",
        category: "Decor",
        artisan: "Saharanpur Wood Artist",
        city: "Saharanpur",
        price: 7500,
        description: "Beautiful wooden mirror frame featuring detailed carving."
    },

    {
        id: 10,
        name: "Decorative Wooden Wall Panel",
        category: "Decor",
        artisan: "Heritage Woodcraft",
        city: "Saharanpur",
        price: 6000,
        description: "Hand-carved decorative wooden panel for home interiors."
    },

    {
        id: 11,
        name: "Traditional Wooden Cabinet",
        category: "Furniture",
        artisan: "Saharanpur Furniture Maker",
        city: "Saharanpur",
        price: 24000,
        description: "Handcrafted wooden cabinet inspired by traditional designs."
    },

    {
        id: 12,
        name: "Carved Wooden Bookshelf",
        category: "Furniture",
        artisan: "Local Woodcraft Maker",
        city: "Saharanpur",
        price: 15000,
        description: "Wooden bookshelf with handcrafted decorative elements."
    },

    {
        id: 13,
        name: "Hand Carved Wooden Lamp",
        category: "Decor",
        artisan: "Saharanpur Artisan",
        city: "Saharanpur",
        price: 4500,
        description: "Decorative wooden lamp crafted by local artisans."
    },

    {
        id: 14,
        name: "Traditional Wooden Swing",
        category: "Furniture",
        artisan: "Heritage Woodworks",
        city: "Saharanpur",
        price: 30000,
        description: "Traditional handcrafted wooden swing with detailed carving."
    },

    {
        id: 15,
        name: "Carved Wooden Room Divider",
        category: "Wood Carving",
        artisan: "Saharanpur Wood Artist",
        city: "Saharanpur",
        price: 18000,
        description: "Intricately carved wooden divider for elegant interiors."
    },

    {
        id: 16,
        name: "Handcrafted Wooden Tray",
        category: "Decor",
        artisan: "Local Wood Artisan",
        city: "Saharanpur",
        price: 2500,
        description: "Decorative wooden serving tray with traditional carving."
    },

    {
        id: 17,
        name: "Traditional Carved Wall Art",
        category: "Wood Carving",
        artisan: "Saharanpur Craftsman",
        city: "Saharanpur",
        price: 5500,
        description: "Hand-carved wooden wall art inspired by Indian heritage."
    },

    {
        id: 18,
        name: "Luxury Carved Sofa Set",
        category: "Sofas",
        artisan: "Saharanpur Heritage Furniture",
        city: "Saharanpur",
        price: 45000,
        description: "Premium handcrafted sofa set with traditional wood carving."
    },

    {
        id: 19,
        name: "Handcrafted Wooden Dining Chairs",
        category: "Chairs",
        artisan: "Local Furniture Maker",
        city: "Saharanpur",
        price: 12000,
        description: "Set of handcrafted wooden dining chairs."
    },

    {
        id: 20,
        name: "Traditional Wooden Carving Panel",
        category: "Wood Carving",
        artisan: "Saharanpur Master Craftsman",
        city: "Saharanpur",
        price: 10000,
        description: "Detailed traditional wood carving panel made by skilled artisans."
    }

];


// GET ALL PRODUCTS

router.get("/", (req, res) => {

    res.json(heritagePlaces);

});


// SEARCH / FILTER

router.get("/search/filter", (req, res) => {

    const { city, category } = req.query;

    let results = heritagePlaces;


    if (city) {

        results = results.filter(
            place =>
                place.city.toLowerCase() ===
                city.toLowerCase()
        );

    }


    if (category) {

        results = results.filter(
            place =>
                place.category.toLowerCase() ===
                category.toLowerCase()
        );

    }


    res.json(results);

});


// GET PRODUCT BY ID

router.get("/:id", (req, res) => {

    const place = heritagePlaces.find(
        item =>
            item.id ===
            parseInt(req.params.id)
    );


    if (!place) {

        return res.status(404).json({
            message: "Product not found"
        });

    }


    res.json(place);

});


module.exports = router;