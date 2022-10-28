import { Description } from '../Description'
import { GoBackButton } from '../GoBackButton'
import { AvatarImage } from '../AvatarImage'
import * as Styled from './styles'
import { Title } from '../Title'

const parseData = (ISOformat) => {
    const formattedData = new Date(ISOformat).toLocaleDateString()
    return formattedData
}

export const ProfileDetailsModal = ({profileData}) => {
    return (
        <Styled.Container>
            <span>
                <GoBackButton />
            </span>
            <span className="center">
                <AvatarImage src={profileData?.avatar_url} alt="Avatar do perfil" />
                <Title>{profileData?.login}</Title>
                <Description>{profileData?.bio}</Description>

                <ul>
                    {profileData?.email && <li>Email: {profileData?.email}</li>}
                    {profileData?.created_at && <li>Data de criação: {parseData(profileData?.created_at)}</li>}
                    {profileData?.location && <li>Localização: {profileData?.location}</li>}
                </ul>
            </span>
        </Styled.Container>
    )
}
