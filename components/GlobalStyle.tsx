import styled, { css } from "styled-components";

export const BodyWrapper = styled.div`
  width: 100vw;
  height: 140vh;
  background-image: linear-gradient(-20deg, #2b5876 0%, #4e4376 100%);
`;

export const BodyWrapper2 = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(to top, #9795f0 0%, #fbc8d4 100%);
`;

export const Obj1 = styled.div`
  width: 500px;
  height: 500px;
  border-radius: 50%;
  background-image: linear-gradient(-20deg, #e9defa 0%, #fbfcdb 100%);
  position: absolute;
  top: -500px;
`;

export const Obj2 = styled.div`
  width: 400px;
  height: 400px;
  border-radius: 50%;
  background-image: linear-gradient(to top, #9795f0 0%, #fbc8d4 100%);
  margin-top: -400px;
  opacity: 0.5;
  position: absolute;
`;

export const glassStyle = css`
  background: rgba(255, 255, 255, 0.05);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(15px);
  border-radius: 20px;
`;

export const removeLiDeco = css`
  list-style-type: none;
`;

export const cardIconStyle = css`
  font-size: 1rem;
`;

export const titleStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 3rem;
  font-weight: 900;
  color: #363636;
  width: 600px;
  height: 100px;
  border-radius: 20px;

  background-image: linear-gradient(
    to top,
    #dad4ec 0%,
    #dad4ec 1%,
    #f3e7e9 100%
  );
  transition: 0.5s;
  &:hover {
    transform: scale(1.1);
    letter-spacing: 5px;
    background-image: linear-gradient(-20deg, #e9defa 0%, #fbfcdb 100%);
  }
`;

export const insideTitleStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  font-weight: 900;
  color: #363636;
  width: 400px;
  height: 80px;
  margin: 30px;
  background-image: linear-gradient(-20deg, #e9defa 0%, #fbfcdb 100%);

  transition: 0.5s;
  &:hover {
    transform: scale(1.1);
    letter-spacing: 5px;
  }
`;

//새로 중앙정렬

export const verticalCenterStyle = css`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

//가로 중앙정렬

export const horizontalCenterStyle = css`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
