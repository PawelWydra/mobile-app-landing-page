import SectionContainer from "../../utils/SectionContainer";
import "./steps.css";
import stepsItems from "./stepsData.jsx";
import StepsCard from "./stepsCard.jsx"

function Steps() {
  return (
    <SectionContainer>
      <div className="flex flex-col gap-10 max-lg:items-center">
        <span>3 STEPS</span>
        <h1>You'll Love To Use It</h1>
        <div className="flex justify-center gap-8 flex-wrap">
          {stepsItems.map((item, index) => (
            <StepsCard key={index} {...item} />
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}

export default Steps;
