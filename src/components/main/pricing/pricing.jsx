import "./pricing.css";
import { FaCheck } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";


function Pricing() {
  return (
    <div className="pricing-container">
      <div className="pricing-flex">
        <span>PRICING</span>
        <h1>Our Flexible App Price</h1>
        <div className="pricing-items-wrapper">
          <div className="pricing-item">
            <h1>$10</h1>
            <h3>Standard</h3>
            <ul>
              <li>
              <FaCheck color="rgba(0, 128, 255, 0.863)"/>
                <p>Email Marketing</p>
              </li>
              <li>
              <FaXmark color="red"/>
              <p className="opacity">Mobile Optimization</p>
              </li>
              <li>
              <FaXmark color="red"/>
                <p className="opacity">Time Deliverable</p>
              </li>
            </ul>
            <button className="pricing-btn">GET NOW</button>
          </div>
          <div className="pricing-item premium-card">
            <h1>$20</h1>
            <h3>Premium</h3>
            <ul>
              <li>
              <FaCheck color="rgba(0, 128, 255, 0.863)"/>
                <p>Email Marketing</p>
              </li>
              <li>
              <FaCheck color="rgba(0, 128, 255, 0.863)"/>
                <p>Mobile Optimization</p>
              </li>
              <li>
              <FaXmark color="red"/>
                <p className="opacity">Time Deliverable</p>
              </li>
            </ul>
            <button className="pricing-btn premium-btn">GET NOW</button>
          </div>
          <div className="pricing-item">
            <h1>$40</h1>
            <h3>Enterprise</h3>
            <ul>
              <li>
              <FaCheck color="rgba(0, 128, 255, 0.863)"/>
                <p>Email Marketing</p>
              </li>
              <li>
              <FaCheck color="rgba(0, 128, 255, 0.863)"/>
                <p>Mobile Optimization</p>
              </li>
              <li>
              <FaCheck color="rgba(0, 128, 255, 0.863)"/>
                <p>Time Deliverable</p>
              </li>
            </ul>
            <button className="pricing-btn">GET NOW</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
