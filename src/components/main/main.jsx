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
import Blog from "./blog/blog";

function Main() {
  return (
    <main className="flex-box">
      <Title />
      <Features />
      <About />
      <Service />
      <Download mainTitle="Download Our App" subTitle="Right Now" id="downloads"/>
      <MoreFeatures />
      <Steps />
      <FAQ />
      <Pricing />
      <Blog />
      <Download mainTitle="Join The Biggest" subTitle="Community" id="join-now"/>
    </main>
  );
}

export default Main;
