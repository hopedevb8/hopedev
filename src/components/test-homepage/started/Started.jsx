import { StartedContainer } from "./StyledStarted";
const Started = () => {
  return (
    <StartedContainer>
      <div className="header">
        <span className="title">Get Started with SolarVPN</span>
        <span className="sub-title">
          Ready to surf without boundaries? Install SolarVPN and start enjoying
          secure, unrestricted browsing today.
        </span>
      </div>
      <div className="content">
        <div className="content-item">
          <img
            src="https://static.solarvpn-cd.net/media/assets//images/home/step1.png"
            alt=""
          />
          <div className="content">
            <span className="step">Step 1</span>
            <span className="title">Download and Install</span>
            <span className="des">
              Pick the right version for your device, download, and install.
            </span>
          </div>
        </div>
        <div className="content-item">
          <img
            src="https://static.solarvpn-cd.net/media/assets//images/home/step2.png"
            alt=""
          />
          <div className="content">
            <span className="step">Step 2</span>
            <span className="title">Connect</span>
            <span className="des">Open SolarVPN and hit “Connect”.</span>
          </div>
        </div>
        <div className="content-item">
          <img
            src="https://static.solarvpn-cd.net/media/assets//images/home/step3.png"
            alt=""
          />
          <div className="content">
            <span className="step">Step 3</span>
            <span className="title">Enjoy</span>
            <span className="des">
              Start enjoying content freely, no matter where you are!
            </span>
          </div>
        </div>
      </div>
    </StartedContainer>
  );
};
export default Started;
