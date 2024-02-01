import React from "react";
import { BsQuestion } from "react-icons/bs"; // Import BsQuestion icon from react-icons/bs

const Question = ({ id, question, answer }) => {
    return (
      <div className="flex gap-8" key={id}>
        <BsQuestion className="faq-icon self-center" />
        <div className="flex-1 *:max-md:text-center">
          <h3 className="text-xl font-bold mb-2">{question}</h3>
          <p className="max-md:text-sm italic">{answer}</p>
        </div>
      </div>
    );
  };

export default Question;
