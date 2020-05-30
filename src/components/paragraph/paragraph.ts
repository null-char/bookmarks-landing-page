import styled, { css } from "styled-components";
import device from "@/utils/media";

type ParagraphProps = {
  alignCenter?: boolean;
};

const Paragraph = styled.p<ParagraphProps>`
  line-height: 1.45;
  font-size: 1.6rem;
  color: ${props => props.theme.colors.grayishBlue};
  text-align: center;
  width: 100%;

  /* 
  Only responsively align to left if it is not explicitly set
  to always center
  */
  ${props =>
    !props.alignCenter &&
    css`
      @media ${device.tablet} {
        text-align: left;
      }
    `}

  @media ${device.tablet} {
    font-size: 1.8rem;
  }
`;

export default Paragraph;
