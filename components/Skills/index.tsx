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
  const frontSkills = ["html", "css", "js", "react", "next", "sass", "ts"];
  const backSkills = ["node", "express", "koa", "mongodb", "mysql", "nest"];
  const deploySkills = ["aws", "netlify"];
  const versionSkills = ["git", "github"];
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

  const toggleFront = (skill: string) => {
    setFrontData((oldState: string[]) =>
      oldState.filter((item) => item !== skill)
    );
    setSkillData((oldState: string[]) => [...oldState, skill]);
  };

  const toggleBack = (skill: string) => {
    setBackData((oldState: string[]) =>
      oldState.filter((item) => item !== skill)
    );
    setSkillData((oldState: string[]) => [...oldState, skill]);
  };

  const toggleDeploy = (skill: string) => {
    setDeployData((oldState: string[]) =>
      oldState.filter((item) => item !== skill)
    );
    setSkillData((oldState: string[]) => [...oldState, skill]);
  };

  const toggleVersion = (skill: string) => {
    setVersionData((oldState: string[]) =>
      oldState.filter((item) => item !== skill)
    );
    setSkillData((oldState: string[]) => [...oldState, skill]);
  };

  const toggleSkillsAll = () => {
    setSkillData([]);
    setFrontData(frontSkills);
    setBackData(backSkills);
    setVersionData(versionSkills);
    setDeployData(deploySkills);
  };

  const toggleFrontAll = () => {
    setSkillData((oldState: string[]) => oldState.concat(frontData));
    setFrontData([]);
  };

  const toggleBackAll = () => {
    setSkillData((oldState: string[]) => oldState.concat(backData));
    setBackData([]);
  };
  const toggleVersionAll = () => {
    setSkillData((oldState: string[]) => oldState.concat(versionData));
    setVersionData([]);
  };
  const toggleDeployAll = () => {
    setSkillData((oldState: string[]) => oldState.concat(deployData));
    setDeployData([]);
  };

  return (
    <SkillsWrapper name="skills">
      <SkillsArea>
        <InsidePrevSkillsTitle onClick={toggleSkillsAll}>
          SKILLS
        </InsidePrevSkillsTitle>
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
        <NextSkillsWrapper ifEmpty={ifEmpty}>
          <InsideLeftSkillsCard>
            <InsideLeftSkillsWrapper>
              <FrontSkillsWrapper>
                <InsideFrontSkillsTitle onClick={toggleFrontAll}>
                  프론트엔드
                </InsideFrontSkillsTitle>
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
                <InsideBackSkillsTitle onClick={toggleBackAll}>
                  백엔드
                </InsideBackSkillsTitle>
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
            </InsideLeftSkillsWrapper>
          </InsideLeftSkillsCard>
          <InsideRightSkillsCard>
            <InsideRightSkillsWrapper>
              <VersionSkillsWrapper>
                <InsideVersionSkillsTitle onClick={toggleVersionAll}>
                  버젼관리
                </InsideVersionSkillsTitle>
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
                <InsideDeploySkillsTitle onClick={toggleDeployAll}>
                  배포
                </InsideDeploySkillsTitle>
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
            </InsideRightSkillsWrapper>
          </InsideRightSkillsCard>
        </NextSkillsWrapper>
      </SkillsArea>
    </SkillsWrapper>
  );
};

export default Skills;
