import React, { useState, useEffect } from 'react'
import './styles.css'
import RepoCard from './RepoCard'

export default function ResultContainer(props) {
    const [user, setUser] = useState({})
    useEffect(() => {
        setUser(props.userData)
    }, [props.userData]);

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
                            <p>Followers: {user.followers}</p>
                            <p>Following: {user.following}</p>
                        </span>
                        <span className="resultbuttons">
                            <a href={user.html_url}><button>Github</button></a>
                        </span>
                    </div>
                    <p>{user.bio}</p>
                    {user.bio ?(<hr />) : null}
                    
                    <div className="resultrepos">
                        {user.repos ? user.repos.map((e, i) => <p>{i}</p>) : null }
                        
                    </div>
                    </>
                    )}
                </div>
        </>
    )
}