import styled from "styled-components";

export const Main = styled.div`
  & > .wrapper {
    max-width: 1440px;
    width: 100%;
    margin: 0 auto;
    display: flex;
  }

  .mainWindow {
    width: 80%;
  }

  .mainWindow > .wrapper {
    width: 95%;
    margin: 32px auto 0;
    display: flex;
    flex-direction: column;

    @media (max-width: 1000px) {
      width: 98%;
      margin: 0 auto;
    }
  }

  .mainWindow > .wrapper > .charts {
    width: 100%;
    background-color: #fff;
    border-radius: 40px;
    padding: 32px;
    overflow: hidden;
    box-sizing: border-box;

    .top {
      width: 100%;
      display: flex;
      justify-content: space-between;
    }

    .arrowKeys {
      width: 40px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 25px;

      span {
        transition: transform 0.2s linear;
        cursor: pointer;
        color: #7c8db5b8;

        &.active {
          color: #2e3271;
        }

        :hover {
          transform: scale(1.5);
        }
      }
    }

    .title {
      font-size: 20px;
      font-weight: 700;
      color: #2e3271;
      margin-bottom: 20px;
    }

    .wrapper {
      width: 100%;
      position: relative;
      height: auto;
      display: flex;
      align-items: center;
      grid-auto-flow: column;
      overflow-x: scroll;
      -ms-overflow-style: none;
      scrollbar-width: none;

      & > img {
        margin: 0 auto;
      }

      ::-webkit-scrollbar {
        display: none;
      }
      & > div:first-child {
        margin: 0 20px 0 0;
      }
      & > div:last-child {
        margin: 0 0 0 20px;
      }
    }
  }
  .mainWindow > .wrapper > .block {
    display: flex;
    height: 500px;
    margin: 40px 0;

    .history {
      flex: 2;
      margin-right: 20px;
      border-radius: 40px;
      background-color: #fff;

      .main {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;

        img {
          justify-self: center;
          align-self: center;
        }
      }

      .top {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        box-shadow: 0px 25px 25px 2px rgba(0, 0, 0, 0.02);
        border-top-left-radius: 40px;
        border-top-right-radius: 40px;
        padding: 0 30px;
        box-sizing: border-box;

        h1 {
          font-size: 20px;
          font-weight: 700;
          color: #2e3271;
        }
        button {
          background-color: transparent;
          border: none;
          font-size: 15px;
          font-weight: 600;
          color: #7c8db5b8;
          cursor: pointer;
        }
      }
      @media (max-width: 1000px) {
        margin-right: 10px;
      }
    }
    .player {
      flex: 1;
      width: 100%;
      border-radius: 40px;
      background-color: #fff;
    }

    @media (max-width: 800px) {
      flex-direction: column;
      margin: 20px 0px 200px;

      .player {
        width: 100%;
        height: 180px;
        position: fixed;
        left: 0;
        bottom: 0;
        width: 100%;
        border-radius: 0;
      }
    }
  }

  @media (max-width: 800px) {
    .mainWindow {
      width: 100%;
    }
  }

  @media (max-width: 400px) {
    .mainWindow > .wrapper > .block > .history > .top > .title {
      font-size: 16px;
    }
  }
`;
