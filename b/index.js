const express = require("express");
const router = require("./src/routes");

const App = express();

App.use(express.json());
App.use(router);
App.use("/assets", express.static(__dirname + "/src/public/audios"))

App.listen(5000, function (err) {
  if (err) console.log(err);
  console.log("Server listening on PORT", 5000);
});
