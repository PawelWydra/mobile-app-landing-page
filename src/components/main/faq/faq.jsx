import SectionContainer from "../../utils/SectionContainer";
import "./faq.css";
import { BsQuestion } from "react-icons/bs";
import { faqItems } from "./faqData";
import Question from "./question";

function FAQ() {
  return (
    <SectionContainer>
      <div className="faq-container flex flex-col rounded-3xl">
        <span>F.A.Q.</span>
        <h1>Frequently Asked Questions</h1>
        <div className="flex flex-col p-10">
          <div>
            {faqItems.map((item) => (
              <Question key={item.id} {...item} />
            ))}
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}

export default FAQ;
