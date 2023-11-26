import "./header.css"

function Header() {
  return (
    <div className="title">
      <img src={process.env.PUBLIC_URL + '/images/logo.png'} alt="logo" />
      <nav>
        <ul className="navbar">
          <li><a href="#">About</a></li>
          <li><a href="#">Features</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">Pricing</a></li>
          <button className="download-btn">DOWNLOAD NOW</button>
        </ul>
          
      </nav>
    </div>
  );
}

export default Header;
