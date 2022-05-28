import React from 'react'
import './styles.css'
import gitImage from '../../assets/imgs/pngwing.com.png'

export default function AsideForm({inSearch, onClick, onChange}) {


    return (
        <div className="asideform">
            <span>
            <img src={gitImage} alt="Logo da página" />
            <h1>ApiGithubProfiles</h1>
            </span>
            <p>Digite um <b>username</b> para buscar informações do perfil.</p>
            <form action="none">
                <input type="text" placeholder="Username..." autoComplete="false" spellCheck="false" defaultValue="" onChange={onChange} />
                <button onClick={onClick}>Buscar</button>
            </form>
            <hr />
            <p>Sem ideia? Tente algum destes:</p>
            <span>
            <b>twitter, facebook, instagram</b>
            </span>
        </div>
    )
}