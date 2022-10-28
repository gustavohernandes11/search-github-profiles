import styled, {css} from "styled-components";

export const Title = styled.h1`
    ${({align}) => css`text-align: ${align}`};
    margin: 0.9rem;
`;
