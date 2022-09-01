import styled from "styled-components";

export const Main = styled.div`
  & > .wrapper {
    max-width: 1440px;
    width: 100vw;
    margin: 0 auto;
    display: flex;
  }

  .sidebar {
    width: 20%;
    background-color: #fff;

    .wrapper {
      width: 100%;
      display: flex;
      flex-direction: column;

      .logo {
        width: 100%;
        display: flex;
        align-items: center;
        padding: 0 20px;

        i {
          width: 30px;
          height: 30px;
          margin-right: 10px;
        }

        p {
          font-weight: 600;
          font-size: 25px;
          color: #2e3271;
        }
      }
    }
  }

  .mainWindow {
    width: 80%;
  }

  .mainWindow > .wrapper {
    width: 90%;
    margin: 32px auto 0;
    display: flex;
    flex-direction: column;
  }

  .mainWindow > .wrapper > .header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;

    .user {
      display: flex;
      align-items: center;
      cursor: pointer;

      .avatar {
        width: 20px;
        height: 20px;
      }

      .userInfo {
        margin-left: 10px;
      }
    }
  }

  .mainWindow > .wrapper > .charts {
    background-color: #fff;
    border-radius: 40px;
    padding: 32px;
    overflow: hidden;

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
      overflow-x: scroll;
      width: 100%;
      height: auto;
      -ms-overflow-style: none;
      scrollbar-width: none;
      display: flex;

      ::-webkit-scrollbar {
        display: none;
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
    }
    .player {
      flex: 1;
      border-radius: 40px;
      background-color: #fff;
    }
  }
`;
