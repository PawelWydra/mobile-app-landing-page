import "./download.css";

function Download(props) {
  return (
    <section className="download-container background-image" id={props.id}>
      <span>DOWNLOAD NOW</span>
      <div className="heading-container pulse">
        <h1>{props.mainTitle}</h1>
        <h1>{props.subTitle}</h1>
      </div>
      <div className="btn-container">
        <button className="btn-explore">EXPLORE</button>
        <button className="btn-get-now">GET NOW</button>
      </div>
    </section>
  );
}

export default Download;
