import React from "react";
import { Main } from "./styles";

const Audio = ({ audioUrl, images }) => {
  const isAudioSupported = typeof window.Audio !== "undefined" ? true : false;

  

  return (
    <Main>
      <audio src={audioUrl}>Your browser does not support audio API</audio>
      {isAudioSupported && (
        <div className="playerWrapper">
          <div className="img">
            <img src="" alt="cover" />
          </div>
          <div className="audioInfo">
            <div className="audioName"></div>
            <div className="artistName"></div>
          </div>
          <div className="controlPanel">
            <div className="progressBar"></div>
            <div className="controlButtons">
              <div className="fastBack">
                <img src={images.svgs.arrowRight} alt="fastBack" />
              </div>
              <div className="previous">
                <img src={images.svgs.nextButtonIcon} alt="previous" />
              </div>
              <div className="play">
                <svg
                  width="56"
                  height="56"
                  viewBox="0 0 56 56"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M-0.00012207 28.0162C-0.00012207 12.5615 12.5674 0 27.9999 0C43.4323 0 55.9999 12.5615 55.9999 28.0162C55.9999 43.4385 43.4323 56 27.9999 56C12.5674 56 -0.00012207 43.4385 -0.00012207 28.0162ZM38.2702 30.85C38.5675 30.5528 38.9459 30.0936 39.0269 29.9855C39.4594 29.4182 39.6756 28.7159 39.6756 28.0162C39.6756 27.2301 39.4323 26.5007 38.9729 25.9064C38.9352 25.8688 38.8615 25.7885 38.7654 25.6839C38.5856 25.4882 38.3276 25.2074 38.081 24.9609C35.8648 22.5837 30.081 18.6937 27.054 17.5051C26.5945 17.3187 25.4323 16.9108 24.8107 16.8837C24.2161 16.8837 23.6486 17.0188 23.108 17.289C22.4323 17.6671 21.8918 18.2615 21.5945 18.9638C21.4053 19.4501 21.108 20.9088 21.108 20.9358C20.8107 22.5297 20.6486 25.123 20.6486 27.9865C20.6486 30.7176 20.8107 33.2002 21.054 34.821C21.0607 34.8277 21.0839 34.9436 21.12 35.1237C21.2298 35.6712 21.4586 36.8118 21.7026 37.2793C22.2972 38.4139 23.4594 39.1163 24.7026 39.1163H24.8107C25.6215 39.0892 27.3242 38.3869 27.3242 38.3599C30.1891 37.1712 35.8377 33.4703 38.108 31.0121L38.2702 30.85Z"
                    fill="#FF7E3A"
                  />
                </svg>
              </div>
              <div className="next">
                <img src={images.svgs.arrowRight} alt="fastBack" />
              </div>
              <div className="fastForward">
                <img src={images.svgs.nextButtonIcon} alt="previous" />
              </div>
            </div>
          </div>
        </div>
      )}
    </Main>
  );
};

export default Audio;
