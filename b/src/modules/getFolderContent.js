const fs = require("fs");
const fileNames = [];

fs.readdirSync("./public/audios").forEach(file => {
  fileNames.push(file)
});

module.exports = fileNames;