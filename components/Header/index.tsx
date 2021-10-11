import { useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { englishState, koreanState, lanState } from "../../recoilAtom/language";
import { LiWrapper } from "../GlobalStyle";
import {
  HeaderWrapper,
  ItemWrapper,
  LanguageButton,
  LogoImg,
  MenuToggleButton,
  MenuWrapper,
  MobileMenu,
  MobileMenuWrapper,
  NavWrapper,
  TitleArea,
  TitleWrapper,
  ToggleIcon,
} from "./StyledHeader";

const Header = () => {
  const setLanList = useSetRecoilState(lanState);
  const lanList = useRecoilValue(lanState);

  const [isToggled, setIsToglge] = useState(false);

  const toggleMobileMenu = () => {
    setIsToglge((oldState) => !oldState);
  };
  const switchlan = () => {
    if (lanList.mainTitle === "박나현의 포트폴리오") {
      setLanList(englishState);
    } else {
      setLanList(koreanState);
    }
  };

  return (
    <HeaderWrapper isToggled={isToggled}>
      <MenuWrapper>
        <MenuToggleButton onClick={toggleMobileMenu} />
        <LiWrapper
          to="greet"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
          <TitleWrapper>
            <LogoImg src="/logo.png"></LogoImg>
            <TitleArea>{lanList.mainTitle}</TitleArea>
          </TitleWrapper>
        </LiWrapper>

        <NavWrapper>
          <ItemWrapper>
            <LiWrapper
              to="greet"
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
              to="skills"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              Skills
            </LiWrapper>
            <LiWrapper
              to="projects"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              Projects
            </LiWrapper>
          </ItemWrapper>

          <LanguageButton onClick={switchlan}>
            {lanList.lanButton}
          </LanguageButton>
        </NavWrapper>
      </MenuWrapper>
      <MobileMenuWrapper isToggled={isToggled}>
        <LiWrapper
          to="greet"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
          <MobileMenu>Home</MobileMenu>
        </LiWrapper>
        <LiWrapper
          to="greet"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
          <MobileMenu>About</MobileMenu>
        </LiWrapper>
        <LiWrapper
          to="greet"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
          <MobileMenu>Skills</MobileMenu>
        </LiWrapper>
        <LiWrapper
          to="greet"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
          <MobileMenu>Projects</MobileMenu>
        </LiWrapper>
      </MobileMenuWrapper>
    </HeaderWrapper>
  );
};

export default Header;
