import styled from "styled-components";

export const HeaderContainer = styled.nav`
  padding-left: 40px;
  padding-right: 40px;
  height: 90px;
  position: relative;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  display: flex;
  position: relative;
  position: sticky;
  top: -1px;
  z-index: 100;
  transition: all 0.5s ease;
  box-shadow: 0 7px 25px 0 rgba(3, 31, 45, 0.1);
  background: #fff;
  .nav-list {
    display: flex;
    align-items: center;
    .list-item {
      padding-left: 14px;
      padding-right: 14px;
      align-items: center;
      display: flex;
      font-weight: 600;
      font-size: 18px;
      line-height: 28.8px;
      gap: 2px;
      a {
        font-weight: 600;
        font-size: 18px;
        line-height: 28.8px;
      }
      svg {
        width: 10px;
        height: 10px;
        transition: transform 0.5s ease-out;
      }
      &:hover {
        .dropdown-content {
          @media (min-width: 1200px) {
            display: flex;
            opacity: 1;
            visibility: visible;
          }
        }
        svg {
          transform: rotate(180deg);
          transition: transform 0.5s ease-out;
        }
      }
      &.help {
        position: relative;
      }
      .dropdown-content {
        display: none;
        position: absolute;
        left: 0;
        max-width: 1410px;
        width: 98%;
        top: 100%;
        left: 1%;
        height: -moz-fit-content;
        height: fit-content;
        z-index: 1000;
        opacity: 0;
        padding: 30px;
        pointer-events: none;
        transition: all 0.5s ease;
        border-radius: 4px;
        box-shadow: 0 4px 25px 0 rgba(3, 31, 45, 0.078);
        background-color: #fff;
        justify-content: center;
        opacity: 1;
        pointer-events: auto;
        transition: all 0.5s ease;
        gap: 60px;
        transition: opacity 0.5s ease-out, transform 0.5s ease-out;
        visibility: hidden;
        display: block;
        opacity: 0;
        transform: translateY(-10px);
        &.help {
          width: fit-content;
          transform: none;
          left: 0;
          top: 150%;
          min-width: 300px;
          a {
            white-space: nowrap;
            font-size: 16px;
            line-height: 25.6px;
            font-weight: 400;
          }
        }

        .list-col {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
          &__menu {
            display: flex;
            flex-direction: column;
            gap: 1.25rem;
            &--item {
              padding-left: 0.75rem;
              padding-right: 0.75rem;

              a {
                font-size: 16px;
                line-height: 25.6px;
                font-weight: 400;
              }
            }
          }
          .title {
            font-weight: 500;
            font-size: 14px;
            line-height: 19.6px;
            padding-bottom: 0.75rem;
          }
        }
      }
    }
    &:hover .list-item:not(:hover) {
      color: #62686d;
    }
  }
  .login-desk {
    display: flex;
    gap: 2rem;
    align-items: center;
    a {
      font-weight: 600;
      font-size: 16px;
      line-height: 25.6px;
      display: flex;
      &.sign-in {
        &:hover {
          color: #62686d;
        }
      }
      &.sign-up {
        border: 2px solid #042130;
        border-radius: 100px;
        font-weight: 600;
        padding-left: 1.5rem;
        padding-right: 1.5rem;
        align-items: center;
        height: 46px;
        &:hover {
          border: 2px solid #ffe300;
          background-color: #ffe300;
        }
      }
    }
  }
  .login-mobile {
    display: none;
  }
  .close {
    display: none;
  }
  .menu-icon {
    display: none;
  }

  .nav-elements {
  }

  .nav-elements ul {
    display: flex;
    justify-content: space-between;
    list-style-type: none;
  }

  @media (max-width: 1199px) {
    .nav-elements ul li {
      margin-right: 30px;
    }
    .login-mobile {
      display: block;
    }
    .login-desk {
      display: none;
    }
    .close {
      display: block;
      position: absolute;
      top: 20px;
      right: 20px;
      svg {
        width: 34px;
        height: 34px;
      }
    }

    .menu-icon {
      display: block;
      cursor: pointer;
    }

    .nav-elements {
      position: absolute;
      right: 0;
      top: 0;
      background-color: #fff;
      width: 0px;
      height: 100vh;
      transition: all 0.3s ease-in;
      overflow: hidden;
      box-shadow: 0 7px 25px 0 rgba(3, 31, 45, 0.1);
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    .nav-elements.active {
      width: 100%;
      max-width: 400px;
      padding: 30px;
      overflow: auto;
    }

    .nav-elements ul {
      display: flex;
      flex-direction: column;
    }

    .nav-elements ul li {
      margin-right: unset;
      margin-top: 22px;
      width: 100%;
    }
    .nav-list {
      li.list-item {
        display: flex;
        flex-direction: column;
        padding: 0;
        &:hover {
          svg {
            transform: unset;
          }
        }
        > div {
          width: 100%;
        }
        > a {
          width: 100%;
        }
        .dropdown-content a {
          font-size: 16px;
          line-height: 25.6px;
          font-weight: 400;
        }
        &:hover {
          .dropdown-content {
            position: unset;
            opacity: unset;
            visibility: unset;
          }
        }
        .dropdown-content {
          position: unset;
        }
        .dropdown-content {
          display: none;
          top: 100%;
          left: 0;
          background: white;
          padding: 10px;
          box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
          min-width: 200px;
        }
        .dropdown-content.show {
          display: block;
          opacity: unset;
          visibility: unset;
          transform: unset;
          box-shadow: unset;
          .list-col {
            .title {
              display: none;
            }
            &__menu {
              padding: 0;
              &--item {
                margin: 0;
                padding: 0;
              }
            }
          }
        }

        .list-col {
          margin-bottom: 10px;
        }
      }
    }
    .login-mobile {
      display: flex;
      border-top: 2px solid #e5e8eb;
      padding-top: 1.5rem;
      gap: 1.25rem;
      flex-direction: column;
      width: 100%;
      display: flex;
      .sign-in {
        border: 2px solid #042130;
        color: #042130;
        font-weight: 600;
        font-size: 14px;
        line-height: 19.6px;
        border-radius: 9999px;
        justify-content: center;
        align-items: center;
        height: 56px;
        display: flex;
      }
      .sign-up {
        padding-left: 1.5rem;
        padding-right: 1.5rem;
        background-color: #ebeced;
        color: #042130;
        font-weight: 600;
        font-size: 14px;
        line-height: 19.6px;

        border-radius: 9999px;
        justify-content: center;
        align-items: center;
        height: 56px;
        display: flex;
      }
    }
  }
`;
