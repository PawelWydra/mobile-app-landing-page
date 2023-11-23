import "./header.css"

function Header() {
  return (
    <div className="title">
      <img src={process.env.PUBLIC_URL + '/images/logo.png'} alt="logo" />
      <nav className="navbar">
        <ul>
          <li>About</li>
          <li>Features</li>
          <li>Blog</li>
          <li>Pricing</li>
          <button>Download Now</button>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
