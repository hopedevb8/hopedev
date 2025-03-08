import styled from "styled-components";

export const PlatformContainer = styled.div`
  margin-top: -50px;
  .base-container {
    max-width: 1440px;
    padding: 0 15px;
    width: 100%;
    > div {
      gap: 2.5rem;
      border-radius: 0 0 30px 30px;
      background-color: #fff;
      box-shadow: 0 12px 15px 0 rgba(0, 0, 0, 0.07);
      padding-top: 10px;
      padding-bottom: 40px;
      align-items: center;
      flex-direction: column;
      display: flex;
      span.title {
        font-size: 16px;
        line-height: 25.6px;
        color: #4b555f;
      }
      .list-platform {
        padding-left: 70px;
        padding-right: 70px;
        justify-content: space-between;
        display: flex;
        width: 100%;
        a {
          min-width: 110px;
          color: #4b555f;
          gap: 1rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          svg {
            max-width: 34px;
            height: auto;
          }
        }
      }
    }
  }
  @media (max-width: 1199px) {
    .base-container {
      > div {
        gap: 1.5rem;
        .title {
          font-size: 14px;
          line-height: 19.6px;
        }
        .list-platform {
          padding: 0;
          flex-wrap: wrap;
          justify-content: center;
          gap: 20px 10px;
        }
      }
    }
  }
`;
