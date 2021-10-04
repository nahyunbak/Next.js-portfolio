import styled, { css } from "styled-components";
import Image from "next/image";
import { glassStyle, insideTitleStyle, titleStyle } from "../GlobalStyle";

const SkillImgStyle = css``;
export const SkillsWrapper = styled.div`
  width: 100vw;
  height: 300vh;
  ${glassStyle};
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  background-image: linear-gradient(to top, #d299c2 0%, #fef9d7 100%);
`;

export const SkillsArea = styled.div`
  max-width: 1900px;
  max-height: 3000px;
  ${glassStyle};
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

export const SkillImg = styled.img`
  padding: 20px;
  height: 70px;

  ${glassStyle};
  margin: 20px;
  &:hover {
    background-image: linear-gradient(135deg, #fdfcfb 0%, #e2d1c3 100%);
  }
`;

export const PrevSkillsWrapper = styled.div`
  max-width: 1200px;
  max-height: 900px;
  ${glassStyle};
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin: 100px;
  padding: 30px;

  justify-content: space-around;
  align-items: center;
`;

export const InsidePrevSkillsWrapper = styled.div`
  max-width: 1200px;
  max-height: 600px;

  padding: 50px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
`;

export const InsidePrevSkillsTitle = styled.div`
  ${titleStyle}
  ${glassStyle};
  margin-top: 30px;
`;

export const NextSkillsWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  align-items: flex-start;
  width: 1600px;
  height: 2000px;

  backdrop-filter: blur(15px);
`;

export const FrontSkillsWrapper = styled.div`
  max-width: 600px;
  max-height: 1200px;
  ${glassStyle};
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  position: absolute;
  top: 100px;
  left: 150px;
`;

export const InsideFrontSkillsTitle = styled.div`
  ${glassStyle};
  ${insideTitleStyle}
  margin: 30px;
`;
export const InsideFrontSkillsWrapper = styled.div`
  max-width: 600px;
  max-height: 850px;
  padding: 50px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
`;

export const BackSkillsWrapper = styled.div`
  max-width: 500px;
  max-height: 800px;
  ${glassStyle};
  display: flex;

  justify-content: space-around;
  flex-wrap: wrap;
  align-items: center;
  position: absolute;
  top: 100px;
  right: 150px;
`;

export const InsideBackSkillsTitle = styled.div`
  ${glassStyle};
  ${insideTitleStyle};
  width: 300px;
  margin: 30px;
`;
export const InsideBackSkillsWrapper = styled.div`
  max-width: 500px;
  max-height: 600px;
  padding: 50px;
  display: flex;

  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
`;
export const VersionSkillsWrapper = styled.div`
  width: 500px;
  height: 580px;

  ${glassStyle};
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  position: absolute;
  top: 950px;
  left: 150px;
`;

export const InsideVersionSkillsTitle = styled.div`
  ${glassStyle};
  ${insideTitleStyle};
  width: 300px;
  margin: 30px;
`;
export const InsideVersionSkillsWrapper = styled.div`
  width: 750px;
  height: 330px;
  padding: 50px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
`;
export const DeploySkillsWrapper = styled.div`
  width: 600px;
  height: 200px;
  margin-top: 500px;
  ${glassStyle};
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  position: absolute;
  top: 650px;
  left: 800px;
  padding: 40px;
`;

export const InsideDeploySkillsTitle = styled.div`
  ${glassStyle};
  ${insideTitleStyle};
  width: 300px;
  margin: 30px;
`;
export const InsideDeploySkillsWrapper = styled.div`
  width: 750px;
  height: 350px;
  padding: 50px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
`;

/**
 * 
  return (

    <SkillsWrapper>
        <PrevSkillsWrapper>
        {skillData.map((skill: string, index) => {
          return (
            <SkillImg
              key={index}
              src={`/${skill}.png`}
              onClick={() => removeImg(skill)}
            />
          );
        })}
        </PrevSkillsWrapper>
        <NextSkillsWrapper>
            <FrontSkillsWrapper>
            
      {frontData.map((skill: string, index) => {
        return (
            <SkillImg
            key={index}
            src={`/${skill}.png`}
            onClick={() => toggleFront(skill)}
          />
        );
      })}
            </FrontSkillsWrapper>
            <BackSkillsWrapper>
            
        {backData.map((skill: string, index) => {
          return (
            <SkillImg
              key={index}
              src={`/${skill}.png`}
              onClick={() => toggleBack(skill)}
            />
          );
        })}
            </BackSkillsWrapper>
            <DeploySkillsWrapper>
                
        {backData.map((skill: string, index) => {
          return (
            <SkillImg
              key={index}
              src={`/${skill}.png`}
              onClick={() => toggleBack(skill)}
            />
          );
        })}
            </<DeploySkillsWrapper>
            <VersionSkillsWrapper>
            <SkillImg/>
            </<VersionSkillsWrapper>
        </NextSkillsWrapper>
    </SkillsWrapper>
   
    </>
  );
};

 * 
 */
