import React from 'react'
import './styles.css'
import gitImage from '../../assets/imgs/pngwing.com.png'

export default function AsideForm(props){
    return (
        <div className="asideform">
            <img src={gitImage} alt="" />
            <h1>ApiGithubProfiles</h1>
            <p>Digite um <b>username</b> para buscar informações do perfil.</p>
            <form action="none">
                <input type="text" placeholder="username..." autoComplete="false"/>
                <button>Buscar</button>
            </form>
        </div>
    )
}