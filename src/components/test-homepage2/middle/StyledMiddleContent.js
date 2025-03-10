import styled from "styled-components";

export const MiddleContentContainer = styled.div`
  padding: 32px;
  width: 67%;
  .container {
    width: 100%;
    max-width: 1080px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 68px;
    .search-container {
      display: flex;
      flex-direction: column;
      gap: 16px;
      .search-component {
        display: flex;
        padding: 16px;
        align-items: center;
        gap: 10px;
        align-self: stretch;
        border-radius: 8px;
        border: 1px solid var(--Zinc-800, #27272a);
        background: var(--Zinc-900, #18181b);
        input {
          width: 100%;
          background: transparent;
          &::placeholder {
            color: var(--Zinc-500, #71717a);
            /* Body/Base */
            font-family: var(--Font-Family-Body, Inter);
            font-size: var(--Font-Size-base, 15px);
            font-style: normal;
            font-weight: 400;
          }
          &:focus-visible {
            outline: none;
          }
        }
      }
      .search-suggest {
        display: flex;
        gap: 16px;
        overflow-x: auto;
        &::-webkit-scrollbar {
          display: none;
        }
        -ms-overflow-style: none;
        scrollbar-width: none;
        &__item {
          display: flex;
          padding: 8px 16px;
          justify-content: center;
          align-items: center;
          align-content: center;
          gap: 10px;
          flex-wrap: wrap;
          border-radius: 8px;
          background: var(--Surface-Weak, #18181b);
          color: var(--Zinc-50, #fafafa);
          text-align: center;
          font-family: var(--Font-Family-Title, Inter);
          font-size: var(--Font-Size-base, 15px);
          font-style: normal;
          font-weight: 500;
          line-height: 24px; /* 160% */
          white-space: nowrap;
        }
      }
    }
    .find-container {
      padding: 16px 0;
      h5.title {
        color: var(--neon-tech-white, #fff);
        font-family: "Inter Display";
        font-size: 32px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        margin-bottom: 8px;
      }
      p.des {
        color: var(--Zinc-400, #a1a1aa);
        /* Body/Base */
        font-family: var(--Font-Family-Body, Inter);
        font-size: var(--Font-Size-base, 15px);
        font-style: normal;
        font-weight: 400;
        line-height: var(--Font-Line-Height-sm, 24px);
        margin-bottom: 32px;
      }
      .content {
        display: flex;
        gap: 32px;
        &-item {
          flex: 1;
          padding: 24px;
          border-radius: 16px;
          border: 1px solid var(--Zinc-800, #27272a);
          background: var(--Zinc-950, #09090b);
          display: flex;
          flex-direction: column;
          gap: 16px;

          &__icon {
            width: fit-content;
            display: flex;
            padding: 12px;
            align-items: flex-start;
            gap: 10px;
            border-radius: 12px;
          }
          &__title {
            color: var(--Base-50, #fafafa);

            /* Title/Large */
            font-family: var(--Font-Family-Title, Inter);
            font-size: var(--Font-Size-xl, 24px);
            font-style: normal;
            font-weight: 600;
            line-height: var(--Font-Line-Height-md, 32px); /* 133.333% */
          }
          &__des {
            color: var(--Zinc-500, #71717a);

            /* Body/Base */
            font-family: var(--Font-Family-Body, Inter);
            font-size: var(--Font-Size-base, 15px);
            font-style: normal;
            font-weight: 400;
            line-height: var(--Font-Line-Height-sm, 24px); /* 160% */
            height: 100%;
          }
          &__link {
            display: flex;
            gap: 10px;
            align-items: center;
            color: var(--Base-50, #fafafa);
            font-family: "Space Mono";
            font-size: var(--Font-Size-xs, 12px);
            font-style: normal;
            font-weight: 400;
            line-height: var(--Font-Line-Height-xs, 16px); /* 133.333% */
          }
          &.faq {
            border: 1px solid #0fcbff;
            /* background: radial-gradient(
              61.19% 164.71% at -45.63% -42.39%,
              #fff 0%,
              #00d0ff 17%,
              #0034a6 53%,
              #001240 80%,
              #000 100%
            ); */
            background: radial-gradient(
              circle at top left,
              #00d0ff 1%,
              rgba(29, 78, 216, 0.8) 20%,
              rgba(0, 0, 0, 1) 60%
            );
            .content-item__icon {
              background: #007ff2;
              box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
            }
          }
          &.proxy {
            .content-item__icon {
              background: #ff8c38;
            }
          }
          &.api {
            .content-item__icon {
              background: var(--Addition-colors-Green, #1ec572);
            }
          }
        }
      }
    }
    .documentation-container {
      display: flex;
      flex-direction: column;
      gap: 16px;
      h5.title {
        color: var(--neon-tech-white, #fff);
        font-family: "Inter Display";
        font-size: 36px;
        font-style: normal;
        font-weight: 500;
        line-height: 48px; /* 133.333% */
      }
      p.des {
        color: var(--Zinc-400, #a1a1aa);
        font-family: var(--Font-Family-Body, Inter);
        font-size: var(--Font-Size-base, 15px);
        font-style: normal;
        font-weight: 400;
        line-height: var(--Font-Line-Height-sm, 24px); /* 160% */
        a {
          color: var(--primary-600-primary, #267eec);

          font-family: var(--Font-Family-Body, Inter);
          font-size: var(--Font-Size-base, 15px);
          font-style: normal;
          font-weight: 400;
          line-height: var(--Font-Line-Height-sm, 24px);
        }
      }
      p.sub-des {
        color: var(--Zinc-400, #a1a1aa);

        /* Body/Base */
        font-family: var(--Font-Family-Body, Inter);
        font-size: var(--Font-Size-base, 15px);
        font-style: normal;
        font-weight: 400;
        line-height: var(--Font-Line-Height-sm, 24px); /* 160% */
      }
    }
    .explore-container {
      display: flex;
      flex-direction: column;
      gap: 32px;
      h5.title {
        color: var(--neon-tech-white, #fff);
        font-family: "Inter Display";
        font-size: 32px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
      }
      .explore-list {
        display: grid;
        grid-template-columns: repeat(2, 1fr); /* 2 cột */
        gap: 16px;
        &__item {
          display: flex;
          padding: 24px;
          gap: 10px;
          align-items: flex-start;
          border-radius: 16px;
          border: 1px solid var(--Zinc-800, #27272a);
          background: linear-gradient(
              0deg,
              rgba(0, 0, 0, 0.2) 0%,
              rgba(0, 0, 0, 0.2) 100%
            ),
            var(--Zinc-950, #09090b);
          &--icon {
            padding: 3px 0;
          }
          &--info {
            display: flex;
            flex-direction: column;
            gap: 4px;
            .title {
              color: var(--Base-50, #fafafa);

              /* Title/Base */
              font-family: var(--Font-Family-Title, Inter);
              font-size: var(--Font-Size-base, 15px);
              font-style: normal;
              font-weight: 600;
              line-height: 24px; /* 160% */
            }
            .des {
              color: var(--Base-500, #71717a);

              /* Body/Small */
              font-family: var(--Font-Family-Body, Inter);
              font-size: var(--Font-Size-sm, 14px);
              font-style: normal;
              font-weight: 400;
              line-height: 20px; /* 142.857% */
            }
          }
        }
      }
    }
  }

  @media (max-width: 1023px) {
    width: 100%;
  }
  @media (max-width: 992px) {
    padding: 16px;
    .container {
      gap: 32px;
      .find-container {
        h5.title {
          font-size: 24px;
        }
        p.des {
          font-size: 14px;
          margin-bottom: 16px;
        }
        .content {
          gap: 16px;
          &-item {
            gap: 8px;
            &__icon {
              svg {
                width: 24px;
                height: 24px;
              }
            }
            &__title {
              font-size: 18px;
            }
            &__des {
              font-size: 13px;
            }
          }
        }
      }
      .documentation-container {
        gap: 8px;
        h5.title {
          font-size: 24px;
          line-height: normal;
        }
        p.des {
          font-size: 14px;
          line-height: normal;
          a {
            font-size: 14px;
            line-height: 1.6;
          }
        }
        p.sub-des {
          font-size: 14px;
          line-height: 1.6;
        }
      }
      .explore-container {
        h5.title {
          font-size: 24px;
          line-height: normal;
        }
        .explore-list {
          &__item {
            padding: 16px;
          }
        }
      }
    }
  }
  @media (max-width: 576px) {
    .container {
      .find-container {
        .content {
          flex-direction: column;
        }
      }
      .explore-container {
        .explore-list {
          grid-template-columns: repeat(1, 1fr);
          gap: 8px;
        }
      }
    }
  }
`;
