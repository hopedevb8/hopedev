import React, { useEffect, useState, useRef } from "react";
import { WhyContainer } from "./StyledWhy";
const Why = () => {
  const timelineRef = useRef(null);
  const [line1Progress, setLine1Progress] = useState(0);
  const [line2Progress, setLine2Progress] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current) return;

      const rect = timelineRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const progress1 = Math.min(
        Math.max((windowHeight - rect.top) / windowHeight, 0),
        1
      );
      setLine1Progress(progress1);

      if (progress1 === 1) {
        let progress2 =
          (windowHeight - (rect.top + rect.height / 2)) / windowHeight;
        progress2 = Math.min(Math.max(progress2, 0), 1);
        setLine2Progress(progress2);
      } else {
        setLine2Progress(0);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <WhyContainer>
      <div className="header">
        <span className="title">Why Choose SolarVPN?</span>
        <span className="sub-title">
          Choose SolarVPN today for a worry-free, unrestricted, and secure
          online experience.
        </span>
      </div>
      <div className="content">
        <div className="timeline" ref={timelineRef}>
          <img
            src="https://static.solarvpn-cd.net/media/assets/images/why-solar/icons/node-active.png "
            alt=""
          />
          <div className="line">
            <div
              className="transition"
              style={{ height: `${line1Progress * 100}%` }}
            ></div>
          </div>
          <div className="category-icon">
            <img
              className={
                line1Progress < 1
                  ? "category-icon__inactive"
                  : "category-icon__active"
              }
              src="https://static.solarvpn-cd.net/media/assets/images/why-solar/icons/node-inactive.png "
              alt=""
            />
            <img
              className={
                line1Progress == 1
                  ? "category-icon__inactive"
                  : "category-icon__active"
              }
              src="https://static.solarvpn-cd.net/media/assets/images/why-solar/icons/node-active.png "
              alt=""
            />
          </div>
          <div className="line">
            <div
              className="transition"
              style={{ height: `${line2Progress * 100}%` }}
            ></div>
          </div>
          <div className="category-icon">
            <img
              className={
                line2Progress < 1
                  ? "category-icon__inactive"
                  : "category-icon__active"
              }
              src="https://static.solarvpn-cd.net/media/assets/images/why-solar/icons/node-inactive.png "
              alt=""
            />
            <img
              className={
                line2Progress == 1
                  ? "category-icon__inactive"
                  : "category-icon__active"
              }
              src="https://static.solarvpn-cd.net/media/assets/images/why-solar/icons/node-active.png "
              alt=""
            />
          </div>
        </div>
        <div className="content-item">
          <div className="image">
            <img
              src="https://static.solarvpn-cd.net/media/assets//images/home/why-choose-1.png "
              alt=""
            />
          </div>
          <div className="content">
            <span className="title">Unlimited Bandwidth & Speed</span>
            <span className="des">
              Enjoy high-speed internet without compromising on security. With
              SolarVPN, you get the best of both worlds - robust protection from
              privacy threats and a smooth, lag-free online experience.
            </span>
          </div>
        </div>
        <div className="content-item">
          <div className="content">
            <span className="title">Access to Unlimited Content</span>
            <span className="des">
              Say goodbye to geo-restrictions and hello to a world of content.
              With SolarVPN, you can access websites, streaming services, and
              online platforms from anywhere, anytime, without leaving a trace.
            </span>
          </div>
          <div className="image">
            <img
              src="https://static.solarvpn-cd.net/media/assets//images/home/why-choose-2.png  "
              alt=""
            />
          </div>
        </div>{" "}
        <div className="content-item">
          <div className="image">
            <img
              src="https://static.solarvpn-cd.net/media/assets//images/home/why-choose-3.png  "
              alt=""
            />
          </div>
          <div className="content">
            <span className="title">24/7 Customer Support</span>
            <span className="des">
              Our commitment to your satisfaction doesn’t stop at superior VPN
              services. We’re here around the clock to assist, protect, and
              ensure your online journey is smooth and secure.
            </span>
          </div>
        </div>
      </div>
    </WhyContainer>
  );
};
export default Why;
