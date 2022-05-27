import React, { useState, useEffect } from 'react'
import './styles.css'
import RepoCard from './RepoCard'

export default function ResultContainer(props) {
    const [user, setUser] = useState({})
    const [repos, setRepos] = useState([])

    useEffect(() => {
        setUser(props.userData)
    }, [props.userData]);
    
    useEffect(()=> {
        getUserRepos()
        console.log(repos)
    }, [user])


    function getUserRepos() {
        fetch(user.repos_url)
            .then(data => data.json())
            .then(e => setRepos(e))

    }

    return (
        <>
            <div className="resultcontainer">
                {user.message ? (<div className="error"><b>Usuário não encontrado</b><p>Tente outro username ou verifique sua conexão.</p></div>) : (
                    <>
                        <div className="resultheader">
                            <img src={user.avatar_url} alt="" className="avatar" />
                            <span>
                                <h2>{user.name}</h2>
                                <p>{user.login ? (`Username: ${user.login}`) : (null)}</p>
                                <p>{user.email ? (`Email: ${user.email}`) : (null)}</p>
                                <p>{user.location ? (`Localização: ${user.location}`) : (null)}</p>
                              
                            </span>
                            <span className="resultbuttons">
                                <a href={user.html_url}><button>Github</button></a>
                            </span>
                        </div>
                        <p>{user.bio}</p>
                        {user.bio ? (<hr />) : null}

                        <div className="resultrepos">
                           {repos ? <h3>Lista de Repositórios:</h3> : null}
                            {repos.map(e => <RepoCard key={e.name} name={e.name} url={e.html_url}/>)}
                        </div>
                    </>
                )}
            </div>
        </>
    )
}