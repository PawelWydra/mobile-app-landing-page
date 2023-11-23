function Header() {
  return (
    <div>
      <img src={process.env.PUBLIC_URL + '/images/logo.png'} alt="logo" />
      <nav>
        <ul>
          <li>About</li>
          <li>Features</li>
          <li>Blog</li>
          <li>Pricing</li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
