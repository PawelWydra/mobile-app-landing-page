import Title from "./title/title.jsx";
import Features from "./features/features.jsx";
import About from "./about/about.jsx";
import Service from "./service/service";
import BannerContainer from "../utils/bannerContainer/BannerContainer.jsx";
import MoreFeatures from "./MoreFeatures/MoreFeatures.jsx";
import Steps from "./steps/steps";
import FAQ from "./faq/faq";
import Pricing from "./pricing/pricing";
import Blog from "./blog/blog";

function Main() {
  return (
    <main>
      <Title />
      <Features />
      <About />
      <Service />
      <BannerContainer
        mainTitle="Download Our App"
        subTitle="Right Now"
        id="downloads"
      />
      <MoreFeatures />
      <Steps />
      <FAQ />
      <Pricing />
      <Blog />
      <BannerContainer
        mainTitle="Join The Biggest"
        subTitle="Community"
        id="join-now"
      />
    </main>
  );
}

export default Main;
