import SectionContainer from "../../utils/SectionContainer";
import "./service.css";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";

function Service() {
  return (
    <SectionContainer>
      <div className="flex items-center justify-center gap-10 lg:gap-20 flex-wrap">
        <div className="service-title flex-1 gap-4">
          <span>SERVICE</span>
          <h1>Share With Your Friends</h1>
          <p>
            Don't waste time sending files and photos one by one. Download our
            app now and start sharing your memories with ease!
          </p>
          <ul className="flex flex-col max-sm:items-center">
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
        <div className="service-image-container max-w-[30rem] flex-1">
          <div className="service-image max-sm:max-w-48">
            <img
              src={process.env.PUBLIC_URL + "/images/share-img.jpg"}
              alt="share-img"
              className="share-img"
            />
            <img
              src={process.env.PUBLIC_URL + "/images/share-user-img.jpg"}
              alt="share-user-img"
              className="share-user-img"
            />
            <img
              src="https://randomuser.me/api/portraits/women/32.jpg"
              alt="person"
              className="share-person"
            />
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}

export default Service;
