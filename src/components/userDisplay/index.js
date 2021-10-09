import { StyledContainer, FigureContainer } from "./styles";
import logo from "../../assets/logo.png";

export const UserCard = () => {
  return (
    <StyledContainer>
      <FigureContainer>
        <img src={logo} alt="userLogo" />
      </FigureContainer>
      <h2>Kenzinho</h2>
    </StyledContainer>
  );
};
