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

  const toggleFront = (skill: string, e) => {
    setFrontData((oldState: string[]) =>
      oldState.filter((item) => item !== skill)
    );
    setSkillData((oldState: string[]) => [...oldState, skill]);
    e.stopPropagation();
  };

  const toggleBack = (skill: string, e) => {
    setBackData((oldState: string[]) =>
      oldState.filter((item) => item !== skill)
    );
    setSkillData((oldState: string[]) => [...oldState, skill]);
    e.stopPropagation();
  };

  const toggleDeploy = (skill: string, e) => {
    setDeployData((oldState: string[]) =>
      oldState.filter((item) => item !== skill)
    );
    setSkillData((oldState: string[]) => [...oldState, skill]);
    e.stopPropagation();
  };

  const toggleVersion = (skill: string, e) => {
    setVersionData((oldState: string[]) =>
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

  const toggleFrontAll = (
    e: React.MouseEvent<HTMLImageElement, MouseEvent>
  ) => {
    if (frontData.length !== 0) {
      setSkillData((oldState: string[]) => oldState.concat(frontData));
      setFrontData([]);
      console.log(frontData);
    } else {
      setFrontData(frontSkills);
      setSkillData((oldState: string[]) =>
        oldState.filter((item) => !frontSkills.includes(item))
      );
    }
    e.stopPropagation();
  };

  const toggleBackAll = (e: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
    if (backData.length !== 0) {
      setSkillData((oldState: string[]) => oldState.concat(backData));
      setBackData([]);
      console.log(backData);
    } else {
      setBackData(backSkills);
      setSkillData((oldState: string[]) =>
        oldState.filter((item) => !backSkills.includes(item))
      );
    }
    e.stopPropagation();
  };
  const toggleVersionAll = (
    e: React.MouseEvent<HTMLImageElement, MouseEvent>
  ) => {
    if (versionData.length !== 0) {
      setSkillData((oldState: string[]) => oldState.concat(versionData));
      setVersionData([]);
      console.log(versionData);
    } else {
      setVersionData(versionSkills);
      setSkillData((oldState: string[]) =>
        oldState.filter((item) => !versionSkills.includes(item))
      );
    }
    e.stopPropagation();
  };
  const toggleDeployAll = (
    e: React.MouseEvent<HTMLImageElement, MouseEvent>
  ) => {
    if (deployData.length !== 0) {
      setSkillData((oldState: string[]) => oldState.concat(deployData));
      setDeployData([]);
      console.log(deployData);
    } else {
      setDeployData(deploySkills);
      setSkillData((oldState: string[]) =>
        oldState.filter((item) => !deploySkills.includes(item))
      );
    }
    e.stopPropagation();
  };

  const flipLeftCard = () => {
    setIfClickedLeft((oldState: boolean) => !oldState);
  };

  const flipRightCard = () => {
    setIfClickedRight((oldState: boolean) => !oldState);
  };

  return (
    <SkillsWrapper name="skills">
      <SkillsArea>
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
                  <InsideFrontSkillsTitle onClick={toggleFrontAll}>
                    프론트엔드
                  </InsideFrontSkillsTitle>
                  <InsideFrontSkillsWrapper>
                    {frontData.map((skill: string, index) => {
                      return (
                        <Tilt key={index}>
                          <SkillImg
                            src={`/${skill}.png`}
                            onClick={(e) => toggleFront(skill, e)}
                          />
                        </Tilt>
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
                        <Tilt key={index}>
                          <SkillImg
                            src={`/${skill}.png`}
                            onClick={(e) => toggleBack(skill, e)}
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
                  <InsideVersionSkillsTitle onClick={toggleVersionAll}>
                    버젼관리
                  </InsideVersionSkillsTitle>
                  <InsideVersionSkillsWrapper>
                    {versionData.map((skill: string, index) => {
                      return (
                        <Tilt key={index}>
                          <SkillImg
                            key={index}
                            src={`/${skill}.png`}
                            onClick={(e) => toggleVersion(skill, e)}
                          />
                        </Tilt>
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
                        <Tilt key={index}>
                          <SkillImg
                            key={index}
                            src={`/${skill}.png`}
                            onClick={(e) => toggleDeploy(skill, e)}
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
