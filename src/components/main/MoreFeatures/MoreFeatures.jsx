import React from "react";
import "./MoreFeatures.css";
import SectionContainer from "../../utils/SectionContainer.jsx";
import ImagesHolder from "./ImagesHolder.jsx";
import IconComponent from "./IconComponent";


const MoreFeatures = () => {
  return (
    <SectionContainer>
      <div className="flex flex-col gap-8 ">
        <span className="self-center lg:self-start">MORE FEATURES</span>
        <h1>Explore Our Business Features</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-3 xl:grid-cols-3  xl:grid-rows-2 gap-10">
          <ImagesHolder />
          <IconComponent/>
        </div>
      </div>
    </SectionContainer>
  );
};

export default MoreFeatures;
