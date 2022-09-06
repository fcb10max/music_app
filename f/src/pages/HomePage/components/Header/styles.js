import styled from "styled-components";

export const Main = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin: 0 auto 20px;

  & > .menu {
    display: none;
    flex: 1;
    height: 25px;
    margin-left: 10px;
    box-sizing: border-box;

    .menuWrapper {
      width: 30px;
      height: 100%;
      position: relative;
      & > span {
        position: absolute;
        width: 30px;
        height: 5px;
        left: 0;
        top: 10px;
        background-color: #2e3271;
        transition: transform 0.3s linear, top 0.3s linear;

        ::before {
          content: "";
          position: absolute;
          width: 30px;
          height: 5px;
          left: 0;
          top: -10px;
          background-color: #2e3271;
        }
        ::after {
          content: "";
          position: absolute;
          width: 30px;
          height: 5px;
          left: 0;
          top: 10px;
          background-color: #2e3271;
        }
      }
    }
  }

  .logo {
    flex: 1;
    width: 100%;
    display: none;
    align-items: center;
    padding: 0 20px;
    i {
      width: 30px;
      height: 30px;
      margin-right: 10px;
    }

    p {
      font-weight: 600;
      font-size: 16px;
      color: #2e3271;
    }
  }

  .user {
    flex: 1;
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

  @media (max-width: 800px) {
    margin: 0 auto;
    .menu,
    .logo {
      display: flex;
    }
    .user {
      box-sizing: border-box;
      margin-right: 10px;
      justify-content: end;

      .userInfo {
        display: none;
      }
    }
  }
`;
