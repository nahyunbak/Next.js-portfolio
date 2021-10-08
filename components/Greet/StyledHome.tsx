import styled from "styled-components";
import { AiTwotoneMail } from "react-icons/ai";
import { cardIconStyle, glassStyle, removeLiDeco } from "../GlobalStyle";
import { NameType } from "../../dto";

export const HomeWrapper = styled.div<NameType>`
  width: 100vw;
  height: 120vh;
  background-image: linear-gradient(-20deg, #2b5876 0%, #4e4376 100%);
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-top: -130px;
`;

export const HomeContentsWrapper = styled.div`
  width: 1400px;
  height: 900px;
  margin-top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  ${glassStyle}
  z-index: 1;
`;

export const HomeTextWrapper = styled.div`
  width: 450px;
  height: 800px;
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
  line-height: 93px;
`;

export const HomeIntrodueArea = styled.div`
  width: 500px;
  height: 200px;
  color: white;
  font-size: 1.3rem;
  margin-top: 200px;
  line-height: 40px;
`;

export const HomeReadMoreButton = styled.div`
  width: 170px;
  height: 60px;
  border-radius: 14px;

  background-image: linear-gradient(to top, #a18cd1 0%, #fbc2eb 100%);

  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.3rem;
  transition: all ease-in-out 0.3s;
  cursor: pointer;
  margin-top: 30px;
  &:hover {
    background-image: linear-gradient(120deg, #a6c0fe 0%, #f68084 100%);
    letter-spacing: 1px;
  }
`;

export const HomeImgWrapper = styled.div`
  width: 700px;
  height: 800px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HomeWomanImg = styled.img`
  width: 540px;
  height: 720px;
  margin-right: 10px;
`;

//카드 디자인

export const CardWrapper = styled.div`
  position: absolute;
  width: 200px;
  height: 300px;
  top: 130px;
  right: 0px;
`;
export const HomeCard = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 100;
  top: 200px;
  right: 60px;

  transform-style: preserve-3d;
  transition: all 1s ease;
  &:hover {
    transform: rotateY(180deg);
  }
  position: absolute;
`;

export const FrontCard = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 300px;
  ${glassStyle}
  backdrop-filter: blur(0px);
  backface-visibility: hidden;

  color: #fff3f3;
`;

export const ProfileImg = styled.img`
  width: 200px;
  height: 200px;
`;

export const ProfileName = styled.li`
  ${removeLiDeco};
  font-size: 2rem;
  font-weight: 700;
  margin-top: 10px;
`;
export const ProfileDetailWrapper = styled.div`
  margin-top: 8px;
  width: 200px;
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background: rgba(255, 120, 120, 0.5);
  border-radius: 0 0 20px 20px;
`;

export const ProfileDetail = styled.li`
  ${removeLiDeco};

  font-size: 1rem;
  font-weight: 600;
  color: #4e0000;
`;

export const BackCard = styled.div`
  position: absolute;
  width: 200px;
  height: 300px;
  ${glassStyle}
  backdrop-filter: blur(0px);
  backface-visibility: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transform: rotateY(180deg);
`;

export const CardLogo = styled.img`
  width: 220px;
  height: 220px;
  margin-top: -20px;
`;

export const CareerWrapper = styled.div`
  width: 200px;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  margin-top: -30px;
  background: rgba(127, 177, 148, 0.6);
  border-radius: 0px 0px 20px 20px;
  padding-top: 6px;
`;

export const CareerLi = styled.li`
  ${removeLiDeco}
  font-size: 1rem;
  color: #f2fff5;
  text-align: start;
  font-weight: 500;
  margin-left: 20px;
`;

// 아이콘 디자인

export const MailIcon = styled(AiTwotoneMail)`
  ${cardIconStyle}
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
                <HomeCard>
            <FrontCard>
            
            <ProfileImg/>
            <ProfileDetailWrapper>
            <ProfileDetail></ProfileDetail>
            <ProfileDetail></ProfileDetail>
            </ProfileDetailWrapper>

            </FrontCard>
            <BackCard>
            <CardLogo/>
            <CareerLi></CareerLi>
              
            </BackCard>
          


          </HomeCard>

            </HomeImgWrapper>

          </HomeContentsWrapper>


      </HomeWrapper>
    );
  };
  
  export default Header;
  
 * 
 */
