const Bus = require("../models/Bus");

/* =======================
   Get all buses
======================= */

exports.getBuses = async (req,res)=>{

try{

const buses = await Bus.find();

res.json(buses);

}catch(err){

console.log(err);

res.status(500).json({message:"Server error"});

}

};


/* =======================
   Add bus
======================= */

exports.addBus = async (req,res)=>{

try{

const {name,from,to,price} = req.body;

const bus = new Bus({
name,
from,
to,
price
});

await bus.save();

res.json({message:"Bus added successfully"});

}catch(err){

console.log(err);

res.status(500).json({message:"Failed to add bus"});

}

};


/* =======================
   Delete bus
======================= */

exports.deleteBus = async (req,res)=>{

try{

const id = req.params.id;

await Bus.findByIdAndDelete(id);

res.json({message:"Bus deleted successfully"});

}catch(err){

console.log(err);

res.status(500).json({message:"Delete failed"});

}

};