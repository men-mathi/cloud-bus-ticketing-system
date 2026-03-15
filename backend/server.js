const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const authRoutes = require("./routes/authRoutes");
const busRoutes = require("./routes/busRoutes");
const bookingRoutes = require("./routes/bookingRoutes");
const contactRoutes = require("./routes/contactRoutes");
const adminRoutes = require("./routes/adminRoutes");
const app = express();


/* Middleware */

app.use(cors());
app.use(express.json());

/* MongoDB Connection */

mongoose.connect(process.env.MONGO_URI)
.then(() => {
    console.log("MongoDB Connected");
})
.catch(err => {
    console.log("MongoDB Connection Error:", err);
});

/* Routes */

app.use("/api/auth", authRoutes);
app.use("/api/buses", busRoutes);
app.use("/api/bookings", bookingRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/admin",adminRoutes);


/* Test API */

app.get("/", (req,res)=>{
    res.send("Backend running successfully");
});

/* Start Server */

const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=>{
    console.log("Server running on port " + PORT);
});
