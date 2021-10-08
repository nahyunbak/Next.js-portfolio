import { useCallback, useEffect, useState } from "react";
import {
  CarouselArea,
  CarouselController,
  CarouselDot,
  CarouselLeft,
  CarouselRight,
  CarouselWrapper,
  NestedProjectAreaA,
  NestedProjectAreaB,
  NestedProjectAreaC,
  ProjectsArea,
  ProjectsContents,
  ProjectsDeploy,
  ProjectsGit,
  ProjectsImg,
  ProjectsImgController,
  ProjectsImgLeft,
  ProjectsImgNum,
  ProjectsImgRight,
  ProjectsImgWrapper,
  ProjectsIntroduction,
  ProjectsLink,
  ProjectsLinkWrapper,
  ProjectsStackWrapper,
  ProjectsTextTitle,
  ProjectsTextWrapper,
  ProjectsVelog,
  ProjectsWrapper,
  ProjectTitle,
} from "./StyledProjects";

//nested 프로젝트가 반복되며, props의 값에 따라 display 가 정해진다.
const Projects = () => {
  const [pageNum, setPageNum] = useState<number>(1);
  const [portfolioImgNum, setPortfolioImgNum] = useState<number>(1);

  const maxNum = 3;
  const maxNumA = 3;
  const maxNumB = 5;
  const maxNumC = 2;

  const increasePageNum = useCallback(() => {
    if (pageNum !== maxNum) {
      setPageNum((oldState: number) => oldState + 1);
    } else {
      setPageNum(1);
    }
  }, [pageNum, maxNum]);

  const decreasePageNum = useCallback(() => {
    if (pageNum !== 1) {
      setPageNum((oldState: number) => oldState - 1);
    } else {
      setPageNum(maxNum);
    }
  }, [pageNum, maxNum]);

  useEffect(() => setPortfolioImgNum(1), [increasePageNum, decreasePageNum]);

  const increasePortfolioImg = (maxNumber: number) => {
    if (portfolioImgNum !== maxNumber) {
      setPortfolioImgNum((oldState) => oldState + 1);
    } else {
      setPortfolioImgNum(() => 1);
    }
  };

  const decreasePortfolioImg = (maxNumber: number) => {
    if (portfolioImgNum !== 1) {
      setPortfolioImgNum((oldState) => oldState - 1);
    } else {
      setPortfolioImgNum(() => maxNumber);
    }
  };

  return (
    <>
      <ProjectsWrapper>
        <ProjectsArea>
          <CarouselWrapper>
            <CarouselLeft onClick={decreasePageNum} />
            <CarouselArea>
              <NestedProjectAreaA pageNum={pageNum}>
                <ProjectTitle>PROJECTS</ProjectTitle>
                <ProjectsContents>
                  <ProjectsImgWrapper>
                    {portfolioImgNum === 1 ? (
                      <ProjectsImg src={`/projects/portfolioA1.jpg`} />
                    ) : (
                      ""
                    )}
                    {portfolioImgNum === 2 ? (
                      <ProjectsImg src={`/projects/portfolioA2.jpg`} />
                    ) : (
                      ""
                    )}
                    {portfolioImgNum === 3 ? (
                      <ProjectsImg src={`/projects/portfolioA3.jpg`} />
                    ) : (
                      ""
                    )}
                    <ProjectsImgController>
                      <ProjectsImgLeft
                        onClick={(e) => {
                          decreasePortfolioImg(maxNumA);
                        }}
                      />
                      <ProjectsImgNum>
                        {portfolioImgNum} / {maxNumA}
                      </ProjectsImgNum>
                      <ProjectsImgRight
                        onClick={(e) => {
                          increasePortfolioImg(maxNumA);
                        }}
                      />
                    </ProjectsImgController>
                  </ProjectsImgWrapper>
                  <ProjectsTextWrapper>
                    <ProjectsTextTitle>개인 포트폴리오</ProjectsTextTitle>
                    <ProjectsIntroduction>
                      개인 포트폴리오입니다. Next.js와 Recoil 등 최신 기술과
                      타입스크립트로 제작했습니다.
                      <br />
                      <br />
                      자기소개· 보유 기술· 프로젝트 등의 정보를 효과적으로
                      유저에게 전달하고자 디자인과 스타일언어, 기술 측면에서
                      많은 노력을 기울였습니다.
                      <br />
                      <br />
                      꼭 써보고 싶었던 Next.js와 ts에 익숙해진 것은 물론이고,
                      다양한 로직을 짜보면서 새삼스럽게 프로그래밍의 재미를
                      느꼈던 소중한 프로젝트입니다.
                      <br />
                    </ProjectsIntroduction>
                    <ProjectsStackWrapper>
                      <br />✔ 사용 기술: TS, Next.js, React.js
                      <br />
                      <br />✔ 배포: Vercel
                    </ProjectsStackWrapper>
                    <ProjectsLinkWrapper>
                      <ProjectsLink href="https://github.com/nahyunbak/Next.js-portfolio">
                        <ProjectsGit />
                      </ProjectsLink>
                      <ProjectsLink href="https://velog.io/@nahyunbak/Next.js%EC%99%80-TS-%EA%B8%80%EB%9E%98%EC%8A%A4%EB%AA%A8%ED%94%BC%EC%A6%98%EC%9C%BC%EB%A1%9C-%ED%8F%AC%ED%8A%B8%ED%8F%B4%EB%A6%AC%EC%98%A4-%EC%A0%9C%EC%9E%91%ED%95%98%EA%B8%B0-1-%EA%B5%AC%EC%83%81">
                        <ProjectsVelog />
                      </ProjectsLink>
                      <ProjectsLink href="www.nahyunbak.me">
                        <ProjectsDeploy />
                      </ProjectsLink>
                    </ProjectsLinkWrapper>
                  </ProjectsTextWrapper>
                </ProjectsContents>
              </NestedProjectAreaA>
              <NestedProjectAreaB pageNum={pageNum}>
                <ProjectTitle>PROJECTS</ProjectTitle>
                <ProjectsContents>
                  <ProjectsImgWrapper>
                    {portfolioImgNum === 1 ? (
                      <ProjectsImg src={`/projects/portfolioB1.jpg`} />
                    ) : (
                      ""
                    )}
                    {portfolioImgNum === 2 ? (
                      <ProjectsImg src={`/projects/portfolioB2.jpg`} />
                    ) : (
                      ""
                    )}
                    {portfolioImgNum === 3 ? (
                      <ProjectsImg src={`/projects/portfolioB3.jpg`} />
                    ) : (
                      ""
                    )}
                    {portfolioImgNum === 4 ? (
                      <ProjectsImg src={`/projects/portfolioB4.jpg`} />
                    ) : (
                      ""
                    )}
                    {portfolioImgNum === 5 ? (
                      <ProjectsImg src={`/projects/portfolioB5.jpg`} />
                    ) : (
                      ""
                    )}
                    <ProjectsImgController>
                      <ProjectsImgLeft
                        onClick={(e) => {
                          decreasePortfolioImg(maxNumB);
                        }}
                      />
                      <ProjectsImgNum>
                        {portfolioImgNum} / {maxNumB}
                      </ProjectsImgNum>
                      <ProjectsImgRight
                        onClick={(e) => {
                          increasePortfolioImg(maxNumB);
                        }}
                      />
                    </ProjectsImgController>
                  </ProjectsImgWrapper>
                  <ProjectsTextWrapper>
                    <ProjectsTextTitle>개인 포트폴리오(구)</ProjectsTextTitle>
                    <ProjectsIntroduction>
                      발레를 테마로 제작한 개인 포트폴리오입니다. React.js와
                      Redux로 제작했습니다.
                      <br />
                      <br />
                      리액트와 리덕스 툴킷을 사용하여 만든 첫 포트폴리오라는
                      점에서 의미가 깊습니다.
                      <br />
                      <br />
                      다만 단순한 디자인, 정적인 interaction, 렌더링 속도를
                      고려하지 않은 코드 등 부족한 부분이 점점 크게
                      느껴졌습니다. 동시에 직관적인 SEO와 상태관리를 향한 열망도
                      커졌습니다.
                      <br />
                      <br />
                      하여 현재의 포트폴리오 사이트를 새로 제작하게 되었습니다.
                    </ProjectsIntroduction>
                    <ProjectsStackWrapper>
                      <br />✔ 사용 기술: JS, React.js, Redux.js
                      <br />
                      <br />✔ 배포: Netlify
                    </ProjectsStackWrapper>
                    <ProjectsLinkWrapper>
                      <ProjectsLink href="https://github.com/nahyunbak/react-portfolio-ballet">
                        <ProjectsGit />
                      </ProjectsLink>
                      <ProjectsLink href="https://velog.io/@nahyunbak/Next.js%EC%99%80-TS-%EA%B8%80%EB%9E%98%EC%8A%A4%EB%AA%A8%ED%94%BC%EC%A6%98%EC%9C%BC%EB%A1%9C-%ED%8F%AC%ED%8A%B8%ED%8F%B4%EB%A6%AC%EC%98%A4-%EC%A0%9C%EC%9E%91%ED%95%98%EA%B8%B0-1-%EA%B5%AC%EC%83%81">
                        <ProjectsVelog />
                      </ProjectsLink>
                      <ProjectsLink href="https://silly-meninsky-e1fc3e.netlify.app/">
                        <ProjectsDeploy />
                      </ProjectsLink>
                    </ProjectsLinkWrapper>
                  </ProjectsTextWrapper>
                </ProjectsContents>
              </NestedProjectAreaB>
              <NestedProjectAreaC pageNum={pageNum}>
                <ProjectTitle>PROJECTS</ProjectTitle>
                <ProjectsContents>
                  <ProjectsImgWrapper>
                    {portfolioImgNum === 1 ? (
                      <ProjectsImg src={`/projects/portfolioC1.jpg`} />
                    ) : (
                      ""
                    )}
                    {portfolioImgNum === 2 ? (
                      <ProjectsImg src={`/projects/portfolioC2.jpg`} />
                    ) : (
                      ""
                    )}

                    <ProjectsImgController>
                      <ProjectsImgLeft
                        onClick={(e) => {
                          decreasePortfolioImg(maxNumC);
                        }}
                      />
                      <ProjectsImgNum>
                        {portfolioImgNum} / {maxNumC}
                      </ProjectsImgNum>
                      <ProjectsImgRight
                        onClick={(e) => {
                          increasePortfolioImg(maxNumC);
                        }}
                      />
                    </ProjectsImgController>
                  </ProjectsImgWrapper>
                  <ProjectsTextWrapper>
                    <ProjectsTextTitle>글쓰기 앱(백엔드)</ProjectsTextTitle>
                    <ProjectsIntroduction>
                      <br />
                      글쓰기 앱의 백엔드를 구현한 프로젝트입니다. Nest.js와
                      MongoDB를 사용하여 제작했습니다.
                      <br />
                      <br />
                      Nest.js와 TS, 공식문서에 익숙해진 계기가 된
                      프로젝트였습니다.
                      <br />
                      <br /> 다만 관계가 중시되는 데이터를 처리하는 데 MongoDB를
                      사용했다는 점, guard 등 기능 이해가 미흡하다는 점에서
                      아쉬움이 남습니다.
                      <br />
                      <br />
                      조만간 RDBMS와 다양한 인증 전략을 사용하여 TDD방식으로
                      다시 개발하고자 합니다.
                    </ProjectsIntroduction>
                    <ProjectsStackWrapper>
                      <br />✔ 사용 기술: Nest.js, MongoDB
                      <br />
                      <br />✔ 배포: AWS EC2, Linux, NGINX
                    </ProjectsStackWrapper>
                    <ProjectsLinkWrapper>
                      <ProjectsLink href="https://github.com/nahyunbak/nestjs-writingapp-backend">
                        <ProjectsGit />
                      </ProjectsLink>
                      <ProjectsLink href="https://velog.io/@nahyunbak/Next.js%EC%99%80-TS-%EA%B8%80%EB%9E%98%EC%8A%A4%EB%AA%A8%ED%94%BC%EC%A6%98%EC%9C%BC%EB%A1%9C-%ED%8F%AC%ED%8A%B8%ED%8F%B4%EB%A6%AC%EC%98%A4-%EC%A0%9C%EC%9E%91%ED%95%98%EA%B8%B0-1-%EA%B5%AC%EC%83%81">
                        <ProjectsVelog />
                      </ProjectsLink>
                      <ProjectsLink href="silly-meninsky-e1fc3e.netlify.app">
                        <ProjectsDeploy />
                      </ProjectsLink>
                    </ProjectsLinkWrapper>
                  </ProjectsTextWrapper>
                </ProjectsContents>
              </NestedProjectAreaC>
            </CarouselArea>
            <CarouselRight onClick={increasePageNum} />
          </CarouselWrapper>
          <CarouselController>
            <CarouselDot />
            <CarouselDot />
            <CarouselDot />
            <CarouselDot />
          </CarouselController>
        </ProjectsArea>
      </ProjectsWrapper>
    </>
  );
};

export default Projects;
