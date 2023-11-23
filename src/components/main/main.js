import './main.css'

function Main() {
  return (
    <div className="container background-image">
      <div className="card-description">
        <span>BEST APPLICATION</span>
        <h1>Make It Simple With Our Mobile App</h1>
        <p>
          Our mobile app is designed to make your daily tasks easier and more
          efficient, so you can focus on the things that matter most.
        </p>
        <button>Explore</button>
      </div>
      <div>
      <img src={process.env.PUBLIC_URL + "/images/title-img.png"} alt="logo" />
      <img src="https://randomuser.me/api/portraits/men/73.jpg" alt="person" />
      <img src="https://randomuser.me/api/portraits/women/51.jpg" alt="person" />
      

      </div>
    </div>
  );
}

export default Main;
