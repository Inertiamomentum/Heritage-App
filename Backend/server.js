const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const connectDB = require("./config/db");

const heritageRoutes = require("./routes/heritageRoutes");
const authRoutes = require("./routes/authRoutes");

const app = express();

connectDB();

app.use(cors());
app.use(express.json());

app.use("/api/heritage", heritageRoutes);
app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
    res.json({
        message: "Dharohar API is running"
    });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});