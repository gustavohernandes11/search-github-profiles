import * as Styled from "./styles.js";
import { SearchButton } from "../SearchButton";
import { SearchInput } from "../SearchInput";

export const SearchForm = ({ onSubmitUserName, onChangeInput }) => {
  return (
    <Styled.Form>
      <SearchInput onChangeInput={onChangeInput} />
      <SearchButton onSubmitUserName={(e) => onSubmitUserName(e)} />
    </Styled.Form>
  );
};
