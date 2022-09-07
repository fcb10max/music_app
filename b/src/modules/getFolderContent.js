const fs = require("fs");
const fileNames = [];

fs.readdirSync("./src/public/audios").forEach(file => {
  fileNames.push(file)
});

module.exports = fileNames;