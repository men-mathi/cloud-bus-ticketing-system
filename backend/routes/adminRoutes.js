const express = require("express");
const router = express.Router();

const adminController = require("../controllers/adminController");

/* =========================
   Admin Login
========================= */

router.post("/login", adminController.adminLogin);


/* =========================
   Get All Users
========================= */

router.get("/users", adminController.getUsers);


/* =========================
   Dashboard Stats
========================= */

router.get("/stats", adminController.getDashboardStats);


module.exports = router;