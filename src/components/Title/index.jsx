import * as S from './styles'

export const Title = ({children, as, align}) => {
    return <S.Title as={as} align={align}> {children} </S.Title>
    
}
