import styled from "styled-components";

export const Modal = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  color: white;

  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.3);
  background: hsla(294, 46%, 39%, 1);
  background: linear-gradient(
    90deg,
    hsla(294, 46%, 39%, 1) 0%,
    hsla(271, 40%, 43%, 1) 100%
  );
  @media screen and (min-width: 500px) {
    border-radius: 20px;
    height: 300px;
    width: 70%;
  }
  @media screen and (min-width: 900px) {
    width: 50%;
    height: 300px;
  }
  @media screen and (min-width: 1200px) {
    width: 400px;
    height: 300px;
  }
`;
