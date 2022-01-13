import styled from "@emotion/styled";
import { PricingItemType } from "../../../types/types";

export const Wrapper = styled.div`
  width: 30%;
  color: white;
`;
export const Header = styled.div<PricingItemType>`
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
export const Title = styled.h1`
  margin: 0 0 30px 0;
  font-size: 16px;
  font-weight: bold;
`;
export const Price = styled.span`
  font-size: 56px;
  font-weight: bold;
`;
export const PriceMonth = styled.span`
  margin: 0 0 0 5px;
  font-size: 32px;
`;
export const Text = styled.p`
  margin: 40px 0 20px 0;
  font-size: 16px;
  letter-spacing: 1px;
  line-height: 24px;
`;
export const FeatureIcon = styled.span<PricingItemType>`
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
export const Feature = styled.span`
  display: block;
  margin: 25px 0 0 0;
  font-size: 16px;
  color: black;
`;
