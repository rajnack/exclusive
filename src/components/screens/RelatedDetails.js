import React, { useEffect, useState } from "react";
import styled from "styled-components";
import heartIcon from "../../assets/images/heart.svg";
import eyeIcon from "../../assets/images/view.svg";
import Image2 from "../../assets/images/yellowstart.svg";
import Image3 from "../../assets/images/greystart.svg";
import { Link } from "react-router-dom";

function RelatedDetails() {
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
        setItems(data.products.slice(8, 12));
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
    <div>
    <Section>
      <Wrapper>
      <Header>
            <New>
              <Rectangle />
              <Title>Related Item</Title>
            </New>
          </Header>
          <MainContainer>
        <CardWrapper>
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
        </CardWrapper>
      </MainContainer>
      </Wrapper>
    </Section>
    </div>
  )
}

const Section = styled.section`
  padding: 40px 0;
  @media(max-width:1024px) {
  padding-bottom: 0px;}
 
`;

const Wrapper = styled.div`
  max-width: 1790px;
  width: 80%;
  margin: 0 auto;
`;
const Header = styled.div`
  margin-bottom: 20px;
`;
const New = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 15px;
`;
const Rectangle = styled.div`
  background: #db4444;
  width: 20px;
  height: 40px;
  border-radius: 4px;
`;
const Title = styled.h4`
  color: #db4444;
  font-weight: 600;
  font-size: 16px;
`;
const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 40px 0;
  @media(max-width:1024px) {
  padding-bottom: 0px;}
`;
const CardWrapper = styled.div`
  width: 100%;
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

const TopContainer = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #f5f5f5;
  position: relative;
  background: #f5f5f5;
  border-radius: 4px;
  cursor: pointer;
  height: 250px;
  border-radius: 4px;
`;
const Star = styled.img`
  width: 16px;
  height: 16px;
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
  padding-bottom: 30px;
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
  padding-bottom:0;
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

const ProductImage = styled.img`
  width: 100%;
  display: block;
`;

const ProductDetails = styled.div``;

const ProductName = styled.h3`
  margin: 15px 0 5px 0;
  font-size: 16px;
  font-weight: 500;
`;
const ProductPriceNoDiscount = styled.span`
  color: #db4444;
  font-size: 16px;
  font-weight: 500;
`;

const PriceAndRatingContainer = styled.div`
  display: flex;
  gap: 12px;
`;

const ProductPrice = styled.span`
  text-decoration: line-through;
  color: gray;
`;
const DiscountedPrice = styled.span`
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

const ProductRating = styled.p`
  font-size: 14px;
  color: #888;
  margin: 0;
  margin-left: 6px;
  font-weight: 600;
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


export default RelatedDetails;
