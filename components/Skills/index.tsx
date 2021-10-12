import React, { useState } from "react";
import {
  BackSkillsWrapper,
  DeploySkillsWrapper,
  FrontSkillsWrapper,
  InsideBackSkillsTitle,
  InsideBackSkillsWrapper,
  InsideDeploySkillsTitle,
  InsideDeploySkillsWrapper,
  InsideFrontSkillsTitle,
  InsideFrontSkillsWrapper,
  InsideLeftSkillsCard,
  InsideLeftSkillsWrapper,
  InsidePrevSkillsTitle,
  InsidePrevSkillsWrapper,
  InsideRightSkillsCard,
  InsideRightSkillsWrapper,
  InsideVersionSkillsTitle,
  InsideVersionSkillsWrapper,
  NextSkillsWrapper,
  SkillImg,
  SkillsArea,
  SkillsWrapper,
  VersionSkillsWrapper,
} from "./StyledSkills";

import Tilt from "react-parallax-tilt";
import { lanState } from "../../recoilAtom/language";
import { useRecoilValue } from "recoil";

const Skills = () => {
  const [skillData, setSkillData] = useState([
    "html",
    "css",
    "js",
    "react",
    "next",
    "sass",
    "ts",
    "node",
    "express",
    "koa",
    "mongodb",
    "mysql",
    "nest",
    "aws",
    "netlify",
    "git",
    "github",
  ]);
  const [frontData, setFrontData] = useState<string[]>([]);
  const [backData, setBackData] = useState<string[]>([]);
  const [deployData, setDeployData] = useState<string[]>([]);
  const [versionData, setVersionData] = useState<string[]>([]);
  const [ifEmpty, setIfEmpty] = useState<boolean>(false);
  const [ifClickedLeft, setIfClickedLeft] = useState<boolean>(false);
  const [ifClickedRight, setIfClickedRight] = useState<boolean>(false);

  const frontSkills = ["html", "css", "js", "react", "next", "sass", "ts"];
  const backSkills = ["node", "express", "koa", "mongodb", "mysql", "nest"];
  const deploySkills = ["aws", "netlify"];
  const versionSkills = ["git", "github"];

  const lanList = useRecoilValue(lanState);

  const removeImg = (skill: string) => {
    setSkillData((oldState: string[]) =>
      oldState.filter((item) => item !== skill)
    );

    if (frontSkills.includes(skill)) {
      setFrontData((oldState) => [...oldState, skill]);
    }
    if (backSkills.includes(skill)) {
      setBackData((oldState) => [...oldState, skill]);
    }
    if (deploySkills.includes(skill)) {
      setDeployData((oldState) => [...oldState, skill]);
    }
    if (versionSkills.includes(skill)) {
      setVersionData((oldState) => [...oldState, skill]);
    }
    console.log(skillData);
    if (skillData.length === 1) {
      setIfEmpty((oldState) => !oldState);
    }
  };
  //세터함수를 인자로 넘겨서 리팩토링
  const toggleSkill = (
    skill: string,
    skillSetter: React.Dispatch<React.SetStateAction<string[]>>,
    e
  ) => {
    skillSetter((oldState: string[]) =>
      oldState.filter((item) => item !== skill)
    );
    setSkillData((oldState: string[]) => [...oldState, skill]);
    e.stopPropagation();
  };

  const toggleSkillsAll = () => {
    setSkillData([]);
    setFrontData(frontSkills);
    setBackData(backSkills);
    setVersionData(versionSkills);
    setDeployData(deploySkills);
  };

  //세터함수를 인자로 넘겨서 리팩토링
  const toggleAllSkills = (
    skillSet: string[],
    skillList: string[],
    skillSetter: React.Dispatch<React.SetStateAction<string[]>>,
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (skillSet.length !== 0) {
      setSkillData((oldState: string[]) => oldState.concat(skillSet));
      skillSetter([]);
      console.log(skillSet);
    } else {
      skillSetter(skillList);
      setSkillData((oldState: string[]) =>
        oldState.filter((item) => !skillList.includes(item))
      );
    }
    e.stopPropagation();
  };

  //단순 함수라 리팩토링 안함
  const flipLeftCard = () => {
    setIfClickedLeft((oldState: boolean) => !oldState);
  };

  const flipRightCard = () => {
    setIfClickedRight((oldState: boolean) => !oldState);
  };

  return (
    <SkillsWrapper name="skills">
      <SkillsArea data-aos="fade-up">
        <Tilt>
          <InsidePrevSkillsTitle onClick={toggleSkillsAll}>
            SKILLS
          </InsidePrevSkillsTitle>
        </Tilt>
        <InsidePrevSkillsWrapper>
          {skillData.map((skill: string, index) => {
            return (
              <Tilt key={index}>
                <SkillImg
                  src={`/${skill}.png`}
                  onClick={() => removeImg(skill)}
                />
              </Tilt>
            );
          })}
        </InsidePrevSkillsWrapper>
        <NextSkillsWrapper ifEmpty={ifEmpty}>
          <Tilt>
            <InsideLeftSkillsCard>
              <InsideLeftSkillsWrapper
                onClick={flipLeftCard}
                value={ifClickedLeft}
              >
                <FrontSkillsWrapper>
                  <InsideFrontSkillsTitle
                    onClick={(e) =>
                      toggleAllSkills(frontData, frontSkills, setFrontData, e)
                    }
                  >
                    {lanList.skills.frontend}
                  </InsideFrontSkillsTitle>
                  <InsideFrontSkillsWrapper>
                    {frontData.map((skill: string, index) => {
                      return (
                        <Tilt key={index}>
                          <SkillImg
                            src={`/${skill}.png`}
                            onClick={(e) => toggleSkill(skill, setFrontData, e)}
                          />
                        </Tilt>
                      );
                    })}
                  </InsideFrontSkillsWrapper>
                </FrontSkillsWrapper>
                <BackSkillsWrapper>
                  <InsideBackSkillsTitle
                    onClick={(e) =>
                      toggleAllSkills(backData, backSkills, setBackData, e)
                    }
                  >
                    {lanList.skills.backend}
                  </InsideBackSkillsTitle>
                  <InsideBackSkillsWrapper>
                    {backData.map((skill: string, index) => {
                      return (
                        <Tilt key={index}>
                          <SkillImg
                            src={`/${skill}.png`}
                            onClick={(e) => toggleSkill(skill, setBackData, e)}
                          />
                        </Tilt>
                      );
                    })}
                  </InsideBackSkillsWrapper>
                </BackSkillsWrapper>
              </InsideLeftSkillsWrapper>
            </InsideLeftSkillsCard>
          </Tilt>
          <Tilt>
            <InsideRightSkillsCard>
              <InsideRightSkillsWrapper
                onClick={flipRightCard}
                value={ifClickedRight}
              >
                <VersionSkillsWrapper>
                  <InsideVersionSkillsTitle
                    onClick={(e) =>
                      toggleAllSkills(
                        versionData,
                        versionSkills,
                        setVersionData,
                        e
                      )
                    }
                  >
                    {lanList.skills.version}
                  </InsideVersionSkillsTitle>
                  <InsideVersionSkillsWrapper>
                    {versionData.map((skill: string, index) => {
                      return (
                        <Tilt key={index}>
                          <SkillImg
                            key={index}
                            src={`/${skill}.png`}
                            onClick={(e) =>
                              toggleSkill(skill, setVersionData, e)
                            }
                          />
                        </Tilt>
                      );
                    })}
                  </InsideVersionSkillsWrapper>
                </VersionSkillsWrapper>
                <DeploySkillsWrapper>
                  <InsideDeploySkillsTitle
                    onClick={(e) =>
                      toggleAllSkills(
                        deployData,
                        deploySkills,
                        setDeployData,
                        e
                      )
                    }
                  >
                    {lanList.skills.deployment}
                  </InsideDeploySkillsTitle>
                  <InsideDeploySkillsWrapper>
                    {deployData.map((skill: string, index) => {
                      return (
                        <Tilt key={index}>
                          <SkillImg
                            key={index}
                            src={`/${skill}.png`}
                            onClick={(e) =>
                              toggleSkill(skill, setDeployData, e)
                            }
                          />
                        </Tilt>
                      );
                    })}
                  </InsideDeploySkillsWrapper>
                </DeploySkillsWrapper>
              </InsideRightSkillsWrapper>
            </InsideRightSkillsCard>
          </Tilt>
        </NextSkillsWrapper>
      </SkillsArea>
    </SkillsWrapper>
  );
};

export default Skills;
