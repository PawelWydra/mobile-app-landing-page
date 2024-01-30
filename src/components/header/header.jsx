import React, { useState } from "react";
import "./header.css";
import { RxHamburgerMenu } from "react-icons/rx";
import MobileMenu from "../mobileMenu/mobileMenu.jsx";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleClick = () => {
    setIsMenuOpen(!isMenuOpen);
    console.log(isMenuOpen);
  };

  return (
    <header className="title" id="header">
      <MobileMenu isMenuOpen={isMenuOpen} closeMenu={handleClick}/>
      <img src={process.env.PUBLIC_URL + "/images/logo.png"} alt="logo" />
      <div className="md:hidden">
        <RxHamburgerMenu size={40} onClick={handleClick} />
      </div>
      <nav className="hidden md:block">
        <ul className="navbar">
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#features">Features</a>
          </li>
          <li>
            <a href="#blog">Blog</a>
          </li>
          <li>
            <a href="#pricing">Pricing</a>
          </li>
          <button className="download-btn text-nowrap">DOWNLOAD NOW</button>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
