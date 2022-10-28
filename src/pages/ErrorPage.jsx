import * as Styled from './styles.js'
import { Modal } from '../components/Modal'

export const ErrorPage = ({ onChangeInput, onSubmitUserName, loading=false}) => {
    
    return (
        <Styled.Page>
            <Modal>
             <p>Não foi encontrado!</p>
            </Modal>
        </Styled.Page>
    )
}
