const express = require("express");
const router = express.Router();

const sendAllAudios = require("../controllers/sendAllAudios.js");
const sendSingleAudio = require("../controllers/sendSingleAudio");

router.get("/?", sendAllAudios);
router.get("/audio?", sendSingleAudio);

module.exports = router;