function StepsCard(props) {
    const { number, title, description, linkText, linkHref } = props;
  
    return (
      <div className="steps-item gap-4 rounded-2xl max-lg:items-center *:flex-1">
        <div className="step-number">{number}</div>
        <h2>{title}</h2>
        <p className="text-gray-400">{description}</p>
        <a className="font-bold" href={linkHref}>{linkText}</a>
      </div>
    );
  }
  
  export default StepsCard;