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

const About = () => {
  return (
    <AboutWrapper name="aboutme">
      <AboutArea>
        <AboutTitle>ABOUT</AboutTitle>

        <AboutContentsWrapper>
          <AboutNameCardWrapper>
            <AboutIconName />

            <AboutText>박나현</AboutText>
          </AboutNameCardWrapper>

          <AboutBirthCardWrapper>
            <AboutIconBirth />

            <AboutText>1995.03.04</AboutText>
          </AboutBirthCardWrapper>

          <AboutLiveCardWrapper>
            <AboutIconLive />

            <AboutText>경기도 안양시 동안구</AboutText>
          </AboutLiveCardWrapper>

          <AboutPhoneCardWrapper>
            <AboutIconPhone />

            <AboutText>010-9167-5977</AboutText>
          </AboutPhoneCardWrapper>

          <AboutMailCardWrapper>
            <AboutIconMail />

            <AboutText>nahyunbak@naver.com</AboutText>
          </AboutMailCardWrapper>

          <AboutUnivCardWrapper>
            <AboutIconUniv />

            <AboutText>경인교대 초등교육학과</AboutText>
          </AboutUnivCardWrapper>
        </AboutContentsWrapper>
      </AboutArea>
    </AboutWrapper>
  );
};
export default About;
