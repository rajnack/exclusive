import React from "react";
import styled from "styled-components";
import Products from "./Products";

function Categories() {
  const DataCard = [
    { id: 1, icon: require("../../assets/images/CellPhone.svg").default, text: "Phones" },
    { id: 2, icon: require("../../assets/images/Computer.svg").default, text: "Computers" },
    { id: 3, icon: require("../../assets/images/SmartWatch.svg").default, text: "SmartWatches" },
    { id: 4, icon: require("../../assets/images/Headphone.svg").default, text: "HeadPhones" },
    { id: 5, icon: require("../../assets/images/Gamepad.svg").default, text: "Gaming" },
    { id: 6, icon: require("../../assets/images/Camera.svg").default, text: "Cameras" },
  ];

  const [selectedCategory, setSelectedCategory] = React.useState(null);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <>
      <Section>
        <Wrapper>
          <Header>
            <New>
              <Rectangle />
              <Title>Categories</Title>
            </New>
            <Subtitle>Browse By Category</Subtitle>
          </Header>
          <CardsContainer>
            {DataCard.map((category) => (
              <Card key={category.id} onClick={() => handleCategoryClick(category.text)}>
                <ImageIcon src={category.icon} alt={category.text} />
                <ImageText>{category.text}</ImageText>
              </Card>
            ))}
          </CardsContainer>
        </Wrapper>
      </Section>
      <Products selectedCategory={selectedCategory} />
    </>
  );
}

const Section = styled.div`
  display: flex;
  justify-content: center;
  padding: 40px 0 0;
`;

const Wrapper = styled.div`
  max-width: 1790px;
  width: 80%;
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
  font-size:16px;
`;

const Subtitle = styled.h1`
  color: #000;
  font-size: 24px;
  font-weight: 600;
  margin-top: 10px;
`;

const CardsContainer = styled.div`
  display: flex;
  gap: 20px;
`;

const Card = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 4px;
  padding: 30px;
  width: 100%;
  gap: 30px;
  height: 145px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const ImageIcon = styled.img`
  width: 56px;
  height: 56px;
`;

const ImageText = styled.h6`
  color: #000;
  font-size: 16px;
  font-weight: 400;
  margin: 0;
`;

export default Categories;
