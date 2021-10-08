import { GlobalLink } from "../GlobalStyle";
import {
  FooterArea,
  FooterFacebook,
  FooterGithub,
  FooterLinkedin,
  FooterLinkImgWrapper,
  FooterText,
  FooterTextArea,
  FooterWrapper,
} from "./StyledFooter";

const Footer = () => {
  return (
    <>
      <FooterWrapper>
        <FooterArea>
          <FooterLinkImgWrapper>
            <GlobalLink href="https://www.facebook.com/profile.php?id=100023140757673">
              <FooterFacebook />
            </GlobalLink>
            <GlobalLink href="https://www.linkedin.com/in/%EB%82%98%ED%98%84-%EB%B0%95-7390b21a6/">
              <FooterLinkedin />
            </GlobalLink>
            <GlobalLink href="https://github.com/nahyunbak/">
              <FooterGithub />
            </GlobalLink>
          </FooterLinkImgWrapper>
          <FooterTextArea>
            <FooterText>☎ : 010-9167-5977</FooterText>
            <FooterText> 📧 : nahyunbak@naver.com</FooterText>
          </FooterTextArea>
        </FooterArea>
      </FooterWrapper>
    </>
  );
};

export default Footer;
