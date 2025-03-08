import { UserStoryContainer } from "./StyledUserStory";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
const UserStory = () => {
  const feedbacks = [
    {
      title: "Samira, Online Student",
      des: "Studying abroad can be challenging, especially when you can't access educational materials from back home because of geo-restrictions. SolarVPN helped me bridge that gap. It's incredible how I can now tap into resources from any country, ensuring I don't miss out on my study materials. Plus, it's free, which is perfect for my student budget!",
    },
    {
      title: "Derek, Digital Nomad",
      des: "Traveling and working online means I have to be extra cautious about public Wi-Fi networks. SolarVPN has been my digital shield, keeping my personal information safe from hackers. The best part? No ads or fees, and I can work from anywhere in the world without worrying about internet censorship or bandwidth limits.",
    },
    {
      title: "Alex, Freelance Writer",
      des: "As a writer who's constantly researching and accessing various international news sources, SolarVPN has been a game-changer. I no longer worry about site restrictions or compromising my privacy. It's seamless, fast, and totally reliable, exactly what I need to stay focused and productive.",
    },
    ,
    {
      title: "Samira, Online Student",
      des: "Studying abroad can be challenging, especially when you can't access educational materials from back home because of geo-restrictions. SolarVPN helped me bridge that gap. It's incredible how I can now tap into resources from any country, ensuring I don't miss out on my study materials. Plus, it's free, which is perfect for my student budget!",
    },
    ,
    {
      title: "Derek, Digital Nomad",
      des: "Traveling and working online means I have to be extra cautious about public Wi-Fi networks. SolarVPN has been my digital shield, keeping my personal information safe from hackers. The best part? No ads or fees, and I can work from anywhere in the world without worrying about internet censorship or bandwidth limits.",
    },
    ,
    {
      title: "Alex, Freelance Writer",
      des: "As a writer who's constantly researching and accessing various international news sources, SolarVPN has been a game-changer. I no longer worry about site restrictions or compromising my privacy. It's seamless, fast, and totally reliable, exactly what I need to stay focused and productive.",
    },
  ];
  const FeedbackItem = ({ item }) => {
    return (
      <div className="feedback-item">
        <ul
          class="ant-rate css-17seli4 ant-rate-disabled"
          tabindex="-1"
          role="radiogroup"
          style={{ color: "rgb(0, 182, 122)" }}
        >
          <li class="ant-rate-star ant-rate-star-full">
            <div
              role="radio"
              aria-checked="true"
              aria-posinset="1"
              aria-setsize="5"
              tabindex="-1"
              bis_skin_checked="1"
            >
              <div class="ant-rate-star-first" bis_skin_checked="1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="currentColor"
                >
                  <path d="M22 0H0V22H22V0Z" fill="currentColor"></path>
                  <path
                    d="M11.0008 14.827L14.3466 13.9791L15.7445 18.2874L11.0008 14.827ZM18.7008 9.25824H12.8112L11.0008 3.7124L9.19037 9.25824H3.30078L8.06745 12.6957L6.25703 18.2416L11.0237 14.8041L13.957 12.6957L18.7008 9.25824Z"
                    fill="white"
                  ></path>
                </svg>
              </div>
              <div class="ant-rate-star-second" bis_skin_checked="1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="currentColor"
                >
                  <path d="M22 0H0V22H22V0Z" fill="currentColor"></path>
                  <path
                    d="M11.0008 14.827L14.3466 13.9791L15.7445 18.2874L11.0008 14.827ZM18.7008 9.25824H12.8112L11.0008 3.7124L9.19037 9.25824H3.30078L8.06745 12.6957L6.25703 18.2416L11.0237 14.8041L13.957 12.6957L18.7008 9.25824Z"
                    fill="white"
                  ></path>
                </svg>
              </div>
            </div>
          </li>
          <li class="ant-rate-star ant-rate-star-full">
            <div
              role="radio"
              aria-checked="true"
              aria-posinset="2"
              aria-setsize="5"
              tabindex="-1"
              bis_skin_checked="1"
            >
              <div class="ant-rate-star-first" bis_skin_checked="1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="currentColor"
                >
                  <path d="M22 0H0V22H22V0Z" fill="currentColor"></path>
                  <path
                    d="M11.0008 14.827L14.3466 13.9791L15.7445 18.2874L11.0008 14.827ZM18.7008 9.25824H12.8112L11.0008 3.7124L9.19037 9.25824H3.30078L8.06745 12.6957L6.25703 18.2416L11.0237 14.8041L13.957 12.6957L18.7008 9.25824Z"
                    fill="white"
                  ></path>
                </svg>
              </div>
              <div class="ant-rate-star-second" bis_skin_checked="1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="currentColor"
                >
                  <path d="M22 0H0V22H22V0Z" fill="currentColor"></path>
                  <path
                    d="M11.0008 14.827L14.3466 13.9791L15.7445 18.2874L11.0008 14.827ZM18.7008 9.25824H12.8112L11.0008 3.7124L9.19037 9.25824H3.30078L8.06745 12.6957L6.25703 18.2416L11.0237 14.8041L13.957 12.6957L18.7008 9.25824Z"
                    fill="white"
                  ></path>
                </svg>
              </div>
            </div>
          </li>
          <li class="ant-rate-star ant-rate-star-full">
            <div
              role="radio"
              aria-checked="true"
              aria-posinset="3"
              aria-setsize="5"
              tabindex="-1"
              bis_skin_checked="1"
            >
              <div class="ant-rate-star-first" bis_skin_checked="1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="currentColor"
                >
                  <path d="M22 0H0V22H22V0Z" fill="currentColor"></path>
                  <path
                    d="M11.0008 14.827L14.3466 13.9791L15.7445 18.2874L11.0008 14.827ZM18.7008 9.25824H12.8112L11.0008 3.7124L9.19037 9.25824H3.30078L8.06745 12.6957L6.25703 18.2416L11.0237 14.8041L13.957 12.6957L18.7008 9.25824Z"
                    fill="white"
                  ></path>
                </svg>
              </div>
              <div class="ant-rate-star-second" bis_skin_checked="1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="currentColor"
                >
                  <path d="M22 0H0V22H22V0Z" fill="currentColor"></path>
                  <path
                    d="M11.0008 14.827L14.3466 13.9791L15.7445 18.2874L11.0008 14.827ZM18.7008 9.25824H12.8112L11.0008 3.7124L9.19037 9.25824H3.30078L8.06745 12.6957L6.25703 18.2416L11.0237 14.8041L13.957 12.6957L18.7008 9.25824Z"
                    fill="white"
                  ></path>
                </svg>
              </div>
            </div>
          </li>
          <li class="ant-rate-star ant-rate-star-half ant-rate-star-active">
            <div
              role="radio"
              aria-checked="true"
              aria-posinset="4"
              aria-setsize="5"
              tabindex="-1"
              bis_skin_checked="1"
            >
              <div class="ant-rate-star-first" bis_skin_checked="1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="currentColor"
                >
                  <path d="M22 0H0V22H22V0Z" fill="currentColor"></path>
                  <path
                    d="M11.0008 14.827L14.3466 13.9791L15.7445 18.2874L11.0008 14.827ZM18.7008 9.25824H12.8112L11.0008 3.7124L9.19037 9.25824H3.30078L8.06745 12.6957L6.25703 18.2416L11.0237 14.8041L13.957 12.6957L18.7008 9.25824Z"
                    fill="white"
                  ></path>
                </svg>
              </div>
              <div class="ant-rate-star-second" bis_skin_checked="1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="currentColor"
                >
                  <path d="M22 0H0V22H22V0Z" fill="currentColor"></path>
                  <path
                    d="M11.0008 14.827L14.3466 13.9791L15.7445 18.2874L11.0008 14.827ZM18.7008 9.25824H12.8112L11.0008 3.7124L9.19037 9.25824H3.30078L8.06745 12.6957L6.25703 18.2416L11.0237 14.8041L13.957 12.6957L18.7008 9.25824Z"
                    fill="white"
                  ></path>
                </svg>
              </div>
            </div>
          </li>
          <li class="ant-rate-star ant-rate-star-zero">
            <div
              role="radio"
              aria-checked="false"
              aria-posinset="5"
              aria-setsize="5"
              tabindex="-1"
              bis_skin_checked="1"
            >
              <div class="ant-rate-star-first" bis_skin_checked="1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="currentColor"
                >
                  <path d="M22 0H0V22H22V0Z" fill="currentColor"></path>
                  <path
                    d="M11.0008 14.827L14.3466 13.9791L15.7445 18.2874L11.0008 14.827ZM18.7008 9.25824H12.8112L11.0008 3.7124L9.19037 9.25824H3.30078L8.06745 12.6957L6.25703 18.2416L11.0237 14.8041L13.957 12.6957L18.7008 9.25824Z"
                    fill="white"
                  ></path>
                </svg>
              </div>
              <div class="ant-rate-star-second" bis_skin_checked="1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="currentColor"
                >
                  <path d="M22 0H0V22H22V0Z" fill="currentColor"></path>
                  <path
                    d="M11.0008 14.827L14.3466 13.9791L15.7445 18.2874L11.0008 14.827ZM18.7008 9.25824H12.8112L11.0008 3.7124L9.19037 9.25824H3.30078L8.06745 12.6957L6.25703 18.2416L11.0237 14.8041L13.957 12.6957L18.7008 9.25824Z"
                    fill="white"
                  ></path>
                </svg>
              </div>
            </div>
          </li>
        </ul>
        <h6 className="title">{item.title}</h6>
        <p className="des">{item.des}</p>
      </div>
    );
  };
  return (
    <UserStoryContainer>
      <div className="base-container">
        <div className="content">
          <div className="header">
            <h3 className="title">Real Users, Real Stories</h3>
            <p className="des">
              See how SolarVPN is more than just a VPN service — it's a gateway
              to a freer, safer internet experience.
            </p>
          </div>
          <div className="feedback">
            <Swiper
              slidesPerView={3}
              spaceBetween={30}
              breakpoints={{
                1199: {
                  slidesPerView: 3,
                },
                768: {
                  slidesPerView: 2,
                },
                0: {
                  slidesPerView: 1,
                },
              }}
              className="mySwiper"
            >
              {feedbacks.length > 0 &&
                feedbacks.map((item, index) => {
                  return (
                    <SwiperSlide key={index}>
                      <FeedbackItem item={item} />
                    </SwiperSlide>
                  );
                })}
            </Swiper>
          </div>
        </div>
      </div>
    </UserStoryContainer>
  );
};
export default UserStory;
