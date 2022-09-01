import React, { useEffect, useState } from "react";
import { Main } from "./styles";
import { Buffer } from "buffer";

const ChartItem = ({ images, data, setCurrentAudio }) => {
  const [coverImage, setCoverImage] = useState("");
  useEffect(() => {
    if (!data.image.length) return setCoverImage("");
    const image = new Buffer.from(data.image).toString("base64");
    setCoverImage("data:image/png;base64," + image);
  }, [data]);

  const clickHandler = (e) => {
    setCurrentAudio(data);
  };

  return (
    <Main className="item" images={images} onClick={clickHandler}>
      <div className="img">
        <img
          src={coverImage ? coverImage : images.pngs.defaultCover}
          alt="albumCover"
        />
      </div>
      <p className="genre" title={data.songName}>
        {data.songName}
      </p>
      <p className="chartName" title={data.singerName}>
        {data.singerName}
      </p>
    </Main>
  );
};

export default ChartItem;
