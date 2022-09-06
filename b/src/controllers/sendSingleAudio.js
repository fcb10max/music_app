const jsmediatags = require("jsmediatags");
const prepareResponse = require("../modules/prepareAudioResponse");
const getAllAudiosNames = require("../modules/getFolderContent");

module.exports = (req, res) => {
  const { isRandom, singerName, songName } = req.query;
  let url = "";
  if ((isRandom === "1" || !isRandom) || (!singerName && !songName)) {
    url =
      getAllAudiosNames[Math.floor(Math.random() * getAllAudiosNames.length)];
  } else if (isRandom === "0" && (singerName || songName)) {
    url = getAllAudiosNames.find(el => el.indexOf(singerName)>=0 || el.indexOf(songName) >=0);
  }
  if (!url) return res.status(404).json({success: false, message: "item not found"});
  let response = {};
  jsmediatags.read(`./src/public/audios/${url}`, {
    onSuccess: (tag) => {
      const obj = prepareResponse(tag.tags);
      response = { success: true, data: obj };
      res.json({ ...response });
    },
    onError: (error) => {
      response = { success: false, message: error };
      res.json({ ...response });
    },
  });
};
