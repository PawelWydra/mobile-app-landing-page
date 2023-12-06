import "./title.css"

function Title() {
    return ( 
        <div className="container background-image" id="title">
          <div className="card-description">
            <span>BEST APPLICATION</span>
            <h1>Make It Simple With Our Mobile App</h1>
            <p>
              Our mobile app is designed to make your daily tasks easier and more
              efficient, so you can focus on the things that matter most.
            </p>
            <button>EXPLORE</button>
          </div>
          <div className="title-container">
            <img
              src={process.env.PUBLIC_URL + "/images/title-img.png"}
              alt="logo"
              className="title-img"
            />
            <img
              src="https://randomuser.me/api/portraits/men/73.jpg"
              alt="person"
              className="men-img"
            />
            <img
              src="https://randomuser.me/api/portraits/women/51.jpg"
              alt="person"
              className="women-img"
            />
          </div>
        </div>
       );
}

export default Title;