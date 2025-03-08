import styled from "styled-components";

export const FooterContainer = styled.div`
  background-color: #031b27;
  color: #fff;
  .base-container {
    max-width: 1440px;
    padding: 0 15px;
    width: 100%;
    .content {
      padding-left: 15px;
      padding-right: 15px;
      > div {
        padding-top: 120px;
        padding-bottom: 120px;
        display: flex;
        justify-content: space-between;
        .parent-col {
          display: flex;
          flex-direction: column;
          gap: 50px;
        }
        .col {
          gap: 1.5rem;
          flex-direction: column;
          display: flex;
          p.title {
            color: #7a7c8d;
            font-weight: 700;
            font-size: 14px;
            line-height: 19.6px;
          }
          ul {
            display: flex;
            flex-direction: column;
            gap: 1rem;
            li {
              font-size: 16px;
              line-height: 25.6px;
              a {
                color: inherit;
                text-decoration: inherit;
              }
            }
          }
        }
        .get-app {
          display: flex;
          flex-direction: column;
          gap: 3rem;
          align-items: center;
          max-width: 370px;
          .get {
            padding-top: 50px;
            padding-bottom: 50px;
            padding-left: 28px;
            padding-right: 28px;
            border: 1px solid #484b66;
            border-radius: 30px;
            display: flex;
            flex-direction: column;
            .title {
              font-size: 16px;
              line-height: 32px;
              font-weight: 700;
              text-align: center;
            }
            .des {
              font-size: 16px;
              line-height: 25.6px;
              color: #9a9cac;
              text-align: center;
              margin-top: 1.25rem;
            }
            .btn-get {
              font-size: 14px;
              padding-left: 28px;
              padding-right: 28px;
              background-color: #ffe300;
              color: #042130;
              border-radius: 40px;
              font-weight: 700;
              padding-top: 15px;
              padding-bottom: 15px;
              margin-top: 30px;
            }
          }
          .social {
            display: flex;
            gap: 20px;
            a {
              width: 34px;
              height: 34px;
              background-color: #fff;
              border-radius: 50px;
              display: flex;
              align-items: center;
              justify-content: center;
              svg {
                width: 20px;
                height: 20px;
              }
            }
          }
        }
      }
    }
    .copy-right {
      padding-top: 40px;
      padding-bottom: 40px;
      border-top: 1px solid #2a2f31;
      display: flex;
      justify-content: flex-start;
      .copy-text {
        color: #7a7c8d;
        font-size: 13px;
      }
    }
  }
  @media (max-width: 1024px) {
    .base-container {
      .content {
        > div {
          flex-direction: column;
          gap: 40px;
        }
      }
    }
  }
`;
