import React from "react";
import "./MoreFeatures.css";
import { FaRegLightbulb, FaUserTie } from "react-icons/fa6";
import { FaBolt, FaBalanceScale } from "react-icons/fa";

const MoreFeatures = () => {
  return (
    <div className="more-features-container">
      <span>MORE FEATURES</span>
      <h1>Explore Our Business Features</h1>
      <div className="grid-container">
        <div className="powerful">
          <FaBolt className="icon icon-strong" aria-label="Powerful Icon" />
          <h2>Powerful</h2>
          <p>Send large files without any limitations</p>
        </div>
        <div className="img-container">
          <div className="img-holder">
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
        </div>
        <div className="smart">
          <FaRegLightbulb className="icon icon-blob" aria-label="Smart Icon" />
          <h2>Smart</h2>
          <p>Get real-time notifications when someone shares a file with you</p>
        </div>
        <div className="easy-scale">
          <FaBalanceScale
            className="icon icon-scale"
            aria-label="Easy Scale Icon"
          />
          <h2>Easy Scale</h2>
          <p>Access app reviews and ratings from your trusted network</p>
        </div>
        <div className="professional">
          <FaUserTie
            className="icon icon-professional"
            aria-label="Professional Icon"
          />
          <h2>Professional</h2>
          <p>Save time searching for apps with personalized recommendations</p>
        </div>
      </div>
    </div>
  );
};

export default MoreFeatures;
