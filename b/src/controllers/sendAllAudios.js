const jsmediatags = require("jsmediatags");
const getFolderContent = require("../modules/getFolderContent");
const prepareResponse = require("../modules/prepareAudioResponse");

const sendAllAudios = (req, res) => {
  const limit = () => {
    const query = req.query.limit || 10;
    if (query > 20) return 20;
    if (query < 1) return 1;
    return query;
  };
  const shuffled = getFolderContent.sort(() => 0.5 - Math.random());
  const randomAudios = shuffled.slice(0, limit());
  const promises = randomAudios.map((name) => getTags(name));
  Promise.all(promises)
    .then((results) => {
      const response = [];
      results.forEach((el) => {
        const data = prepareResponse(el);
        response.push(data);
      });
      res.json({ success: true, data: response });
    })
    .catch((err) => res.json({ success: false, message: err.message, stack: err.stack }));
};

function getTags(name) {
  return new Promise((resolve, reject) => {
    new jsmediatags.Reader(`./src/public/audios/${name}`).read({
      onSuccess: (tag) => {
        resolve(tag.tags);
      },
      onError: (error) => {
        console.log(error);
        reject(error);
      },
    });
  });
}

module.exports = sendAllAudios;
