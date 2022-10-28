import styled, {css} from "styled-components";

export const Paragraph = styled.p`
${({align}) => css`
text-align: ${align}`};
`;
