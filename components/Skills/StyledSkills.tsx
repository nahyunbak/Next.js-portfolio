import styled, { css } from "styled-components";
import Image from "next/image";
import {
  glassStyle,
  horizontalCenterStyle,
  insideTitleStyle,
  titleStyle,
  verticalCenterStyle,
} from "../GlobalStyle";
import { ClickedType, EmptyType, NameType } from "../../dto";

const insideLeftStyle = css`
  width: 600px;
  min-height: 600px;

  @media (max-width: 1800px) {
    width: 30vw;
  }
  @media (max-width: 722px) {
    width: 70vw;
    margin-bottom: 100px;
  }
  @media (max-width: 276px) {
    min-height: 650px;
  }
`;

const insideRightStyle = css`
  width: 500px;
  min-height: 200px;

  @media (max-width: 1800px) {
    width: 30vw;
  }

  @media (max-width: 862px) {
    width: 35vw;
  }
  @media (max-width: 722px) {
    width: 70vw;
  }
  @media (max-width: 512px) {
    min-height: 300px;
  }
`;

export const SkillsWrapper = styled.div<NameType>`
  overflow: hidden;
  position: relative;
  width: 100vw;
  ${verticalCenterStyle}
  background-image: linear-gradient(to top, #fbc2eb 0%, #a6c1ee 100%);
  @media (max-width: 722px) {
    padding: 50px 0px;
  }
`;

export const SkillsArea = styled.div`
  padding: 50px 0px;
  margin: 100px 0px;
  max-width: 1600px;

  ${glassStyle};
  ${verticalCenterStyle};
`;

const flowerAnimation = css`
  @keyframes animateFlower {
    0% {
      transform: translateY(-100px) rotate(0deg);
      opacity: 1;
    }

    100% {
      transform: translateY(1600px) rotate(1440deg) scale(1.3);
      opacity: 0;
    }
  }
`;
export const ObjFlower = styled.img`
  position: absolute;
  height: 50px;
  left: 10vw;
  top: -50px;
  animation: animateFlower 40s linear infinite;

  ${flowerAnimation}
`;

export const ObjFlower2 = styled.img`
  position: absolute;
  height: 50px;
  left: 30vw;
  top: -50px;
  animation: animateFlower 43s linear infinite;

  ${flowerAnimation}
`;
export const ObjFlower3 = styled.img`
  position: absolute;
  height: 50px;
  left: 40vw;
  top: -50px;
  animation: animateFlower 50s linear infinite;
  animation-delay: 10s;

  ${flowerAnimation}
`;
export const ObjFlower4 = styled.img`
  position: absolute;
  height: 50px;
  left: 20vw;
  top: -50px;
  animation: animateFlower 60s linear infinite;
  animation-delay: 55s;

  ${flowerAnimation}
`;
export const ObjFlower5 = styled.img`
  position: absolute;
  height: 50px;
  left: 60vw;
  top: -50px;
  animation: animateFlower 37s linear infinite;
  animation-delay: 30s;
  ${flowerAnimation}
`;
export const ObjFlower6 = styled.img`
  position: absolute;
  height: 50px;
  left: 70vw;
  top: -50px;
  animation: animateFlower 56s linear infinite;
  animation-delay: 15s;
  ${flowerAnimation}
`;

export const ObjFlower7 = styled.img`
  position: absolute;
  height: 50px;
  left: 80vw;
  top: -50px;
  animation: animateFlower 52s linear infinite;
  animation-delay: 20s;
  ${flowerAnimation}
`;

export const ObjFlower8 = styled.img`
  position: absolute;
  height: 50px;
  left: 90vw;
  top: -50px;
  animation: animateFlower 60s linear infinite;
  animation-delay: 40s;
  ${flowerAnimation}
`;

export const ObjFlower9 = styled.img`
  position: absolute;
  height: 50px;
  left: 65vw;
  top: -50px;
  animation: animateFlower 47s linear infinite;
  animation-delay: 35s;
  ${flowerAnimation}
`;

export const ObjFlower10 = styled.img`
  position: absolute;
  height: 50px;
  left: 50vw;
  top: -50px;
  animation: animateFlower 64s linear infinite;
  animation-delay: 45s;
  ${flowerAnimation}
`;

export const SkillImg = styled.img`
  display: inline-block;
  padding: 20px;
  height: 60px;
  ${glassStyle};
  -webkit-tap-highlight-color: transparent;
  margin: 15px;
  &:hover {
    background-image: linear-gradient(135deg, #fdfcfb 0%, #e2d1c3 100%);
  }
  @media (max-width: 980px) {
    height: 50px;
    padding: 10px;
  }
  @media (max-width: 340px) {
    height: 40px;
    padding: 10px;
  }
`;

//선택 전 기술스택
export const InsidePrevSkillsWrapper = styled.div`
  width: 70vw;
  margin-top: 30px;

  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  max-width: 1000px;

  @media (max-width: 1800px) {
    width: 1100px;
  }
  @media (max-width: 1077px) {
    width: 70vw;
  }
`;

export const InsidePrevSkillsTitle = styled.div`
  ${titleStyle}
  ${glassStyle};
  @media (max-width: 829px) {
    width: 70vw;
  }
`;
export const NextSkillsWrapper = styled.div<EmptyType>`
  padding-bottom: 50px;
  margin-top: ${(props) => (props.ifEmpty ? "0px" : "100px")};
  ${horizontalCenterStyle};
  width: 1300px;

  @media (max-width: 1800px) {
    width: 80vw;
  }
  @media (max-width: 722px) {
    ${verticalCenterStyle}
  }
`;

//왼쪽, 오른쪽 박스
export const InsideLeftSkillsCard = styled.div`
  ${insideLeftStyle}
`;
export const InsideRightSkillsCard = styled.div`
  ${insideRightStyle}
`;

export const InsideLeftSkillsWrapper = styled.div<ClickedType>`
  ${insideLeftStyle}
  position: absolute;
  transform-style: preserve-3d;
  transition: all 1s ease;

  transform: ${(props) => (props.value ? "rotateY(180deg)" : "rotateY(0deg)")};
`;

export const InsideRightSkillsWrapper = styled.div<ClickedType>`
  ${insideRightStyle}
  position: absolute;
  transform-style: preserve-3d;
  transition: all 1s ease;
  transform: ${(props) => (props.value ? "rotateY(180deg)" : "rotateY(0deg)")};
`;

//프론트 기술스택
export const FrontSkillsWrapper = styled.div`
  ${insideLeftStyle}
  ${glassStyle};
  backdrop-filter: blur(0px);
  backface-visibility: hidden;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  position: absolute;
`;

export const InsideFrontSkillsTitle = styled.div`
  ${glassStyle};
  ${insideTitleStyle}
  @media (max-width: 1800px) {
    width: 20vw;
  }
  @media (max-width: 980px) {
    font-size: 1.5rem;
    height: 60px;
  }
  @media (max-width: 722px) {
    width: 60vw;
    height: 80px;
  }
`;
export const InsideFrontSkillsWrapper = styled.div`
  ${horizontalCenterStyle}
  flex-wrap: wrap;
`;

//백엔드 기술스택
export const BackSkillsWrapper = styled.div`
  ${insideLeftStyle}
  ${glassStyle};
  backdrop-filter: blur(0px);
  backface-visibility: hidden;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  position: absolute;

  transform: rotateY(180deg);
`;

export const InsideBackSkillsTitle = styled.div`
  ${glassStyle};
  ${insideTitleStyle};
  @media (max-width: 1800px) {
    width: 20vw;
  }
  @media (max-width: 980px) {
    font-size: 1.5rem;
    height: 60px;
  }
  @media (max-width: 722px) {
    width: 60vw;
    height: 80px;
  }
`;
export const InsideBackSkillsWrapper = styled.div`
  ${horizontalCenterStyle};
  flex-wrap: wrap;
`;

//버젼관리 기술스택
export const VersionSkillsWrapper = styled.div`
  ${insideRightStyle}

  position: absolute;

  ${glassStyle};
  backdrop-filter: blur(0px);
  backface-visibility: hidden;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
`;

export const InsideVersionSkillsTitle = styled.div`
  ${glassStyle};
  ${insideTitleStyle};
  width: 300px;
  @media (max-width: 1800px) {
    width: 20vw;
  }
  @media (max-width: 980px) {
    font-size: 1.5rem;
    height: 60px;
  }
  @media (max-width: 722px) {
    width: 50vw;
    height: 80px;
  }
`;
export const InsideVersionSkillsWrapper = styled.div`
  ${horizontalCenterStyle}
  flex-wrap: wrap;
`;

//배포 기술스택
export const DeploySkillsWrapper = styled.div`
  ${insideRightStyle}
  flex-direction: column;
  position: absolute;

  ${glassStyle};
  backdrop-filter: blur(0px);
  backface-visibility: hidden;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;

  transform: rotateY(180deg);
`;

export const InsideDeploySkillsTitle = styled.div`
  ${glassStyle};
  ${insideTitleStyle};
  width: 300px;
  margin: 30px;
  @media (max-width: 1800px) {
    width: 20vw;
  }
  @media (max-width: 980px) {
    font-size: 1.5rem;
    height: 60px;
  }
  @media (max-width: 722px) {
    width: 50vw;
    height: 80px;
  }
`;
export const InsideDeploySkillsWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
`;
