import "./pricing.css";

function Pricing() {
  return (
    <div className="pricing-container">
      <div className="pricing-flex">
        <span>PRICING</span>
        <h1>Our Flexible App Price</h1>
        <div className="pricing-items-wrapper">
          <div className="pricing-item">
            <h1>$10</h1>
            <h2>Standard</h2>
            <ul>
              <li>
                <i>icon</i>
                <p>Email Marketing</p>
              </li>
              <li>
                <i>icon</i>
                <p>Mobile Optimization</p>
              </li>
              <li>
                <i>icon</i>
                <p>Time Deliverable</p>
              </li>
            </ul>
          </div>
          <div className="pricing-item">
            <h1>$20</h1>
            <h2>Premium</h2>
            <ul>
              <li>
                <i>icon</i>
                <p>Email Marketing</p>
              </li>
              <li>
                <i>icon</i>
                <p>Mobile Optimization</p>
              </li>
              <li>
                <i>icon</i>
                <p>Time Deliverable</p>
              </li>
            </ul>
          </div>
          <div className="pricing-item">
            <h1>$40</h1>
            <h2>Enterprise</h2>
            <ul>
              <li>
                <i>icon</i>
                <p>Email Marketing</p>
              </li>
              <li>
                <i>icon</i>
                <p>Mobile Optimization</p>
              </li>
              <li>
                <i>icon</i>
                <p>Time Deliverable</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
