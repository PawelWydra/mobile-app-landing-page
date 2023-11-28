import "./MoreFeatures.css";

function MoreFeatures() {
  return (
    <div className="more-features-container">
      <span>MORE FEATURES</span>
      <h1>Explore Our Business Features</h1>
      <div className="grid-container">
        <div className="powerful">
          <i></i>
          <h2>Powerful</h2>
          <p>Send large files without any limitations</p>
        </div>
        <div className="smart">
          <i></i>
          <h2>Smart</h2>
          <p>Get real-time notifications when someone shares a file with you</p>
        </div>
        <div className="img-container"></div>
        <div className="easy-scale">
          <i></i>
          <h2>Easy Scale</h2>
          <p>Access app reviews and ratings from your trusted network</p>
        </div>
        <div className="professional">
          <i></i>
          <h2>Professional</h2>
          <p>Save time searching for apps with personalized recommendations</p>
        </div>
      </div>
    </div>
  );
}

export default MoreFeatures;
