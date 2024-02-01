import HeaderContainer from "../utils/HeaderContainer";
import "./footer.css";
import { FaInstagram, FaFacebookF, FaGithub } from "react-icons/fa6";

function Footer() {
  return (
    <HeaderContainer>
      <div className="grid grid-cols-4 gap-10">
      <div className="max-lg:col-span-4">
        <img className="max-w-32" src={process.env.PUBLIC_URL + "/images/logo.png"} alt="logo" />
      </div>
      <div className="max-lg:col-span-2">
        <span>MENU</span>
        <ul className="flex flex-col  gap-2 font-semibold mt-4">
          <li>About</li>
          <li>Features</li>
          <li>Blog</li>
          <li>Pricing</li>
        </ul>
      </div>
      <div className="max-lg:col-span-2">
        <span>FEATURES</span>
        <ul className="flex flex-col gap-2 font-semibold mt-4">
          <li>Powerful</li>
          <li>Smart</li>
          <li>Easy Scale</li>
          <li>Professional</li>
        </ul>
      </div>
      <div className="">
        <span>SOCIAL</span>
        <div className="max-lg:min-w-[25rem] flex gap-2 *:grid *:place-items-center mt-4 flex-1">
          <a href="" className="bg-blue-500 rounded-full size-12">
            <FaFacebookF size={25} color="#fff"   />
          </a>
          <a href="" className="bg-blue-500 rounded-full size-12">
            <FaGithub size={25} color="#fff"  />
          </a>
          <a href="#title" className="bg-blue-500 rounded-full size-12">
            <FaInstagram size={25} color="#fff"   />
          </a>
        </div>
      </div>
      </div>
    </HeaderContainer>
  );
}

export default Footer;
