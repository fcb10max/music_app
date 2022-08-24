import styled from "styled-components";

export const Main = styled.div`
  width: 90%;
  height: 115px;
  margin: 0 auto;
  box-shadow: 0px 25px 40px rgba(0, 0, 0, 0.03);
  margin: 40px auto;
  border-radius: 24px;
  display: flex;
  justify-content: center;
  align-items: center;

  .wrapper {
    width: 95%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .left {
      display: flex;
      align-items: center;
      .image {
        width: 84px;
        height: 84px;
        img {
          width: 84px;
          height: 84px;
        }
      }
      .name {
        margin-left: 30px;
        .songName {
          font-size: 16px;
          font-weight: 600;
          color: #2e3271;
        }
        .singer {
          font-size: 14px;
          font-weight: 400;
          color: #7c8db5b8;
        }
      }
    }
    .right {
      display: flex;
      div {
        box-shadow: 0px 15px 30px rgba(0, 0, 0, 0.03);
        padding: 10px 15px;
        margin: 0 10px;
        color: #313d58;
        font-size: 12px;
        font-weight: 600;
        border-radius: 14px;
        transition: color 0.3s linear;
        cursor: pointer;

        i {
          margin-right: 8px;
        }
        svg > path {
          transition: fill 0.3s linear;
        }
        :hover {
          color: #ff7e3a;
          svg > path:not(.excluded) {
            fill: #ff7e3a;
          }
        }
      }
    }
  }
`;
