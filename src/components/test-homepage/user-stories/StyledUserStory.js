import styled from "styled-components";

export const UserStoryContainer = styled.div`
  padding-top: 120px;
  padding-bottom: 120px;

  background-color: #f3f2f9;

  justify-content: center;
  width: 100%;
  display: flex;
  position: relative;
  .base-container {
    max-width: 1440px;
    padding: 0 15px;
    width: 100%;
    .content {
      display: flex;
      flex-direction: column;
      justify-content: center;
      .header {
        .title {
          font-size: 42px;
          line-height: 58.8px;
          font-weight: 700;
          color: #042130;
          text-align: center;
          margin-bottom: 1.25rem;
        }
        .des {
          color: #4b555f;
          font-size: 16px;
          line-height: 25.6px;
          text-align: center;
        }
      }
      .feedback {
        height: 100%;
        display: flex;
        justify-content: center;
        margin-top: 50px;
        .swiper-wrapper {
          .swiper-slide {
            flex-direction: column;
            background-color: #fff;
            border-radius: 15px;
            height: 100%;
            display: flex;
            justify-content: center;
            padding-top: 40px;
            padding-bottom: 40px;
            padding-left: 30px;
            padding-right: 30px;
            .ant-rate {
              box-sizing: border-box;
              margin: 0;
              padding: 0;
              color: #fadb14;
              font-size: 20px;
              line-height: 1;
              list-style: none;
              font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
                "Helvetica Neue", Arial, "Noto Sans", sans-serif,
                "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol",
                "Noto Color Emoji";
              display: inline-block;
              outline: none;
              li {
                margin-inline-end: 8px;
                position: relative;
                display: inline-block;
                color: inherit;
                > div {
                  transition: all 0.2s, outline 0s;
                }
              }
              .ant-rate-star-first {
                position: absolute;
                top: 0;
                inset-inline-start: 0;
                width: 50%;
                height: 100%;
                overflow: hidden;
                opacity: 0;
                color: rgba(0, 0, 0, 0.06);
                transition: all 0.2s;
                user-select: none;
              }
            }
            .title {
              color: #042130;
              font-weight: 700;
              font-size: 20px;
              line-height: 32px;
              margin-top: 1.5rem;
            }
            .des {
              color: #4b555f;
              font-size: 16px;
              line-height: 25.6px;
              margin-top: 1rem;
            }
          }
        }
      }
    }
  }

  .custom-prev {
  }

  .custom-next {
  }
  .swiper-button-next:after,
  .swiper-button-prev:after {
    display: none;
  }
  .swiper-button-next,
  .swiper-button-prev {
    position: unset;
  }
  .swiper-button-prev svg {
    transform: rotate(180deg);
  }

  .custom-prev:hover,
  .custom-next:hover {
  }
  .actions {
    display: none;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  @media (max-width: 1199px) {
    padding-top: 60px;
    padding-bottom: 60px;
    .base-container {
      padding: 0 20px;
      .header {
        .title {
          font-size: 32px;
          line-height: 44.8px;
        }
        .des {
          max-width: 560px;
          margin: 0 auto;
        }
      }
    }
    .actions {
      display: flex;
      align-items: center;
      gap: 10px;
    }
  }
  @media (max-width: 768px) {
    .base-container {
      .content {
        .header {
          .title {
            font-size: 32px;
            line-height: 44.8px;
          }
        }
      }
    }
  }
`;
