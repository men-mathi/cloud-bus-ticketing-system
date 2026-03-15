const User = require("../models/User.js");
const Booking = require("../models/Booking.js");
const Bus = require("../models/Bus.js");

const jwt = require("jsonwebtoken");

/* =========================
   Admin Login
========================= */

exports.adminLogin = async (req,res)=>{

try{

const {username,password} = req.body;

if(username === "admin" && password === "12345"){

const token = jwt.sign(
{role:"admin"},
process.env.JWT_SECRET || "secretkey",
{expiresIn:"1h"}
);

return res.json({
token,
message:"Admin login successful"
});

}

return res.status(401).json({
message:"Invalid admin credentials"
});

}catch(err){

res.status(500).json({
message:"Server error"
});

}

};


/* =========================
   Get Users
========================= */

exports.getUsers = async (req,res)=>{

try{

const users = await User.find().select("name email");

res.json(users);

}catch(err){

res.status(500).json({
message:"Failed to fetch users"
});

}

};


/* =========================
   Dashboard Statistics
========================= */

exports.getDashboardStats = async (req,res)=>{

try{

const totalUsers = await User.countDocuments();

const totalBuses = await Bus.countDocuments();

const bookings = await Booking.find();

const revenue = bookings.reduce((sum,b)=> sum + (b.price || 0),0);

res.json({

totalUsers,
totalBuses,
totalBookings: bookings.length,
revenue

});

}catch(err){

res.status(500).json({
message:"Failed to load dashboard stats"
});

}

};