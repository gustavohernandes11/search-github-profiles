import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    margin-top: 5px;
    background: #303030;
    border-radius: 5px;

    details {
        width: 100%;
        summary {
            flex-direction: row;
        }
    }
    summary:hover {
        cursor: pointer;
    }
    @media  screen and (min-width: 900px) {
        padding: 0px;
        summary {
            padding: 20px;
        }
}
`;

export const RepoCardFooter = styled.footer`
width: 100%;
display: flex;
justify-content: flex-end;
`
export const Info = styled.div`
padding: 10px;
@media  screen and (min-width: 900px) {
    padding: 0 20px 20px;

}
`;
