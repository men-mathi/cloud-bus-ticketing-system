const express = require("express");
const cors = require("cors");
require("dotenv").config();
require("./config/db");

const app = express();

app.use(cors());
app.use(express.json());

// ROUTES IMPORT
const authRoutes = require("./routes/authRoutes");
const busRoutes = require("./routes/busRoutes");
const authMiddleware = require("./middleware/authMiddleware");
const bookingRoutes = require("./routes/bookingRoutes");
// ROUTES USE
app.use("/api/bookings", bookingRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/buses", busRoutes);

// Protected test route
app.get("/api/protected", authMiddleware, (req, res) => {
    res.json({
        message: "Protected route accessed successfully ✅",
        user: req.user
    });
});

// Home route
app.get("/", (req, res) => {
    res.send("Bus Pass System API Running 🚀");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});