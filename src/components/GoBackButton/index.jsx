import * as Styled from "./styles";
import { useNavigate } from "react-router-dom";
import { ArrowLeftCircle } from "@styled-icons/feather";

export const GoBackButton = () => {
  const navigate = useNavigate();
  return (
    <Styled.Button onClick={() => navigate("/")}>
      <ArrowLeftCircle size={25} />
      <p>Voltar</p>
    </Styled.Button>
  );
};
