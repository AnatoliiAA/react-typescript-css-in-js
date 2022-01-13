import styled from "@emotion/styled";
import { PricingItems, SecondTitle, Title, Wrapper } from "./PricingList.css";
import { PricingItem } from "../pricing-item/PricingItem";
import pricingData from "./data.json";
import { PricingItemType } from "../../../types/types";

export const PricingList = (): JSX.Element => (
  <Wrapper>
    <Title>Flexible Pricing</Title>
    <SecondTitle>
      Choose the right pricing for you and get started with your project
    </SecondTitle>
    <PricingItems>
      {pricingData.map(
        ({
          backgroundColor,
          title,
          price,
          text,
          features,
        }: PricingItemType): JSX.Element => (
          <PricingItem
            key={title}
            backgroundColor={backgroundColor}
            title={title}
            price={price}
            text={text}
            features={features}
          />
        )
      )}
    </PricingItems>
  </Wrapper>
);
