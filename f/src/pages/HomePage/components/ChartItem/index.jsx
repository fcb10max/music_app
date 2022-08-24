import React from "react";
import { Main } from "./styles";

const ChartItem = ({ images }) => {
  return (
    <Main className="item" images={images}>
      <div className="img">
        <img src={images.pngs.albumCover} alt="albumCover" />
      </div>
      <p className="genre">Pop</p>
      <p className="chartName">Top 50</p>
    </Main>
  );
};

export default ChartItem;
