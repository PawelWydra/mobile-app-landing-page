import React from "react";
import { BsQuestion } from "react-icons/bs"; // Import BsQuestion icon from react-icons/bs

const Question = ({ id, question, answer }) => {
    return (
      <div className="flex gap-4" key={id}>
        <BsQuestion className="self-center size-16 max-md:hidden" />
        <div className="flex-1 *:max-md:">
          <h3 className="text-xl lg:text-2xl font-bold mb-4 text-center">{question}</h3>
          <p className="sm:text-md xl:text-lg italic text-pretty">{answer}</p>
        </div>
      </div>
    );
  };

export default Question;
