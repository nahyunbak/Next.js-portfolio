import styled, { css } from "styled-components";
import { AiTwotoneMail } from "react-icons/ai";
import { cardIconStyle, glassStyle, removeLiDeco } from "../GlobalStyle";
import { NameType } from "../../dto";

const textAnimationStyle = css`
  opacity: 0;
  list-style-type: none;
  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  animation: fadein 3s;
  animation-fill-mode: forwards;
`;

const circleAnimation = css`
  @keyframes animateCircle {
    0% {
      transform: translateY(500px);
      opacity: 1;
    }

    100% {
      transform: translateY(-2000px);
      opacity: 0.5;
    }
  }
`;
const objStyle = css`
  border-radius: 50%;
  position: absolute;
`;

export const HomeWrapper = styled.div<NameType>`
  width: 100%;
  height: 1200px;
  background-image: linear-gradient(-20deg, #2b5876 0%, #4e4376 100%);
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  top: -130px;
  position: relative;
  overflow: hidden;
`;

export const Obj1 = styled.div`
  animation: animateCircle 40s linear infinite;
  max-width: 500px;
  max-height: 500px;
  width: 25vw;
  height: 25vw;
  ${circleAnimation}
  ${objStyle}
  background-image: linear-gradient(-20deg, #e9defa 0%, #fbfcdb 100%);
  left: 10vw;
  bottom: -250px;
  z-index: 1;
`;

export const Obj2 = styled.div`
  animation: animateCircle 50s linear infinite;
  animation-delay: 10s;
  ${circleAnimation}
  ${objStyle}
  min-width: 300px;
  min-height: 300px;
  width: 30vw;
  height: 30vw;
  background-image: linear-gradient(to top, #9795f0 0%, #fbc8d4 100%);
  opacity: 0.5;
  bottom: -30vw;
  z-index: 1;
`;

export const Obj3 = styled.div`
  animation: animateCircle 20s linear infinite;
  ${circleAnimation}
  ${objStyle}
  max-width: 300px;
  max-height: 300px;
  width: 30vw;
  height: 30vw;

  background-image: linear-gradient(to top, #a8edea 0%, #fed6e3 100%);
  right: -10vw;
  bottom: -30vw;
  z-index: 1;
`;

export const HomeContentsWrapper = styled.div`
  width: 1200px;
  height: 750px;

  padding: 20px 50px;

  margin-top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  ${glassStyle}
  z-index: 1;

  @media (max-width: 1500px) {
    width: 80%;
  }
  @media (max-width: 1327px) {
    padding: 0px 50px;
    margin: 0px 30px;
  }
  @media (max-width: 887px) {
    width: 70%;
  }
  @media (max-width: 550px) {
    width: 65%;
  }
  @media (max-width: 350px) {
    width: 65%;
    padding: 0px 20px;
  }
  @media (max-width: 300px) {
    height: 850px;
  }
`;

export const HomeTextWrapper = styled.div`
  width: 450px;
  height: 600px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  @media (max-width: 1500px) {
    width: 400px;
  }
  @media (max-width: 1227px) {
    width: 300px;
  }
  @media (max-width: 1227px) {
    padding: 50px 0px;
    width: 100%;
  }
`;

export const HomeTitleArea = styled.div`
  width: 500px;
  height: 150px;
  color: white;
  font-size: 5rem;
  font-weight: 600;
  line-height: 93px;
  @media (max-width: 1500px) {
    font-size: 4.5rem;
  }
  @media (max-width: 750px) {
    width: 400px;
    font-size: 3.5rem;
  }
  @media (max-width: 646px) {
    width: 300px;
    font-size: 3rem;
  }
  @media (max-width: 484px) {
    width: 90%;
    font-size: 2.5rem;
    line-height: 80px;
  }
  @media (max-width: 417px) {
    width: 100%;
    font-size: 2.1rem;
    line-height: 80px;
  }
  @media (max-width: 350px) {
    font-size: 1.7rem;
    line-height: 70px;
  }
  @media (max-width: 300px) {
    font-size: 1.5rem;
    line-height: 60px;
    height: 60px;
  }
`;

export const HomeTitleText1 = styled.li`
  ${textAnimationStyle};
`;
export const HomeTitleText2 = styled.li`
  ${textAnimationStyle};
  animation-delay: 0.5s;
`;
export const HomeTitleText3 = styled.li`
  ${textAnimationStyle};
  animation-delay: 1s;
`;

export const HomeIntrodueArea = styled.div`
  ${textAnimationStyle}
  animation-delay: 1.5s;
  width: 500px;
  height: 200px;
  color: white;
  font-size: 1.3rem;
  margin-top: 200px;
  line-height: 40px;
  @media (max-width: 1500px) {
    font-size: 1.2rem;
    line-height: 35px;
  }
  @media (max-width: 1227px) {
    font-size: 1.2rem;
  }

  @media (max-width: 690px) {
    width: 100%;
    font-size: 1.1rem;
  }
  @media (max-width: 484px) {
    width: 90%auto;
  }
  @media (max-width: 300px) {
    height: 500px;
  }
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
  @media (max-width: 750px) {
    margin-top: 60px;
  }

  @media (max-width: 450px) {
    margin-top: 100px;
  }

  @media (max-width: 267px) {
    width: 60vw;
  }
`;

export const HomeImgWrapper = styled.div`
  width: 700px;
  height: 800px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 750px) {
    display: none;
  }
`;

export const HomeWomanImg = styled.img`
  width: 540px;

  margin-right: 10px;
  @media (max-width: 1300px) {
    margin-top: 200px;
    width: 400px;
  }
  @media (max-width: 1206px) {
  }

  @media (max-width: 996px) {
    margin-top: 400px;
    width: 250px;
  }
  @media (max-width: 887px) {
    display: none;
  }
`;

//카드 디자인

export const CardWrapper = styled.div`
  position: absolute;
  width: 200px;
  height: 300px;
  top: 130px;
  right: 0px;
  @media (max-width: 1206px) {
    top: 200px;
    right: -50px;
  }
  @media (max-width: 1090px) {
    display: none;
  }
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
