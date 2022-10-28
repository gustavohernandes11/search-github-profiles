import * as S from './styles.js'
import { CenterContainer } from "../CenterContainer"
import { GoBackButton } from '../GoBackButton'

export const NotFound = () => {
    return (
        <S.AbsoluteContainer>
    <CenterContainer>
       <h1>Não encontrado</h1> 
       <GoBackButton/>
    </CenterContainer>
        </S.AbsoluteContainer>
    )
}
