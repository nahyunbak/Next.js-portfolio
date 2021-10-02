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

const Greet = () => {
  return (
    <HomeWrapper>
      <HomeContentsWrapper>
        <HomeTextWrapper>
          <HomeTitleArea>
            안녕하세요
            <br />
            JS 개발자
            <br />
            박나현입니다
          </HomeTitleArea>
          <HomeIntrodueArea>
            빠른 손
            <br />
            맡은 일은 끝까지 책임지는 근성
            <br /> 개발에 품은 애정이 제 장점입니다.
          </HomeIntrodueArea>

          <HomeReadMoreButton>Read More</HomeReadMoreButton>
        </HomeTextWrapper>
        <HomeImgWrapper>
          <HomeWomanImg src="/girlcomputer.png" />

          <CardWrapper>
            <HomeCard>
              <FrontCard>
                <ProfileImg src="/face.png" />
                <ProfileName>박나현</ProfileName>
                <ProfileDetailWrapper>
                  <ProfileDetail>JS 개발자</ProfileDetail>
                </ProfileDetailWrapper>
              </FrontCard>
              <BackCard>
                <CardLogo src="/logo.png" />
                <CareerWrapper>
                  <CareerLi>✔ 성실함 </CareerLi>
                  <CareerLi>✔ 책임감을 타고남 </CareerLi>
                  <CareerLi>✔ 열정적인 사람 </CareerLi>
                  <CareerLi>✔ 높은 영어구사력 </CareerLi>
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
