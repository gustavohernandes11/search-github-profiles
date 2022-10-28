import * as Styled from "./styles";
import { useEffect, useState } from "react";
import { Title } from "../Title";
import { RepoCard } from "../RepoCard";
import { CenterContainer } from "../CenterContainer";
import { getUserRepos } from "../../api";

export const RepoContainer = ({ repoUrl }) => {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    getUserRepos(repoUrl).then((r) => setRepos(r));
  }, [repoUrl]);

  return (
    <Styled.Container>
      <Title as="h2" align="center">
        Repositórios
      </Title>
      {repos.length > 0 ? (
        repos.map((e) => (
          <RepoCard
            key={e.name}
            description={e?.description}
            repo_url={e?.html_url}
            name={e?.name}
            forks={e?.forks_count}
            open_issues={e?.open_issues_count}
            visibility={e?.visibility}
          />
        ))
      ) : (
        <CenterContainer>
          <p>Não há repositórios nesse perfil</p>
        </CenterContainer>
      )}
    </Styled.Container>
  );
};
