import React from 'react'
import './styles.css'
import RepoCard from './RepoCard'
import gitImage from '../../assets/imgs/pngwing.com.png'

export default function ResultContainer(props) {
    return (
        <div className="resultcontainer">
            <div className="resultheader">
                <img src={gitImage} alt="" className="avatar" />
                <span>
                    <h2>Name</h2>
                    <b>@username_11</b>
                    <p>Location: here</p>
                    <p>Followers: 10</p>
                    <p>Following: 10</p>
                </span>
                <span>
                    <p> Description: A expressão Lorem ipsum em design gráfico e editoração é um texto padrão em latim utilizado na produção gráfica para preencher os espaços de texto em publicações para testar e ajustar aspectos visuais antes de utilizar conteúdo real. Wikipédia</p>
                </span>
            </div>
            <hr />
            <div className="resultrepos">
                <RepoCard />
                <RepoCard />
                <RepoCard />
            </div>


        </div>
    )
}