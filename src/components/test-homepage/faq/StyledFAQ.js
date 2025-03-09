import styled from "styled-components";

export const FAQContainer = styled.div`
  padding-top: 120px;
  padding-bottom: 120px;
  .base-container {
    max-width: 1440px;
    padding: 0 15px;
    width: 100%;
    .content {
      justify-content: space-between;
      align-items: flex-start;
      flex-direction: row;
      gap: 2.5rem;
      display: flex;
      .header {
        width: 30%;
        padding-left: 1.25rem;
        padding-right: 1.25rem;
        gap: 0.75rem;
        align-items: center;
        flex-direction: column;
        display: flex;
        .title {
          color: #042130;
          font-size: 42px;
          line-height: 58.8px;
          text-align: left;
          font-weight: 700;
        }
        .des {
          font-size: 16px;
          line-height: 25.6px;
          text-align: left;
          font-weight: 400;
        }
      }
      .faq {
        gap: 1.5rem;
        width: 64%;
        flex-direction: column;
        display: flex;
        > div {
          padding-bottom: 30px;
          border-bottom: 2px solid rgba(0, 0, 0, 0.102);
          button {
            align-items: center;
            justify-content: space-between;
            display: flex;
            width: 100%;
            .title {
              font-size: 20px;
              line-height: 32px;
              font-weight: 600;
            }
            svg {
              width: 20px;
              height: 12px;
            }
          }
          .answer {
            font-style: normal;
            font-variant: normal;
            font-weight: 400;
            text-decoration: none;
            vertical-align: baseline;
            white-space: pre-wrap;
          }
        }
      }
    }
  }
  @media (max-width: 1199px) {
    padding: 5rem 0;
    .base-container {
      padding: 0 20px;
      .content {
        gap: 2.5rem;
        flex-direction: column;
        align-items: center;
        .header {
          width: 77%;
          padding-left: 1.25rem;
          padding-right: 1.25rem;
          gap: 0.75rem;
          align-items: center;
          flex-direction: column;
          display: flex;
          .des {
            text-align: center;
          }
        }
        .faq {
          gap: 30px;
          width: 100%;
        }
      }
    }
  }
  @media (max-width: 768px) {
    .base-container {
      .content {
        .header {
          width: 100%;
          .title {
            font-size: 32px;
            line-height: 44.8px;
            text-align: center;
          }
          .des {
            font-size: 14px;
            line-height: 19.6px;
          }
        }
        .faq {
          > div {
            .title {
              text-align: start;
            }
          }
        }
      }
    }
  }
`;
