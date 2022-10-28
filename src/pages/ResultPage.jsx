import * as Styled from "./styles.js";
import { ProfileDetailsModal } from "../components/ProfileDetailsModal";
import { RepoContainer } from "../components/RepoContainer";
import { NotFound } from "../components/NotFound";

export const ResultPage = ({ profileData }) => {
  return (
    <Styled.ResultPage>
      {profileData.message ? (
        <NotFound />
      ) : (
        <>
          <ProfileDetailsModal profileData={profileData} />
          <RepoContainer repoUrl={profileData?.repos_url} />
        </>
      )}
    </Styled.ResultPage>
  );
};
