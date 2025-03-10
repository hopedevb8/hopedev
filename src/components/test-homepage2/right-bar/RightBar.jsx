import { RightBarContainer } from "./StyledRightBar";
const RightBar = () => {
  return (
    <RightBarContainer>
      <div className="title">
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
    </RightBarContainer>
  );
};
export default RightBar;
