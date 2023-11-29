import "./MoreFeatures.css";
import { FaRegLightbulb, FaUserTie } from "react-icons/fa6";
import { FaBolt, FaBalanceScale } from "react-icons/fa";

function MoreFeatures() {
  return (
    <div className="more-features-container">
      <span>MORE FEATURES</span>
      <h1>Explore Our Business Features</h1>
      <div className="grid-container">
        <div className="powerful">
          <FaBolt className="icon icon-strong" />
          <h2>Powerful</h2>
          <p>Send large files without any limitations</p>
        </div>
        <div className="img-container">
          <div className="img-holder">
            <img
              src={process.env.PUBLIC_URL + "/images/business-img.png"}
              alt="business-img"
              className="business-img"
            />
            <img
              src={process.env.PUBLIC_URL + "/images/business-qcode-img.jpg"}
              alt="business-qcode"
              className="business-qcode"
            />
            <img
              src="https://randomuser.me/api/portraits/women/44.jpg"
              alt="person"
              className="business-user"
            />
          </div>
        </div>
        <div className="smart">
          <FaRegLightbulb className="icon icon-blob" />
          <h2>Smart</h2>
          <p>Get real-time notifications when someone shares a file with you</p>
        </div>
        <div className="easy-scale">
          <FaBalanceScale className="icon icon-scale" />
          <h2>Easy Scale</h2>
          <p>Access app reviews and ratings from your trusted network</p>
        </div>
        <div className="professional">
          <FaUserTie className="icon icon-professional" />
          <h2>Professional</h2>
          <p>Save time searching for apps with personalized recommendations</p>
        </div>
      </div>
    </div>
  );
}

export default MoreFeatures;
