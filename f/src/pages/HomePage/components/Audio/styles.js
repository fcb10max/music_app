import styled from "styled-components";

export const Main = styled.div`
  width: 100%;

  audio {
    display: none;
  }

  .playerWrapper {
    display: flex;
    flex-direction: column;

    .img {
      width: 90%;
      height: 300px;
      margin: 10px auto;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        background: transparent;
        border-radius: 20px;
        filter: drop-shadow(0px 20px 60px rgba(0, 0, 0, 0.15));
      }
    }

    .audioInfo {
      width: 100%;
      text-align: center;

      .audioName {
        width: 90%;
        margin: 0 auto;
        p {
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          color: #2e3271;
          font-size: 18px;
          font-weight: 600;
          margin: 0;
        }
      }
      .artistName {
        width: 90%;
        margin: 0 auto;
        p {
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          font-size: 16px;
          font-weight: 600;
          color: #7c8db5b8;
          margin: 0;
        }
      }
    }

    .controlPanel {
      .progressBar {
        width: 90%;
        height: 40px;
        margin: 10px auto;

        .progress {
          width: 100%;
          margin: 5px 0;

          input[type="range"] {
            background: linear-gradient(
              to right,
              rgba(255, 126, 58, 0.3),
              rgba(255, 126, 58, 0.3)
            );
            border-radius: 8px;
            height: 7px;
            width: 100%;
            outline: none;
            transition: background 0ms ease-in;
            -webkit-appearance: none;

            ::-webkit-slider-thumb {
              appearance: none;
              -webkit-appearance: none;
              -moz-appearance: none;
              -ms-appearance: none;
              background-color: rgb(255, 126, 58);
              width: 15px;
              height: 15px;
              border-radius: 50%;
            }
          }
        }

        .timer {
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .passedTime,
        .remainedTime {
          font-size: 10px;
          color: #2e3271;
          font-weight: 500;
        }
      }

      .controlButtons {
        width: 70%;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
        & > div {
          cursor: pointer;
        }
      }
      .previous,
      .fastBack {
        transform: scaleX(-1);
      }
      .play {
        background: transparent;
        svg {
          width: 56px;
          height: 56px;
          filter: drop-shadow(0px 24px 48px rgba(255, 133, 61, 0.3));
          path {
            transition: fill 0.3s linear;
          }
        }

        :hover {
          svg > path {
            fill: rgba(255, 126, 58, 0.8);
          }
        }
      }
    }
  }

  @media (max-width: 800px) {
    display: block;
    position: fixed;
    left: 0;
    bottom: 0;
    background-color: #fff;
    filter: drop-shadow(0 20px 40px #000);

    .img {
      display: none;
    }
  }
`;
