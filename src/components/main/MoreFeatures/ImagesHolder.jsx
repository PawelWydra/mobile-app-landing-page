function ImagesHolder() {
  return (
    <div className="img-holder xl:col-start-2 row-span-2 max-xl:col-span-full">
      <img
        src={process.env.PUBLIC_URL + "/images/business-img.png"}
        alt="Business"
        className="business-img"
      />
      <img
        src={process.env.PUBLIC_URL + "/images/business-qcode-img.jpg"}
        alt="Business QR Code"
        className="business-qcode"
      />
      <img
        src="https://randomuser.me/api/portraits/women/44.jpg"
        alt="Business Person"
        className="business-user"
      />
    </div>
  );
}

export default ImagesHolder;
