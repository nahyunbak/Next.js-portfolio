import styled, { css } from "styled-components";

const glassStyle = css`
  background: rgba(255, 255, 255, 0.05);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(15px);
  border-radius: 20px;
`;

export const HomeWrapper = styled.div`
  width: 100vw;
  height: 140vh;
  background-image: linear-gradient(-20deg, #2b5876 0%, #4e4376 100%);
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-top: -130px;
`;

export const HomeContentsWrapper = styled.div`
  width: 70vw;
  height: 750px;
  margin-top: -200px;
  display: flex;
  justify-content: center;
  align-items: center;
  ${glassStyle}
  z-index: 0;
`;

export const HomeTextWrapper = styled.div`
  width: 450px;
  height: 650px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

export const HomeTitleArea = styled.div`
  width: 500px;
  height: 150px;
  color: white;
  font-size: 5rem;
  font-weight: 600;
`;

export const HomeIntrodueArea = styled.div`
  width: 500px;
  height: 200px;
  color: white;
  font-size: 1.5rem;
  margin-top: 200px;
`;

export const HomeReadMoreButton = styled.div`
  width: 150px;
  height: 80px;
  border-radius: 14px;
  background-image: linear-gradient(-20deg, #b721ff 0%, #21d4fd 100%);
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.1rem;
`;

export const HomeImgWrapper = styled.div`
  width: 700px;
  height: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HomeWomanImg = styled.img`
  width: 510px;
  height: 680px;
  margin-right: 60px;
`;

export const HomeCard = styled.div`
  width: 200px;
  height: 300px;
  ${glassStyle}
  z-index:100;
  position: absolute;
  top: 200px;
  right: 60px;
  background: rgba(255, 255, 255, 0.5);
`;
/**
 * 
 * 
  
  import Link from "next/link";
  const Header = () => {
    return (
      <HomeWrapper>
          <HomeContentsWrapper>
              <HomeTextWrapper>
                  <HomeTitleArea></HomeTitleArea>
                  <HomeIntrodueArea></HomeIntrodueArea>
                  <HomeReadMoreButton></HomeReadMoreButton>
              </HomeTextWrapper>
            <HomeImgWrapper>
                <HomeWomanImg/>
                <HomeCard/>

            </HomeImgWrapper>

          </HomeContentsWrapper>


      </HomeWrapper>
    );
  };
  
  export default Header;
  
 * 
 */
