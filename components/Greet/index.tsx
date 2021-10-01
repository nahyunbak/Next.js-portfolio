import {
  BackCard,
  CardLogo,
  CardWrapper,
  CareerLi,
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
  ProfileDetail,
  ProfileDetailWrapper,
  ProfileImg,
} from "./StyledHome";
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
                <ProfileDetailWrapper>
                  <ProfileDetail>주소</ProfileDetail>
                  <ProfileDetail>메일</ProfileDetail>
                </ProfileDetailWrapper>
              </FrontCard>
              <BackCard>
                <CardLogo src="/logo.png" />
                <CareerLi>js개발자</CareerLi>
              </BackCard>
            </HomeCard>
          </CardWrapper>
        </HomeImgWrapper>
      </HomeContentsWrapper>
    </HomeWrapper>
  );
};

export default Greet;
