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
  ObjFish1,
  ObjFish2,
  ObjFish3,
  ObjFish4,
  ObjFish5,
  ObjWhale,
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
      <ObjWhale src="/background/whale.png" />
      <ObjFish1 src="/background/fish1.png" />
      <ObjFish2 src="/background/fish1.png" />
      <ObjFish3 src="/background/fish1.png" />
      <ObjFish4 src="/background/fish3.png" />
      <ObjFish5 src="/background/fish5.png" />
      <AboutArea data-aos="fade-up">
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
    </AboutWrapper>
  );
};
export default About;
