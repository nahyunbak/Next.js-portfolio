import { useCallback, useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { lanState } from "../../recoilAtom/language";
import { GlobalLink } from "../GlobalStyle";
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
  ProjectsBottomeWrapper,
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
  const lanList = useRecoilValue(lanState);
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

  const movePageNum = useCallback(
    (targetPage) => {
      setPageNum(targetPage);
    },
    [setPageNum]
  );

  useEffect(
    () => setPortfolioImgNum(1),
    [increasePageNum, decreasePageNum, movePageNum]
  );

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
      <ProjectsWrapper name="projects">
        <ProjectsArea data-aos="fade-up">
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
                    <ProjectsTextTitle>
                      {lanList.projects.first.projectTitle}
                    </ProjectsTextTitle>
                    <ProjectsIntroduction>
                      {lanList.projects.first.projectText1}
                      <br />
                      <br />
                      {lanList.projects.first.projectText2}
                      <br />
                      <br />
                      {lanList.projects.first.projectText3}

                      <br />
                    </ProjectsIntroduction>
                    <ProjectsBottomeWrapper>
                      <ProjectsLinkWrapper>
                        <GlobalLink href="https://github.com/nahyunbak/Next.js-portfolio">
                          <ProjectsGit />
                        </GlobalLink>
                        <GlobalLink href="https://velog.io/@nahyunbak/Next.js%EC%99%80-TS-%EA%B8%80%EB%9E%98%EC%8A%A4%EB%AA%A8%ED%94%BC%EC%A6%98%EC%9C%BC%EB%A1%9C-%ED%8F%AC%ED%8A%B8%ED%8F%B4%EB%A6%AC%EC%98%A4-%EC%A0%9C%EC%9E%91%ED%95%98%EA%B8%B0-1-%EA%B5%AC%EC%83%81">
                          <ProjectsVelog />
                        </GlobalLink>
                        <GlobalLink href="www.nahyunbak.me">
                          <ProjectsDeploy />
                        </GlobalLink>
                      </ProjectsLinkWrapper>
                      <ProjectsStackWrapper>
                        <br /> {lanList.projects.first.skillStack}
                        <br />
                        <br />
                        {lanList.projects.first.deployStack}
                      </ProjectsStackWrapper>
                    </ProjectsBottomeWrapper>
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
                    <ProjectsTextTitle>
                      {lanList.projects.second.projectTitle}
                    </ProjectsTextTitle>
                    <ProjectsIntroduction>
                      {lanList.projects.second.projectText1}
                      <br />
                      <br />
                      {lanList.projects.second.projectText2}
                      <br />
                      <br />
                      {lanList.projects.second.projectText3}
                      <br />
                      <br />
                      {lanList.projects.second.projectText4}
                    </ProjectsIntroduction>
                    <ProjectsBottomeWrapper>
                      <ProjectsLinkWrapper>
                        <GlobalLink href="https://github.com/nahyunbak/react-portfolio-ballet">
                          <ProjectsGit />
                        </GlobalLink>
                        <GlobalLink href="https://velog.io/@nahyunbak/Next.js%EC%99%80-TS-%EA%B8%80%EB%9E%98%EC%8A%A4%EB%AA%A8%ED%94%BC%EC%A6%98%EC%9C%BC%EB%A1%9C-%ED%8F%AC%ED%8A%B8%ED%8F%B4%EB%A6%AC%EC%98%A4-%EC%A0%9C%EC%9E%91%ED%95%98%EA%B8%B0-1-%EA%B5%AC%EC%83%81">
                          <ProjectsVelog />
                        </GlobalLink>
                        <GlobalLink href="https://silly-meninsky-e1fc3e.netlify.app/">
                          <ProjectsDeploy />
                        </GlobalLink>
                      </ProjectsLinkWrapper>
                      <ProjectsStackWrapper>
                        <br />
                        {lanList.projects.second.skillStack}
                        <br />
                        <br /> {lanList.projects.second.deployStack}
                      </ProjectsStackWrapper>
                    </ProjectsBottomeWrapper>
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
                    <ProjectsTextTitle>
                      {lanList.projects.third.projectTitle}
                    </ProjectsTextTitle>
                    <ProjectsIntroduction>
                      <br />
                      {lanList.projects.third.projectText1}
                      <br />
                      <br />
                      {lanList.projects.third.projectText2}
                      <br />
                      <br /> {lanList.projects.third.projectText3}
                      <br />
                      <br />
                      {lanList.projects.third.projectText4}
                    </ProjectsIntroduction>
                    <ProjectsBottomeWrapper>
                      <ProjectsLinkWrapper>
                        <GlobalLink href="https://github.com/nahyunbak/nestjs-writingapp-backend">
                          <ProjectsGit />
                        </GlobalLink>
                        <GlobalLink href="https://velog.io/@nahyunbak/Next.js%EC%99%80-TS-%EA%B8%80%EB%9E%98%EC%8A%A4%EB%AA%A8%ED%94%BC%EC%A6%98%EC%9C%BC%EB%A1%9C-%ED%8F%AC%ED%8A%B8%ED%8F%B4%EB%A6%AC%EC%98%A4-%EC%A0%9C%EC%9E%91%ED%95%98%EA%B8%B0-1-%EA%B5%AC%EC%83%81">
                          <ProjectsVelog />
                        </GlobalLink>
                        <GlobalLink href="silly-meninsky-e1fc3e.netlify.app">
                          <ProjectsDeploy />
                        </GlobalLink>
                      </ProjectsLinkWrapper>
                      <ProjectsStackWrapper>
                        <br />
                        {lanList.projects.third.skillStack}
                        <br />
                        <br />
                        {lanList.projects.third.deployStack}
                      </ProjectsStackWrapper>
                    </ProjectsBottomeWrapper>
                  </ProjectsTextWrapper>
                </ProjectsContents>
              </NestedProjectAreaC>
            </CarouselArea>
            <CarouselRight onClick={increasePageNum} />
          </CarouselWrapper>
          <CarouselController>
            <CarouselDot
              onClick={(e) => {
                movePageNum(1);
              }}
            />
            <CarouselDot
              onClick={(e) => {
                movePageNum(2);
              }}
            />
            <CarouselDot
              onClick={(e) => {
                movePageNum(3);
              }}
            />
          </CarouselController>
        </ProjectsArea>
      </ProjectsWrapper>
    </>
  );
};

export default Projects;
