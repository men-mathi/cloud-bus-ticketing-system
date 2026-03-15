const Booking = require("../models/Booking");
const Bus = require("../models/Bus");

/* Book Seats */
exports.bookSeat = async (req, res) => {

try {

const { userId, busId, seats } = req.body;

const bus = await Bus.findById(busId);

const totalPrice = bus.price * seats.length;

const booking = new Booking({
userId,
busId,
seats,
price: totalPrice
});

await booking.save();

res.json({
message: "Seat Booked Successfully"
});

} catch (error) {

console.log(error);

res.status(500).json({
message: "Booking failed"
});

}

};


/* Get all bookings for admin */
exports.getBookings = async (req,res)=>{

try{

const bookings = await Booking.find()
.populate("busId","busName")
.populate("userId","name");

res.json(bookings);

}catch(err){

console.log(err);

res.status(500).json({
message:"Error fetching bookings"
});

}

};


/* Get booked seats */
exports.getBookedSeats = async (req, res) => {

try {

const busId = req.params.busId;

const bookings = await Booking.find({ busId });

let bookedSeats = [];

bookings.forEach(booking => {
bookedSeats = bookedSeats.concat(booking.seats);
});

res.json(bookedSeats);

} catch (error) {

console.log(error);

res.status(500).json({
message: "Error fetching booked seats"
});

}

};