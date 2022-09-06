import styled from "styled-components";

export const Main = styled.div`
  width: 160px;
  height: 200px;
  margin: 0 15px;
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 2px solid transparent;
  border-radius: 12px;
  background: linear-gradient(to bottom, white, white),
    linear-gradient(to bottom, red, blue);
  background-clip: padding-box, border-box;
  background-origin: padding-box, border-box;
  cursor: pointer;
  box-sizing: border-box;

  .img {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;

    ::before {
      content: "";
      background-image: ${(props) => `url(${props.images.svgs.playButton})`};
      background-size: 45px;
      background-position: 45px;
      background-repeat: no-repeat;
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  img {
    width: 128px;
    height: 128px;
    object-fit: cover;
    border-radius: 20px;
  }
  p.genre {
    font-size: 16px;
    font-weight: 600;
    color: #2e3271;
    padding: 10px 0 0;
    margin: 0;
    align-self: start;
    width: 90%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  p.chartName {
    font-size: 14px;
    font-weight: 400;
    color: #7c8db5bf;
    margin: 0;
    align-self: start;
    width: 90%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

  }
`;
