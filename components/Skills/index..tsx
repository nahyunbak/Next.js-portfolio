import { useState } from "react";
import { SkillsWrapper } from "./StyledSkillts";

const Skills = () => {
  const [skillData, setSkillData] = useState(["github", "deploy"]);
  const [frontData, setFrontData] = useState([]);
  const [backData, setBackData] = useState([]);
  const frontSkills = ["github"];
  const backSkills = ["deploy"];
  const removeImg = (skill) => {
    setSkillData((oldState) => oldState.filter((item) => item !== skill));
    console.log(skillData);
    if (frontSkills.includes(skill)) {
      setFrontData((oldState) => [...oldState, skill]);
    }
    if (backSkills.includes(skill)) {
      setFrontData((oldState) => [...oldState, skill]);
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

  return (
    <>
      <SkillsWrapper>
        {skillData.map((skill: string, index) => {
          return (
            <img
              key={index}
              src={`/${skill}.png`}
              onClick={() => removeImg(skill)}
            />
          );
        })}

        {backData.map((skill: string, index) => {
          return (
            <img
              key={index}
              src={`/${skill}.png`}
              onClick={() => toggleBack(skill)}
            />
          );
        })}
      </SkillsWrapper>
      {frontData.map((skill: string, index) => {
        return (
          <img
            key={index}
            src={`/${skill}.png`}
            onClick={() => toggleFront(skill)}
          />
        );
      })}
    </>
  );
};

export default Skills;
