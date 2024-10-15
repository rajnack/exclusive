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
              <HamburgerIcon
                src={require("../../assets/images/hamburger.svg").default}
                alt="hamburger-icon"
              />
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
            </NavListWrapper>
          </NavSection>

          <RightSection>
            <SearchBar>
              <SearchInput
                type="text"
                placeholder="What are you looking for?"
              />
              <SearchButton>
                <SearchIcon
                  src={require("../../assets/images/search.svg").default}
                  alt="search-icon"
                />
              </SearchButton>
            </SearchBar>

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
          </RightSection>
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

const NavListWrapper = styled.ul`
  margin: 0;
  padding: 0;
  display: ${({ open }) => (open ? "flex" : "none")};
  gap: 25px;
  list-style: none;
  position: absolute;
  top: 100%;
  left: 0;
  background: white;
  height: 40px;

  @media (min-width: 1025px) {
    display: flex;
    flex-direction: row;
    position: static;
    gap: 44px;
    align-items: center;
  }
`;

const NavItem = styled.li`
  cursor: pointer;
  font-size: 16px;
  font-weight: 400;
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

const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;

  @media (max-width: 1024px) {
    justify-content: end;
  }
`;

const SearchBar = styled.div`
  display: flex;
  border: 1px solid #f5f5f5;
  padding: 5px 10px 5px 10px;
  background-color: #f5f5f5;
  border-radius: 7px;
  cursor: pointer;
`;

const SearchInput = styled.input`
  border: none;
  background-color: #f5f5f5;
  outline: none;
  font-size: 12px;
  font-weight: 400;
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
