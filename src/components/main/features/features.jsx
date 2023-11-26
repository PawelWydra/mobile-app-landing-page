import "./features.css";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import InventoryIcon from '@mui/icons-material/Inventory';
import WifiIcon from '@mui/icons-material/Wifi';

function Features() {
  return (
    <div className="main-features">
      <span>OUR FEATURES</span>
      <h1>Awesome Features Of Our App</h1>
      <div className="container-features">
        <div className="feature-item">
        <div className="round-bg organize">
            <InventoryIcon style={{ color: 'yellow' }} fontSize="large" />
          </div>
          <h3>Organize</h3>
          <p>Organize your schedule and set reminders for important events</p>
        </div>
        <div className="feature-item">
          <div className="round-bg track">
            <InsertChartIcon color="secondary" fontSize="large" />
          </div>
          <h3>Track</h3>
          <p>Keep track of your expenses and budget more effectively</p>
        </div>
        <div className="feature-item">
        <div className="round-bg connect">
            <WifiIcon style={{ color: 'blue' }} fontSize="large" />
          </div>
          <h3>Connect</h3>
          <p>Connect with friends and family seamlessly</p>
        </div>
      </div>
    </div>
  );
}

export default Features;
