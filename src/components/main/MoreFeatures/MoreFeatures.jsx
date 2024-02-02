import React from "react";
import "./MoreFeatures.css";
import SectionContainer from "../../utils/SectionContainer.jsx";
import { FaRegLightbulb, FaUserTie } from "react-icons/fa6";
import { FaBolt, FaBalanceScale } from "react-icons/fa";

const MoreFeatures = () => {
  return (
    <SectionContainer>
      <div className="flex flex-col gap-8 ">
      <span>MORE FEATURES</span>
      <h1>Explore Our  Business Features</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-3 xl:grid-cols-3 xl:grid-rows-2 gap-10">
        <div className="flex flex-col gap-4 px-4 py-8">
          <FaBolt className="icon icon-strong" aria-label="Powerful Icon" />
          <h2>Powerful</h2>
          <p>Send large files without any limitations</p>
        </div>

          <div className="img-holder row-span-2 max-xl:row-start-1 max-xl:col-start-1 max-xl:col-span-full">
            <img
              src={process.env.PUBLIC_URL + "/images/business-img.png"}
              alt="Business"
              className="business-img"
            />
            <img
              src={process.env.PUBLIC_URL + "/images/business-qcode-img.jpg"}
              alt="Business QR Code"
              className="business-qcode"
            />
            <img
              src="https://randomuser.me/api/portraits/women/44.jpg"
              alt="Business Person"
              className="business-user"
            />
          </div>

        <div className="flex flex-col gap-4 px-4 py-8">
          <FaRegLightbulb className="icon icon-blob" aria-label="Smart Icon" />
          <h2>Smart</h2>
          <p>Get real-time notifications when someone shares a file with you</p>
        </div>
        <div className="flex flex-col gap-4 px-4 py-8">
          <FaBalanceScale
            className="icon icon-scale"
            aria-label="Easy Scale Icon"
          />
          <h2>Easy Scale</h2>
          <p>Access app reviews and ratings from your trusted network</p>
        </div>
        <div className="flex flex-col gap-4 px-4 py-8">
          <FaUserTie
            className="icon icon-professional"
            aria-label="Professional Icon"
          />
          <h2>Professional</h2>
          <p>Save time searching for apps with personalized recommendations</p>
        </div>
      </div>
      </div>
    </SectionContainer>
  );
};

export default MoreFeatures;
