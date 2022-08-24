import React, { useEffect, useRef } from "react";
import { Main } from "./styles";
import images from "../../assets";
import Navlinks from "./components/Navlinks";

import { Scrollbars } from "react-custom-scrollbars";
import HistoryItem from "./components/HistoryItem";
import ChartItem from "./components/ChartItem";
import Audio from "./components/Audio";

// import audio file
// const path = "../../assets/audios/timati-nelzya(ft.nazima).mp3";
// const audio = new Audio(path);
// audio.innerText =
//   "Your browser does not support audio player. Please update your browser to latest version";
const audio = require("../../assets/audios/timati-nelzya(ft.nazima).mp3");

const HomePage = () => {
  const ref = useRef();
  const itemsWrapper = useRef();

  useEffect(() => {
    if (!ref || !ref.current || !itemsWrapper || !itemsWrapper.current) return;
    const arrowsParentEl = ref.current;
    const arrowsElChildren = Array.from(arrowsParentEl.children);
    const itemsWrapperEl = itemsWrapper.current;
    arrowsElChildren.forEach((el) =>
      el.addEventListener("click", (e) => arrowClickHandler(e.target))
    );
    itemsWrapperEl.addEventListener("scroll", (e) => {
      const left = itemsWrapperEl.scrollLeft;
      const right = left + itemsWrapperEl.offsetWidth;
      toggleArrowsClasses(left, right, itemsWrapperEl.scrollWidth);
    });
  }, []);

  const arrowClickHandler = (el) => {
    if (!ref || !itemsWrapper || !ref.current || !itemsWrapper.current) return;
    const parentEl = itemsWrapper.current;
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
  };

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

  const scrollHorizontally = (event) => {
    if (!itemsWrapper || !itemsWrapper.current) return;
    // e.preventDefault();
    // const delta = Math.max(-1, Math.min(1, e.wheelDelta || -e.detail));
    // itemsWrapper.current.scrollLeft -= delta * 40;

    //////////////////////////////////////////////////

    // const toLeft = event.deltaY < 0 && target.scrollLeft > 0;
    // const target = itemsWrapper.current
    // const toRight =
    //   event.deltaY > 0 &&
    //   target.scrollLeft < target.scrollWidth - target.clientWidth;

    // if (toLeft || toRight) {
    //   event.preventDefault();
    //   target.scrollLeft += event.deltaY;
    // }
  };

  return (
    <Scrollbars style={{ width: "100vw", height: "100vh" }}>
      <Main images={images}>
        <div className="wrapper">
          <div className="sidebar">
            <div className="wrapper">
              <div className="logo">
                <i>
                  <img src={images.pngs.logo} alt="logo" />
                </i>
                <p>SoundCloud</p>
              </div>
              <Navlinks />
              <div className="mobile"></div>
            </div>
          </div>
          <div className="mainWindow">
            <div className="wrapper">
              <div className="header">
                <div className="locationHistory">{/* TODO */}</div>
                <div className="user">
                  <div className="avatar">
                    <img src={images.svgs.profile} alt="avatar" />
                  </div>
                  <div className="userInfo">
                    <div className="username">Username</div>
                  </div>
                </div>
              </div>
              <div className="charts">
                <div className="top">
                  <div className="title">Charts: Top 50</div>
                  <div className="arrowKeys" ref={ref}>
                    <span>{"<"}</span>
                    <span className="active">{">"}</span>
                  </div>
                </div>
                <div
                  className="wrapper"
                  ref={itemsWrapper}
                  // onScroll={scrollHorizontally}
                  // onWheel={scrollHorizontally}
                >
                  {["", "", "", "", "", "", "", "", "", "", ""].map(
                    (i, ind) => (
                      <ChartItem key={ind} images={images} />
                    )
                  )}
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
                        height: 320,
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
                        {["", "", "", "", "", "", "", "", "", ""].map(
                          (el, ind) => (
                            <HistoryItem key={ind} images={images} />
                          )
                        )}
                      </div>
                    </Scrollbars>
                  </div>
                </div>
                <div className="player">
                  <Audio audioUrl={audio} images={images} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Main>
    </Scrollbars>
  );
};

export default HomePage;
