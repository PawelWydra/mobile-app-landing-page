import "./about.css"

function About() {
  return (
    <div className="about-container">
      <div className="about-image"></div>
      <div className="about-title">
        <span>ABOUT US</span>
        <h1>We Do Things Differently</h1>
        <p>
          Our app is user-friendly and easy to navigate, so you can start using
          it right away. Plus, it's available on both iOS and Android devices,
          so you can download it no matter what kind of phone you have.
        </p>
        <button className="btn-about">ABOUT US</button>
      </div>
    </div>
  );
}

export default About;
