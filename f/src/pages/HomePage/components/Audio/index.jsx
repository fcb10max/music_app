import React, { useEffect, useRef, useState } from "react";
import { Main } from "./styles";
import { Buffer } from "buffer";
import Loading from "../Loading";

const Audio = ({ data, images, setIsCurrentAudioEnded, setIsSwitchedBack }) => {
  const serverURL = process.env.REACT_APP_SERVER_URL;
  const ref = useRef();
  const progressBar = useRef();
  const [isPaused, setIsPaused] = useState(true);
  const [currentTime, setCurrentTime] = useState("0:00");
  const [remainedTime, setRemainedTime] = useState("0:00");
  const [progressValue, setProgressValue] = useState(0);
  const [maximumProgressValue, setMaximumProgressValue] = useState(100);
  const [coverImage, setCoverImage] = useState("");
  const [canPlayAudio, setCanPlayAudio] = useState(false);

  useEffect(() => {
    if (!ref || !ref.current) return;
    const audioEl = ref.current;
    if (isPaused) {
      audioEl.pause();
    } else if (!isPaused) {
      audioEl.play();
    }
  }, [isPaused]);

  const metaDataLoadedHandler = (e) => {
    if (!ref || !ref.current) return;
    const audioEL = ref.current;
    const duration = audioEL.duration;
    const remainedTimeMinutes =
      duration / 60 > 10
        ? parseInt(duration / 60)
        : `0${parseInt(duration / 60)}`;
    const remainedTimeSeconds =
      duration % 60 > 10
        ? parseInt(duration % 60)
        : `0${parseInt(duration % 60)}`;
    const remainedTimeSorted = `-${remainedTimeMinutes}:${remainedTimeSeconds}`;
    setRemainedTime(remainedTimeSorted);
    setMaximumProgressValue(parseInt(duration));
  };

  const timeHandler = (e) => {
    if (
      !ref ||
      !progressBar ||
      !ref.current ||
      !progressBar.current ||
      isPaused
    )
      return;
    setProgressValue(e.target.currentTime);
  };

  const updateProgressBar = () => {
    if (!progressBar || !progressBar.current) return;
    const progressBarEl = progressBar.current;
    const value = (progressValue / maximumProgressValue) * 100;
    progressBarEl.style.background =
      "linear-gradient(to right, rgb(255, 126, 58) 0%, rgb(255, 126, 58) " +
      value +
      "%, rgba(255, 126, 58, 0.3) " +
      value +
      "%, rgba(255, 126, 58, 0.3) 100%)";
  };

  const updateTime = (currTime = "") => {
    if (!ref || !ref.current) return;
    const audioEL = ref.current;
    const currentTime = currTime
      ? currTime
      : isNaN(audioEL.currentTime)
      ? 0
      : audioEL.currentTime;
    const duration = isNaN(audioEL.duration) ? 0 : audioEL.duration;
    const currentMinutes =
      currentTime / 60 > 10
        ? parseInt(currentTime / 60)
        : `0${parseInt(currentTime / 60)}`;
    const currentSeconds =
      currentTime % 60 > 10
        ? parseInt(currentTime % 60)
        : `0${parseInt(currentTime % 60)}`;
    const currTimeSorted = `${currentMinutes}:${currentSeconds}`;
    const remainedTimeMinutes =
      (duration - currentTime) / 60 > 10
        ? parseInt((duration - currentTime) / 60)
        : `0${parseInt((duration - currentTime) / 60)}`;
    const remainedTimeSeconds =
      (duration - currentTime) % 60 > 10
        ? parseInt((duration - currentTime) % 60)
        : `0${parseInt((duration - currentTime) % 60)}`;
    const remainedTimeSorted = `-${remainedTimeMinutes}:${remainedTimeSeconds}`;
    setCurrentTime(currTimeSorted);
    setRemainedTime(remainedTimeSorted);
    updateProgressBar();
  };

  const progressBarChangeHandler = (e) => {
    if (!ref || !progressBar || !ref.current || !progressBar.current) return;
    setProgressValue(e.target.value);
    const audioEl = ref.current;
    audioEl.currentTime = e.target.value;
  };

  useEffect(() => {
    if (!ref || !progressBar || !ref.current || !progressBar.current) return;
    setProgressValue(0);
    updateTime(0);
    if (data && data.image && !data.image.length) return setCoverImage("");
    const image = new Buffer.from(data.image).toString("base64");
    setCoverImage("data:image/png;base64," + image);
  }, [data]);

  useEffect(() => {
    updateTime(progressValue);
  }, [progressValue]);

  const fastBackHandler = (e) => {
    if (!ref || !progressBar || !ref.current || !progressBar.current) return;
    if (progressValue <= 10) {
      setProgressValue(0);
      ref.current.currentTime = 0;
      return;
    }
    setProgressValue((prev) => prev - 10);
    ref.current.currentTime = progressValue - 10;
  };

  const fastForwardHandler = (e) => {
    if (!ref || !progressBar || !ref.current || !progressBar.current) return;
    if (progressValue > maximumProgressValue - 10) {
      ref.current.currentTime = maximumProgressValue - 3;
      setProgressValue(maximumProgressValue - 3);
      ref.current.currentTime = maximumProgressValue - 3;
      return;
    }
    setProgressValue((prev) => prev + 10);
    ref.current.currentTime = progressValue + 10;
  };

  return (
    <Main>
      <audio
        ref={ref}
        src={`${serverURL}/${data.audioURL.toString()}`}
        onTimeUpdate={timeHandler}
        onLoadedMetadata={metaDataLoadedHandler}
        onPause={() => setIsPaused(true)}
        onPlay={() => setIsPaused(false)}
        onEnded={() => setIsCurrentAudioEnded(true)}
        onCanPlay={() => {setCanPlayAudio(true)}}
        onLoadStart={() => setCanPlayAudio(false)}
        autoPlay
      >
        Your browser does not support audio API
      </audio>
      {canPlayAudio ? (
        <div className="playerWrapper">
          <div className="img">
            <img
              src={coverImage ? coverImage : images.pngs.defaultCover}
              alt="cover"
            />
          </div>
          <div className="audioInfo">
            <div className="audioName">
              <p title={data.songName}>{data.songName}</p>
            </div>
            <div className="artistName">
              <p title={data.singerName}>{data.singerName}</p>
            </div>
          </div>
          <div className="controlPanel">
            <div className="progressBar">
              <div className="progress">
                <input
                  min={0}
                  max={maximumProgressValue}
                  value={progressValue}
                  type="range"
                  name="progress"
                  ref={progressBar}
                  onChange={progressBarChangeHandler}
                />
              </div>
              <div className="timer">
                <div className="passedTime">{currentTime}</div>
                <div className="remainedTime">{remainedTime}</div>
              </div>
            </div>
            <div className="controlButtons">
              <div className="previous" onClick={() => setIsSwitchedBack(true)}>
                <img src={images.svgs.nextButtonIcon} alt="previous" />
              </div>
              <div className="fastBack" onClick={fastBackHandler}>
                <img src={images.svgs.arrowRight} alt="fastBack" />
              </div>
              <div
                className="play"
                onClick={() => setIsPaused((prevVal) => !prevVal)}
              >
                {isPaused ? (
                  <svg
                    width="56"
                    height="56"
                    viewBox="0 0 56 56"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M-0.00012207 28.0162C-0.00012207 12.5615 12.5674 0 27.9999 0C43.4323 0 55.9999 12.5615 55.9999 28.0162C55.9999 43.4385 43.4323 56 27.9999 56C12.5674 56 -0.00012207 43.4385 -0.00012207 28.0162ZM38.2702 30.85C38.5675 30.5528 38.9459 30.0936 39.0269 29.9855C39.4594 29.4182 39.6756 28.7159 39.6756 28.0162C39.6756 27.2301 39.4323 26.5007 38.9729 25.9064C38.9352 25.8688 38.8615 25.7885 38.7654 25.6839C38.5856 25.4882 38.3276 25.2074 38.081 24.9609C35.8648 22.5837 30.081 18.6937 27.054 17.5051C26.5945 17.3187 25.4323 16.9108 24.8107 16.8837C24.2161 16.8837 23.6486 17.0188 23.108 17.289C22.4323 17.6671 21.8918 18.2615 21.5945 18.9638C21.4053 19.4501 21.108 20.9088 21.108 20.9358C20.8107 22.5297 20.6486 25.123 20.6486 27.9865C20.6486 30.7176 20.8107 33.2002 21.054 34.821C21.0607 34.8277 21.0839 34.9436 21.12 35.1237C21.2298 35.6712 21.4586 36.8118 21.7026 37.2793C22.2972 38.4139 23.4594 39.1163 24.7026 39.1163H24.8107C25.6215 39.0892 27.3242 38.3869 27.3242 38.3599C30.1891 37.1712 35.8377 33.4703 38.108 31.0121L38.2702 30.85Z"
                      fill="#FF7E3A"
                    />
                  </svg>
                ) : (
                  <svg viewBox="0 0 512 512">
                    <path
                      d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM224 191.1v128C224 337.7 209.7 352 192 352S160 337.7 160 320V191.1C160 174.3 174.3 160 191.1 160S224 174.3 224 191.1zM352 191.1v128C352 337.7 337.7 352 320 352S288 337.7 288 320V191.1C288 174.3 302.3 160 319.1 160S352 174.3 352 191.1z"
                      fill="rgb(255, 126, 58)"
                    />
                  </svg>
                )}
              </div>
              <div className="fastForward" onClick={fastForwardHandler}>
                <img src={images.svgs.arrowRight} alt="fastBack" />
              </div>
              <div className="next">
                <img
                  src={images.svgs.nextButtonIcon}
                  alt="previous"
                  onClick={() => setIsCurrentAudioEnded(true)}
                />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Loading svgHeight={"100%"} svgWidth={"50%"} />
      )}
    </Main>
  );
};

export default Audio;
