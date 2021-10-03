import styled, { css } from "styled-components";
import { glassStyle } from "../GlobalStyle";

const SkillCardStyle = css`
  width: 500px;
  height: 500px;
  padding: 40px;
`;
export const SkillsWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(
    to right,
    #3ab5b0 0%,
    #3d99be 31%,
    #56317a 100%
  );
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-top: -130px;
`;

export const GeneralSkillWrapper = styled.div`
  ${glassStyle};
  width: 1000px;
  height: 600px;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
`;

export const SkillGlassWrapper = styled.div`
  ${glassStyle};
  padding: 40px;
`;

export const SpecificSkillWrapper = styled.div`
  width: 1000px;
  height: 600px;
`;

export const FrontSkillsWrapper = styled.div`
  ${SkillCardStyle};
`;
/**
 * 

  return (
    <>
      <SkillsWrapper>
        <GeneralSkillWrapper>
          <SkillGlassWrapper>
            {skillData.map((skill: string, index) => {
              return (
                <img
                  key={index}
                  src={`/${skill}.png`}
                  onClick={() => removeImg(skill)}
                />
              );
            })}
          </SkillGlassWrapper>
        </GeneralSkillWrapper>
        <SpecificSkillWrapper>
          <FrontSkillsWrapper>
            <FrontTitleWrapper></FrontTitleWrapper>
            <FrontImgWrapper>
              {frontData.map((skill: string, index) => {
                return (
                  <SkillGlassWrapper>
                    <img
                      key={index}
                      src={`/${skill}.png`}
                      onClick={() => toggleFront(skill)}
                    />
                  </SkillGlassWrapper>
                );
              })}
            </FrontImgWrapper>
          </FrontSkillsWrapper>
          <BackSkillsWrapper>
            <BackTitleWrapper></BackTitleWrapper>
            <BackImgWrapper>
              {backData.map((skill: string, index) => {
                return (
                  <SkillGlassWrapper>
                    <img
                      key={index}
                      src={`/${skill}.png`}
                      onClick={() => toggleBack(skill)}
                    />
                  </SkillGlassWrapper>
                );
              })}
            </BackImgWrapper>
          </BackSkillsWrapper>
        </SpecificSkillWrapper>
      </SkillsWrapper>
    </>
  );
};

export default Skills;

 * 
 */
