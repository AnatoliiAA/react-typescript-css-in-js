import { PricingList } from "./components/pricing/pricing-list/PricingList";
import { Global } from "@emotion/react";
import { reset, global } from "./theme";

export const App = (): JSX.Element => (
  <>
    <Global styles={[reset, global]}></Global>
    <PricingList />
  </>
);
