import styled from "styled-components";

export const RightBarContainer = styled.div`
  padding: 32px;
  width: 17%;
  max-width: 320px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  .title {
    color: var(--neon-tech-white, #fff);
    font-family: var(--font-family-Font-1, Inter);
    font-size: var(--font-size-14, 14px);
    font-style: normal;
    font-weight: var(--font-weight-600, 600);
    line-height: var(--line-height-17_5, 17.5px); /* 125% */
    display: flex;
    gap: 8px;
    align-items: center;
    padding: 8px 0;
  }
  .nav-list {
    display: flex;
    flex-direction: column;
    .list-item {
      padding: 6px 0;
      a {
        color: #94979e;
        font-family: var(--font-family-Font-1, Inter);
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 17.5px; /* 125% */
        letter-spacing: -0.35px;
      }
    }
  }
  @media (max-width: 1023px) {
    display: none;
  }
`;
