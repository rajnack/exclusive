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
  @media (max-width:  768px) {
   height: 35px;
   width:15px;}
   @media (mix-width: 680px) {
   height: 30px;
   width:18px;}
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
  @media (max-width: 768px) {
  font-size:22px;}
  @media (max-width: 540px) {
  font-size:20px;}
`;

const CardsContainer = styled.div`
  display: flex;
  gap: 20px;
  @media(max-width:1024px) {
  gap:30px;
  flex-wrap:wrap;}
  @media(max-width:980px){
  flex-wrap:wrap;
  gap:32px;
  }
  @media (max-width:768px) {
   gap: 27px;
}
   @media (max-width:680px) {
   gap: 31px;
}
   @media (max-width:540px) {
   gap: 35px;
}
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
  @media(max-width:1536px) {
  height:130px;}
  @media (max-width:1280px) {
   height:100px;
   padding:20px;
}
   @media (max-width:1024px) {
   height:120px;
   padding:23px;
   width:25%; }
   @media (max-width:980px) {
   height:100px;
   padding:25px;
   width:24%;
}
   @media (max-width:768px) {
   width:22%;
}
   @media (max-width:680px) {
   width:20%;
}
   @media (max-width:540px) {
   width:34%;
}
   @media (max-width:480px) {
   width:32%;
}
   @media (max-width:360px) {
   width:26%;
   height:80px;
}
   @media (max-width:320px) {
   width:100%;
   
}
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
  @media (max-width: 540px) {
   font-size: 14px;
}
`;

export default Categories;
