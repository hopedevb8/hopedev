import styled from "styled-components";

export const WhyContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 60px;
  max-width: 1440px;
  padding: 0 15px;
  width: 100%;
  margin-top: 120px;
  align-items: center;
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
    gap: 2.5rem;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    &-item {
      padding: 30px;
      gap: 200px;
      flex-direction: row;
      align-items: center;
      display: flex;
      .image {
        justify-content: flex-end;
        display: flex;
        width: 100%;
        img {
          width: 480px;
          height: 460px;
        }
      }
      .content {
        display: flex;
        flex-direction: column;
        max-width: 480px;
        gap: 10px;
        .title {
          font-size: 32px;
          line-height: 44.8px;
          font-weight: 700;
        }
        .des {
          color: #4b555f;
          font-size: 16px;
          line-height: 25.6px;
          font-weight: 400;
        }
      }
    }
    .timeline {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      height: 70%;
      width: 40px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      .line {
        width: 4px;
        height: 40%;
        position: relative;
        background-color: #e9ebf3;
        > div {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: #ffe300;
          transform-origin: top;
        }
      }
      .category-icon {
        display: flex;
        position: relative;
      }
      .category-icon__active {
        cursor: pointer;
        position: absolute;
        opacity: 0;
        transition: opacity 0.5s ease;
      }
      .category-icon__inactive {
        cursor: pointer;
        opacity: 1;
        transition: opacity 0.5s ease;
      }
    }
  }
  @media (max-width: 1199px) {
    .header {
      gap: 0.75rem;
      max-width: 560px;
      .title {
        font-size: 32px;
        line-height: 44.8px;
      }
      .des {
        font-size: 14px;
        line-height: 19.6px;
        max-width: 560px;
      }
    }
    .content {
      gap: 2.5rem;
      &-item {
        padding-top: 0;
        padding-bottom: 0;
        padding-left: 1.25rem;
        padding-right: 1.25rem;
        gap: 200px;
        flex-direction: row;
        .image {
          justify-content: flex-end;
          flex: 1;
          img {
            width: 320px;
            height: 307px;
          }
        }
        .content {
          gap: 0.75rem;
          max-width: 480px;
          flex: 1;

          .title {
            font-size: 24px;
            line-height: 33.6px;
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
    .header {
      max-width: 350px;
      .title {
        width: unset;
      }
      .sub-title {
        font-size: 14px;
        line-height: 19.6px;
      }
    }
    .content {
      gap: 60px;
      &-item {
        padding-left: 60px;
        padding-right: 60px;
        gap: 1rem;
        flex-direction: column-reverse;
        &:nth-child(3) {
          flex-direction: column;
        }
        .content {
          .title {
            font-size: 24px;
            line-height: 33.6px;
          }
          .des {
            font-size: 14px;
            line-height: 19.6px;
          }
        }
        .image {
          img {
            width: 230px;
            height: 220px;
          }
        }
      }
      .timeline {
        position: absolute;
        top: 0;
        left: 0;
        transform: translate(0);
        height: 75%;
      }
    }
  }
`;
