import { useState } from "react";
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
  InsidePrevSkillsTitle,
  InsidePrevSkillsWrapper,
  InsideVersionSkillsTitle,
  InsideVersionSkillsWrapper,
  NextSkillsWrapper,
  PrevSkillsWrapper,
  SkillImg,
  SkillsArea,
  SkillsWrapper,
  VersionSkillsWrapper,
} from "./StyledSkills";

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
  const [frontData, setFrontData] = useState([]);
  const [backData, setBackData] = useState([]);
  const [deployData, setDeployData] = useState([]);
  const [versionData, setVersionData] = useState([]);
  const frontSkills = ["html", "css", "js", "react", "next", "sass", "ts"];
  const backSkills = ["node", "express", "koa", "mongodb", "mysql", "nest"];
  const deploySkills = ["aws", "netlify"];
  const versionSkills = ["git", "github"];
  const removeImg = (skill) => {
    setSkillData((oldState) => oldState.filter((item) => item !== skill));
    console.log(skillData);
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
  };

  const toggleFront = (skill) => {
    setFrontData((oldState) => oldState.filter((item) => item !== skill));
    setSkillData((oldState) => [...oldState, skill]);

    console.log(skillData);
  };

  const toggleBack = (skill) => {
    setBackData((oldState) => oldState.filter((item) => item !== skill));
    setSkillData((oldState) => [...oldState, skill]);

    console.log(skillData);
  };

  const toggleDeploy = (skill) => {
    setDeployData((oldState) => oldState.filter((item) => item !== skill));
    setSkillData((oldState) => [...oldState, skill]);

    console.log(skillData);
  };

  const toggleVersion = (skill) => {
    setVersionData((oldState) => oldState.filter((item) => item !== skill));
    setSkillData((oldState) => [...oldState, skill]);

    console.log(skillData);
  };

  return (
    <SkillsWrapper name="skills">
      <PrevSkillsWrapper>
        <InsidePrevSkillsTitle>SKILLS</InsidePrevSkillsTitle>
        <InsidePrevSkillsWrapper>
          {skillData.map((skill: string, index) => {
            return (
              <SkillImg
                key={index}
                src={`/${skill}.png`}
                onClick={() => removeImg(skill)}
              />
            );
          })}
        </InsidePrevSkillsWrapper>
      </PrevSkillsWrapper>
      <NextSkillsWrapper>
        <FrontSkillsWrapper>
          <InsideFrontSkillsTitle>프론트엔드</InsideFrontSkillsTitle>
          <InsideFrontSkillsWrapper>
            {frontData.map((skill: string, index) => {
              return (
                <SkillImg
                  key={index}
                  src={`/${skill}.png`}
                  onClick={() => toggleFront(skill)}
                />
              );
            })}
          </InsideFrontSkillsWrapper>
        </FrontSkillsWrapper>
        <BackSkillsWrapper>
          <InsideBackSkillsTitle>백엔드</InsideBackSkillsTitle>
          <InsideBackSkillsWrapper>
            {backData.map((skill: string, index) => {
              return (
                <SkillImg
                  key={index}
                  src={`/${skill}.png`}
                  onClick={() => toggleBack(skill)}
                />
              );
            })}
          </InsideBackSkillsWrapper>
        </BackSkillsWrapper>
        <VersionSkillsWrapper>
          <InsideVersionSkillsTitle>버젼관리</InsideVersionSkillsTitle>
          <InsideVersionSkillsWrapper>
            {versionData.map((skill: string, index) => {
              return (
                <SkillImg
                  key={index}
                  src={`/${skill}.png`}
                  onClick={() => toggleVersion(skill)}
                />
              );
            })}
          </InsideVersionSkillsWrapper>
        </VersionSkillsWrapper>
        <DeploySkillsWrapper>
          <InsideDeploySkillsTitle>배포</InsideDeploySkillsTitle>
          <InsideDeploySkillsWrapper>
            {deployData.map((skill: string, index) => {
              return (
                <SkillImg
                  key={index}
                  src={`/${skill}.png`}
                  onClick={() => toggleDeploy(skill)}
                />
              );
            })}
          </InsideDeploySkillsWrapper>
        </DeploySkillsWrapper>
      </NextSkillsWrapper>
    </SkillsWrapper>
  );
};

export default Skills;
