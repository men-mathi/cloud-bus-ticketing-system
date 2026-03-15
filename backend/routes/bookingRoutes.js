const express = require("express");
const router = express.Router();

const bookingController = require("../controllers/bookingController");

/* Book seat */
router.post("/book", bookingController.bookSeat);

/* Get all bookings (for admin) */
router.get("/", bookingController.getBookings);

/* Get booked seats */
router.get("/seats/:busId", bookingController.getBookedSeats);

module.exports = router;