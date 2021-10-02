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
