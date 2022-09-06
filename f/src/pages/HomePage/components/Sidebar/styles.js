import styled from "styled-components";

export const Main = styled.div`
  width: 20%;
  height: auto;
  
  .wrapper {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    background-color: #fff;
  }

  .close {
    display: none;
    width: 40px;
    height: 40px;
    margin: 10px 10px 0 0;
    align-self: end;
    position: relative;

    span {
      position: absolute;
      left: 0;
      top: 20px;
      width: 80%;
      height: 5px;
      background-color: #2e3271;
      transform: rotate(45deg);
      
      ::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 5px;
        background-color: #2e3271;
        transform: rotate(90deg);
      }
    }
  }

  .logo {
    display: flex;
    width: 100%;
    align-items: center;
    padding: 0 20px;

    i {
      width: 30px;
      height: 30px;
      margin-right: 10px;
    }

    p {
      font-weight: 600;
      font-size: 20px;
      color: #2e3271;
    }
  }

  @media (max-width: 1000px) {
    .logo {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0;
      i, i > img {
        width: 30px;
        height: 30px;
      }
      p {
        font-size: 16px;
      }
    }
  }

  @media (max-width: 800px) {
    width: 100%;
    height: 100%;
    background-color: #00000000;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 0;
    transition: background-color 0.3s linear, z-index 0.1 linear;

    .wrapper {
      width: 200px;
      position: relative;
      left: -100%;
      transition: left 0.3s linear;
    }

    .close {
      display: block;
    }
  }

  &.active {
    background-color: #00000088;
    z-index: 3;

    .wrapper {
      left: 0;
    }
  }
`;