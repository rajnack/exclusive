import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function TopBar() {
  const [dropDown, setDropDown] = useState(false);

  const toggleDropDown = () => {
    setDropDown(!dropDown);
  };
  return (
    <>
      <Header>
        <Wrapper>
          <PromoSection>
            <PromoText>
              Summer Sale For All Swim Suits And Free Express Delivery - OFF
              50%!
            </PromoText>
            <ShopButton to={"/products"}>ShopNow</ShopButton>
          </PromoSection>

          <LanguageSelector>
            <LanguageText>English</LanguageText>
            <ArrowContainer onClick={toggleDropDown}>
              <ArrowIcon
                src={
                  require("../../assets/images/short-arrow-down.svg").default
                }
                alt="down-arrow"
              />
              {dropDown && (
                <DropdownMenu>
                  <DropdownItem>English</DropdownItem>
                  <DropdownItem>Spanish</DropdownItem>
                  <DropdownItem>French</DropdownItem>
                </DropdownMenu>
              )}
            </ArrowContainer>
          </LanguageSelector>
        </Wrapper>
      </Header>
    </>
  );
}

const Header = styled.header`
  width: 100%;
  background-color: #000;
  display: flex;
  justify-content: center;
  height: 48px;
  @media (max-width: 480px) {
    display: none;
  }

`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  max-width: 1740px;
  width: 80%;
  align-items: center;
  position: relative;

 
`;

const PromoSection = styled.div`
  display: flex;
  align-items: center;
  @media (max-width:680px) {
  width: 100%;

  
`;

const PromoText = styled.p`
  margin: 0;
  color: #fff;
  font-size: 14px;
  font-weight: 400;
  @media(max-width:680px){
  font-size:10px;}
`;

const ShopButton = styled(Link)`
  color: #fff;
  margin-left: 12px;
  font-weight: 600;
  font-size: 14px;
  @media(max-width:680px){
  font-size:12px
  }
`;

const LanguageSelector = styled.div`
  align-items: center;
  display: flex;
  margin-left: 12px;
  position:absolute;
  top:14px;
  right: 4px;
`;

const LanguageText = styled.div`
  color: #fff;
  font-size: 14px;
  font-weight: 400;
  @media (max-width:768px) {
  display: none;}
  @media (max-width:680px) {
  display: none;}
`;

const ArrowContainer = styled.h4`
  margin: 0 0 0 8px;
  cursor: pointer;
`;

const ArrowIcon = styled.img``;

const DropdownMenu = styled.ul`
  position: absolute;
  top: 110%;
  right: 0;
  background-color: #fff;
  color: #000;
  list-style-type: none;
  padding: 8px 0;
  border-radius: 4px;
  width: 120px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  z-index: 1;
`;

const DropdownItem = styled.li`
  padding: 8px 16px;
  cursor: pointer;
  text-align: left;

  &:hover {
    background-color: #f1f1f1;
  }
`;

export default TopBar;
