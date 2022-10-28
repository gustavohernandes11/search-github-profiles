import * as Styled from './styles'

export const SearchInput = ({onChangeInput}) => {
    return (
        <Styled.Input 
            onChange={onChangeInput}
            type="search" 
            name="search-github-profile" 
            id="search-github-profile" 
            placeholder="ex: facebook"
            required
            minLength={3}
            maxLength={50}
        />
        )
    
}
