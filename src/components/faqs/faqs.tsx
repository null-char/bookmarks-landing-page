import React from "react";
import { Fade } from "react-reveal";
import faqsData from "@/data/faqs.json";
import Paragraph from "@/components/paragraph/paragraph.ts";
import QuestionItem from "@/components/faqs/question-item.tsx";
import {
  Wrapper,
  Questions,
  TextContent,
  Heading,
  MoreInfoBtn,
} from "@/components/faqs/styles";

const FAQs: React.FC = () => (
  <Wrapper>
    <TextContent>
      <Fade cascade>
        <Heading>Frequently asked questions</Heading>
        <Paragraph alignCenter>
          Here are some of our FAQs. If you have any other questions you'd like
          answered please feel free to email us.
        </Paragraph>
      </Fade>
    </TextContent>

    <Fade>
      <Questions>
        {faqsData.faqs.map(faq => (
          <QuestionItem question={faq.question} answer={faq.answer} />
        ))}
      </Questions>
    </Fade>

    <MoreInfoBtn>More Info</MoreInfoBtn>
  </Wrapper>
);

export default FAQs;
