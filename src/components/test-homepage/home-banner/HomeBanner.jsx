import React, { useEffect, useState, useRef } from "react";
import {
  HomeBannerContainer,
  HomeBannerContent,
  HomeBannerImage,
} from "./StyledHomeBanner";
const lerp = (start, end, t) => start + (end - start) * t;
const HomeBanner = () => {
  const [opacityValue, setOpacityValue] = useState(1);
  const [transformStyle, setTransformStyle] = useState(
    "translateY(0%) translateZ(-300px) scale(0.9) rotateX(30deg) translateZ(0px)"
  );
  const [transformContentStyle, setTransformContentStyle] = useState(
    "translateY(0%) translateZ(0px) translateZ(0px)"
  );
  const animationRef = useRef(null);
  const animationContentRef = useRef(null);
  const bannerRef = useRef(null);
  const contentRef = useRef(null);
  const textList = ["No Speed Limits", "No Advertisements", "No Data Logging"];
  const ChangingText = () => {
    const [index, setIndex] = useState(0);
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
      const interval = setInterval(() => {
        setAnimate(true);
        setTimeout(() => {
          setIndex((prevIndex) => (prevIndex + 1) % textList.length);
          setAnimate(false);
        }, 500);
      }, 2000);

      return () => clearInterval(interval);
    }, []);

    return (
      <span className="text-container">
        <div className={` ${animate ? "slide-down" : ""}`}>
          {textList[index]}
        </div>
        <style>
          {`
                    .text-container {
                        display: inline-block;
                        position: relative;
                        white-space: nowrap;
                        width: 740px;
                        height: 102px;
                        overflow: hidden;
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        align-items: flex-start;
                        text-align:start;
                    }

                    .text-container div {
                        width: 100%;
                        transition: transform 0.5s ease-out, opacity 0.5s;
                    }

                    .slide-down {
                        transform: translateY(40px);
                        opacity: 0;
                    }
                `}
        </style>
      </span>
    );
  };

  useEffect(() => {
    const handleScroll = () => {
      if (!bannerRef.current) return;
      const rect = bannerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const progress = Math.min(
        Math.max((windowHeight - rect.top) / windowHeight, 0),
        1
      );
      const translateY = lerp(0, -30, progress);
      const translateZ = lerp(-300, 0, progress);
      const scale = lerp(0.9, 1, progress);
      const rotateX = lerp(30, 0, progress);

      const newTransform = `translateY(${translateY}%) translateZ(${translateZ}px) scale(${scale}) rotateX(${rotateX}deg)`;
      cancelAnimationFrame(animationRef.current);
      animationRef.current = requestAnimationFrame(() => {
        setTransformStyle(newTransform);
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(animationRef.current);
    };
  }, []);
  useEffect(() => {
    const handleScrollContent = () => {
      if (!contentRef.current) return;

      const rect = contentRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const progress = Math.min(
        Math.max((windowHeight / 5 - rect.top) / windowHeight, 0),
        1
      );
      //   console.log(progress);

      const translateY = lerp(0, 100, progress);
      const translateZ = lerp(0, -200, progress);
      const opacity = lerp(1, 0, progress);

      const newTransform = `translateY(${translateY}%) translateZ(${translateZ}px) translateZ(0px)`;

      cancelAnimationFrame(animationContentRef.current);
      animationContentRef.current = requestAnimationFrame(() => {
        setTransformContentStyle(newTransform);
        setOpacityValue(opacity);
      });
    };

    window.addEventListener("scroll", handleScrollContent);
    return () => {
      window.removeEventListener("scroll", handleScrollContent);
      cancelAnimationFrame(animationContentRef.current);
    };
  }, []);

  return (
    <HomeBannerContainer>
      <HomeBannerContent ref={contentRef}>
        <div
          style={{
            opacity: opacityValue,
            transform: transformContentStyle,
            transition: "transform 0.5s ease-out, opacity 0.5s ease-out",
          }}
        >
          <p className="title">Safe CyberHaven</p>
          <div className="sub-title">
            Free Premium,
            <ChangingText />
          </div>
          <p className="description">
            Experience the freedom of seamless, private browsing with
            <p>
              our premium VPN — no fees, no ads, no limits, just one click away.
            </p>
          </p>
          <a href="#" className="get">
            <svg
              fill="#ffffff"
              width="64px"
              height="64px"
              viewBox="0 0 32 32"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
                stroke="#ffffff"
                strokeWidth="0.192"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path d="M23.35 12.653l2.496-4.323c0.044-0.074 0.070-0.164 0.070-0.26 0-0.287-0.232-0.519-0.519-0.519-0.191 0-0.358 0.103-0.448 0.257l-0.001 0.002-2.527 4.377c-1.887-0.867-4.094-1.373-6.419-1.373s-4.532 0.506-6.517 1.413l0.098-0.040-2.527-4.378c-0.091-0.156-0.259-0.26-0.45-0.26-0.287 0-0.519 0.232-0.519 0.519 0 0.096 0.026 0.185 0.071 0.262l-0.001-0.002 2.496 4.323c-4.286 2.367-7.236 6.697-7.643 11.744l-0.003 0.052h29.991c-0.41-5.099-3.36-9.429-7.57-11.758l-0.076-0.038zM9.098 20.176c-0 0-0 0-0 0-0.69 0-1.249-0.559-1.249-1.249s0.559-1.249 1.249-1.249c0.69 0 1.249 0.559 1.249 1.249v0c-0.001 0.689-0.559 1.248-1.249 1.249h-0zM22.902 20.176c-0 0-0 0-0 0-0.69 0-1.249-0.559-1.249-1.249s0.559-1.249 1.249-1.249c0.69 0 1.249 0.559 1.249 1.249v0c-0.001 0.689-0.559 1.248-1.249 1.249h-0z"></path>{" "}
              </g>
            </svg>
            <div className="space"></div>
            <p className="text-get">
              Get SolarVPN Now <span>- 100% Free</span>
            </p>
          </a>
          <a href="#" className="why">
            Why Should I Use a VPN?
          </a>
        </div>
      </HomeBannerContent>
      <HomeBannerImage ref={bannerRef}>
        <div
          style={{
            transform: transformStyle,
            transition: "transform 0.1s ease-out",
          }}
        >
          <img
            id="banner-homepage"
            srcSet="https://static.solarvpn-cd.net/media/assets/images/home/home-banner-3.webp "
            alt="home banner"
          ></img>
        </div>
      </HomeBannerImage>
    </HomeBannerContainer>
  );
};
export default HomeBanner;
