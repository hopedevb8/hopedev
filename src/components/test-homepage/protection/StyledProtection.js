import styled from "styled-components";

export const Container = styled.div`
  max-width: 1440px;
  padding: 0 15px;
  width: 100%;
  align-items: center;
  flex-direction: column;
  display: flex;
  margin-top: 120px;
  margin-bottom: 120px;
  @media (max-width: 1199px) {
    margin-top: 5rem;
    margin-bottom: 5rem;
    padding: 0 20px;
  }
  @media (max-width: 1199px) {
    margin-bottom: 60px;
  }
`;

export const ProtectionHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  span.title {
    font-size: 42px;
    line-height: 58.8px;
    font-weight: 700;
    text-align: center;
  }
  span.sub-title {
    font-size: 16px;
    line-height: 25.6px;
    color: #4b555f;
    max-width: 760px;
    width: 100%;
    text-align: center;
  }
  @media (max-width: 1199px) {
    span.title {
      font-size: 32px;
      line-height: 44.8px;
    }
    span.sub-title {
      font-size: 14px;
      line-height: 19.6px;
    }
  }
`;

export const AllPlatform = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  a {
    padding: 16px 40px;
    align-items: center;
    border: 2px solid #042130;
    border-radius: 40px;
    width: -moz-fit-content;
    width: fit-content;
    gap: 1rem;
    display: flex;
    margin-top: 60px;
    margin-bottom: 2.5rem;
    color: inherit;
    text-decoration: inherit;
    font-weight: 700;
    font-size: 16px;
    line-height: 25.6px;
    color: #042130;
    &:hover {
      background-color: #ffe300;
      border: 2px solid #ffe300;
    }
    svg {
      width: 21px;
      height: 21px;
    }
  }
  @media (min-width: 1199px) {
  }
`;

export const ProtectionContent = styled.div`
  margin-bottom: 60px;
  margin-top: 50px;
  top: 50px;
  position: sticky;
  width: 100%;
  > div {
    transform: none;
    width: 100%;
    > div {
      padding-top: 5rem;
      padding-bottom: 5rem;
      padding-left: 90px;
      padding-right: 90px;
      gap: 1.5rem;
      background-color: #fdffad;
      border-radius: 15px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      .info {
        max-width: 330px;
        display: flex;
        flex-direction: column;
        /* max-width: 490px; */
        width: 100%;
        gap: 20px;
        span.title {
          font-size: 32px;
          line-height: 44.8px;
          font-weight: 700;
        }
        span.sub-title {
          font-size: 18px;
          line-height: 28.8px;
          font-weight: 600;
        }
        .list {
          display: flex;

          flex-direction: column;
          gap: 10px;
          li {
            display: flex;
            gap: 3px;
            align-items: center;
            font-size: 16px;
            line-height: 25.6px;
            color: #042130;
            svg {
              width: 14px;
              height: 21px;
            }
          }
        }
        a.download {
          width: 179px;
          height: 58px;
          border-radius: 40px;
          background-color: #042130;
          gap: 10px;
          justify-content: center;
          align-items: center;
          display: flex;
          margin-top: 1rem;
          font-weight: 700;
          font-size: 16px;
          line-height: 25.6px;
          color: #fff;
          svg {
            width: 21px;
            height: 16px;
          }
        }
        a.why {
          font-size: 16px;
          line-height: 25.6px;
          text-decoration: underline;
          color: #042130;
          font-weight: 600;
          margin-top: 0.25rem;
        }
      }
      .image {
        width: 522px;
        height: 350px;
      }
    }
  }
  &.second {
    top: 150px;
    > div > div {
      background-color: #ffdef7;
    }
  }
  &.third {
    top: 250px;
    > div > div {
      background-color: #ebf1fe;
    }
  }
  &.fourth {
    top: 350px;
    > div > div {
      background-color: #ffe6de;
    }
  }
  @media (max-width: 1199px) {
    margin-bottom: 30px;
    > div {
      > div {
        padding-top: 2.5rem;
        padding-bottom: 2.5rem;
        padding-left: 30px;
        padding-right: 30px;
        gap: 1.5rem;
        .info {
          .title {
            font-size: 24px;
            line-height: 33.6px;
          }
          .sub-title {
            font-size: 16px;
            line-height: 25.6px;
          }
          a.why {
            font-size: 14px;
            line-height: 19.6px;
          }
        }
        .image {
          width: 366px;
          height: 236px;
        }
      }
    }
  }
  @media (max-width: 768px) {
    > div > div {
      padding: 36px 20px;
      display: flex;
      flex-direction: column-reverse;
      gap: 16px;
      .image {
        width: 254px;
        height: 180px;
        img {
          width: 254px;
          height: 180px;
        }
      }
      .info {
        max-width: 100%;
        width: 100%;
        gap: 12px;
        .title {
          font-size: 32px;
          line-height: 44.8px;
        }
        .sub-title {
          font-size: 16px;
          line-height: 25.6px;
        }
        a.why {
          font-size: 13px;
        }
      }
    }
  }
`;
