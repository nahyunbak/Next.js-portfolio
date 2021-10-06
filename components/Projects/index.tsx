import { useState } from "react";
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
  ProjectsImgRight,
  ProjectsImgWrapper,
  ProjectsIntroduction,
  ProjectsLinkWrapper,
  ProjectsTextTitle,
  ProjectsTextWrapper,
  ProjectsVelog,
  ProjectsWrapper,
  ProjectTitle,
} from "./StyledProjects";

//nested 프로젝트가 반복되며, props의 값에 따라 display 가 정해진다.
const Projects = () => {
  const [pageNum, setPageNum] = useState<number>(1);
  const maxNum = 3;
  const increasePageNum = () => {
    if (pageNum !== maxNum) {
      setPageNum((oldState: number) => oldState + 1);
    } else {
      setPageNum(1);
    }
  };

  const decreasePageNum = () => {
    if (pageNum !== 1) {
      setPageNum((oldState: number) => oldState - 1);
    } else {
      setPageNum(maxNum);
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
                    <ProjectsImg src={`/github.png`} />
                    <ProjectsImgController>
                      <ProjectsImgLeft />
                      <ProjectsImgRight />
                    </ProjectsImgController>
                  </ProjectsImgWrapper>
                  <ProjectsTextWrapper>
                    <ProjectsTextTitle>개인 포트폴리오</ProjectsTextTitle>
                    <ProjectsIntroduction>
                      자기 PR 목적으로 만든 개인용 포트폴리오입니다. Next.js와
                      Recoil 등 최신 기술을 ts와 함께 사용해보고자 제작했습니다.
                      <br />
                      <br />
                      취업용, 개인PR용인 만큼 자기소개, 보유 기술, 프로젝트 등을
                      어떻게 효과적으로 보여줄 수 있을까에 초점을 맞췄습니다
                      <br />
                      <br />
                      Next.js와 ts에 익숙해진 것은 물론이고, 다양한 로직을
                      짜보면서 새삼스럽게 프로그래밍의 재미를 느꼈던
                      프로젝트였습니다.
                      <br />
                      <br />
                      css 테크닉에 대한 이해도 할 수 있어 굉장히 보람찼습니다.
                      <br />
                      <br />✔ 사용 기술: TS, Next.js, React.js
                      <br />
                      <br />✔ 배포: Vercel
                    </ProjectsIntroduction>
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
                    <ProjectsImg src={`/git.png`} />
                    <ProjectsImgController>
                      <ProjectsImgLeft />
                      <ProjectsImgRight />
                    </ProjectsImgController>
                  </ProjectsImgWrapper>
                  <ProjectsTextWrapper>
                    <ProjectsTextTitle>개인 포트폴리오</ProjectsTextTitle>

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
                      <ProjectsImgLeft />
                      <ProjectsImgRight />
                    </ProjectsImgController>
                  </ProjectsImgWrapper>
                  <ProjectsTextWrapper>
                    <ProjectsTextTitle>개인 포트폴리오</ProjectsTextTitle>

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
