import './faq.css'
import { BsQuestion } from "react-icons/bs";

function FAQ() {
  return (
    <section className="faq-container" id='faq'>
      <div className="faq-flex">
        <span>F.A.Q.</span>
        <h1>Frequently Asked Questions</h1>
        <div className="faq-items-wrapper">
          <div className="faq-item">
            <BsQuestion className='faq-icon'/>
            <div className="answer-question-wrapper">
              <h3>How do I download the app?</h3>
              <p>
                To download the app, go to the App Store (for iOS devices) or
                Google Play Store (for Android devices) on your mobile device.
                Search for the name of the app and click "Download" or
                "Install".
              </p>
            </div>
          </div>
          <div className="faq-item">
          <BsQuestion className='faq-icon'/>
            <div className="answer-question-wrapper">
              <h3>What devices are supported by the app?</h3>
              <p>
                Check the app's description in the app store for the list of
                devices it supports. Typically, the app will work on the latest
                versions of iOS or Android operating systems.
              </p>
            </div>
          </div>
          <div className="faq-item">
          <BsQuestion className='faq-icon'/>
            <div className="answer-question-wrapper">
              <h3>How do I contact customer support?</h3>
              <p>
                Look for a "Contact us" or "Support" option within the app's
                settings or help menu. You can typically send an email or
                message to the app's customer support team.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FAQ;
