import React, { useState } from "react";
import { LeftBarContainer } from "./StyledLeftBar";
const LeftBar = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const [openDropdowns, setOpenDropdowns] = useState(new Set());
  const handleShowNavbar = () => {
    setShowNavbar((prev) => !prev);
  };
  const toggleDropdown = (menuName) => {
    setOpenDropdowns((prevOpenDropdowns) => {
      const newSet = new Set(prevOpenDropdowns);
      if (newSet.has(menuName)) {
        newSet.delete(menuName);
      } else {
        newSet.add(menuName);
      }
      return newSet;
    });
  };

  const dummyData = [
    {
      title: "Getting Started",
      toggleName: "started",
      listItem: [
        {
          subTitle: "Operating system",
          list: [
            { link: "#", text: "For Widows" },
            { link: "#", text: "For Mac Os" },
            { link: "#", text: "For Linux" },
          ],
        },
        {
          subTitle: "FEATURE",
          list: [
            { link: "#", text: "How to use and redeem Share Code?" },
            { link: "#", text: "Add and Manage Your Favorites" },
            { link: "#", text: "Demo Setup Tutorial" },
            { link: "#", text: "Demo App Introduction" },
            { link: "#", text: "Demo Dashboard Overview" },
            { link: "#", text: "Demo in a Nutshell" },
            { link: "#", text: "" },
          ],
        },
      ],
    },
    {
      title: "Operating System Settings",
      toggleName: "operating",

      listItem: [
        {
          subTitle: "",
          list: [
            {
              link: "#",
              text: "How to configure Proxy settings on Android device",
            },
            {
              link: "#",
              text: "How to configure Proxy settings on iPhone & iPad",
            },
            { link: "#", text: "How to set up a Proxy in macOS" },
            { link: "#", text: "How to set up a Proxy in Windows 10 & 11" },
          ],
        },
      ],
    },
    {
      title: "INTEGRATIONS",
      toggleName: "integrations",
      listItem: [
        {
          subTitle: "",
          list: [
            { link: "#", text: "Anti-Detection Browser" },
            { link: "#", text: "Browser" },
            { link: "#", text: "Emulator" },
          ],
        },
      ],
    },
    {
      title: "PROXY MANAGER",
      toggleName: "proxy",
      listItem: [
        {
          subTitle: "",
          list: [
            { link: "#", text: "WebHarvy Settings with Demo" },
            { link: "#", text: "SwitchyOmega Proxy Settings with Demo" },
            { link: "#", text: "Octoparse Proxy Settings with Demo" },
            { link: "#", text: "ParseHub Proxy Settings with Demo" },
            { link: "#", text: "FoxyProxy Proxy Settings with Demo" },
            { link: "#", text: "Proxifier Proxy Settings with Demo" },
          ],
        },
      ],
    },
    {
      title: "TROUBLE SHOOTING",
      toggleName: "trouble",
      listItem: [
        {
          subTitle: "",
          list: [
            { link: "#", text: "test" },
            { link: "#", text: "test 2" },
          ],
        },
      ],
    },
    ,
    {
      title: "PAYMENT GUIDE",
      toggleName: "guide",
      listItem: [
        {
          subTitle: "",
          list: [
            { link: "#", text: "test" },
            { link: "#", text: "test 2" },
          ],
        },
      ],
    },
  ];
  const Li = ({ item }) => {
    return (
      <li className="list-item">
        <div
          className="title"
          style={{ display: "flex", alignItems: "center", gap: 3 }}
          onClick={() => toggleDropdown(item.toggleName)}
        >
          <span> {item.title} </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
          >
            <path
              d="M3.5 5.25L7 8.75L10.5 5.25"
              stroke="#71717A"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        {openDropdowns.has(item.toggleName) && (
          <div className={`dropdown-content show`}>
            {item?.listItem.length > 0 &&
              item?.listItem.map((item, index) => (
                <div className="list-col" key={index}>
                  {item.subTitle && (
                    <p className="sub-title">{item.subTitle}</p>
                  )}
                  <ul className="list-col__menu">
                    {item.list.length > 0 &&
                      item.list.map((item, index) => (
                        <li className="list-col__menu--item" key={index}>
                          <a href={item?.link}>{item.text}</a>
                        </li>
                      ))}
                  </ul>
                </div>
              ))}
          </div>
        )}
      </li>
    );
  };

  return (
    <LeftBarContainer>
      <button className="nav-mobile" onClick={handleShowNavbar}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-menu"
        >
          <line x1="4" x2="20" y1="12" y2="12"></line>
          <line x1="4" x2="20" y1="6" y2="6"></line>
          <line x1="4" x2="20" y1="18" y2="18"></line>
        </svg>
      </button>
      <div className={`nav-elements  ${showNavbar && "active"}`}>
        <button className="close" onClick={handleShowNavbar}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            class="lucide lucide-x"
          >
            <path d="M18 6 6 18"></path>
            <path d="m6 6 12 12"></path>
          </svg>
        </button>
        <p className="title">Overview</p>
        <ul className="nav-list">
          {dummyData.length > 0 &&
            dummyData.map((item, index) => <Li key={index} item={item} />)}
          <li className="list-item leftBar-mobile">
            <div className="title" onClick={() => toggleDropdown("leftBar")}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
              >
                <path
                  d="M0 1H14V2.4H0V1ZM0 6H10.5V7.4H0V6ZM0 11H7V12.4H0V11Z"
                  fill="white"
                />
              </svg>
              On this page
            </div>
            {openDropdowns.has("leftBar") && (
              <div className={`dropdown-content show`}>
                <ul className="nav-list">
                  <li className="list-item">
                    <a href="#Search">Search our Document and courses</a>
                  </li>
                  <li className="list-item">
                    <a href="#Find">What can I find here</a>
                  </li>
                  <li className="list-item">
                    <a href="#Documentation">Demo Documentation</a>
                  </li>
                  <li className="list-item">
                    <a href="#Explore">Explore the docs</a>
                  </li>
                  <li className="list-item">
                    <a href="#">Most popular questions</a>
                  </li>
                </ul>
              </div>
            )}
          </li>
        </ul>
      </div>
    </LeftBarContainer>
  );
};
export default LeftBar;
