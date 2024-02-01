import HeaderContainer from "../../utils/HeaderContainer";
import "./title.css";

function Title() {
  return (
    <HeaderContainer>
      <div className="background-image flex justify-center items-center gap-24 flex-wrap px-8 lg:px-20 xl:px-32 py-8">
        <div className="card-description max-lg:items-center gap-5 flex-[1_1_0%] min-w-[28rem] *:max-md:text-center">
          <span>BEST APPLICATION</span>
          <h1 className="leading-snug text-3xl lg:text-6xl">Make It Simple With Our Mobile App</h1>
          <p className=" text-balance">
            Our mobile app is designed to make your daily tasks easier and more
            efficient, so you can focus on the things that matter most.
          </p>
          <button>EXPLORE</button>
        </div>
        <div className="relative flex justify-center items-center flex-1 min-w-[10rem] max-w-[20rem] min-h-[30rem] max-h-[30rem]">
          <img
            src={process.env.PUBLIC_URL + "/images/title-img.png"}
            alt="logo"
            className="title-img max-h-[26.5rem] max-w-[20rem]"
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
    </HeaderContainer>
  );
}

export default Title;
