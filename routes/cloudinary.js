const express = require("express");
const router = express.Router();

// middlewares of validations
const { authCheck, adminCheck } = require("../middlewares/auth");

// middlwares of controllers
const { upload, remove } = require("../controllers/cloudinary");

// endpoints - routes
router.post("/uploadimages", authCheck, adminCheck, upload);
router.post("/removeimage", authCheck, adminCheck, remove);

module.exports = router;
