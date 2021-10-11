import styled, { css } from "styled-components";

import { AiFillMail } from "react-icons/ai";
import {
  removeLiDeco,
  glassStyle,
  titleStyle,
  horizontalCenterStyle,
} from "../GlobalStyle";
import { FaSchool } from "react-icons/fa";
import {
  BsFillHouseDoorFill,
  BsFillPersonFill,
  BsFillCalendarFill,
} from "react-icons/bs";
import { IoCallSharp } from "react-icons/io5";
import { NameType } from "../../dto";

const AboutIconSize = css`
  font-size: 1.3rem;
  padding: 10px;
  border-radius: 50%;

  color: white;
  margin-right: 20px;
  @media (max-width: 1100px) {
    font-size: 0.8rem;
  }
  @media (max-width: 900px) {
    font-size: 1.3rem;
  }
  @media (max-width: 504px) {
    font-size: 1.1rem;
  }
  @media (max-width: 378px) {
    font-size: 1rem;
  }
  @media (max-width: 348px) {
    display: none;
  }
`;

const AboutCardStyle = css`
  width: 350px;
  height: 100px;
  display: flex;

  justify-content: center;
  align-items: center;
  transition: 0.5s;
  &:hover {
    background-image: linear-gradient(-20deg, #e9defa 0%, #fbfcdb 100%);
    transform: scale(1.1) translateY(20px);
  }

  @media (max-width: 1700px) {
    width: 350px;
  }
  @media (max-width: 1400px) {
    width: 300px;
  }
  @media (max-width: 1100px) {
    width: 250px;
  }
  @media (max-width: 900px) {
    width: 300px;
  }
  @media (max-width: 730px) {
    width: 350px;
    height: 80px;
  }
  @media (max-width: 504px) {
    width: 70vw;
    height: 70px;
  }
`;

export const AboutWrapper = styled.div<NameType>`
  width: 100vw;
  height: 1000px;
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
  @media (max-width: 730px) {
    height: 1200px;
  }
`;

export const AboutArea = styled.div`
  ${glassStyle};
  width: 1300px;
  height: 700px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background: rgba(255, 255, 255, 0.2);

  @media (max-width: 1400px) {
    width: 90%;
  }
  @media (max-width: 900px) {
    height: 900px;
  }
  @media (max-width: 730px) {
    height: 1000px;
  }
`;

export const AboutTitle = styled.div`
  ${glassStyle};

  ${titleStyle}
  margin-top: 20px;
  @media (max-width: 730px) {
    width: 80vw;
    margin: 50px 0px;
  }
  @media (max-width: 550px) {
    font-size: 2.5rem;
  }
  @media (max-width: 350px) {
    font-size: 2rem;
    height: 80px;
  }
  @media (max-width: 300px) {
    font-size: 1.7rem;
  }
`;
export const AboutContentsWrapper = styled.div`
  width: 1300px;
  height: 400px;
  ${horizontalCenterStyle};
  flex-wrap: wrap;
  @media (max-width: 1400px) {
    width: 100%;
  }
  @media (max-width: 900px) {
    height: 600px;
  }
  @media (max-width: 730px) {
    height: 2000px;
  }
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
  @media (max-width: 1400px) {
    font-size: 1.3rem;
  }
  @media (max-width: 1100px) {
    font-size: 1.1rem;
  }
  @media (max-width: 900px) {
    font-size: 1.3rem;
  }
  @media (max-width: 400px) {
    font-size: 1rem;
  }
  @media (max-width: 279px) {
    font-size: 0.8rem;
  }
`;
