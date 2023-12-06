import "./header.css";

function Header() {
  return (
    <header className="title" id="header">
      <img src={process.env.PUBLIC_URL + "/images/logo.png"} alt="logo" />
      <nav>
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
          <button className="download-btn">DOWNLOAD NOW</button>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
