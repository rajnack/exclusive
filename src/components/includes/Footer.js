import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <FooterMainContainer>
        <Wrapper>
          <TopSection>
            <SubscribeSection>
              <Content>
                <SectionTitleMain>Exclusive</SectionTitleMain>
                <SectionSubtitle>Subscribe</SectionSubtitle>
                <OfferText>Get 10% off your first order</OfferText>
                <Form>
                  <InputField placeholder="Enter your email" />
                  <SendButton>
                    <SendIcon
                      src={
                        require("../../assets/images/send.svg").default
                      }
                      alt="send-icon"
                    />
                  </SendButton>
                </Form>
              </Content>
            </SubscribeSection>

            <SupportSection>
              <Content>
                <SectionTitle>Support</SectionTitle>
                <ContactDetails>
                  <ContactItem>
                    111 Bijoy sarani, Dhaka, <br /> DH 1515, Bangladesh.
                  </ContactItem>
                  <ContactItem>exclusive@gmail.com</ContactItem>
                  <ContactItem>+88015-88888-9999</ContactItem>
                </ContactDetails>
              </Content>
            </SupportSection>

            <AccountSection>
              <Content>
                <SectionTitle>Account</SectionTitle>
                <LinksList>
                  <LinkItem>My Account</LinkItem>
                  <LinkItem>Login / Register</LinkItem>
                  <LinkItem>Cart</LinkItem>
                  <LinkItem>Wishlist</LinkItem>
                  <LinkItem>Shop</LinkItem>
                </LinksList>
              </Content>
            </AccountSection>

            <QuickLinksSection>
              <Content>
                <SectionTitle>Quick Links</SectionTitle>
                <LinksList>
                  <LinkItem>Privacy Policy</LinkItem>
                  <LinkItem>Terms Of Use</LinkItem>
                  <LinkItem>FAQ</LinkItem>
                  <LinkItem>Contact</LinkItem>
                </LinksList>
              </Content>
            </QuickLinksSection>

            <DownloadSection>
              <Content>
                <SectionTitle>Download App</SectionTitle>
                <PromotionText>Save $3 with App New User Only</PromotionText>
                <DownloadOptions>
                  <QRCode>
                    <QRCodeImage
                      src={
                        require("../../assets/images/Qrcode 1.svg").default
                      }
                      alt=""
                    />
                  </QRCode>
                  <AppInstallers>
                    <GooglePlayButton>
                      <GooglePlayImage
                        src={
                          require("../../assets/images/GooglePlay.svg")
                            .default
                        }
                        alt=""
                      />
                    </GooglePlayButton>
                    <AppStoreButton>
                      <AppStoreImage
                        src={
                          require("../../assets/images/AppStore.svg")
                            .default
                        }
                        alt=""
                      />
                    </AppStoreButton>
                  </AppInstallers>
                </DownloadOptions>
                <SocialLinks>
                  <FacebookLink to={"#"}>
                    <FacebookIcon
                      src={
                        require("../../assets/images/facebook.svg")
                          .default
                      }
                      alt="facebook-icon"
                    />
                  </FacebookLink>
                  <TwitterLink to={"#"}>
                    <TwitterIcon
                      src={
                        require("../../assets/images/twitter.svg").default
                      }
                      alt="twitter-icon"
                    />
                  </TwitterLink>
                  <InstagramLink to={"#"}>
                    <InstagramIcon
                      src={
                        require("../../assets/images/icon-instagram.svg")
                          .default
                      }
                      alt="instagram-icon"
                    />
                  </InstagramLink>
                  <LinkedInLink to={"#"}>
                    <LinkedInIcon
                      src={
                        require("../../assets/images/Icon-Linkedin.svg")
                          .default
                      }
                      alt="linkedin-icon"
                    />
                  </LinkedInLink>
                </SocialLinks>
              </Content>
            </DownloadSection>
          </TopSection>
          </Wrapper>
          <BottomSection>
            <FooterTextContainer>
              <CopyrightWrapper>
                <CopyrightIcon
                  src={
                    require("../../assets/images/icon-copyright.svg")
                      .default
                  }
                  alt="copyright-icon"
                />
              </CopyrightWrapper>
              <FooterText>Copyright Rimel 2022. All right reserved</FooterText>
            </FooterTextContainer>
          </BottomSection>
      </FooterMainContainer>
    </>
  );
};

const FooterMainContainer = styled.footer`
  width: 100%;
  background-color: #000;
  
  margin-top: 60px;
`;
const Wrapper = styled.div`
  max-width: 1790px;
  width: 80%;
  margin: 0 auto;
`;
const TopSection = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 80px 0 40px 0;
  @media(max-width:1024px) {
  flex-wrap: wrap;
  gap:56px;
  justify-content: center;}
  @media(max-width:980px) {
  flex-wrap: wrap;
  gap: 59px;
  justify-content: center;}
  @media(max-width:768px) {
  flex-wrap: wrap;
  gap: 58px;
  justify-content: center;}
  @media(max-width:680px) {
  flex-wrap: wrap;
  gap: 57px;
  justify-content:space-between;}
  @media(max-width:320px) {
  flex-wrap: wrap;
  gap: 33px;
  justify-content: space-between;}
`;
const SubscribeSection = styled.div``;
const Content = styled.div``;
const SectionTitleMain = styled.h2`
  margin: 0;
  color: #fff;
  font-size: 24px;
  font-weight: 700;
  @media(max-width:480px) {
  font-size: 20px;}
`;
const SectionSubtitle = styled.h3`
  margin: 0;
  font-size: 20px;
  font-weight: 500;
  color: #fff;
  padding: 24px 0px;
  @media(max-width:480px) {
  font-size: 18px;}
`;
const SectionTitle = styled.h2`
  margin: 0;
  color: #fff;
  font-size: 20px;
  font-weight: 500;
  padding-bottom: 24px;
  @media(max-width:480px) {
  font-size: 18px;}
`;
const OfferText = styled.p`
  margin: 0;
  font-size: 16px;
  font-weight: 400;
  color: #fff;
`;
const Form = styled.form`
  padding: 7px 10px;
  border-radius: 4px;
  border: 1.5px solid #fff;
  margin: 16px 0;
`;
const InputField = styled.input`
  background: #000;
  color: #fafafa;
  border: none;
  font-size: 16px;
  font-weight: 400;
  width:150px;
`;
const SendButton = styled.button`
  border: none;
  background: #000;
  cursor: pointer;
`;
const SendIcon = styled.img``;

const SupportSection = styled.div``;
const ContactDetails = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;
const ContactItem = styled.li`
  color: #fff;
  font-size: 16px;
  font-weight: 400;
  cursor: pointer;

  &:nth-child(2) {
    padding: 18px 0;
  }
`;

const AccountSection = styled.div``;
const LinksList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;
const LinkItem = styled.li`
  color: #fff;
  font-size: 16px;
  font-weight: 400;
  cursor: pointer;

  &:nth-child(2) {
    padding: 18px 0;
  }

  &:nth-child(4) {
    padding: 18px 0;
  }
`;

const QuickLinksSection = styled.div``;

const DownloadSection = styled.div``;
const PromotionText = styled.p`
  color: #a9a9a9;
  margin: 0;
  font-size: 12px;
  font-weight: 500;
`;
const DownloadOptions = styled.div`
  display: flex;
  gap: 13px;
  padding: 10px 0;
`;
const QRCode = styled.div`
  cursor: pointer;
`;
const QRCodeImage = styled.img``;
const AppInstallers = styled.div``;
const GooglePlayButton = styled.div`
  cursor: pointer;
`;
const GooglePlayImage = styled.img``;
const AppStoreButton = styled.div`
  cursor: pointer;
`;
const AppStoreImage = styled.img``;

const SocialLinks = styled.div`
  display: flex;
  gap: 24px;
  margin-top: 5px;
  align-items: center;
`;
const FacebookLink = styled(Link)``;
const TwitterLink = styled(Link)``;
const InstagramLink = styled(Link)``;
const LinkedInLink = styled(Link)``;

const FacebookIcon = styled.img``;
const TwitterIcon = styled.img``;
const InstagramIcon = styled.img``;
const LinkedInIcon = styled.img``;

const BottomSection = styled.div``;
const FooterTextContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  align-items: center;
  padding: 40px 0 20px 0;
   border-top: 1px solid #ffffff;
    opacity: 0.2;
    @media (max-width: 1024px) {
    padding:30px 0 20px 0;}
    @media(max-width:680px){
    padding:20px 0px 20px 0;
    }
`;
const CopyrightWrapper = styled.div`
  width: 20px;
  height: 20px;
`;
const CopyrightIcon = styled.img`
  width: 20px;
  margin-right: 5px;
`;
const FooterText = styled.p`
  color: #ffffff;
  margin: 0;
  font-size: 16px;
  font-weight: 400;
  @media (max-width: 360px) {
font-size:14px;}
`;

export default Footer;