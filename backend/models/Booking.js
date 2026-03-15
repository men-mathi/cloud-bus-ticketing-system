const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({

userId:{
type: mongoose.Schema.Types.ObjectId,
ref:"User"
},

busId:{
type: mongoose.Schema.Types.ObjectId,
ref:"Bus"
},

seats:[Number],

price:{
type:Number,
default:0
},

bookingDate:{
type:Date,
default:Date.now
}

});

module.exports = mongoose.model("Booking", bookingSchema);