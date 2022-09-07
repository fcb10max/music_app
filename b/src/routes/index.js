const express = require("express");
const router = express.Router();
// const cors = require("cors");

const sendAllAudios = require("../controllers/sendAllAudios.js");
const sendSingleAudio = require("../controllers/sendSingleAudio");

// router.use(cors({origin: ["https://music-app-pink.vercel.app", "http://localhost:3000"]}));
router.get("/?", sendAllAudios);
router.get("/audio?", sendSingleAudio);

module.exports = router;