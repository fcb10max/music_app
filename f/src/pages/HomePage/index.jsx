import React, { useCallback, useEffect, useRef, useState } from "react";
import { Main } from "./styles";
import images from "../../assets";
import { Scrollbars } from "react-custom-scrollbars";
import HistoryItem from "./components/HistoryItem";
import ChartItem from "./components/ChartItem";
import Audio from "./components/Audio";
import useDataFetch from "../../hooks/useDataFetch";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";

const HomePage = () => {
  const serverURL = process.env.REACT_APP_SERVER_URL;
  const ref = useRef();
  const chartItemsWrapper = useRef();
  const audios = useDataFetch(`${serverURL}/?limit=20`);
  const initialAudio = useDataFetch(`${serverURL}/audio?isRandom=1`);
  const [currentAudio, setCurrentAudio] = useState();
  const [isCurrentAudioEnded, setIsCurrentAudioEnded] = useState(false);
  const [currentAudioIndex, setCurrentAudioIndex] = useState(0);
  const [isSwitchedBack, setIsSwitchedBack] = useState(false);
  const [isMobileMenuActive, setIsMobileMenuActive] = useState(false);

  const arrowClickHandler = useCallback((el) => {
    if (
      !ref ||
      !chartItemsWrapper ||
      !ref.current ||
      !chartItemsWrapper.current
    )
      return;
    const parentEl = chartItemsWrapper.current;
    const isForward = el.innerText === ">" ? true : false;
    const parentScrollWidth = parentEl.scrollWidth;
    const parentOffsetWidth = parentEl.offsetWidth;
    const currentScrollLeft = parentEl.scrollLeft;

    if (isForward) {
      parentEl.scrollTo({
        left: currentScrollLeft + parentOffsetWidth / 2,
        behavior: "smooth",
      });
    } else {
      parentEl.scrollTo({
        left: currentScrollLeft - parentOffsetWidth / 2,
        behavior: "smooth",
      });
    }

    const newLeft = isForward
      ? currentScrollLeft + parentOffsetWidth / 2
      : currentScrollLeft - parentOffsetWidth / 2;
    const newRight = newLeft + parentOffsetWidth;

    toggleArrowsClasses(newLeft, newRight, parentScrollWidth);
  }, []);

  useEffect(() => {
    if (
      !ref ||
      !ref.current ||
      !chartItemsWrapper ||
      !chartItemsWrapper.current
    )
      return;
    const arrowsParentEl = ref.current;
    const arrowsElChildren = Array.from(arrowsParentEl.children);
    const itemsWrapperEl = chartItemsWrapper.current;
    arrowsElChildren.forEach((el) =>
      el.addEventListener("click", (e) => arrowClickHandler(e.target))
    );
    itemsWrapperEl.addEventListener("scroll", (e) => {
      const left = itemsWrapperEl.scrollLeft;
      const right = left + itemsWrapperEl.offsetWidth;
      toggleArrowsClasses(left, right, itemsWrapperEl.scrollWidth);
    });
  }, [arrowClickHandler]);

  const toggleArrowsClasses = (left, right, maxWidth) => {
    if (!ref || !ref.current) return;
    const children = Array.from(ref.current.children);
    children.forEach((el) => el.classList.remove("active"));
    if (left <= 0) {
      children.forEach((el) =>
        el.innerText === "<"
          ? el.classList.remove("active")
          : el.classList.add("active")
      );
    }
    if (right >= maxWidth) {
      children.forEach((el) =>
        el.innerText === ">"
          ? el.classList.remove("active")
          : el.classList.add("active")
      );
    }
    if (left > 0 && right < maxWidth) {
      children.forEach((el) => el.classList.add("active"));
    }
  };

  const scrollHorizontally = (e) => {
    if (!chartItemsWrapper || !chartItemsWrapper.current) return;
    const el = chartItemsWrapper.current;
    const scrollRightEdge = el.scrollLeft + el.offsetWidth;
    if (e.deltaY > 0 && scrollRightEdge >= el.scrollWidth) return;
    e.preventDefault();
    chartItemsWrapper.current.scrollBy(e.deltaY, 0);
  };

  useEffect(() => {
    if (!chartItemsWrapper || !chartItemsWrapper.current) return;
    const el = chartItemsWrapper.current;
    el.addEventListener("wheel", scrollHorizontally, { passive: false });
    el.addEventListener("scroll", scrollHorizontally, { passive: false });
  }, [chartItemsWrapper]);

  useEffect(() => {
    if (!isCurrentAudioEnded || !audios || !audios.data) return;
    if (!currentAudio || currentAudioIndex === audios.data.length) {
      setCurrentAudio(audios.data[0]);
      setCurrentAudioIndex(0);
      setIsCurrentAudioEnded(false);
      return;
    }
    setCurrentAudio(audios.data[currentAudioIndex + 1]);
    setCurrentAudioIndex((prev) => prev + 1);
    setIsCurrentAudioEnded(false);
  }, [isCurrentAudioEnded]);

  useEffect(() => {
    if (!isSwitchedBack || !audios || !audios.data) return;
    if (!currentAudio || currentAudioIndex === 0) {
      setCurrentAudio(audios.data[audios.data.length - 1]);
      setCurrentAudioIndex(audios.data.length - 1);
      setIsSwitchedBack(false);
      return;
    }
    setCurrentAudio(audios.data[currentAudioIndex - 1]);
    setCurrentAudioIndex((prev) => prev - 1);
    setIsSwitchedBack(false);
  }, [isSwitchedBack]);

  return (
    <Main images={images}>
      <div className="wrapper">
        <Sidebar
          logo={images.pngs.logo}
          isMobileMenuActive={isMobileMenuActive}
          setIsMobileMenuActive={setIsMobileMenuActive}
        />
        <div className="mainWindow">
          <div className="wrapper">
            <Header
              avatar={images.svgs.profile}
              logo={images.pngs.logo}
              setIsMobileMenuActive={setIsMobileMenuActive}
            />
            <div className="charts">
              <div className="top">
                <div className="title">Charts: Top 50</div>
                <div className="arrowKeys" ref={ref}>
                  <span>{"<"}</span>
                  <span className="active">{">"}</span>
                </div>
              </div>
              <div className="wrapper" ref={chartItemsWrapper}>
                {!audios.loading &&
                  !audios.error &&
                  audios.data &&
                  audios.data.map((i, ind) => (
                    <ChartItem
                      key={ind}
                      images={images}
                      data={i}
                      setCurrentAudio={setCurrentAudio}
                    />
                  ))}
              </div>
            </div>
            <div className="block">
              <div className="history">
                <div className="top">
                  <h1 className="title">Listening History</h1>
                  <button>See All</button>
                </div>

                <div className="wrapper">
                  <Scrollbars
                    style={{
                      flex: 2,
                      height: 430,
                      borderBottomRightRadius: 40,
                      borderBottomLeftRadius: 40,
                    }}
                    renderThumbVertical={({ style, ...props }) => (
                      <div
                        {...props}
                        style={{
                          ...style,
                          backgroundColor: "#7C8DB5B8",
                          borderRadius: 40,
                          width: 2,
                          height: 2,
                        }}
                      />
                    )}
                  >
                    <div className="main">
                      {!audios.loading &&
                        !audios.error &&
                        audios.data &&
                        audios.data.map((i, ind) => (
                          <HistoryItem
                            key={ind}
                            images={images}
                            data={i}
                            setCurrentAudio={setCurrentAudio}
                          />
                        ))}
                    </div>
                  </Scrollbars>
                </div>
              </div>
              <div className="player">
                {!initialAudio.loading &&
                  !initialAudio.error &&
                  initialAudio.data && (
                    <Audio
                      data={currentAudio ? currentAudio : initialAudio.data}
                      images={images}
                      setIsCurrentAudioEnded={setIsCurrentAudioEnded}
                      setIsSwitchedBack={setIsSwitchedBack}
                    />
                  )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Main>
  );
};

export default HomePage;
