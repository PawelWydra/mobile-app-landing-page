import "./pricing.css";
import SectionContainer from "../../utils/SectionContainer";
import { pricingItems } from "./pricingData.jsx";
import PricingItem from "./pricingItem.jsx";

function Pricing() {
  return (
    <SectionContainer>
      <div className="pricing-flex gap-8">
        <span>PRICING</span>
        <h1>Our Flexible App Price</h1>
        <div className="flex justify-center gap-14 flex-wrap">
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
