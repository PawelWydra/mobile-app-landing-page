function StepsCard(props) {
    const { number, title, description, linkText, linkHref } = props;
  
    return (
      <div className="steps-item gap-4 rounded-2xl">
        <div className="step-number">{number}</div>
        <h2>{title}</h2>
        <p>{description}</p>
        <a href={linkHref}>{linkText}</a>
      </div>
    );
  }
  
  export default StepsCard;