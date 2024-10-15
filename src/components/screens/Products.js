import React, { useEffect, useState } from "react";
import styled from "styled-components";
import heartIcon from "../../assets/images/heart.svg";
import eyeIcon from "../../assets/images/view.svg";
import Image2 from "../../assets/images/yellowstart.svg";
import Image3 from "../../assets/images/greystart.svg";
import truck from "../../assets/images/icon-delivery-1.svg";
import service from "../../assets/images/customerService.svg";
import guarentee from "../../assets/images/Icon-secure.svg";
import { Link } from "react-router-dom";

function Products({ selectedCategory }) {
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
        setItems(data.products.slice(0, 8));
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

 
  const filteredItems = selectedCategory
    ? items.filter((product) => product.category && product.category.toLowerCase() === selectedCategory.toLowerCase())
    : items;

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
      <MainContainer>
        <CardWrapper>
          <ProductContainer>
          {filteredItems.map((product) => (
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
                    <ProductPrice>$ {product.price}</ProductPrice>
                    <DiscountedPrice>{product.offer_price}</DiscountedPrice>
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

      <ButtonContainer>
        <ViewAllButton to="/products">View All Products</ViewAllButton>
      </ButtonContainer>

      <SectionBottom>
        <WrapperBottom>
          <Customer>
            <Box>
              <IconWrapper>
                <IconDisplay>
                  <FaTruck src={truck} />
                </IconDisplay>
              </IconWrapper>
              <Text>FREE AND FAST DELIVERY</Text>
              <Paragraph>Free delivery for all orders over $140</Paragraph>
            </Box>

            <Box>
              <IconWrapper>
                <IconDisplay>
                  <FaHeadset src={service} />
                </IconDisplay>
              </IconWrapper>
              <Text>24/7 CUSTOMER SERVICE</Text>
              <Paragraph>Friendly 24/7 customer support</Paragraph>
            </Box>

            <Box>
              <IconWrapper>
                <IconDisplay>
                  <FaRegCheckCircle src={guarentee} />
                </IconDisplay>
              </IconWrapper>
              <Text>MONEY BACK GUARANTEE</Text>
              <Paragraph>We return money within 30 days</Paragraph>
            </Box>
          </Customer>
        </WrapperBottom>
      </SectionBottom>
    </>
  );
}

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 40px 0;
`;
const CardWrapper = styled.div`
  width: 80%;
  max-width: 1790px;
`;
const ProductContent = styled.div`
  position: relative;
  width: 23%;
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
  opacity: 0; // Initially hidden
  transition: opacity 0.3s ease-in-out;
  width: 100%;
  height: 41px;

  // Show button on hover/focus of the parent
  ${TopContainer}:hover &,
  ${TopContainer}:focus-within & {
    opacity: 1; // Show the button on hover/focus
  }
`;

const ProductContainer = styled.div`
  border-bottom: 1px solid #b3b3b3;
  padding-bottom: 30px;
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
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
`;

const ViewIcon = styled.img`
  border: 1px solid #fff;
  border-radius: 50%;
  background: #fff;
  padding: 5px;
`;

const ViewAllButton = styled(Link)`
  background: #db4444;
  color: #fff;
  border-radius: 4px;
  padding: 16px 48px;
  border: none;
  cursor: pointer;
  color: #fafafa;
  font-size: 16px;
  font-weight: 500;
  text-decoration: none;
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

const PriceAndRatingContainer = styled.div`
  display: flex;
  gap: 12px;
`;

const ProductPrice = styled.span`
  color: #db4444;
  font-size: 16px;
  font-weight: 500;
`;

const DiscountedPrice = styled.span`
  text-decoration: line-through;
  color: gray;
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
`;

const ColorButton = styled.button`
  border: none;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  cursor: pointer;
  background-color: ${(props) => props.color};
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

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Customer = styled.section`
  padding: 66px;
  display: flex;
  justify-content: space-between;
`;

const Box = styled.div`
  text-align: center;
  padding: 20px;
`;

const IconWrapper = styled.span`
  font-size: 2rem;
  display: inline-block;
  border-radius: 50px;
  padding: 8px;
  background-color: #000;
  border: 8px solid #c1c0c1;
`;

const Text = styled.h3`
  font-size: 1.2rem;
  margin: 5px 0;
  color: #333;
`;

const Paragraph = styled.p`
  font-size: 0.9rem;
  color: #666;
`;

const IconDisplay = styled.div`
  display: flex;
  justify-content: center;
`;

const FaTruck = styled.img``;

const FaHeadset = styled.img``;

const FaRegCheckCircle = styled.img``;

const SectionBottom = styled.div`
  display: flex;
  justify-content: center;
`;

const WrapperBottom = styled.div`
  max-width: 1790px;
  width: 80%;
`;

export default Products;
