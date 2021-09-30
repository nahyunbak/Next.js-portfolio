import styled from "styled-components";
export const HomeWrapper = styled.div`
  width: 100vw;
  height: 1200px;
`;

export const HomeContentsWrapper = styled.div`
  width: 90vw;
  height: 1000px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const HomeTextWrapper = styled.div`
  width: 450px;
  height: 800px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

export const HomeTitleArea = styled.div`
  width: 400px;
  height: 300px;
  color: white;
  font-size: 2.5rem;
`;

export const HomeIntrodueArea = styled.div`
  width: 400px;
  height: 200px;
  color: white;
  font-size: 2rem;
`;

export const HomeReadMoreButton = styled.div`
  width: 200px;
  height: 80px;
  border-radius: 14px;
  background-image: linear-gradient(-20deg, #b721ff 0%, #21d4fd 100%);
`;

export const HomeImgWrapper = styled.div`
  width: 450px;
  height: 800px;
`;

export const HomeWomanImg = styled.img`
  width: 300px;
  height: 400px;
`;

export const HomeCard = styled.div`
  width: 200px;
  height: 300px;
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
