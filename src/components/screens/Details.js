import React, { useEffect, useState } from "react";
import styled from "styled-components";
import deliveryIcon from "../../assets/images/icon-delivery.svg";
import returnIcon from "../../assets/images/Icon-return.svg";
import Image2 from "../../assets/images/yellowstart.svg";
import Image3 from "../../assets/images/greystart.svg";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import RelatedDetails from "./RelatedDetails";

function Details() {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    fetch("/data.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        const productId = Number(id);
        const product = data.products.find((item) => item.id === productId);

        if (product) {
          console.log(product);
          setItem(product);
        } else {
          console.error("Product not found");
        }
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, [id]);

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
    <Section>
      <Wrapper>
        <MainTop key={item?.id}>
          <Div>
            <HomeText to="/">Home</HomeText>
          </Div>
          <span style={{ color: "#000000", opacity: "50%" }}>/</span>
          {item?.category && (
            <>
              <Div>
                <HomeText>{item.category}</HomeText>
              </Div>
              <span style={{ color: "#000000", opacity: "50%" }}>/</span>
            </>
          )}

          <Div>
            <ProdectsText className="active">{item?.name}</ProdectsText>
          </Div>
        </MainTop>

        {item ? (
          <Card key={item.id}>
            <LeftContainer>
              <ImageContainer>
                <ProductImage src={item.image} alt="Havic HV G-92 Gamepad" />
              </ImageContainer>
            </LeftContainer>
            <RightContainer>
              <ProductHeading>{item.name}</ProductHeading>
              <RatingContainer>
                {renderStars(item.rating)}
                <ReviewsText>({item.rating_counts} Reviews)</ReviewsText>
                <span
                  style={{
                    color: "#000000",
                    opacity: "50%",
                    marginLeft: "10px",
                    marginRight: "10px",
                  }}
                >
                  |
                </span>
                <StockStatus stockStatus={item.stock_status}>
                  {item.stock_status}
                </StockStatus>
              </RatingContainer>
              <ProductPrice>
                ${item.price}
                {item.offer_price}
              </ProductPrice>
              <ProductDescription>{item.discription}</ProductDescription>
              <UnderLineDive />
              <ColorOption>
                <ColorButtonsContainer>
                  {item.colors &&
                    item.colors.length > 0 &&
                    item.colors.map((color) => (
                      <CustomPadding key={color}>
                        <ColorButton color={color} />
                      </CustomPadding>
                    ))}
                </ColorButtonsContainer>
              </ColorOption>
              <Delivery>
                <DeliveryItem>
                  <DeliveryImage>
                    <img src={deliveryIcon} alt="Free Delivery" />
                  </DeliveryImage>
                  <DeliveryTextContainer>
                    <DeliveryText>Free Delivery</DeliveryText>
                    <DeliveryDescription>
                      Enter your postal code for Delivery Availability
                    </DeliveryDescription>
                  </DeliveryTextContainer>
                </DeliveryItem>
                <LineDivider />
                <DeliveryItem>
                  <DeliveryImage>
                    <img src={returnIcon} alt="Return Delivery" />
                  </DeliveryImage>
                  <DeliveryTextContainer>
                    <DeliveryText>Return Delivery</DeliveryText>
                    <DeliveryDesc>
                      Free 30 Days Delivery Returns.{" "}
                      <UnderLine>Details</UnderLine>
                    </DeliveryDesc>
                  </DeliveryTextContainer>
                </DeliveryItem>
              </Delivery>
            </RightContainer>
          </Card>
        ) : (
          <p>Loading product details...</p>
        )}
      </Wrapper>
      <RelatedDetails />
    </Section>
  );
}

const Section = styled.section`
  padding: 40px 0;
`;
const Wrapper = styled.div`
  max-width: 1790px;
  width: 80%;
  margin: 0 auto;
`;
const MainTop = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 40px;
`;
const HomeText = styled(Link)`
  color: #000;
  font-weight: 400;
  font-size: 14px;
  text-decoration: none;
  cursor: pointer;
`;
const Div = styled.div``;
const ProdectsText = styled.h2`
  color: #000;
  text-decoration: none;
  font-size: 16px;
  font-weight: 500;
  &.active {
    color: #000;
    font-weight: bold;
  }
`;

const Card = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 70px;
  padding: 20px 0;
`;

const LeftContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background: #f5f5f5;
  height: 82vh;
`;

const ImageContainer = styled.div`
  display: flex;
  width: 446px;
`;

const ProductImage = styled.img`
  display: block;
  width: 100%;
`;

const RightContainer = styled.div``;
const Star = styled.img`
  width: 16px;
  height: 16px;
`;
const ProductHeading = styled.h1`
  font-size: 24px;
  font-weight: 600;
`;

const RatingContainer = styled.div``;

const ReviewsText = styled.span`
  font-size: 14px;
  font-weight: 400;
  color: #000000;
  opacity: 50%;
  margin-right: 10px;
  margin-left: 10px;
`;

const StockStatus = styled.span`
  font-size: 14px;
  font-weight: 400;
  color: ${(props) => (props.stockStatus === "In Stock" ? "#00ff66" : "red")};
  
`;

const ProductPrice = styled.p`
  font-size: 24px;
  font-weight: 400;
  color: #000000;
`;

const ProductDescription = styled.p`
  font-size: 14px;
  font-weight: 400;
  width: 79%;
  line-height: 21px;
`;
const UnderLineDive = styled.hr`
  margin-top: 26px;
`;

const ColorOption = styled.div``;

const ColorButtonsContainer = styled.div`
  margin-top: 15px;
  margin-bottom: 15px;
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

const Delivery = styled.div`
  border: 1px solid #00000080;
  border-radius: 4px;
  width: 100%;
`;

const DeliveryItem = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  padding: 20px 20px;
`;

const DeliveryImage = styled.div``;

const DeliveryTextContainer = styled.div``;

const DeliveryText = styled.span``;
const DeliveryDesc = styled.p`
  margin: 12px 0;
`;
const DeliveryDescription = styled.p`
  margin: 12px 0;
  text-decoration: underline;
  text-decoration-skip-ink: none;
`;
const LineDivider = styled.hr``;
const UnderLine = styled.u``;

export default Details;
