import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import TopBar from "./TopBar";

function Header() {
  const [mobileMenu, setMobileMenu] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenu((prev) => !prev);
  };

  return (
    <>
      <TopBar />
      <MainHeader>
        <Wrapper>
          <BrandSection>
            <Logo>Exclusive</Logo>
          </BrandSection>

          <NavSection>
            <ToggleMenuButton onClick={toggleMobileMenu}>
              {mobileMenu ? (
                <CloseIcon
                  src={require("../../assets/images/close.svg").default}
                  alt="close-icon"
                />
              ) : (
                <HamburgerIcon
                  src={require("../../assets/images/hamburger.svg").default}
                  alt="hamburger-icon"
                />
              )}
            </ToggleMenuButton>

            <NavListWrapper open={mobileMenu}>
              <NavItem>
                <StyledNavLink to="/">Home</StyledNavLink>
              </NavItem>
              <NavItem>
                <StyledNavLink to="/contact">Contact</StyledNavLink>
              </NavItem>
              <NavItem>
                <StyledNavLink to="/about">About</StyledNavLink>
              </NavItem>
              <NavItem>
                <StyledNavLink to="/signup">Sign Up</StyledNavLink>
              </NavItem>

              <MobileRightSection className="mobile-only">
                <WishlistIconWrapper>
                  <WishlistIcon
                    src={require("../../assets/images/wishlist.svg").default}
                    alt="wishlist-icon"
                  />
                </WishlistIconWrapper>

                <CartIconWrapper>
                  <CartIcon
                    src={require("../../assets/images/Cart.svg").default}
                    alt="cart-icon"
                  />
                </CartIconWrapper>
              </MobileRightSection>
            </NavListWrapper>
          </NavSection>

          <SearchBar>
            <SearchInput type="text" placeholder="What are you looking for?" />
            <SearchButton>
              <SearchIcon
                src={require("../../assets/images/search.svg").default}
                alt="search-icon"
              />
            </SearchButton>
          </SearchBar>

          <MobileRightSection className="desktop-only">
            <WishlistIconWrapper>
              <WishlistIcon
                src={require("../../assets/images/wishlist.svg").default}
                alt="wishlist-icon"
              />
            </WishlistIconWrapper>

            <CartIconWrapper>
              <CartIcon
                src={require("../../assets/images/Cart.svg").default}
                alt="cart-icon"
              />
            </CartIconWrapper>
          </MobileRightSection>
        </Wrapper>
      </MainHeader>
    </>
  );
}

const MainHeader = styled.header`
  padding-top: 44px;
  display: flex;
  justify-content: center;
  border-bottom: 0.5px solid rgba(0, 0, 0, 0.3);
  padding-bottom: 7px;

  @media (max-width: 1024px) {
    position: relative;
    padding-top: 10px;
  }
    @media (max-width:360px) {
    padding-bottom:36px; }
`;

const Wrapper = styled.div`
  max-width: 1790px;
  width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 1024px) {
    display: block;
  }
`;

const BrandSection = styled.div`
  cursor: pointer;

  @media (max-width: 1024px) {
    text-align: start;
  }
`;

const Logo = styled.h1`
  margin: 0;
  font-size: 24px;
  font-weight: 700;
`;

const NavSection = styled.nav`
  position: relative;
`;

const ToggleMenuButton = styled.div`
  display: none;
  font-size: 24px;
  cursor: pointer;

  @media (max-width: 1024px) {
    display: block;
    position: absolute;
    width: 100%;
    text-align: end;
    bottom: 0;
  }
`;

const HamburgerIcon = styled.img``;

const CloseIcon = styled.img`
  width: 24px;
  height: 24px;
`;

const NavListWrapper = styled.ul`
  margin: 0;
  padding: 0;
  display: ${({ open }) => (open ? "block" : "none")};
  gap: 25px;
  list-style: none;
  position: absolute;
  top: 100%;
  left: 0;
  background: white;

  @media (min-width: 1025px) {
    display: flex;
    flex-direction: row;
    position: static;
    gap: 44px;
    align-items: center;
  }

  @media (max-width: 1024px) {
    flex-direction: column;
    width: 100%;
    background-color: white;
    z-index: 10;
    padding: 20px 0;
  }
`;

const NavItem = styled.li`
  cursor: pointer;
  font-size: 16px;
  font-weight: 400;
  @media (max-width: 1024px) {
    padding: 18px 0;
  }
  @media (max-width: 680px) {
    font-size: 14px;
  }
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: black;

  &.active {
    font-weight: bold;
    position: relative;

    &::after {
      content: "";
      position: absolute;
      left: 0;
      bottom: -2px;
      width: 100%;
      height: 2px;
      background-color: black;
    }
  }
`;
const MobileRightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  &.desktop-only {
    @media (max-width: 1024px) {
      display: none; 
    }
  }
  &.mobile-only {
    display: none;

    @media (max-width: 1024px) {
      display: flex; 
      flex-direction: column;
      margin-top: 10px;
      justify-content: flex-start;
      align-items: flex-start;
    }
  }
`;


const SearchBar = styled.div`
  display: flex;
  border: 1px solid #f5f5f5;
  padding: 5px 10px;
  background-color: #f5f5f5;
  border-radius: 7px;
  cursor: pointer;
  position: absolute;
  right:15%;
  width: 10%;
  @media(max-width:1492px) {
  width: 12%; }
  @media(max-width:1280px) {
  width: 15%;
 }
  

  @media (max-width: 1024px) {
    margin-top: 10px;
    width: 20%;
    position: absolute;
    top: 0;
    left: 64%;
  }
    @media(max-width:768px) {
    width: 23%;
    top: 1px;
    left: 60%;}
    @media(max-width:680px) {
    width: 30%;
    left: 40%;}
    @media (max-width: 540px) {
    width: 35%;
    left: 44%;}
  
    @media (max-width:360px) {
    width: 74%;
    top:43%;
    left: 10%;}
    

`;

const SearchInput = styled.input`
  border: none;
  background-color: #f5f5f5;
  outline: none;
  font-size: 12px;
  width: 100%;
`;

const SearchButton = styled.div`
  cursor: pointer;
`;

const SearchIcon = styled.img`
  height: 16px;
`;

const WishlistIconWrapper = styled.div`
  cursor: pointer;
`;

const WishlistIcon = styled.img`
  height: 18px;
`;

const CartIconWrapper = styled.div`
  cursor: pointer;
`;

const CartIcon = styled.img`
  height: 22px;
`;

export default Header;
