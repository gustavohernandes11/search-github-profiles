import styled from "styled-components";

export const Button = styled.button`
  display: flex;
  flex-direction: row;
  gap: 5px;
  border-radius: 5px;
  border: none;
  background: transparent;
  color: white;
  align-items: center;

  :hover {
    cursor: pointer;
  }
`;
