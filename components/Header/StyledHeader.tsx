import styled from "styled-components";
import { RiArrowDownSLine } from "react-icons/ri";
import { Link as Links } from "react-scroll";

export const HeaderWrapper = styled.div`
  width: 100vw;
  height: 130px;
  font-family: "Noto Sans KR", sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MenuWrapper = styled.div`
  width: 90vw;
  height: 80px;
  border-radius: 20px;
  padding: 0px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  background: rgba(255, 255, 255, 0.05);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  position: fixed;
  backdrop-filter: blur(15px);
  z-index: 2;
`;

export const TitleWrapper = styled.div`
  width: 270px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const LogoImg = styled.img`
  width: 60px;
  height: 60px;
  cursor: pointer;
`;

export const TitleArea = styled.div`
  width: 200px;
  height: 100px;
  font-size: 1.3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 400;
  cursor: pointer;
`;

export const NavWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 600px;
  height: 100px;
  z-index: -1;
  ::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 50%;
    height: 100%;
    background: linear-gradient(
      to left,
      rgba(255, 255, 255, 0.15),
      transparent
    );
    transform: skewX(45deg) translateX(0);
    transition: 0.5s;
  }
`;

export const ItemWrapper = styled.ul`
  margin-left: 40px;
  width: 400px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const LanguageButton = styled.div`
  background: rgba(255, 255, 255, 0.05);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  width: 130px;
  height: 46px;
  border-radius: 30px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 1.04rem;
  cursor: pointer;
  transition: all 0.2s;
  &:hover {
    background-image: linear-gradient(
      to top,
      #a7a6cb 0%,
      #8989ba 52%,
      #8989ba 100%
    );

    color: #f5e5f5;
  }
`;

export const ToggleIcon = styled(RiArrowDownSLine)`
  font-size: 1.4rem;
  vertical-align: middle;
`;
