import React from 'react';
import { BsQuestion } from 'react-icons/bs'; // Import BsQuestion icon from react-icons/bs

const Question = (props) => {
  return (
    <div className="faq-item" key={id}>
      <BsQuestion className="faq-icon" />
      <div className="answer-question-wrapper">
        <h3>{question}</h3>
        <p>{answer}</p>
      </div>
    </div>
  );
};

export default Question;