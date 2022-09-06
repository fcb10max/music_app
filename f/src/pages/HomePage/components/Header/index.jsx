import React from "react";
import { useRef } from "react";
import { Main } from "./styles";

const Header = ({
  avatar,
  logo,
  setIsMobileMenuActive,
}) => {
  const menu = useRef();

  return (
    <Main>
      <div className="menu">
        <div
          className="menuWrapper"
          onClick={() => setIsMobileMenuActive((prev) => !prev)}
        >
          <span ref={menu} />
        </div>
      </div>
      <div className="logo">
        <i>
          <img src={logo} alt="logo" />
        </i>
        <p>SoundCloud</p>
      </div>
      <div className="user">
        <div className="avatar">
          <img src={avatar} alt="avatar" />
        </div>
        <div className="userInfo">
          <div className="username">Username</div>
        </div>
      </div>
    </Main>
  );
};

export default Header;
