const express = require("express");
const cors = require("cors");
const sendAllAudios = require("./src/controllers/sendAllAudios");
const sendSingleAudio = require("./src/controllers/sendSingleAudio");

const App = express();

App.use(cors());
App.use(express.json());
App.use("/assets", express.static(__dirname + "/src/public/audios"))


App.get("/?", sendAllAudios());
App.get("/audio?", sendSingleAudio());

App.listen(5000, function (err) {
  if (err) console.log(err);
  console.log("Server listening on PORT", 5000);
});
