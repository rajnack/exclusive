import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Footer() {
  return (
    <>
      <FooterSection>
        <Wrapper>
          <TopContainer>
            <FooterTop>
              {/* Section for Exclusive */}
              <FooterColumn>
                <FooterHeading>Exclusive</FooterHeading>
                <FooterText to="">Subscribe</FooterText>
                <FooterItem to="">Get 10% off your first order</FooterItem>
                <FooterItem to="">
                  <EnterBar>
                    <EnterInput type="email" placeholder="Enter your email" />
                    <EnterButton>
                      <SendIcon
                        src={require("../../assets/images/send.svg").default}
                        alt="send-icon"
                      />
                    </EnterButton>
                  </EnterBar>
                </FooterItem>
              </FooterColumn>

              {/* Section for Support */}
              <FooterColumn>
                <FooterHeading>Support</FooterHeading>
                <FooterItem to="">
                  111 Bijoy Sarani, Dhaka, Bangladesh.
                </FooterItem>
                <FooterItem to="">exclusive@gmail.com</FooterItem>
                <FooterItem to="">+88015-88888-9999</FooterItem>
              </FooterColumn>

              {/* Section for Account */}
              <FooterColumn>
                <FooterHeading>Account</FooterHeading>
                <FooterItem to="">My Account</FooterItem>
                <FooterItem to="">Login / Register</FooterItem>
                <FooterItem to="">Cart</FooterItem>
                <FooterItem to="">Wishlist</FooterItem>
                <FooterItem to="">Shop</FooterItem>
              </FooterColumn>

              {/* Section for Quick Links */}
              <FooterColumn>
                <FooterHeading>Quick Links</FooterHeading>
                <FooterItem to="">Privacy Policy</FooterItem>
                <FooterItem to="">Terms Of Use</FooterItem>
                <FooterItem to="">FAQ</FooterItem>
                <FooterItem to="">Contact</FooterItem>
              </FooterColumn>

              {/* Section for App Download */}
              <FooterColumn>
                <FooterHeading>Download App</FooterHeading>
                <FooterParagraph to="">
                  Save $3 with App New User Only
                </FooterParagraph>
                <Icons>
                  <ScannerCode
                    src={require("../../assets/images/Qrcode 1.svg").default}
                    alt="qr-icon"
                  />
                  <Media>
                    <Atag
                      href="https://play.google.com/store"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <AppIcon
                        src={
                          require("../../assets/images/GooglePlay.svg").default
                        }
                        alt="google-play-icon"
                      />
                    </Atag>

                    {/* Link for App Store */}
                    <Atag
                      href="https://www.apple.com/app-store/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <AppIcon
                        src={
                          require("../../assets/images/AppStore.svg").default
                        }
                        alt="app-store-icon"
                      />
                    </Atag>
                  </Media>
                </Icons>
              </FooterColumn>
            </FooterTop>
          </TopContainer>
        </Wrapper>
        <FooterBottom>
          <CopyrightIcon
            src={require("../../assets/images/icon-copyright.svg").default}
            alt="copyright"
          />
          <Copyright>Copyright Rimel 2022. All rights reserved</Copyright>
        </FooterBottom>
      </FooterSection>
    </>
  );
}

const FooterSection = styled.footer`
  background: #000;
  padding-top: 50px;
  color: #fafafa;
`;
const Atag = styled.a`
  cursor: pointer;
  margin: 5px 0;
`;

const TopContainer = styled.div`
  // display: flex;
  // justify-content: center;
`;

const Wrapper = styled.div`
  max-width: 1790px;
  width: 80%;
  margin: 0 auto;
`;

const FooterTop = styled.div`
  display: flex;
  justify-content: space-between;
  // flex-wrap: wrap;
  gap: 50px;
  padding-bottom: 40px;
`;

const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const FooterHeading = styled.h4`
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 15px;
`;

const FooterText = styled(Link)`
  font-size: 20px;
  font-weight: 500;
  text-decoration: none;
  color: #fff;
`;

const FooterItem = styled(Link)`
  margin-bottom: 10px;
  font-size: 16px;
  font-weight: 400;
  text-decoration: none;
  line-height: 24px;
  color: #fff;
  width: 100%;
`;

const EnterBar = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
  position: relative;
`;

const EnterInput = styled.input`
  width: 200px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  background: #000;
  color: #fafafa;
`;

const EnterButton = styled.button`
  background: #000;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  position: absolute;
  right: 3%;
  top: 50%;
  transform: translateY(-50%);
  width: 18%;
  height: auto;
`;

const SendIcon = styled.img`
  width: 20px;
  height: 20px;
`;

const FooterParagraph = styled(Link)`
  font-size: 12px;
  font-weight: 500;
  color: #fff;
  text-decoration: none;
`;

const Icons = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

const ScannerCode = styled.img`
  width: 80px;
  height: 80px;
`;

const Media = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const AppIcon = styled.img`
  width: 100%;
  display: block;
`;

const FooterBottom = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  border-top: 1px solid #ffffff;
  text-align: center;
  opacity: 0.2;
`;

const CopyrightIcon = styled.img`
  width: 20px;
  margin-right: 5px;
`;

const Copyright = styled.p`
  font-size: 14px;
  margin: 0;
`;

export default Footer;
