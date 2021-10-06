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
                      <ProjectsGit></ProjectsGit>
                      <ProjectsVelog></ProjectsVelog>
                      <ProjectsDeploy></ProjectsDeploy>
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
                    <ProjectsTextTitle>글쓰기 앱 백엔드</ProjectsTextTitle>

                    <ProjectsIntroduction></ProjectsIntroduction>
                    <ProjectsLinkWrapper>
                      <ProjectsGit></ProjectsGit>
                      <ProjectsVelog></ProjectsVelog>
                      <ProjectsDeploy></ProjectsDeploy>
                    </ProjectsLinkWrapper>
                  </ProjectsTextWrapper>
                </ProjectsContents>
              </NestedProjectAreaB>
              <NestedProjectAreaC pageNum={pageNum}>
                <ProjectTitle>PROJECTS</ProjectTitle>
                <ProjectsContents>
                  <ProjectsImgWrapper>
                    <ProjectsImg src={`/next.png`} />
                    <ProjectsImgController>
                      <ProjectsImgLeft
                        onClick={(e) => {
                          decreasePortfolioImg(maxNumA);
                        }}
                      />
                      <ProjectsImgNum>
                        {portfolioImgNum} / {maxNumB}
                      </ProjectsImgNum>
                      <ProjectsImgRight
                        onClick={(e) => {
                          increasePortfolioImg(maxNumA);
                        }}
                      />
                    </ProjectsImgController>
                  </ProjectsImgWrapper>
                  <ProjectsTextWrapper>
                    <ProjectsTextTitle>글쓰기 앱 백엔드</ProjectsTextTitle>

                    <ProjectsIntroduction></ProjectsIntroduction>
                    <ProjectsLinkWrapper>
                      <ProjectsGit></ProjectsGit>
                      <ProjectsVelog></ProjectsVelog>
                      <ProjectsDeploy></ProjectsDeploy>
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
