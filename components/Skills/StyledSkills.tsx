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
  width: 100vw;
  ${verticalCenterStyle}
  background-image: linear-gradient(-225deg, #5D9FFF 0%, #B8DCFF 48%, #6BBBFF 100%);
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
