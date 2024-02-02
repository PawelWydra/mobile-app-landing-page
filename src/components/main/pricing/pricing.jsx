import "./pricing.css";
import SectionContainer from "../../utils/SectionContainer";
import { pricingItems } from "./pricingData.jsx";
import PricingItem from "./pricingItem.jsx";

function Pricing() {
  return (
    <SectionContainer>
      <div className="pricing-flex gap-8">
        <span className="self-center">PRICING</span>
        <h1 className="self-center">Our Flexible App Price</h1>
        <div className="flex justify-center gap-8 flex-wrap">
          {pricingItems.map((item, index) => (
            <PricingItem
              key={index}
              {...item}
              className={index === 1 ? "premium-card" : ""}
            />
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}

export default Pricing;
