import { useState } from "react";
import { SkillsWrapper } from "./StyledSkillts";

const Skills = () => {
  const [skillData, setSkillData] = useState(["github", "deploy"]);
  const removeImg = (skill) => {
    const tempSkillData = skillData;
    setSkillData((oldState) => oldState.filter((item) => item !== skill));
    console.log(skillData);
  };

  return (
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
    </SkillsWrapper>
  );
};

export default Skills;
