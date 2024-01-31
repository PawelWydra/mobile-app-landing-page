import SectionContainer from "../../utils/SectionContainer";
import "./faq.css";
import { BsQuestion } from "react-icons/bs";
import { faqItems } from "./faqData";
import Question from "./question";

function FAQ() {
  return (
    <SectionContainer>
      <div className="faq-container flex flex-col gap-6 rounded-3xl shadow-2xl">
        <span className="text-white"> F.A.Q.</span>
        <h1 className="text-3xl font-bold">Frequently Asked Questions</h1>
        <div className="flex flex-col gap-6 justify-center md:w-2/3 xl:w-1/2 px-4">
            {faqItems.map((item) => (
              <Question key={item.id} {...item} />
            ))}
        </div>
      </div>
    </SectionContainer>
  );
}

export default FAQ;
