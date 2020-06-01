import styled, { css } from "styled-components";
import { animated } from "react-spring";
import device from "@/utils/media";
import Paragraph from "@/components/paragraph/paragraph.ts";
import Button from "@/components/button/button.ts";

export const Wrapper = styled.section`
  width: 100%;
  display: grid;
  grid-template-rows: repeat(3, min-content);
  grid-template-columns: 100%;
  row-gap: 3rem;
  justify-content: center;

  @media ${device.tablet} {
    justify-items: center;
  }
`;

export const TextContent = styled.div`
  width: 100%;
  display: grid;
  grid-template-rows: repeat(2, min-content);
  row-gap: 2rem;
  justify-self: center;

  @media ${device.tablet} {
    width: 40%;
  }
`;

export const Questions = styled.div`
  width: 100%;

  @media ${device.tablet} {
    width: 40rem;
  }
`;

export const QuestionItemWrapper = styled.div`
  display: grid;
  grid-template-rows: min-content;
  row-gap: 1.5rem;
  padding: 1.5rem 0rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  width: 100%;
`;

export const Answer = styled(animated.p)`
  height: 100%;
  color: ${props => props.theme.colors.grayishBlue};
  text-align: left;
  font-size: 1.4rem;
`;

export const MoreInfoBtn = styled(Button)`
  font-size: 1.4rem;
  padding: 1.3rem 2.3rem;
  justify-self: center;
`;

type QuestionContainerProps = { active: boolean };
export const QuestionContainer = styled.div<QuestionContainerProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;

  svg {
    cursor: pointer;
    transition: all 0.3s ease-in-out;

    ${props =>
      props.active &&
      css`
        transform: rotate(180deg);

        path {
          transition: all 0.3s ease-in-out;
          stroke: ${props => props.theme.colors.softRed};
        }
      `}
  }
`;

export const Question = styled.h4`
  color: ${props => props.theme.colors.darkBlue};
  font-size: 1.4rem;
  font-weight: 400;

  @media ${device.tablet} {
    font-size: 1.6rem;
  }
`;

export const Heading = styled.h2`
  font-size: 3rem;
  font-weight: 500;
  text-align: center;
`;
