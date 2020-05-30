import styled from "styled-components";
import Button from "@/components/button/button.ts";
import device from "@/utils/media";

export const Wrapper = styled.section`
  display: grid;
  grid-template-rows: min-content min-content;
  row-gap: 3rem;

  @media ${device.tablet} {
    grid-template-columns: 1fr 1fr;
    column-gap: 3rem;
    align-items: center;
  }
`;

export const Content = styled.div`
  display: grid;
  grid-template-rows: auto;
  row-gap: 3rem;
  height: fit-content;
  text-align: center;

  @media ${device.tablet} {
    grid-area: 1 / 1 / 1 / 1;
    text-align: left;
  }
`;

export const Heading = styled.h1`
  font-size: 3rem;
  font-weight: 500;
  text-transform: capitalize;

  @media ${device.laptop} {
    font-size: 4.2rem;
  }
`;

export const HeroIllustration = styled.div`
  width: 100%;
  height: fit-content;
  position: relative;
  margin-bottom: 1.5rem;

  ::after {
    content: "";
    display: block;
    position: absolute;
    top: 20%;
    left: 15%;
    background-color: ${props => props.theme.colors.softBlue};
    height: 85%;
    width: 100%;
    z-index: -1;
    border-top-left-radius: 8rem;
    border-bottom-left-radius: 8rem;
  }
`;

export const Illustration = styled.img`
  width: 100%;
`;

export const ButtonContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 1rem;

  @media ${device.tablet} {
    width: 33rem;
  }
`;

export const StyledButton = styled(Button)`
  padding: 1.4rem 1rem;
  font-size: 1.4rem;
`;
