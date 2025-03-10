import styled from "styled-components";

export const LeftBarContainer = styled.div`
  padding: 32px;
  width: 17%;
  max-width: 320px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  .nav-mobile,
  button.close {
    display: none;
  }
  .nav-elements {
    display: flex;
    flex-direction: column;
    gap: 16px;
    position: static;
    width: auto;
    height: auto;
    > p.title {
      color: var(--neon-tech-white, #fff);
      /* neon.tech/Semantic/Link */
      font-family: var(--font-family-Font-1, Inter);
      font-size: var(--font-size-16, 16px);
      font-style: normal;
      font-weight: var(--font-weight-500, 500);
      line-height: var(--line-height-20, 20px); /* 125% */
      letter-spacing: var(--letter-spacing--0_32, -0.32px);
    }
    .nav-list {
      display: flex;
      flex-direction: column;
      gap: 26px;
      .list-item {
        display: flex;
        flex-direction: column;
        gap: 12px;
        &:first-child {
          .dropdown-content {
            .list-col:first-child {
              ul {
                list-style-type: decimal;
                padding-left: 20px;
              }
            }
          }
        }
        div.title {
          width: 100%;
          justify-content: space-between;
          span {
            color: var(--neon-tech-white, #fff);
            /* neon.tech/Semantic/Link */
            font-family: var(--font-family-Font-1, Inter);
            font-size: var(--font-size-16, 16px);
            font-style: normal;
            font-weight: var(--font-weight-500, 500);
            line-height: var(--line-height-20, 20px); /* 125% */
            letter-spacing: var(--letter-spacing--0_32, -0.32px);
          }
        }
        .dropdown-content {
          .list-col {
            padding: 12px 0;
            border-bottom: var(--stroke-weight-1, 1px) solid
              var(--neon-tech-woodsmoke, #18191b);
            &:first-child {
              padding-top: 0;
            }
            .sub-title {
              color: var(--neon-tech-raven, #797d86);
              /* neon.tech/Semantic/Item upper */
              font-family: var(--font-family-Font-1, Inter);
              font-size: var(--font-size-10, 10px);
              font-style: normal;
              font-weight: var(--font-weight-500, 500);
              line-height: var(--line-height-12_5, 12.5px); /* 125% */
              text-transform: uppercase;
            }
            &__menu {
              display: flex;
              flex-direction: column;
              &--item {
                padding: 6px 0;
                a {
                  color: var(--Zinc-400, #a1a1aa);
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
    }
  }
  @media (max-width: 1023px) {
    position: absolute;
    width: fit-content;
    top: 25px;
    right: 25px;
    padding: 0;
    .nav-elements {
      position: fixed;
      top: 0;
      left: -100%;
      width: 280px;
      height: 100vh;
      background: #020202;
      transition: left 0.3s ease-in-out;
      z-index: 1000;
      padding: 20px;
      button.close {
        position: absolute;
        top: 18px;
        right: 16px;
        display: flex;
      }
    }

    .nav-elements.active {
      left: 0;
    }

    .nav-mobile {
      display: block;
      background: none;
      border: none;
      z-index: 1100;
    }
  }
`;
