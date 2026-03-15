const express = require("express");

const router = express.Router();

// import controller
const {
sendMessage,
getMessages
} = require("../controllers/contactController");


/*
------------------------------------------------
CONTACT ROUTES
------------------------------------------------
*/

// Send message from contact form
router.post("/send", sendMessage);

// Get all messages (for admin panel)
router.get("/messages", getMessages);


module.exports = router;