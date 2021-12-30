import styled from "@emotion/styled";
import { Wrapper } from "./PricingList.css";
import { PricingItem } from "../pricing-item/PricingItem";
import usersData from "./data.json";

const Title = styled.h1`
  text-align: center;
  font-size: 48px;
  font-weight: bold;
`;
const SecondTitle = styled.h2`
  width: 35%;
  margin: 30px auto 70px auto;
  line-height: 1.6;
  letter-spacing: 1px;
  font-weight: 300;
  text-align: center;
  font-size: 18px;
`;
const PricingItems = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const PricingData = [
  {
    backgroundColor: "#6269f4",
    title: "Basic",
    price: "$29",
    text: "Perfect for developers who want extra modularity",
    features: [
      "390+ Templates",
      "600+ Icons",
      "Build Tools",
      "Free Updates",
      "Source files",
    ],
  },
  {
    backgroundColor: "#eb8700",
    title: "Professional",
    price: "$49",
    text: "Perfect for developers who want extra modularity 2",
    features: [
      "390+ Templates",
      "600+ Icons",
      "Build Tools",
      "Free Updates",
      "Source files",
    ],
  },
  {
    backgroundColor: "#74cf87",
    title: "Startup",
    price: "$99",
    text: "Perfect for developers who want extra modularity 3",
    features: [
      "390+ Templates",
      "600+ Icons",
      "Build Tools",
      "Free Updates",
      "Source files",
    ],
  },
];

export const PricingList = (): JSX.Element => (
  <Wrapper>
    <Title>Flexible Pricing</Title>
    <SecondTitle>
      Choose the right pricing for you and get started with your project
    </SecondTitle>
    <PricingItems>
      {PricingData.map(
        (item): JSX.Element => (
          <PricingItem
            backgroundColor={item.backgroundColor}
            title={item.title}
            price={item.price}
            text={item.text}
            features={item.features}
          />
        )
      )}
    </PricingItems>
    {usersData.users.map((user) => (
      <>
        <p>{user.name}</p>
        <p>{user.age}</p>
      </>
    ))}
  </Wrapper>
);
