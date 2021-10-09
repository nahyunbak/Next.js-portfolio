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
import { useRecoilValue } from "recoil";
import { lanState } from "../../recoilAtom/language";

const About = () => {
  const lanList = useRecoilValue(lanState);
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

                <AboutText>{lanList.about.name}</AboutText>
              </AboutNameCardWrapper>
            </Tilt>

            <Tilt>
              <AboutBirthCardWrapper>
                <AboutIconBirth />
                <AboutText>{lanList.about.birth}</AboutText>
              </AboutBirthCardWrapper>
            </Tilt>
            <Tilt>
              <AboutLiveCardWrapper>
                <AboutIconLive />

                <AboutText>{lanList.about.address}</AboutText>
              </AboutLiveCardWrapper>
            </Tilt>
            <Tilt>
              <AboutPhoneCardWrapper>
                <AboutIconPhone />

                <AboutText>{lanList.about.phone}</AboutText>
              </AboutPhoneCardWrapper>
            </Tilt>
            <Tilt>
              <AboutMailCardWrapper>
                <AboutIconMail />

                <AboutText>{lanList.about.email}</AboutText>
              </AboutMailCardWrapper>
            </Tilt>

            <Tilt>
              <AboutUnivCardWrapper>
                <AboutIconUniv />

                <AboutText>{lanList.about.univ}</AboutText>
              </AboutUnivCardWrapper>
            </Tilt>
          </AboutContentsWrapper>
        </AboutArea>
      </Parallax>
    </AboutWrapper>
  );
};
export default About;
