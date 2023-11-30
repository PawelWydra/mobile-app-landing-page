import "./main.css";
import Title from "./title/title.jsx";
import Features from "./features/features.jsx";
import About from "./about/about.jsx";
import Service from "./service/service";
import Download from "./download/download";
import MoreFeatures from "./MoreFeatures/MoreFeatures.jsx";
import Steps from "./steps/steps";

function Main() {
  return (<div className="flex-box">
    <Title />
    <Features />
    <About />
    <Service/>
    <Download />
    <MoreFeatures />
    <Steps />
  </div>);
}

export default Main;
