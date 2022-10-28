import * as Styled from './styles'
import { Button } from '../Button'
import { ExternalLink } from '@styled-icons/feather'

export const RepoCard = ({name, description, repo_url, visibility, forks, open_issues}) => {
    return (
        <Styled.Container>
            <details>
                 <summary><b>{name}</b></summary>
                 <Styled.Info>

                 <p>{description}</p>
                 <ul>
                    <li><b>Visibilidade</b>: {visibility}</li>
                    <li><b><i>Forks</i></b>: {forks}</li>
                    <li><b><i>Open issues</i></b>: {open_issues}</li>
                 </ul>
                 <Styled.RepoCardFooter>
                    <Button href={repo_url}><ExternalLink size={20}/></Button>
                 </Styled.RepoCardFooter>
                 </Styled.Info>
            </details>
        </Styled.Container>
    )
}
