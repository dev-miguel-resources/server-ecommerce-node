const express = require("express");

const router = express.Router(); 

// middlewares: validations
const { authCheck, adminCheck } = require("../middlewares/auth");

// controller
const { createOrUpdateUser, currentUser } = require("../controllers/auth");

// endpoints routes
router.post("/create-or-update-user", authCheck, createOrUpdateUser);
router.post("/current-user", authCheck, currentUser);
router.post("/current-admin", authCheck, adminCheck, currentUser);

module.exports = router;

