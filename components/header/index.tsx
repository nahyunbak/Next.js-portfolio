import { useRecoilValue, useSetRecoilState } from "recoil";
import { LanType } from "../../dto";
import { englishState, koreanState, lanState } from "../../recoilAtom/language";
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
  const setLanList = useSetRecoilState(lanState);
  const lanList = useRecoilValue(lanState);
  const switchlan = () => {
    if (lanList.mainTitle === "박나현의 포트폴리오") {
      setLanList(englishState);
    } else {
      setLanList(koreanState);
    }
  };

  return (
    <HeaderWrapper>
      <MenuWrapper>
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
              <ToggleIcon />
            </LiWrapper>
          </ItemWrapper>

          <LanguageButton onClick={switchlan}>
            {lanList.lanButton}
          </LanguageButton>
        </NavWrapper>
      </MenuWrapper>
    </HeaderWrapper>
  );
};

export default Header;
