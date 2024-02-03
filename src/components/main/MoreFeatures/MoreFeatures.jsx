import React from "react";
import "./MoreFeatures.css";
import SectionContainer from "../../utils/SectionContainer.jsx";
import { FaRegLightbulb, FaUserTie } from "react-icons/fa6";
import { FaBolt, FaBalanceScale } from "react-icons/fa";

const iconContainers = [
  {
    icon: (
      <FaBolt className="icon icon-strong size-14" aria-label="Powerful Icon" />
    ),
    title: "Powerful",
    description: "Send large files without any limitations",
  },
  {
    icon: (
      <FaRegLightbulb
        className="icon icon-blob size-14"
        aria-label="Smart Icon"
      />
    ),
    title: "Smart",
    description:
      "Get real-time notifications when someone shares a file with you",
  },
  {
    icon: (
      <FaBalanceScale
        className="icon icon-scale size-14"
        aria-label="Easy Scale Icon"
      />
    ),
    title: "Easy Scale",
    description: "Access app reviews and ratings from your trusted network",
  },
  {
    icon: (
      <FaUserTie
        className="icon icon-professional size-14"
        aria-label="Professional Icon"
      />
    ),
    title: "Professional",
    description:
      "Save time searching for apps with personalized recommendations",
  },
];

const MoreFeatures = () => {
  return (
    <SectionContainer>
      <div className="flex flex-col gap-8 ">
        <span className="self-center lg:self-start">MORE FEATURES</span>
        <h1>Explore Our Business Features</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-3 xl:grid-cols-3  xl:grid-rows-2 gap-10">
          <div className="img-holder xl:col-start-2 row-span-2 max-xl:col-span-full">
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
          {iconContainers.map((container, index) => (
            <div
              key={index}
              className={`flex flex-col items-center gap-4 py-8 px-4 ${
                index === 0 ? "xl:order-first" : ""
              }`}
            >
              {container.icon}
              <h2>{container.title}</h2>
              <p className="text-pretty italic text-gray-400">{container.description}</p>
            </div>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
};

export default MoreFeatures;
