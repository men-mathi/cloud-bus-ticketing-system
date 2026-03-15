const express = require("express");
const router = express.Router();

const {getBuses,addBus,deleteBus} = require("../controllers/busController");

/* Get buses */

router.get("/",getBuses);

/* Add bus */

router.post("/",addBus);

/* Delete bus */

router.delete("/:id",deleteBus);

module.exports = router;