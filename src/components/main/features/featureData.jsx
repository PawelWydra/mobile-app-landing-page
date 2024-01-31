import InsertChartIcon from "@mui/icons-material/InsertChart";
import InventoryIcon from "@mui/icons-material/Inventory";
import WifiIcon from "@mui/icons-material/Wifi";

export const items = [
    {
      icon: <InventoryIcon style={{ color: "yellow" }} fontSize="large" />,
      title: "Organize",
      description: "Organize your schedule and set reminders for important events",
      className: "organize"
    },
    {
      icon: <InsertChartIcon color="secondary" fontSize="large" />,
      title: "Track",
      description: "Keep track of your expenses and budget more effectively",
      className: "round-bg track"
    },
    {
      icon: <WifiIcon style={{ color: "blue" }} fontSize="large" />,
      title: "Connect",
      description: "Connect with friends and family seamlessly",
      className: "round-bg connect"
    }
  ];