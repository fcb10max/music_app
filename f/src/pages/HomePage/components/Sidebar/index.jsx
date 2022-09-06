import React, { useEffect, useRef } from "react";
import { Main } from "./styles";
import Navlinks from "../Navlinks";

const Sidebar = ({ logo, isMobileMenuActive, setIsMobileMenuActive }) => {
  const ref = useRef();
  useEffect(() => {
    if (!ref || !ref.current) return;
    const el = ref.current;
    isMobileMenuActive
      ? el.classList.add("active")
      : el.classList.remove("active");
  }, [isMobileMenuActive]);

  return (
    <Main ref={ref}>
      <div className="wrapper">
        <div className="close" onClick={() => setIsMobileMenuActive(false)}>
          <span />
        </div>
        <div className="logo">
          <i>
            <img src={logo} alt="logo" />
          </i>
          <p>SoundCloud</p>
        </div>
        <Navlinks />
      </div>
    </Main>
  );
};

export default Sidebar;
