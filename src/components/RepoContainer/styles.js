import styled from "styled-components";

export const Container = styled.div`
  margin: 10px;
  @media screen and (min-width: 600px) {
    overflow-y: auto;
  }
  @media screen and (min-width: 900px) {
    margin: 0;
    padding: 30px;
  }
`;
