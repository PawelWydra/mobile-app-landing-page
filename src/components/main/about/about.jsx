import SectionContainer from "../../utils/SectionContainer";
import "./about.css";

function About() {
  return (
    <SectionContainer>
      <div className="flex items-center justify-center gap-10 lg:gap-20 flex-wrap-reverse">
      <div className="about-image">
        <img
          src={process.env.PUBLIC_URL + "/images/about-person-img.png"}
          alt="logo"
          className="about-person-image"
        />
        <img
          src={process.env.PUBLIC_URL + "/images/about-app-img.png"}
          alt="logo"
          className="about-app-img"
        />
        <img
          src={process.env.PUBLIC_URL + "/images/about-user-img.png"}
          alt="logo"
          className="about-user-img"
        />
        <img
          src={process.env.PUBLIC_URL + "/images/about-user-ui-img.png"}
          alt="logo"
          className="about-user-ui-img"
        />
      </div>
      <div className="about-title gap-4">
        <span className="max-lg:self-center">ABOUT US</span>
        <h1>We Do Things Differently</h1>
        <p>
          Our app is user-friendly and easy to navigate, so you can start using
          it right away. Plus, it's available on both iOS and Android devices,
          so you can download it no matter what kind of phone you have.
        </p>
        <button className="btn-about max-lg:self-center">ABOUT US</button>
      </div>
      </div>
    </SectionContainer>
  );
}

export default About;
