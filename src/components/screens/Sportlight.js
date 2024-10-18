import React from "react";
import styled from "styled-components";

function Sportlight() {
  return (
    <>
      <Section>
        <Wrapper>
          <Main>
          <LeftContainer>
            <AppleContainer>
              <AppContainer>
                <AppleIcon
                  src={require("../../assets/images/apple.svg").default}
                  alt="apple"
                />
              </AppContainer>
              <SpanText>Iphone 14 series</SpanText>
            </AppleContainer>
            <MainHeading>Up to 10% off Voucher</MainHeading>
            <ShopContainer>
              <ShopButton>Shop Now</ShopButton>
              <IconContainer>
                <IconImage
                  src={require("../../assets/images/Vector.svg").default}
                  alt="arrow"
                />
              </IconContainer>
            </ShopContainer>
          </LeftContainer>
          <RightContainer>
            <PhoneContainer>
              <Phone
                src={require("../../assets/images/iphoneimage.svg").default}
                alt="icon"
              />
            </PhoneContainer>
          </RightContainer>
          </Main>
        </Wrapper>
      </Section>
    </>
  );
}

const Section = styled.div`
  padding: 40px 0 0;
`;
const Wrapper = styled.div`
 
  max-width: 1790px;
  width: 80%;
  margin: 0 auto;
 
`;
const Main=styled.div`
 display: flex;
  justify-content: space-between;
  align-items: center;
  background: #000000;
  border-radius: 10px;
  @media (max-width:360px) {
  background-image: url(../../assets/images/iphoneimage.svg);
  object-fit: cover;
  background-repeat: no-repeat;
  }
`;

const LeftContainer = styled.div`
  padding: 100px;
  @media (max-width:1024px) {
  padding: 60px;}
  @media(max-width:980px){
  padding:45px;
  }
  @media(max-width:768px){
  padding:35px;
  }
  @media(max-width:680px){
  padding:30px;
  }
  @media(max-width:540px){
  padding:25px;}

`;

const AppleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  @media (max-width:540px) {
  gap: 20px;}
`;

const AppContainer = styled.div`
  width: 40px;
  @media (max-width:480px) {
    width: 24px;
  }
`;

const AppleIcon = styled.img`
  width: 100%;
  display:block;
  
`;

const SpanText = styled.span`
  font-size: 16px;
  font-weight: 400;
  color: #fafafa;
  @media(max-width:680px){
  font-size:13px;}
  @media(max-width:540px){
  font-size:11px;}
  @media(max-width:480px) {
  font-size: 12px;
  }
  @media (max-width:360px) {
  width: 100%;
  font-size: 14px;
  }
`;

const MainHeading = styled.h1`
  font-size: 48px;
  font-weight: 600;
  color: #fafafa;
  margin-bottom: 20px;
  margin-top: 20px;
  line-height: 60px;
  width: 289px;
  @media(max-width:1536px) {
  width: 276px; }
  @media (max-width:1280px) {
  width: 288px; }
  @media (max-width:768px) {
  width: 210px; 
  font-size:40px;}
  @media (max-width:680px) {
  font-size:32px;
  width: 170px; }
  @media (max-width:480px) {
  line-height: 34px;
  font-size: 24px;
  }
  
  @media (max-width: 540px) {
    font-size: 28px;
    width: 150px;
    margin-bottom: 15px;
  }

  @media (max-width: 480px) {
    font-size: 26px
  }
`;

const ShopContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const ShopButton = styled.button`
  font-size: 16px;
  font-weight: 500;
  padding: 0px;
  border: none;
  color: #fff;
  background: #000;
  border-bottom: 1px solid;
  @media (max-width:680px) {
  font-size: 13px;
  }
  @media (max-width:540px){
  font-size:12px;
  }
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  width: 12px;
`;

const IconImage = styled.img`
  display:block;
  width: 100%;
`;

const RightContainer = styled.div`
  width: 100%;
`;

const PhoneContainer = styled.div`
  height: 600px;
@media (max-width:1536px) {
    width: 99%;}
@media (max-width: 1280px) {
    width: 100%;
    height: 390px;
  }
    @media (max-width: 980px) {
      height: 390px;
    }
    @media (max-width: 768px) {
    width: 100%;
    height: 360px;
  }
    @media (max-width: 680px) {
    width: 100%;
    height: 330px;
  }
    @media (max-width:540px) {
    height: 325px;}
    @media (max-width:480px) {
    display: flex;
    justify-content: center;
    height:280px;
    }
    @media (max-width:360px) {
    display: none;
    }
`;
const Phone = styled.img`
  width: 100%;
  display:block;
  border-radius: 12px;
  height: 100%;
`;

export default Sportlight;
