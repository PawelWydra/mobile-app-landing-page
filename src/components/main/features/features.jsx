import "./features.css";
import SectionContainer from "../../utils/SectionContainer";
import { items } from "./featureData.jsx";
import FeatureItem from "./featureItem";

function Features() {
  return (
    <SectionContainer>
      <div className="flex flex-col items-center">
        <span>OUR FEATURES</span>
        <h1>Awesome Features Of Our App</h1>
        <div className="flex gap-8 ">
          {items.map((item, index) => (
            <FeatureItem key={index} {...item} />
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}

export default Features;
