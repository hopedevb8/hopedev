import styled from "styled-components";

export const HomeBannerContainer = styled.div`
  padding-top: 140px;
  text-align: center;
  align-items: center;
  flex-direction: column;
  display: flex;
  gap: 10rem;
  @media (max-width: 1199px) {
    overflow: hidden;
  }
  @media (max-width: 768px) {
    padding-top: 30px;
  }
`;
export const HomeBannerContent = styled.div`
  perspective: 1000px;
  .title {
    font-size: 78px;
    line-height: 101.4px;
    margin-bottom: 0;
    font-weight: 700;
  }
  .sub-title {
    font-size: 78px;
    line-height: 101.4px;
    flex-direction: row;
    margin-bottom: 1.75rem;
    font-weight: 700;
    gap: 0.25rem;
    align-items: center;
    display: flex;
  }
  .description {
    font-size: 20px;
    line-height: 32px;
    margin: 0 auto;
    margin-bottom: 3rem;
    max-width: 800px;
    font-weight: 400;
  }
  a.get {
    height: 70px;
    background-color: #042130;
    color: #fff;
    padding-left: 2.25rem;
    padding-right: 2.25rem;
    border-radius: 9999px;
    gap: 1rem;
    align-items: center;
    display: flex;
    width: fit-content;
    margin: 0 auto;
    margin-bottom: 1.5rem;

    svg {
      width: 30px;
      height: 30px;
    }
    div.space {
      height: 22px;
      width: 1px;
      background-color: hsla(0, 0%, 100%, 0.2);
    }
    .text-get {
      color: #fff;
      font-weight: 700;
      font-size: 16px;
      line-height: 25.6px;
      gap: 3px;
      display: flex;
      > span {
        color: #ffe300;
      }
    }
    &:hover {
      background-color: #ffe300;
      div.space {
        background-color: #042130;
      }
      .text-get {
        color: #042130;
        span {
          color: #042130;
        }
      }
      svg {
        fill: #042130 !important;
      }
    }
  }
  a.why {
    cursor: pointer;
    text-decoration: underline;
    text-underline-offset: 4px;
    font-weight: 600;
    font-size: 16px;
    line-height: 25.6px;
  }
  @media (max-width: 1199px) {
    .title {
      font-size: 48px;
      line-height: 44.8px;
      margin-bottom: 0.5rem;
    }
    .sub-title {
      font-size: 48px;
      line-height: 44.8px;
      flex-direction: column;
      margin-bottom: 1.5rem;
      .text-container {
        width: 100%;
        height: 72px;
        align-items: center;
        text-align: center;
      }
    }
  }
  @media (max-width: 768px) {
    .title {
      font-size: 32px;
      line-height: 44.8px;
    }
    .sub-title {
      font-size: 32px;
      line-height: 44.8px;
      .text-container {
        width: 100%;
        height: 45px;
        align-items: center;
      }
    }
    .description {
      font-size: 16px;
      line-height: 25.6px;
      margin-bottom: 42px;
    }
    .get {
      svg {
        display: none;
      }
      .space {
        display: none;
      }
    }
  }
`;

export const HomeBannerImage = styled.div`
  perspective: 1000px;
  > div {
    width: 1240px;
    height: 730px;
    justify-content: center;
    align-items: center;
    display: flex;
    transform-style: preserve-3d;
    transform-origin: center bottom;
    @media (max-width: 1199px) {
      width: 986px;
      height: 580px;
    }
  }
`;
