import * as Styled from './styles'

export const Description = ({children, align = "center"}) => {
    return (
        <Styled.Paragraph align={align}>
            {children}
        </Styled.Paragraph>
    )
}
