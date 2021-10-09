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
  HomeWomanImg,
  HomeWrapper,
  MailIcon,
  ProfileDetail,
  ProfileDetailWrapper,
  ProfileImg,
  ProfileName,
} from "./StyledHome";
import Tilt from "react-parallax-tilt";
import { useRecoilValue } from "recoil";
import { lanState } from "../../recoilAtom/language";

const Greet = () => {
  const lanList = useRecoilValue(lanState);
  return (
    <HomeWrapper name="greet">
      <HomeContentsWrapper>
        <HomeTextWrapper>
          <HomeTitleArea>
            {lanList.greet.title1}
            <br />
            {lanList.greet.title2}
            <br />
            {lanList.greet.title3}
          </HomeTitleArea>
          <HomeIntrodueArea>
            {lanList.greet.text1}
            <br /> {lanList.greet.text2}
            <br /> {lanList.greet.text3}
          </HomeIntrodueArea>

          <HomeReadMoreButton>Read More</HomeReadMoreButton>
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
