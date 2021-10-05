import styled, { css } from "styled-components";

import { AiFillMail } from "react-icons/ai";
import { removeLiDeco, glassStyle, titleStyle } from "../GlobalStyle";
import { FaSchool } from "react-icons/fa";
import {
  BsFillHouseDoorFill,
  BsFillPersonFill,
  BsFillCalendarFill,
} from "react-icons/bs";
import { IoCallSharp } from "react-icons/io5";

const AboutIconSize = css`
  font-size: 1.3rem;
  padding: 10px;
  border-radius: 50%;

  color: white;
  margin-right: 20px;
`;

const AboutCardStyle = css`
  width: 400px;
  height: 100px;
  display: flex;

  justify-content: center;
  align-items: center;
  transition: 0.5s;
  &:hover {
    background-image: linear-gradient(-20deg, #e9defa 0%, #fbfcdb 100%);
    transform: scale(1.1) translateY(20px);
  }
`;

export const AboutWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(to top, #9795f0 0%, #fbc8d4 100%);
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-top: -130px;
`;

export const AboutArea = styled.div`
  ${glassStyle};
  width: 1600px;
  height: 700px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background: rgba(255, 255, 255, 0.2);
`;

export const AboutTitle = styled.div`
  ${glassStyle};

  ${titleStyle}
  margin-top: 20px;
`;
export const AboutContentsWrapper = styled.div`
  width: 1500px;
  height: 400px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
`;

export const AboutNameCardWrapper = styled.div`
  ${glassStyle};
  ${AboutCardStyle}
  color: #550000;
`;

export const AboutIconName = styled(BsFillPersonFill)`
  ${AboutIconSize}
  background-color: #550000;
`;
export const AboutMailCardWrapper = styled.div`
  ${glassStyle};
  ${AboutCardStyle};
  color: #6e3b00;
`;
export const AboutIconMail = styled(AiFillMail)`
  ${AboutIconSize}
  background-color:#6e3b00;
`;

export const AboutUnivCardWrapper = styled.div`
  ${glassStyle};
  ${AboutCardStyle}

  color: #152a15;
`;
export const AboutIconUniv = styled(FaSchool)`
  ${AboutIconSize}
  background-color: #152a15;
`;

export const AboutLiveCardWrapper = styled.div`
  ${glassStyle};
  ${AboutCardStyle}
  color: #0e0280;
`;

export const AboutIconLive = styled(BsFillHouseDoorFill)`
  ${AboutIconSize}
  background-color: #0e0280;
`;
export const AboutBirthCardWrapper = styled.div`
  ${glassStyle};
  ${AboutCardStyle}
  color: #004b55;
`;

export const AboutIconBirth = styled(BsFillCalendarFill)`
  ${AboutIconSize}
  background-color: #004b55;
`;
export const AboutPhoneCardWrapper = styled.div`
  ${glassStyle};
  ${AboutCardStyle}
  color: #3e004b;
`;

export const AboutIconPhone = styled(IoCallSharp)`
  ${AboutIconSize}
  background-color: #3e004b;
`;

export const AboutText = styled.li`
  ${removeLiDeco};
  font-size: 1.6rem;
  font-weight: 900;
`;

/**
 * 
 * const About = () => {
  return <AboutWrapper>
      <AboutContentsWrapper>
          <AboutCardWrapper>
              <AboutIconWrapper>
                  <AboutIconMail/>
              </AboutIconWrapper>
              <AboutCardMail></AboutCardMail>
              <AboutCardDetail></AboutCardMailDetail>
          </AboutCardWrapper>
          <AboutCardWrapper>
              <AboutIconWrapper>
                  <AboutIconUniv/>
              </AboutIconWrapper>
              <AboutCardText></AboutCardUniv>
              <AboutCardUnivDetail></AboutCardUnivDetail>
          </AboutCardWrapper>
          <AboutCardWrapper>
              <AboutIconWrapper>
                  <AboutIconLive/>
              </AboutIconWrapper>
              <AboutCardLive></AboutCardLive>
              <AboutCardLiveDetail></AboutCardLiveDetail>
          </AboutCardWrapper>
      </AboutContentsWrapper>
  </AboutWrapper>;
};
export default About;

 * 
 */
