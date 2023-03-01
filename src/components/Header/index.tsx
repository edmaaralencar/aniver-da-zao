import { TfiSearch } from "react-icons/tfi";
import { BsBell } from "react-icons/bs";

import logo from "../../assets/logo.png";

import * as S from "./styles";

const Header = () => {
  return (
    <S.Wrapper>
      <S.Logo src={logo} alt="logo" />
      <S.Nav>
        <S.NavItem>Início</S.NavItem>
        <S.NavItem>Séries</S.NavItem>
        <S.NavItem>Filmes</S.NavItem>
        <S.NavItem>Bombando</S.NavItem>
        <S.NavItem>Navegar por idiomas</S.NavItem>
      </S.Nav>
      <S.Profile>
        <TfiSearch strokeWidth={0.5} size={22} color="#FFFFFF" />
        <BsBell strokeWidth={0.5} size={22} color="#FFFFFF" />
        <S.ProfileImg />
      </S.Profile>
    </S.Wrapper>
  );
};

export default Header;
