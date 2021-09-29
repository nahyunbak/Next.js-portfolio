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

import Link from "next/link";
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
            <LiWrapper>
              <Link href="#">Home</Link>
            </LiWrapper>
            <LiWrapper>
              <Link href="#">About</Link>
            </LiWrapper>
            <LiWrapper>
              <Link href="#">Skills</Link>
            </LiWrapper>
            <LiWrapper>
              <Link href="#">Projects</Link>

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
