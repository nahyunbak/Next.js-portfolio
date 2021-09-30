import {
  HeaderWrapper,
  ItemWrapper,
  LanguageButton,
  LiWrapper,
  LogoImg,
  MenuWrapper,
  NavWrapper,
  TitleArea,
  TitleWrapper,
  ToggleIcon,
} from "./StyledHeader";

const Header = () => {
  return (
    <HeaderWrapper>
      <MenuWrapper>
        <TitleWrapper>
          <LogoImg src="/logo.png"></LogoImg>
          <TitleArea>박나현의 포트폴리오</TitleArea>
        </TitleWrapper>
        <NavWrapper>
          <ItemWrapper>
            <LiWrapper
              to="aboutme"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              Home
            </LiWrapper>
            <LiWrapper
              to="aboutme"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              About
            </LiWrapper>
            <LiWrapper
              to="aboutme"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              Skills
            </LiWrapper>
            <LiWrapper
              to="aboutme"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              Projects
              <ToggleIcon />
            </LiWrapper>
          </ItemWrapper>

          <LanguageButton>영어로 보기</LanguageButton>
        </NavWrapper>
      </MenuWrapper>
    </HeaderWrapper>
  );
};

export default Header;
