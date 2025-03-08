import styled from "styled-components";

export const StartedContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 60px;
  max-width: 1440px;
  padding: 0 15px;
  width: 100%;
  margin-top: 120px;
  .header {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.25rem;
    .title {
      font-size: 42px;
      line-height: 58.8px;
      width: 682px;
      font-weight: 700;
      text-align: center;
    }
    .sub-title {
      color: #4b555f;
      max-width: 682px;
      font-size: 16px;
      line-height: 25.6px;
      text-align: center;
    }
  }
  .content {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 60px;
    &-item {
      gap: 2rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      img {
        height: 160px;
      }
      .content {
        display: flex;
        flex-direction: column;
        gap: 10px;
        max-width: 360px;
        align-items: center;
        .step {
          text-transform: uppercase;
          font-weight: 700;
          font-size: 14px;
          line-height: 19.6px;
        }
        .title {
          font-size: 20px;
          line-height: 32px;
          font-weight: 700;
        }
        .des {
          font-size: 16px;
          line-height: 25.6px;
          color: #4b555f;
          max-width: 360px;
          width: 100%;
          text-align: center;
        }
      }
    }
  }
  @media (max-width: 1199px) {
    gap: 2.5rem;
    padding: 0 20px;
    .header {
      .title {
        font-size: 32px;
        line-height: 44.8px;
        width: 682px;
      }
      .des {
        font-size: 14px;
        line-height: 19.6px;
        width: 682px;
      }
    }
    .content {
      gap: 30px;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      &-item {
        gap: 1.5rem;
        img {
          width: 125px;
          height: 100px;
        }
        .content {
          gap: 0.5rem;
          max-width: 240px;
          .title {
            font-size: 18px;
            line-height: 28.8px;
          }
          .des {
            font-size: 14px;
            line-height: 19.6px;
          }
        }
      }
    }
  }
  @media (max-width: 768px) {
    margin-top: 60px;
    .header {
      .title {
        width: 350px;
      }
      .sub-title {
        width: 350px;
        font-size: 14px;
        line-height: 19.6px;
      }
    }
    .content {
      gap: 2.5rem;
      grid-template-columns: repeat(1, minmax(0, 1fr));
      &-item {
        gap: 1.5rem;
      }
    }
  }
`;
