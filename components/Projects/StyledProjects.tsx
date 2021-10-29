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
import { NameType, NumType } from "../../dto";

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
  margin: 10px;
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
  @media (max-width: 400px) {
    font-size: 2rem;
  }
`;
export const ProjectsWrapper = styled.div<NameType>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 1200px;
  background-image: linear-gradient(to top, #f43b47 0%, #453a94 100%);
  padding-top: 140px;
  position: relative;
  overflow: hidden;
  @media (max-width: 1364px) {
    height: 1600px;
  }
`;

const MoonAnimation = css`
  @keyframes animateMoon {
    0% {
      transform: rotate(0deg) scale(1);
    }
    50% {
      transform: rotate(20deg) scale(1.1);
      opacity: 1.2;
    }
    100% {
      transform: rotate(0deg) scale(1);
      opacity: 1;
    }
  }
`;

const RabbitAnimation = css`
  @keyframes animateRabbit {
    0% {
      transform: translateX(-300px) rotate(0deg) scaleX(-1);
      opacity: 0;
    }
    49% {
      transform: translateX(120vw) translateY(500px) rotate(-10deg) scaleX(-1);
      opacity: 1;
    }
    50% {
      transform: translateX(120vw) translateY(500px) rotate(-10deg) scaleX(-1);
      opacity: 1;
    }
    51% {
      transform: translateX(120vw) translateY(500px) rotate(0deg);
      opacity: 0;
    }
    100% {
      transform: translateX(-300px) rotate(10deg);
      opacity: 1;
    }
  }
`;

const RabbitAnimation2 = css`
  @keyframes animateRabbit2 {
    0% {
      transform: translateX(-300px);
      opacity: 0.5;
    }
    15% {
      transform: translateX(40vw) scaleX(-1);
      opacity: 1;
    }
    49% {
      transform: translateX(115vw) scaleX(-1);
      opacity: 1;
    }
    50% {
      transform: translateX(115vw) scaleX(-1);
      opacity: 0.5;
    }
    51% {
      transform: translateX(115vw) scaleX(-1);
      opacity: 1;
    }
    85% {
      transform: translateX(40vw) scaleX(-1);
      opacity: 1;
    }
    100% {
      transform: translateX(-300px);
      opacity: 0.5;
    }
  }
`;
export const ObjMoon = styled.img`
  position: absolute;
  width: 50vw;
  max-width: 600px;
  left: 5vw;
  top: 100px;
  animation: animateMoon 20s linear infinite;

  ${MoonAnimation}
`;

export const ObjRabbit = styled.img`
  position: absolute;
  width: 300px;
  left: 5vw;
  top: 30%;
  animation: animateRabbit 60s linear infinite;

  ${RabbitAnimation}
`;

export const ObjRabbit2 = styled.img`
  position: absolute;
  width: 300px;
  left: -5vw;
  bottom: 0px;
  animation: animateRabbit2 70s ease-in-out infinite;
  ${RabbitAnimation2}
  animation-delay: 20s;
`;

export const ProjectsArea = styled.div`
  ${verticalCenterStyle}
  max-width: 1600px;
  @media (max-width: 1800px) {
    width: 90vw;
  }
  @media (max-width: 1364px) {
    height: 1500px;
  }
`;

export const CarouselWrapper = styled.div`
  max-width: 1600px;

  ${horizontalCenterStyle}
  @media (max-width: 1800px) {
    width: 92vw;
  }
  @media (max-width: 1364px) {
    height: 1400px;
  }
`;

export const CarouselLeft = styled(IoIosArrowBack)`
  font-size: 3rem;
  color: #250707;
`;

export const CarouselRight = styled(IoIosArrowForward)`
  font-size: 3rem;
  color: #250707;
`;

export const CarouselArea = styled.div`
  ${glassStyle}
  max-width: 1400px;
  height: 1000px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 1700px) {
    width: 85vw;
  }
  width: 90vw;
  @media (max-width: 1364px) {
    height: 1400px;
  }
  @media (max-width: 470px) {
    padding: 0px 20px;
  }
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

export const NestedProjectAreaD = styled.div<NumType>`
  ${nestedProjectStyle}
  display: ${(props) => (props.pageNum === 4 ? "flex" : "none")};
`;

export const ProjectTitle = styled.div`
  ${titleStyle};
  @media (max-width: 829px) {
    width: 70vw;
  }
  @media (max-width: 470px) {
    width: 65vw;
    font-size: 2rem;
  }
`;

export const ProjectsContents = styled.div`
  ${horizontalCenterStyle};
  justify-content: space-between;
  width: 1300px;
  height: 700px;
  margin-top: 40px;
  @media (max-width: 1800px) {
    width: 78vw;
  }
  @media (max-width: 1364px) {
    ${verticalCenterStyle};
  }
  @media (max-width: 1364px) {
    height: 1100px;
  }
  @media (max-width: 670px) {
    height: 1200px;
  }
`;

export const ProjectsImgWrapper = styled.div`
  ${verticalCenterStyle};
  width: 500px;
  height: 500px;

  @media (max-width: 600px) {
    width: 70vw;
  }
  @media (max-width: 374px) {
    height: 250px;
  }
`;

export const ProjectsImg = styled.img`
  height: 300px;
  padding: 20px;
  ${glassStyle}
  @media (max-width: 1467px) {
    height: 250px;
  }
  @media (max-width: 1364px) {
    height: 350px;
  }
  @media (max-width: 826px) {
    height: 250px;
  }
  @media (max-width: 628px) {
    height: 200px;
  }
  @media (max-width: 531px) {
    padding: 10px;
    height: 150px;
  }
  @media (max-width: 423px) {
    height: 130px;
  }
  @media (max-width: 354px) {
    height: 100px;
  }
`;

export const ProjectsImgController = styled.div`
  ${horizontalCenterStyle};
  width: 200px;
  height: 50px;
`;

export const ProjectsImgNum = styled.div`
  font-size: 1.3rem;
  color: white;
  @media (max-width: 470px) {
    font-size: 1rem;
  }
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

  ${glassStyle};
  margin-top: 80px;
  padding-bottom: 40px;
  @media (max-width: 1467px) {
    width: 550px;
  }
  @media (max-width: 1364px) {
    width: 60vw;
  }
  @media (max-width: 735px) {
    width: 70vw;
  }
  @media (max-width: 735px) {
    padding-bottom: 20px;
  }
  @media (max-width: 595px) {
  }
`;

export const ProjectsTextTitle = styled.div`
  ${insideTitleStyle};
  @media (max-width: 614px) {
    width: 60vw;
  }
  @media (max-width: 470px) {
    font-size: 1.5rem;
  }
`;
export const ProjectsIntroduction = styled.div`
  padding: 20px;
  margin: 10px 30px;
  font-size: 1.2rem;
  line-height: 1.6rem;
  font-weight: 300;
  color: white;
  ${glassStyle}

  @media (max-width: 1467px) {
    font-size: 1.1rem;
    line-height: 1.5rem;
    padding: 15px 30px;
  }
  @media (max-width: 1364px) {
    font-size: 1.3rem;
    line-height: 1.8rem;
  }
  @media (max-width: 600px) {
    font-size: 1.1rem;
    line-height: 1.6rem;
    padding: 15px;
    margin: 10px 5px;
  }

  @media (max-width: 374px) {
    font-size: 0.8rem;
  }
`;

export const ProjectsBottomeWrapper = styled.div`
  ${horizontalCenterStyle};
  @media (max-width: 735px) {
    ${verticalCenterStyle}
    flex-direction: column-reverse;
  }
`;

export const ProjectsStackWrapper = styled.div`
  font-size: 1.3rem;
  font-weight: 600;
  color: black;
  @media (max-width: 1467px) {
    font-size: 1.1rem;
  }
  @media (max-width: 1318px) {
    font-size: 1rem;
  }
  @media (max-width: 735px) {
    font-size: 1.2rem;
    margin-bottom: 30px;
  }
  @media (max-width: 484px) {
    font-size: 1rem;
  }
  @media (max-width: 420px) {
    font-size: 0.8rem;
  }
`;
export const ProjectsLinkWrapper = styled.div`
  color: black;
  ${horizontalCenterStyle}
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
  width: 150px;
  height: 200px;
  ${horizontalCenterStyle}
`;

export const CarouselDot = styled.div`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: #ffffffcc;
  cursor: pointer;
  @media (max-width: 400px) {
    width: 10px;
    height: 10px;
  }
`;

export const ProjectsLink = styled(LinkN)`
  text-decoration: none;
`;
