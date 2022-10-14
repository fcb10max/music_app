import styled from "styled-components";

export const Main = styled.div`
  width: 90%;
  height: 115px;
  margin: 0 auto;
  box-shadow: 0px 25px 40px rgba(0, 0, 0, 0.03);
  margin: 10px auto;
  border-radius: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

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
          text-transform: capitalize;
        }
        .singer {
          font-size: 14px;
          font-weight: 400;
          color: #7c8db5b8;
          text-transform: capitalize;
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
        display: flex;
        align-items: center;

        p {
          margin: 0;
          padding: 0;
        }

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

  @media (max-width: 1000px) {
    width: 100%;
    .wrapper {
      .left {
        flex: 2;

        .image {
          flex: 1;
          display: flex;
          justify-content: center;
          align-items: center;
          img {
            object-fit: cover;
          }
        }

        .name {
          flex: 2;
          margin-left: 10px;

          .songName {
            font-size: 14px;
            color: #2e3271;
          }

          .singer {
            font-size: 12px;
            color: #7c8db5b8;
          }
        }
      }
      .right {
        /* flex: 1; */

        div {
          margin: 5px;
          padding: 8px 6px;
          display: flex;
          align-items: center;
        }
      }
    }
  }

  @media (max-width: 450px) {
    .right {
      flex-direction: column;

      div {
        width: 100%;
        i {
          width: max-content;
        }
        p {
          display: none;
        }
      }
    }
  }
`;
