import {
  CarouselArea,
  CarouselController,
  CarouselDot,
  CarouselLeft,
  CarouselRight,
  CarouselWrapper,
  NestedProjectArea,
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
  ProjectsTextWrapper,
  ProjectsVelog,
  ProjectsWrapper,
  ProjectTitle,
} from "./StyledProjects";

//nested 프로젝트가 반복되며, props의 값에 따라 display 가 정해진다.
const Projects = () => {
  return (
    <>
      <ProjectsWrapper>
        <ProjectsArea>
          <CarouselWrapper>
            <CarouselLeft />
            <CarouselArea>
              <NestedProjectArea>
                <ProjectTitle></ProjectTitle>
                <ProjectsContents>
                  <ProjectsImgWrapper>
                    <ProjectsImg src={`/github.png`} />
                    <ProjectsImgController>
                      <ProjectsImgLeft />
                      <ProjectsImgRight />
                    </ProjectsImgController>
                  </ProjectsImgWrapper>
                  <ProjectsTextWrapper>
                    <ProjectsIntroduction></ProjectsIntroduction>
                    <ProjectsLinkWrapper>
                      <ProjectsGit></ProjectsGit>
                      <ProjectsVelog></ProjectsVelog>
                      <ProjectsDeploy></ProjectsDeploy>
                    </ProjectsLinkWrapper>
                  </ProjectsTextWrapper>
                </ProjectsContents>
              </NestedProjectArea>
              <NestedProjectArea>
                <ProjectTitle></ProjectTitle>
                <ProjectsContents>
                  <ProjectsImgWrapper>
                    <ProjectsImg src={`/git.png`} />
                    <ProjectsImgController>
                      <ProjectsImgLeft />
                      <ProjectsImgRight />
                    </ProjectsImgController>
                  </ProjectsImgWrapper>
                  <ProjectsTextWrapper>
                    <ProjectsIntroduction></ProjectsIntroduction>
                    <ProjectsLinkWrapper>
                      <ProjectsGit></ProjectsGit>
                      <ProjectsVelog></ProjectsVelog>
                      <ProjectsDeploy></ProjectsDeploy>
                    </ProjectsLinkWrapper>
                  </ProjectsTextWrapper>
                </ProjectsContents>
              </NestedProjectArea>
              <NestedProjectArea>
                <ProjectTitle></ProjectTitle>
                <ProjectsContents>
                  <ProjectsImgWrapper>
                    <ProjectsImg src={`/next.png`} />
                    <ProjectsImgController>
                      <ProjectsImgLeft />
                      <ProjectsImgRight />
                    </ProjectsImgController>
                  </ProjectsImgWrapper>
                  <ProjectsTextWrapper>
                    <ProjectsIntroduction></ProjectsIntroduction>
                    <ProjectsLinkWrapper>
                      <ProjectsGit></ProjectsGit>
                      <ProjectsVelog></ProjectsVelog>
                      <ProjectsDeploy></ProjectsDeploy>
                    </ProjectsLinkWrapper>
                  </ProjectsTextWrapper>
                </ProjectsContents>
              </NestedProjectArea>
            </CarouselArea>
            <CarouselRight />
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
