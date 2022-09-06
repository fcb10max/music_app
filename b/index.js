const express = require("express");
const cors = require("cors");
const router = require("./src/routes");

const App = express();

App.use(cors());
App.use(express.json());
App.use(router);
App.use("/assets", express.static(__dirname + "/src/public/audios"))

App.listen(5000, function (err) {
  if (err) console.log(err);
  console.log("Server listening on PORT", 5000);
});
