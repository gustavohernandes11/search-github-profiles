import * as Styled from "./styles";

export const Button = ({ children, href }) => {
  return (
    <a href={href} target="_blank" rel="noreferrer">
      <Styled.Button>{children}</Styled.Button>
    </a>
  );
};
