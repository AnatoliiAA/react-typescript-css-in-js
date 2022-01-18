import Button from "../../button/Button";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Header,
  Price,
  PriceMonth,
  Title,
  Wrapper,
  Text,
  Feature,
  FeatureIcon,
} from "./PricingItem.css";
import { PricingItemType } from "../../../types/common";

export const PricingItem = ({
  backgroundColor,
  title,
  price,
  text,
  features,
}: PricingItemType): JSX.Element => (
  <Wrapper key={title}>
    <Header backgroundColor={backgroundColor}>
      <Title>{title}</Title>
      <Price>{price}</Price>
      <PriceMonth>/ month</PriceMonth>
      <Text>{text}</Text>
      <Button>Get started</Button>
    </Header>
    {features.map(
      (feature, index: number): JSX.Element => (
        <Feature key={index}>
          <FeatureIcon backgroundColor={backgroundColor}>
            <FontAwesomeIcon icon={faCheck} />
          </FeatureIcon>
          {feature}
        </Feature>
      )
    )}
  </Wrapper>
);
