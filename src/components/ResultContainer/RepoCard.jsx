import React from 'react'
import './styles.css'

export default function RepoCard(props) {
    return (

        <div className="repocard">
            <p>{props.name}</p> 
            <span><a target="_blank" href={props.url}>Ver código</a></span>
            </div>
    )
}