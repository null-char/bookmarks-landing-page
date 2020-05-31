import React, { useState } from "react";
import { useTransition } from "react-spring";
import {
  QuestionItemWrapper,
  QuestionContainer,
  Question,
  Answer,
} from "@/components/faqs/styles";

type QuestionItemProps = {
  question: string;
  answer: string;
};

const QuestionItem: React.FC<QuestionItemProps> = ({ question, answer }) => {
  const [showAnswer, setShowAnswer] = useState(false);
  const transitions = useTransition(showAnswer, null, {
    from: { opacity: 0, maxHeight: "0rem" },
    enter: { opacity: 1, maxHeight: "30rem" },
    leave: { opacity: 0, maxHeight: "0rem" },
    config: { duration: 300 },
  });

  const onArrowClick = () => {
    setShowAnswer(!showAnswer);
  };

  return (
    <QuestionItemWrapper>
      <QuestionContainer active={showAnswer}>
        <Question>{question}</Question>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="12"
          onClick={onArrowClick}
        >
          <path
            fill="none"
            stroke="#5267DF"
            stroke-width="3"
            d="M1 1l8 8 8-8"
          />
        </svg>
      </QuestionContainer>

      {transitions.map(
        ({ item, key, props }) =>
          item && (
            <Answer key={key} style={props}>
              {answer}
            </Answer>
          )
      )}
    </QuestionItemWrapper>
  );
};

export default QuestionItem;
