import "./footer.css";
import { FaInstagram, FaFacebookF, FaGithub } from "react-icons/fa6";

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-item">
        <img src={process.env.PUBLIC_URL + "/images/logo.png"} alt="logo" />
      </div>
      <div className="footer-item">
        <span>MENU</span>
        <ul>
          <li>About</li>
          <li>Features</li>
          <li>Blog</li>
          <li>Pricing</li>
        </ul>
      </div>
      <div className="footer-item">
        <span>FEATURES</span>
        <ul>
          <li>Powerful</li>
          <li>Smart</li>
          <li>Easy Scale</li>
          <li>Professional</li>
        </ul>
      </div>
      <div className="footer-item">
        <span>SOCIAL</span>
        <div className="social-icons">
          <FaFacebookF className="facebook-icon" />
          <FaGithub className="github-icon" />
          <FaInstagram className="instagram-icon" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
