import "./main.css";
import Title from "./title/title.jsx";
import Features from "./features/features.jsx";
import About from "./about/about.jsx";

function Main() {
  return (<div className="flex-box">
    <Title />
    <Features />
    <About />
  </div>);
}

export default Main;
