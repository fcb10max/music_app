module.exports = (elem) => {
  const response = {
    image: "",
    singerName: "",
    songName: "",
    audioURL: "",
  };
  response.singerName = String(elem.title?.split("-")[0]).replace(/_/g, " ").trim();
  response.songName = String(elem.title?.split("-")[1]).replace(/_/g, " ").trim();
  response.image = elem.picture?.data || [];
  response.audioURL = `assets/${elem.title}.mp3`;

  return response;
};