const User = require("../models/User");

/* ======================
   Register
====================== */

const registerUser = async (req,res)=>{

try{

const {name,email,password} = req.body;

const existingUser = await User.findOne({email});

if(existingUser){
return res.status(400).json({
message:"Email already registered"
});
}

const user = new User({
name,
email,
password,
role:"user"
});

await user.save();

res.json({
message:"User Registered Successfully"
});

}catch(error){

console.log(error);

res.status(500).json({
message:"Server error"
});

}

};


/* ======================
   Login
====================== */

const loginUser = async (req,res)=>{

try{

const {email,password} = req.body;

/* ADMIN LOGIN */

if(email === "admin" && password === "12345"){

return res.json({
message:"Admin Login Successful",
role:"admin"
});

}

/* USER LOGIN */

const user = await User.findOne({email,password});

if(!user){
return res.status(400).json({
message:"Invalid email or password"
});
}

res.json({
message:"Login successful",
role:"user",
user
});

}catch(error){

console.log(error);

res.status(500).json({
message:"Server error"
});

}

};

module.exports = { registerUser, loginUser };