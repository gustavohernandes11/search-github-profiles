import styled from "styled-components";

export const Container = styled.div`
  border-bottom-right-radius: 5px;
  border-bottom-left-radius: 5px;
  padding: 10px;

  background: var(--gradient-bg-color);

  .center {
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  ul {
    padding: 10px;
    li {
      list-style: none;
    }
  }

  @media screen and (min-width: 600px) {
    border-bottom-left-radius: unset;
    border-top-right-radius: 5px;
    height: 100vh;
    justify-content: space-evenly;

    .center {
      height: 80%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;
