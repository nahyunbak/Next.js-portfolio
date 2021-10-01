import {
  HomeCard,
  HomeContentsWrapper,
  HomeImgWrapper,
  HomeIntrodueArea,
  HomeReadMoreButton,
  HomeTextWrapper,
  HomeTitleArea,
  HomeWomanImg,
  HomeWrapper,
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
          <HomeCard />
        </HomeImgWrapper>
      </HomeContentsWrapper>
    </HomeWrapper>
  );
};

export default Greet;
