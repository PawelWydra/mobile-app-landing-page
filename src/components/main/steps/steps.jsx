import "./steps.css";

function Steps() {
  return (
    <div className="steps-container">
      <span>3 STEPS</span>
      <h1>You'll Love To Use It</h1>
      <div className="flex-steps">
        <div className="steps-item">
          <div className="step-number">1</div>
          <h2>Create Your Account</h2>
          <p>Creating an account with us is easy and hassle-free.</p>
          <a href="#">Create Now</a>
        </div>
        <div className="steps-item">
          <div className="step-number">2</div>
          <h2>Build Great Business</h2>
          <p>
            You will gain access to exclusive features, special offers, and
            personalized content that is tailored to your business needs.
          </p>
          <a href="#">Start Now</a>
        </div>
        <div className="steps-item">
          <div className="step-number">3</div>
          <h2>Deploy Account</h2>
          <p>
            With just a few clicks, you'll be on your way to enjoying all the
            benefits our platform has to offer.
          </p>
          <a href="#">Deploy Now</a>
        </div>
      </div>
    </div>
  );
}

export default Steps;
