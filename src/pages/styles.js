import styled from "styled-components";

export const Page = styled.main`
  margin: 0;
  width: 100vw;
  min-height: 100vh;
  max-height: 100vh;
  display: block;
  overflow-y: auto;
  color: white;
`;

export const HomePage = styled(Page)`
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ResultPage = styled(Page)`
  @media screen and (min-width: 600px) {
    display: grid;
    height: 100vh;
    grid-template-columns: 1fr 2fr;
  }
`;
