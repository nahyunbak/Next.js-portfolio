import Link from "next/link";
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
const Home = () => {
  return (
    <HomeWrapper>
      <HomeContentsWrapper>
        <HomeTextWrapper>
          <HomeTitleArea>개발자 박나현입니다</HomeTitleArea>
          <HomeIntrodueArea>개발이 취미에요!!</HomeIntrodueArea>
          <HomeReadMoreButton>Read More</HomeReadMoreButton>
        </HomeTextWrapper>
        <HomeImgWrapper>
          <HomeWomanImg />
          <HomeCard />
        </HomeImgWrapper>
      </HomeContentsWrapper>
    </HomeWrapper>
  );
};

export default Home;
