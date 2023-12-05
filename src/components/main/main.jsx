import "./main.css";
import Title from "./title/title.jsx";
import Features from "./features/features.jsx";
import About from "./about/about.jsx";
import Service from "./service/service";
import Download from "./download/download";
import MoreFeatures from "./MoreFeatures/MoreFeatures.jsx";
import Steps from "./steps/steps";
import FAQ from "./faq/faq";
import Pricing from "./pricing/pricing";

function Main() {
  return (
    <div className="flex-box">
      <Title />
      <Features />
      <About />
      <Service />
      <Download />
      <MoreFeatures />
      <Steps />
      <FAQ />
      <Pricing />
    </div>
  );
}

export default Main;
