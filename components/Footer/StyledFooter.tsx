import styled, { css } from "styled-components";
import { horizontalCenterStyle, verticalCenterStyle } from "../GlobalStyle";
import { BsGithub, BsFacebook, BsLinkedin } from "react-icons/bs";

const footerStyle = css`
  font-size: 2rem;
  color: white;
  cursor: pointer;
`;
export const FooterWrapper = styled.div`
  width: 100vw;
  height: 300px;
  background-color: black;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  @media (max-width: 797px) {
    height: 200px;
  }
`;

export const FooterArea = styled.div`
  width: 400px;
  height: 300px;
  ${verticalCenterStyle}
  margin-bottom: 40px;
  @media (max-width: 797px) {
    height: 200px;
    width: 70vw;
  }
`;

export const FooterLinkImgWrapper = styled.div`
  width: 200px;
  height: 100px;
  ${horizontalCenterStyle};
`;

export const FooterGithub = styled(BsGithub)`
  ${footerStyle}
`;

export const FooterFacebook = styled(BsFacebook)`
  ${footerStyle}
`;

export const FooterLinkedin = styled(BsLinkedin)`
  ${footerStyle}
`;

export const FooterTextArea = styled.div`
  width: 300px;
  height: 50px;
  ${verticalCenterStyle}
`;

export const FooterText = styled.p`
  color: white;
  font-size: 1rem;
`;
/**
 * 
 *     <FooterWrapper>
        <FooterArea>
          <FooterAreaWrapper>
            <FooterLinkImgWrapper>
            <FooterIconWrapper>
              <FooterFacebook />
              <FooterLinkedIn />
              <FooterGithub />
            </FooterLinkImgWrapper>
            <FooterTextArea>
              <FooterText></FooterText>
              <FooterText></FooterText>
            </FooterTextArea>
          </FooterAreaWrapper>
        </FooterArea>
      </FooterWrapper>
    </>
  
 * 
 */
