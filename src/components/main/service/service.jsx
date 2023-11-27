import "./service.css";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";

function Service() {
  return (
    <div className="service-container">
      <div className="service-title">
        <span>SERVICE</span>
        <h1>Share With Your Friends</h1>
        <p>
          Don't waste time sending files and photos one by one. Download our app
          now and start sharing your memories with ease!
        </p>
        <ul>
          <li>
            <CheckCircleRoundedIcon fontSize="large" className="check-icon" />
            <span>Email Marketing</span>
          </li>
          <li>
            <CheckCircleRoundedIcon fontSize="large" className="check-icon" />
            <span>Mobile Optimization</span>
          </li>
          <li>
            <CheckCircleRoundedIcon fontSize="large" className="check-icon" />
            <span>Time Deliverable</span>
          </li>
          <li></li>
        </ul>
      </div>
      <div className="service-image">
        <img
          src={process.env.PUBLIC_URL + "/images/share-img.jpg"}
          alt="logo"
          className=""
        />
        <img
          src={process.env.PUBLIC_URL + "/images/share-user-img.jpg"}
          alt="logo"
          className=""
        />
      </div>
    </div>
  );
}

export default Service;
