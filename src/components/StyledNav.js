import styled from 'styled-components';

export const Toggle = styled.div`
  &#toggle {
    width: 50px;
    height: 30px;
    border-radius: 100px;
    position: relative;
    cursor: pointer;
    margin-left: 24px;
    background: #222;
    @media (min-width: 1200px) {
      margin-left: 16px;
    }
    #circle {
      position: absolute;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      left: 10%;
      top: 50%;
      transform: translate(0, -50%);
      transition: all 450ms ease;
      &:before {
        position: absolute;
        content: '';
        height: 20px;
        width: 20px;
        border-radius: 50%;
        left: -2%;
        bottom: -2%;
        box-shadow: inset 8px -4px 0px 0px #fff000;
        background: var(--background);
        transition: 0.5s;
      }
    }
  }
  &.light#toggle {
    background: #E42575;
    #circle {
      left: 50%;
      transform: translate(0, -50%);
      &:before {
        box-shadow: inset 15px -4px 0px 15px #fff000;
      }
    }
  }
`;  