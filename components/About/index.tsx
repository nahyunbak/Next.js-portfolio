import {
  AboutArea,
  AboutBirthCardWrapper,
  AboutContentsWrapper,
  AboutIconBirth,
  AboutIconLive,
  AboutIconMail,
  AboutIconName,
  AboutIconPhone,
  AboutIconUniv,
  AboutLiveCardWrapper,
  AboutMailCardWrapper,
  AboutNameCardWrapper,
  AboutPhoneCardWrapper,
  AboutText,
  AboutTitle,
  AboutUnivCardWrapper,
  AboutWrapper,
} from "./StyledHome";
import Tilt from "react-parallax-tilt";
import { Parallax } from "react-scroll-parallax";
import { useEffect } from "react";

const About = () => {
  return (
    <AboutWrapper name="aboutme">
      <Parallax className="custom-class" y={[-20, 20]} tagOuter="figure">
        <AboutArea>
          <Tilt>
            <AboutTitle>ABOUT</AboutTitle>
          </Tilt>
          <AboutContentsWrapper>
            <Tilt>
              <AboutNameCardWrapper>
                <AboutIconName />

                <AboutText>박나현</AboutText>
              </AboutNameCardWrapper>
            </Tilt>

            <Tilt>
              <AboutBirthCardWrapper>
                <AboutIconBirth />

                <AboutText>1995.03.04</AboutText>
              </AboutBirthCardWrapper>
            </Tilt>
            <Tilt>
              <AboutLiveCardWrapper>
                <AboutIconLive />

                <AboutText>경기도 안양시 동안구</AboutText>
              </AboutLiveCardWrapper>
            </Tilt>
            <Tilt>
              <AboutPhoneCardWrapper>
                <AboutIconPhone />

                <AboutText>010-9167-5977</AboutText>
              </AboutPhoneCardWrapper>
            </Tilt>
            <Tilt>
              <AboutMailCardWrapper>
                <AboutIconMail />

                <AboutText>nahyunbak@naver.com</AboutText>
              </AboutMailCardWrapper>
            </Tilt>

            <Tilt>
              <AboutUnivCardWrapper>
                <AboutIconUniv />

                <AboutText>경인교대 초등교육학과</AboutText>
              </AboutUnivCardWrapper>
            </Tilt>
          </AboutContentsWrapper>
        </AboutArea>
      </Parallax>
    </AboutWrapper>
  );
};
export default About;
