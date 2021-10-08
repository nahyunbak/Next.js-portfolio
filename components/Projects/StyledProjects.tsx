import styled, { css } from "styled-components";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import { AiOutlineGithub, AiTwotoneBulb } from "react-icons/ai";
import { RiPagesFill } from "react-icons/ri";

import LinkN from "next/link";

import {
  glassStyle,
  horizontalCenterStyle,
  insideTitleStyle,
  titleStyle,
  verticalCenterStyle,
} from "../GlobalStyle";
import { NumType } from "../../dto";

const nestedProjectStyle = css`
  width: 100%auto;
  height: 100%auto;
  position: absolute;
  ${verticalCenterStyle}
`;

const linkStyle = css`
  font-size: 2.5rem;
  transition: 1s;
  cursor: pointer;
  @-webkit-keyframes rotate-center {
    0% {
      -webkit-transform: rotate(0);
      transform: rotate(0);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
  @keyframes rotate-center {
    0% {
      -webkit-transform: rotate(0);
      transform: rotate(0);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }

  &:hover {
    color: white;
    -webkit-animation: rotate-center 1s linear both;
    animation: rotate-center 1s linear both;
  }
`;
export const ProjectsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 95vh;
  background-image: linear-gradient(to top, #f43b47 0%, #453a94 100%);
  padding-top: 140px;
`;

export const ProjectsArea = styled.div`
  width: 1800px;
  height: 1100px;
`;

export const CarouselWrapper = styled.div`
  width: 1800px;
  height: 900px;
  ${horizontalCenterStyle}
`;

export const CarouselLeft = styled(IoIosArrowBack)`
  font-size: 3rem;
  color: white;
`;

export const CarouselRight = styled(IoIosArrowForward)`
  font-size: 3rem;
  color: white;
`;

export const CarouselArea = styled.div`
  ${glassStyle}
  width: 1600px;
  height: 1000px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NestedProjectAreaA = styled.div<NumType>`
  ${nestedProjectStyle}
  display: ${(props) => (props.pageNum === 1 ? "flex" : "none")};
`;

export const NestedProjectAreaB = styled.div<NumType>`
  ${nestedProjectStyle}
  display: ${(props) => (props.pageNum === 2 ? "flex" : "none")};
`;

export const NestedProjectAreaC = styled.div<NumType>`
  ${nestedProjectStyle}
  display: ${(props) => (props.pageNum === 3 ? "flex" : "none")};
`;

export const ProjectTitle = styled.div`
  ${titleStyle};
`;

export const ProjectsContents = styled.div`
  ${horizontalCenterStyle};
  justify-content: space-between;
  width: 1300px;
  height: 700px;
`;

export const ProjectsImgWrapper = styled.div`
  ${verticalCenterStyle};
  width: 500px;
  height: 500px;
`;

export const ProjectsImg = styled.img`
  height: 350px;
  padding: 30px;
  ${glassStyle}
`;

export const ProjectsImgController = styled.div`
  ${horizontalCenterStyle};
  width: 200px;
  height: 50px;
`;

export const ProjectsImgNum = styled.div`
  font-size: 1.3rem;
  color: white;
`;

export const ProjectsImgLeft = styled(IoIosArrowBack)`
  font-size: 1.3rem;
  color: white;
`;

export const ProjectsImgRight = styled(IoIosArrowForward)`
  font-size: 1.3rem;
  color: white;
`;

export const ProjectsTextWrapper = styled.div`
  ${verticalCenterStyle};
  width: 600px;
  height: 650px;
  ${glassStyle};
  margin-top: 80px;
  padding-bottom: 40px;
`;

export const ProjectsTextTitle = styled.div`
  ${insideTitleStyle};
`;
export const ProjectsIntroduction = styled.div`
  width: 400px;
  height: 320px;
  font-size: 1.2rem;
  line-height: 1.6rem;
  font-weight: 300;
  color: white;
  ${glassStyle}
  padding: 30px;
  margin-bottom: 120px;
`;

export const ProjectsStackWrapper = styled.div`
  position: absolute;
  left: 250px;
  bottom: 90px;
  width: 400px;
  height: 50px;
  font-size: 1.3rem;
  font-weight: 600;
  color: black;
`;
export const ProjectsLinkWrapper = styled.div`
  width: 200px;
  height: 80px;
  color: black;
  ${horizontalCenterStyle}
  position: absolute;
  left: 50px;
  bottom: 60px;
`;

export const ProjectsGit = styled(AiOutlineGithub)`
  ${linkStyle}
`;
export const ProjectsVelog = styled(AiTwotoneBulb)`
  ${linkStyle}
`;

export const ProjectsDeploy = styled(RiPagesFill)`
  ${linkStyle}
`;
export const CarouselController = styled.div`
  width: 800px;
  height: 200px;
`;

export const CarouselDot = styled.div`
  width: 4px;
  height: 4px;
  border-radius: 50%;
`;

export const ProjectsLink = styled(LinkN)`
  text-decoration: none;
`;
