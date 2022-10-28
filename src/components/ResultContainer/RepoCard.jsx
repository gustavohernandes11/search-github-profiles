import React from 'react'
import './styles.css'

export default function RepoCard(props) {
    return (

        <div className="repocard">
            <span>
            <b>{props.name}</b> 
            <p>{props.description}</p>
            </span>
            <button><a rel="noreferrer" target="_blank" href={props.url}>Ver código</a></button>
            </div>
    )
}
