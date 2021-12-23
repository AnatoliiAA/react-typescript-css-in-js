import styled from "@emotion/styled";
import Button from "../../button/Button";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type PricingItemProps = {
  backgroundColor?: string;
  title?: string;
  price?: string;
  text?: string;
  features?: Array<string>;
};

const Wrapper = styled.div`
  width: 30%;
  color: white;
`;
const Header = styled.div<PricingItemProps>`
  width: 100%;
  height: 350px;
  margin: 0 0 35px 0;
  padding: 35px;
  box-sizing: border-box;
  background-color: ${(props) => props.backgroundColor};
  border-radius: 15px;
  transition: transform 0.3s ease;
  box-shadow: 0px 12px 13px 0px rgba(34, 60, 80, 0.25);
  &:hover {
    transform: scale(1.005);
  }
`;
const Title = styled.h1`
  margin: 0 0 30px 0;
  font-size: 16px;
  font-weight: bold;
`;
const Price = styled.span`
  font-size: 56px;
  font-weight: bold;
`;
const PriceMonth = styled.span`
  margin: 0 0 0 5px;
  font-size: 32px;
`;
const Text = styled.p`
  margin: 40px 0 20px 0;
  font-size: 16px;
  letter-spacing: 1px;
  line-height: 24px;
`;
const FeatureIcon = styled.span<PricingItemProps>`
  display: inline-block;
  width: 16px;
  height: 16px;
  margin: 0 5px 0 0;
  font-size: 12px;
  text-align: center;
  line-height: 18px;
  color: ${(props) => props.backgroundColor};
  background-color: ${(props) => `${props.backgroundColor}80`};
  border-radius: 50%;
`;
const Feature = styled.span`
  display: block;
  margin: 25px 0 0 0;
  font-size: 16px;
  color: black;
`;

export const PricingItem = ({
  backgroundColor,
  title,
  price,
  text,
  features,
}: PricingItemProps): JSX.Element => (
  <Wrapper>
    <Header backgroundColor={backgroundColor}>
      <Title>{title}</Title>
      <Price>{price}</Price>
      <PriceMonth>/ month</PriceMonth>
      <Text>{text}</Text>
      <Button>Get started</Button>
    </Header>
    {features.map(
      (feature): JSX.Element => (
        <Feature>
          <FeatureIcon backgroundColor={backgroundColor}>
            <FontAwesomeIcon icon={faCheck} />
          </FeatureIcon>
          {feature}
        </Feature>
      )
    )}
  </Wrapper>
);
