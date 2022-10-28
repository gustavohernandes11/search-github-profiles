import { useState } from 'react'
import * as Styled from './styles.js'
import { SearchForm } from '../components/SearchForm'
import { Modal } from '../components/Modal'
import { GithubLogo } from '../components/GithubLogo'
import { Description } from '../components/Description/index.jsx'

export const HomePage = ({ onChangeInput, onSubmitUserName, loading=false}) => {
    const [isLoading] = useState(loading);


    return (
        <Styled.HomePage>
            <Modal>
            {isLoading ? (<p>loading...</p>): (
                <>
                <GithubLogo />
                <span>
                    <Description>Digite um <i>username</i> do Github!</Description>
                    <SearchForm onChangeInput={onChangeInput} onSubmitUserName={(e) => onSubmitUserName(e)}/>
                </span>
                </>
            )}
            </Modal>
        </Styled.HomePage>
    )
}
