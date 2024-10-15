import React from "react";
import styled from "styled-components";

function Sportlight() {
  return (
    <>
      <Section>
        <Wrapper>
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
        </Wrapper>
      </Section>
    </>
  );
}

const Section = styled.div`
  display: flex;
  justify-content: center;
  padding: 40px 0 0;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #000000;
  max-width: 1790px;
  width: 80%;
  border-radius: 10px;
`;

const LeftContainer = styled.div`
  padding: 100px;
`;

const AppleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`;

const AppContainer = styled.div`
  width: 40px;
`;

const AppleIcon = styled.img`
  width: 100%;
`;

const SpanText = styled.span`
  font-size: 16px;
  font-weight: 400;
  color: #fafafa;
`;

const MainHeading = styled.h1`
  font-size: 48px;
  font-weight: 600;
  color: #fafafa;
  margin-bottom: 20px;
  margin-top: 20px;
  line-height: 60px;
  width: 294px;
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
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
`;

const IconImage = styled.img`
  width: 100%;
`;

const RightContainer = styled.div``;

const PhoneContainer = styled.div`
  width: 830px;
`;

const Phone = styled.img`
  width: 100%;
`;

export default Sportlight;
