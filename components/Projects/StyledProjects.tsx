import styled, { css } from "styled-components";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { ImBlogger } from "react-icons/im";
import { AiOutlineGithub } from "react-icons/ai";

import { MdOutlinePageview } from "react-icons/md";
import {
  glassStyle,
  horizontalCenterStyle,
  insideTitleStyle,
  titleStyle,
  verticalCenterStyle,
} from "../GlobalStyle";
import { NumType } from "../../dto";

const nestedProjectStyle = css`
  width: 100%auto;
  height: 100%auto;
  position: absolute;
  ${verticalCenterStyle}
`;
export const ProjectsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 130vh;
  background-image: linear-gradient(to top, #f43b47 0%, #453a94 100%);
`;

export const ProjectsArea = styled.div`
  width: 1800px;
  height: 1200px;
`;

export const CarouselWrapper = styled.div`
  width: 1800px;
  height: 1000px;
  ${horizontalCenterStyle}
`;

export const CarouselLeft = styled(IoIosArrowBack)`
  font-size: 2rem;
  color: white;
`;

export const CarouselRight = styled(IoIosArrowForward)`
  font-size: 2rem;
  color: white;
`;

export const CarouselArea = styled.div`
  ${glassStyle}
  width: 1600px;
  height: 1000px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NestedProjectAreaA = styled.div<NumType>`
  ${nestedProjectStyle}
  display: ${(props) => (props.pageNum === 1 ? "flex" : "none")};
`;

export const NestedProjectAreaB = styled.div<NumType>`
  ${nestedProjectStyle}
  display: ${(props) => (props.pageNum === 2 ? "flex" : "none")};
`;

export const NestedProjectAreaC = styled.div<NumType>`
  ${nestedProjectStyle}
  display: ${(props) => (props.pageNum === 3 ? "flex" : "none")};
`;

export const ProjectTitle = styled.div`
  ${titleStyle};
`;

export const ProjectsContents = styled.div`
  ${horizontalCenterStyle};
  justify-content: space-between;
  width: 1300px;
  height: 700px;
`;

export const ProjectsImgWrapper = styled.div`
  ${verticalCenterStyle};
  width: 500px;
  height: 600px;
`;

export const ProjectsImg = styled.img`
  width: 200px;
  height: 200px;
  padding: 20px;
  ${glassStyle}
`;

export const ProjectsImgController = styled.div`
  ${horizontalCenterStyle};
`;

export const ProjectsImgLeft = styled(IoIosArrowBack)`
  font-size: 1.3rem;
  color: white;
`;

export const ProjectsImgRight = styled(IoIosArrowForward)`
  font-size: 1.3rem;
  color: white;
`;

export const ProjectsTextWrapper = styled.div`
  ${verticalCenterStyle};
  width: 600px;
  height: 650px;
  ${glassStyle};
  margin-top: 60px;
  background: rgba(255, 255, 255, 0.3);
`;

export const ProjectsTextTitle = styled.div`
  ${insideTitleStyle};
`;
export const ProjectsIntroduction = styled.div`
  width: 500px;
  height: 450px;
  font-size: 1.4rem;
`;

export const ProjectsLinkWrapper = styled.div`
  width: 200px;
  height: 80px;
  margin-left: 250px;
  margin-bottom: 10px;
  ${horizontalCenterStyle}
`;

export const ProjectsGit = styled(AiOutlineGithub)`
  font-size: 3rem;
`;
export const ProjectsVelog = styled(ImBlogger)`
  font-size: 3rem;
`;

export const ProjectsDeploy = styled(MdOutlinePageview)`
  font-size: 3rem;
`;
export const CarouselController = styled.div`
  width: 800px;
  height: 200px;
`;

export const CarouselDot = styled.div`
  width: 4px;
  height: 4px;
  border-radius: 50%;
`;
/**
 * 
 * 
 * 
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
                    <ProjectsImg />
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

    
  );
 */
