import React, { useState, useEffect } from "react";
import { HeaderContainer } from "./StyledHeader";
const Header = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (menuName) => {
    setOpenDropdown(openDropdown === menuName ? null : menuName);
  };
  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  const Hamburger = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="52"
      height="24"
      viewBox="0 0 52 24"
    >
      <g id="Group_9" data-name="Group 9" transform="translate(-294 -47)">
        <rect
          id="Rectangle_3"
          data-name="Rectangle 3"
          width="42"
          height="4"
          rx="2"
          transform="translate(304 47)"
          fill="#574c4c"
        />
        <rect
          id="Rectangle_5"
          data-name="Rectangle 5"
          width="42"
          height="4"
          rx="2"
          transform="translate(304 67)"
          fill="#574c4c"
        />
        <rect
          id="Rectangle_4"
          data-name="Rectangle 4"
          width="52"
          height="4"
          rx="2"
          transform="translate(294 57)"
          fill="#574c4c"
        />
      </g>
    </svg>
  );
  const Close = () => {
    return (
      <svg
        width="64px"
        height="64px"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          {" "}
          <path
            d="M20.7457 3.32851C20.3552 2.93798 19.722 2.93798 19.3315 3.32851L12.0371 10.6229L4.74275 3.32851C4.35223 2.93798 3.71906 2.93798 3.32854 3.32851C2.93801 3.71903 2.93801 4.3522 3.32854 4.74272L10.6229 12.0371L3.32856 19.3314C2.93803 19.722 2.93803 20.3551 3.32856 20.7457C3.71908 21.1362 4.35225 21.1362 4.74277 20.7457L12.0371 13.4513L19.3315 20.7457C19.722 21.1362 20.3552 21.1362 20.7457 20.7457C21.1362 20.3551 21.1362 19.722 20.7457 19.3315L13.4513 12.0371L20.7457 4.74272C21.1362 4.3522 21.1362 3.71903 20.7457 3.32851Z"
            fill="#0F0F0F"
          ></path>{" "}
        </g>
      </svg>
    );
  };

  return (
    <HeaderContainer>
      <a className="logo" href="/">
        <img
          srcSet="https://solarvpn.com/images/logo.svg"
          alt="logo"
          style={{ width: "auto", height: "40px" }}
        />
      </a>
      <div className={`nav-elements  ${showNavbar && "active"}`}>
        <div className="close" onClick={handleShowNavbar}>
          <Close />
        </div>
        <ul className="nav-list">
          <li className="list-item">
            <a href="*" className="active">
              Home
            </a>
          </li>
          <li className="list-item">
            <div
              style={{ display: "flex", alignItems: "center", gap: 3 }}
              onClick={() => toggleDropdown("download")}
            >
              <span> Download </span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
              </svg>
            </div>
            <div
              className={`dropdown-content ${
                openDropdown === "download" ? "show" : ""
              }`}
            >
              <div className="list-col">
                <p className="title">Desktop</p>
                <ul className="list-col__menu">
                  <li className="list-col__menu--item">
                    <a href="*">Linux</a>
                  </li>
                  <li className="list-col__menu--item">
                    <a href="*">macOS</a>
                  </li>
                  <li className="list-col__menu--item">
                    <a href="*">Windows</a>
                  </li>
                </ul>
              </div>
              <div className="list-col">
                <p className="title">Desktop</p>
                <ul className="list-col__menu">
                  <li className="list-col__menu--item">
                    <a href="*">Mobile & TV</a>
                  </li>
                  <li className="list-col__menu--item">
                    <a href="*">Android TV</a>
                  </li>
                  <li className="list-col__menu--item">
                    <a href="*">Apple TV</a>
                  </li>
                  <li className="list-col__menu--item">
                    <a href="*">iOS</a>
                  </li>
                </ul>
              </div>
              <div className="list-col">
                <p className="title">Extensions</p>
                <ul className="list-col__menu">
                  <li className="list-col__menu--item">
                    <a href="*">Chrome</a>
                  </li>
                  <li className="list-col__menu--item">
                    <a href="*">Firefox</a>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li className="list-item">
            <a href="*" className="">
              {" "}
              Why SolarVPN
            </a>
          </li>
          <li className="list-item">
            <a href="*" className="">
              Servers
            </a>
          </li>
          <li className="list-item">
            <a href="*" className="">
              News
            </a>
          </li>
          <li className="list-item ">
            <div
              style={{ display: "flex", alignItems: "center", gap: 3 }}
              onClick={() => toggleDropdown("help")}
            >
              <span> Help</span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
              </svg>
            </div>
            <div
              className={`dropdown-content  ${
                openDropdown === "help" ? "show" : ""
              }`}
            >
              <a href="*">Frequently Asked Questions</a>
            </div>
          </li>
        </ul>
        <div className="login-mobile">
          <a href="*" className="sign-in">
            Sign in
          </a>
          <a href="*" className="sign-up">
            Sign up
          </a>
        </div>
      </div>
      <div className="login-desk">
        <a href="*" className="sign-in">
          Sign in
        </a>
        <a href="*" className="sign-up">
          Sign up
        </a>
      </div>
      <div className="menu-icon" onClick={handleShowNavbar}>
        <Hamburger />
      </div>
    </HeaderContainer>
  );
};

export default Header;
