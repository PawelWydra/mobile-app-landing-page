import SectionContainer from "../../utils/SectionContainer";
import "./faq.css";
import { BsQuestion } from "react-icons/bs";
import { faqItems } from "./faqData";

function FAQ() {
  return (
    <SectionContainer>
      <div className="faq-container flex flex-col rounded-3xl">
        <span>F.A.Q.</span>
        <h1>Frequently Asked Questions</h1>
        <div className="flex flex-col p-10">
          <div>
            {faqItems.map((item) => (
              <div className="faq-item" key={item.id}>
                <BsQuestion className="faq-icon" />
                <div className="answer-question-wrapper">
                  <h3>{item.question}</h3>
                  <p>{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}

export default FAQ;
