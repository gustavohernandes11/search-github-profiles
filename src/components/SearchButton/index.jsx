import * as Styled from "./styles";
import { ArrowRight } from "@styled-icons/feather";

export const SearchButton = ({ onSubmitUserName }) => {
  return (
    <Styled.Button onClick={(e) => onSubmitUserName(e)}>
      <ArrowRight size={15} />
    </Styled.Button>
  );
};
