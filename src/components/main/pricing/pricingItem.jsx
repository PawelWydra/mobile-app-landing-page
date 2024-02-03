import { FaCheck, FaTimes } from "react-icons/fa";

function PricingItem({
  price,
  title,
  features,
  buttonLabel,
  buttonClass,
  className,
}) {
  return (
    <div className={`pricing-item rounded-2xl flex-1 ${className}`}>
      <h1 className="text-5xl">{price}</h1>
      <h3 className="font-semibold text-2xl">{title}</h3>
      <ul className="my-2">
        {features.map((feature, index) => (
          <li key={index}>
            {feature.icon === "check" ? (
              <FaCheck color="rgba(0, 128, 255, 0.863)" />
            ) : (
              <FaTimes color="red" />
            )}
            <p className={feature.icon === "check" ? "text-lg" : "text-lg opacity line-through"}>
              {feature.text}
            </p>
          </li>
        ))}
      </ul>
      <button className={`pricing-btn ${buttonClass}`}>{buttonLabel}</button>
    </div>
  );
}

export default PricingItem;
