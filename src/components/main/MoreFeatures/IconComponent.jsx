import CardsData from "./CardsData";

const IconComponent = () => {
    return (
      <>
        {CardsData.map((container, index) => (
          <div
            key={index}
            className={`flex flex-col items-center gap-4 py-8 px-4 ${
              index === 0 ? "xl:order-first" : ""
            }`}
          >
            {container.icon}
            <h2>{container.title}</h2>
            <p className="text-pretty italic text-gray-400">
              {container.description}
            </p>
          </div>
        ))}
      </>
    );
  };
  
  export default IconComponent;