const express = require("express");
const router = require("./src/routes");

const App = express();

App.use(express.json());
App.use("/", router);

App.listen(5000, function (err) {
  if (err) console.log(err);
  console.log("Server listening on PORT", 5000);
});
