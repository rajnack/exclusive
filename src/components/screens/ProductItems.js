import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Image2 from "../../assets/images/yellowstart.svg";
import Image3 from "../../assets/images/greystart.svg";
import heartIcon from "../../assets/images/heart.svg";
import eyeIcon from "../../assets/images/view.svg";
import { Link } from "react-router-dom";

function ProductItems() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Fetched products:", data.products);
        setItems(data.products);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const renderStars = (rating) => {
    const totalStars = 5;
    const filledStars = Math.floor(rating);
    const emptyStars = totalStars - filledStars;
    return (
      <>
        {Array(filledStars)
          .fill()
          .map((_, index) => (
            <Star key={`filled-${index}`} src={Image3} alt="filled star" />
          ))}
        {Array(emptyStars)
          .fill()
          .map((_, index) => (
            <Star key={`empty-${index}`} src={Image2} alt="empty star" />
          ))}
      </>
    );
  };
  return (
    <>
      <Section>
        <Wrapper>
          <MainTop>
            <Div>
              <HomeText to="/">Home</HomeText>
            </Div>
            <span style={{ color: "#000000", opacity: "50%" }}>/</span>

            <Div>
              <ProdectsText className="active">Products</ProdectsText>
            </Div>
          </MainTop>
          <MainContainer>
            <ProductContainer>
              {items.map((product) => (
                <ProductContent key={product.id}>
                  <TopContainer to={`/details/${product.id}`}>
                    <ProductImageWrapper>
                      <ProductImage src={product.image} alt="product-image" />
                    </ProductImageWrapper>
                    <TopRightContainer>
                      <LikeIconWrapper>
                        <LikeIcon src={heartIcon} alt="like-icon" />
                      </LikeIconWrapper>
                      <ViewIconWrapper>
                        <ViewIcon src={eyeIcon} alt="view-icon" />
                      </ViewIconWrapper>
                    </TopRightContainer>
                    {product.new_label && (
                      <NewLabel>{product.new_label}</NewLabel>
                    )}
                    {product.offer && (
                      <DiscountBadge>{product.offer}</DiscountBadge>
                    )}
                    <AddtoCartButton>Add to Cart</AddtoCartButton>
                  </TopContainer>
                  <ProductDetails>
                    <ProductName>{product.name}</ProductName>
                    <PriceAndRatingContainer>
                      <DiscountedPrice>
                        ${product.price}
                        {product.offer_price}
                      </DiscountedPrice>
                      <ProductPrice>{product.old_price}</ProductPrice>
                      <ProductPriceNoDiscount></ProductPriceNoDiscount>
                    </PriceAndRatingContainer>
                    <RatingContainer>
                      <RatingContainer>
                        {renderStars(product.rating)}
                      </RatingContainer>
                      <ProductRating>({product.rating_counts})</ProductRating>
                    </RatingContainer>
                    <ColorOption>
                      <ColorButtonsContainer>
                        {product.colors &&
                          product.colors.length > 0 &&
                          product.colors.map((color) => (
                            <CustomPadding key={color}>
                              <ColorButton color={color} />
                            </CustomPadding>
                          ))}
                      </ColorButtonsContainer>
                    </ColorOption>
                  </ProductDetails>
                </ProductContent>
              ))}
            </ProductContainer>
          </MainContainer>
        </Wrapper>
      </Section>
    </>
  );
}

const Section = styled.section`
  padding: 40px 0;
`;
const Wrapper = styled.div`
  width: 80%;
  max-width: 1790px;
  margin: 0 auto;
`;
const Div = styled.div``;
const MainTop = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const ProdectsText = styled.h2`
  color: #000;
  text-decoration: none;
  font-size: 16px;
  font-weight: 500;
  &.active {
    color: #000;
    font-weight: bold;
  }
    @media (max-width:768px) {
    font-size:14px;}
`;

const HomeText = styled(Link)`
  color: #000;
  font-weight: 400;
  font-size: 14px;
  text-decoration: none;
  cursor: pointer;
  @media (max-width:768px) {
    font-size:13px;}
`;
const MainContainer = styled.div`
  padding-top: 40px;
`;

const ProductContent = styled.div`
  position: relative;
  width: 23%;
  @media (max-width:1536px) {
  width: 22%;}
  @media(max-width:1024px) {
  width: 30%;}
  @media(max-width:980px) {
  width: 29%;}
  @media(max-width:768px) {
  width: 45%;}
  @media(max-width:680px) {
  width: 44%;}
  @media(max-width:540px) {
  width: 100%;}
`;
const Star = styled.img`
  width: 16px;
  height: 16px;
`;
const TopContainer = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #f5f5f5;
  position: relative;
  background: #f5f5f5;
  border-radius: 4px;
  height: 250px;
`;
const AddtoCartButton = styled.button`
  position: absolute;
  bottom: 1px;
  left: 50%;
  transform: translateX(-50%);
  background: #000000;
  color: white;
  border: none;
  padding: 10px 20px 0;
  border-bottom-right-radius: 4px;
  border-bottom-left-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 500;
  opacity: 0; 
  transition: opacity 0.3s ease-in-out;
  width: 100%;
  height: 41px;

  ${TopContainer}:hover &,
  ${TopContainer}:focus-within & {
    opacity: 1; 
  }
`;

const ProductContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 30px;
   @media (max-width:1536px) {
  gap:49px;}
  @media(max-width:1280px) {
  justify-content: start;
  gap:40px;
}
  @media(max-width:1024px) {
  gap:40px;
  @media(max-width:980px) {
  gap:50px;
}
  @media(max-width:768px) {
  gap:60px;
}
  @media(max-width:680px) {
  gap:65px;
}
`;

const TopRightContainer = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
`;
const LikeIconWrapper = styled.button`
  cursor: pointer;

  position: absolute;
  top: 12px;
  right: 12px;
  background-color: white;
  border: none;
  border-radius: 50%;
  width: 34px;
  height: 34px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  img {
    width: 20px;
    height: 20px;
  }
    @media(max-width:1280px){
    top:-2px;
    right:1px;
    width:30px;
    height:30px;
    }
`;
const LikeIcon = styled.img`
  border: 1px solid #fff;
  border-radius: 50%;
  background: #fff;
  padding: 5px;
`;

const ViewIconWrapper = styled.button`
  cursor: pointer;
  position: absolute;
  top: 60px;
  right: 10px;
  background-color: white;
  border: none;
  border-radius: 50%;
  width: 34px;
  height: 34px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  img {
    width: 20px;
    height: 20px;
  }
     @media(max-width:1280px){
    top:38px;
    right:1px;
    width:30px;
    height:30px;
    }
`;

const ViewIcon = styled.img`
  border: 1px solid #fff;
  border-radius: 50%;
  background: #fff;
  padding: 5px;
`;

const ProductImageWrapper = styled.div``;

const PriceAndRatingContainer = styled.div`
  display: flex;
  gap: 12px;
`;

const DiscountedPrice = styled.span`
  color: #db4444;
  font-size: 16px;
  font-weight: 500;
`;

const ProductPrice = styled.span`
  text-decoration: line-through;
  color: gray;
`;
const ProductPriceNoDiscount = styled.span`
  color: #db4444;
  font-size: 16px;
  font-weight: 500;
`;

const RatingContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  line-height: 1.8;
`;

const ProductRating = styled.p`
  font-size: 14px;
  color: #888;
  margin: 0;
  margin-left: 6px;
  font-weight: 600;
`;


const ColorOption = styled.div``;

const ColorButtonsContainer = styled.div`
  margin-top: 15px;
`;
const CustomPadding = styled.span`
  width: 30px;
  height: 30px;
  margin-left: 0px;
  border-radius: 50%;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  &:hover,
  &:active,
  &:focus {
    border: 1px solid #3f4646;
    outline: none;
  }
     @media(max-width:1280px) {
    width: 26px;
    height: 26px;}
    @media (max-width: 1024px) {
    width: 25px;
    height: 25px;}
`;

const ColorButton = styled.button`
  border: none;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  cursor: pointer;
  background-color: ${(props) => props.color};
  @media (max-width: 1024px) {
  width: 20px;
  height: 20px;}
  @media (max-width: 768px) {
  width: 18px;
  height: 18px;}
  @media (max-width: 680px) {
  width: 16px;
  height: 16px;}

`;
const NewLabel = styled.span`
  position: absolute;
  top: 10px;
  left: 10px;
  background: #00ff66;
  color: #fff;
  border-radius: 4px;
  padding: 4px 12px;
  font-size: 12px;
  font-weight: 400;
`;

const DiscountBadge = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  background-color: #ff5e5e;
  color: white;
  padding: 5px 10px;
  font-size: 14px;
  border-radius: 5px;
`;

const ProductImage = styled.img`
  width: 100%;
  display: block;
`;

const ProductDetails = styled.div``;

const ProductName = styled.h4`
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 8px;
`;

export default ProductItems;
