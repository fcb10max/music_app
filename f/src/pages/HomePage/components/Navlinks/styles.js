import styled from "styled-components";

export const Main = styled.div`
  width: 100%;

  .menu {
    width: 100%;
    margin: 0 auto;
    text-transform: capitalize;
    font-size: 15px;
    font-weight: 400;

    .title {
      text-transform: uppercase;
      margin-left: 32px;
    }

    .links {
      width: 100%;
      display: flex;
      flex-direction: column;

      a {
        display: flex;
        box-sizing: border-box;
        align-items: center;
        padding: 10px 32px;
        text-decoration: none;
        border-right: 5px solid transparent;
        transition: color 0.3s linear, border-right-color 0.3s linear;

        p {
          margin: 0 10px;
        }

        i {
          height: 20px;
          width: 20px;

          svg > path {
            transition: fill 0.3s linear;
          }
        }

        :hover {
          color: #ff7e3a;
          border-right-color: #ff7e3a;

          i > svg > path:not(.excluded) {
            fill: #ff7e3a;
            fill-opacity: 1;
          }
        }
      }
    }
  }

  @media (max-width: 1000px) {
    .menu {
      font-size: 12px;
      .links {
        a {
          padding: 10px 16px;
        }
      }
    }
  }
`;
