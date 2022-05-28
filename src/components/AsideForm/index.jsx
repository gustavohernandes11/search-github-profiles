import React, { useState, useEffect } from 'react'
import './styles.css'
import gitImage from '../../assets/imgs/pngwing.com.png'

export default function AsideForm({ inSearch, onClick, onChange }) {
    const [isSearchMode, setIsSearchMode] = useState();
    useEffect(() => {
        setIsSearchMode(inSearch)
    }, [inSearch])

    return (
        <div className="asideform" style={{justifyContent: isSearchMode ? 'center' : '', alignItems: isSearchMode ? 'center' : '', padding: isSearchMode ? '10px' : '100px'}}>
            <span style={{flexDirection: isSearchMode  ? 'row' : 'column', alignItems: 'center', justifyContent: 'center'}} >
                <img src={gitImage} alt="Logo da página" />
                <h1 style={{fontSize: isSearchMode || window.screen.width < 700 ? 'inherit' : '30px'}}>ApiGithubProfiles</h1>
            </span>
            {!isSearchMode && (
                <p >Digite um <b>username</b> para buscar informações do perfil.</p>
            )}
            <form action="none">
                <input type="text" placeholder="Username..." autoComplete="false" spellCheck="false" defaultValue="" onChange={onChange} />
                <button onClick={onClick}>Buscar</button>
            </form>
            <hr />
            {!isSearchMode && (
                    <p className="helptext">Exemplo: facebook, twitter, microsoft...</p>
            )}


        </div>
    )
}