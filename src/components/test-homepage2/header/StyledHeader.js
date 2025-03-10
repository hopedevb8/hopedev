import styled from "styled-components";

export const HeaderContainer = styled.div`
  padding: 16px 32px;
  background-color: #020202;
  border-bottom: 1px solid #18181b;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .page-title {
    color: var(--neon-tech-manatee, #94979e);

    /* neon.tech/Inter/Medium */
    font-family: var(--font-family-Font-1, Inter);
    font-size: var(--font-size-15, 15px);
    font-style: normal;
    font-weight: var(--font-weight-500, 500);
    line-height: var(--font-size-15, 15px); /* 100% */
    letter-spacing: var(--letter-spacing--0_3, -0.3px);
    padding-left: 13px;
    border-left: 1px solid #303236;
  }
  .group-actions {
    display: flex;
    gap: 10px;
    a {
      color: var(--Zinc-50, #fafafa);
      font-family: var(--Font-Family-Body, Inter);
      font-size: var(--Font-Size-base, 15px);
      font-style: normal;
      font-weight: 400;
      line-height: var(--Font-Line-Height-sm, 24px); /* 160% */
      display: flex;
      align-items: center;
      justify-content: center;
      &.login {
        height: 36px;
        padding: 6px 23.5px;
      }
      &.sign-up {
        border-radius: 8px;
        border: 1px solid rgba(255, 255, 255, 0.07);
        background: rgba(255, 255, 255, 0.02);
        box-shadow: 0px 1px 3px 0px rgba(199, 220, 255, 0.35) inset,
          0px 0px 20px 0px rgba(198, 204, 255, 0.2) inset,
          0px 1px 22px 0px rgba(255, 255, 255, 0.1),
          0px 4px 4px 0px rgba(0, 0, 0, 0.05),
          0px 10px 10px 0px rgba(0, 0, 0, 0.1);
        backdrop-filter: blur(10px);
        padding: 6px 16px;
      }
    }
  }
  @media (max-width: 1023px) {
    padding-right: 70px;
  }
`;
