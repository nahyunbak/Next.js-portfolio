import {
  BackCard,
  CardLogo,
  CardWrapper,
  CareerLi,
  CareerWrapper,
  FrontCard,
  HomeCard,
  HomeContentsWrapper,
  HomeImgWrapper,
  HomeIntrodueArea,
  HomeReadMoreButton,
  HomeTextWrapper,
  HomeTitleArea,
  HomeTitleText1,
  HomeTitleText2,
  HomeTitleText3,
  HomeWomanImg,
  HomeWrapper,
  MailIcon,
  Obj1,
  Obj2,
  Obj3,
  ProfileDetail,
  ProfileDetailWrapper,
  ProfileImg,
  ProfileName,
} from "./StyledHome";
import Tilt from "react-parallax-tilt";
import { useRecoilValue } from "recoil";
import { lanState } from "../../recoilAtom/language";
import { LiWrapper } from "../GlobalStyle";

const Greet = () => {
  const lanList = useRecoilValue(lanState);
  return (
    <HomeWrapper name="greet">
      <Obj1 />
      <Obj2 />
      <Obj3 />
      <HomeContentsWrapper>
        <HomeTextWrapper>
          <HomeTitleArea>
            <HomeTitleText1>{lanList.greet.title1}</HomeTitleText1>
            <HomeTitleText2>{lanList.greet.title2}</HomeTitleText2>
            <HomeTitleText3>{lanList.greet.title3}</HomeTitleText3>
          </HomeTitleArea>
          <HomeIntrodueArea>
            {lanList.greet.text1}
            <br /> {lanList.greet.text2}
            <br /> {lanList.greet.text3}
          </HomeIntrodueArea>

          <LiWrapper
            to="aboutme"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            <HomeReadMoreButton>Read More</HomeReadMoreButton>
          </LiWrapper>
        </HomeTextWrapper>
        <HomeImgWrapper>
          <HomeWomanImg src="/girlcomputer.png" />

          <CardWrapper>
            <HomeCard>
              <FrontCard>
                <ProfileImg src="/face.png" />
                <ProfileName>{lanList.greet.cardTitle}</ProfileName>
                <ProfileDetailWrapper>
                  <ProfileDetail>{lanList.greet.cardName}</ProfileDetail>
                </ProfileDetailWrapper>
              </FrontCard>
              <BackCard>
                <CardLogo src="/logo.png" />
                <CareerWrapper>
                  <CareerLi>{lanList.greet.cardText1}</CareerLi>
                  <CareerLi>{lanList.greet.cardText2}</CareerLi>
                  <CareerLi>{lanList.greet.cardText3}</CareerLi>
                  <CareerLi>{lanList.greet.cardText4}</CareerLi>
                </CareerWrapper>
              </BackCard>
            </HomeCard>
          </CardWrapper>
        </HomeImgWrapper>
      </HomeContentsWrapper>
    </HomeWrapper>
  );
};

export default Greet;
