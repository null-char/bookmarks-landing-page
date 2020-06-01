import styled from "styled-components";
import { animated } from "react-spring";
import Button from "@/components/button/button.ts";
import device from "@/utils/media";

export const Wrapper = styled.footer`
  width: 100%;
`;

export const NewsLetter = styled.div`
  background-color: ${props => props.theme.colors.softBlue};
  padding: 3.5rem 2.7rem;
  display: grid;
  grid-template-rows: repeat(2, min-content);
  row-gap: 3rem;
  align-items: center;
  justify-content: center;
`;

export const TextContent = styled.div`
  display: grid;
  grid-template-rows: repeat(2, min-content);
  row-gap: 1rem;
  text-align: center;
  color: ${props => props.theme.colors.white};
`;

export const NewsLetterHeading = styled.h3`
  font-size: 2rem;
  font-weight: 500;

  @media ${device.tablet} {
    font-size: 2.3rem;
  }
`;

export const ContactForm = styled.form`
  display: grid;
  grid-template-rows: repeat(2, min-content);
  grid-template-columns: 100%;
  row-gap: 1.5rem;

  @media ${device.tablet} {
    grid-template-rows: 100%;
    grid-template-columns: 2fr 1fr;
    column-gap: 1.5rem;
  }
`;

export const Contact = styled.div`
  display: grid;
  grid-template-rows: repeat(2, min-content);
  grid-template-columns: 1fr;
`;

export const ContactInputContainer = styled.label`
  display: grid;
  grid-template-columns: repeat(2, min-content);
  justify-content: space-between;
  align-items: center;
  padding: 1.4rem 2rem;
  border-radius: 0.5rem;
  transition: all 0.2s ease-in-out;
  background-color: ${props => props.theme.colors.white};

  :focus {
    border: 1px solid ${props => props.theme.colors.softRed};
  }

  @media ${device.tablet} {
  }
`;

export const ErrorMessage = styled(animated.div)`
  grid-area: 2 / 1 / 3 / 3;
  width: 100%;
  font-size: 1.2rem;
  text-transform: italics;
  padding: 1rem;
  background-color: ${props => props.theme.colors.softRed};
  color: ${props => props.theme.colors.white};
  transform: translateY(-0.5rem);
`;

export const ErrorIcon = styled.img`
  height: 100%;
`;

export const ContactInput = styled.input`
  outline: none;
  border: none;
  font-size: 1.4rem;
  color: ${props => props.theme.colors.darkBlue};
`;

type ContactBtnProps = {
  hasError: boolean;
};

export const ContactBtn = styled(Button)<ContactBtnProps>`
  width: 100%;
  font-size: 1.4rem;
  text-transform: capitalize;
  padding: 1.4rem 2rem;
  transition: height 1.5s ease-in-out;

  @media ${device.tablet} {
    display: flex;
    align-items: center;
    justify-content: center;
    height: ${props => (props.hasError ? "50%" : "100%")};
  }
`;

export const StatsText = styled.p`
  font-size: 1.3rem;
  letter-spacing: 0.2rem;
  text-transform: uppercase;
`;

export const Logo = styled.img`
  height: 2.4rem;
  width: auto;
`;

export const SocialMediaLogo = styled.img`
  cursor: pointer;
  height: 1.6rem;
  transition: transform 0.2s ease-in;

  :hover {
    transform: translateY(-0.1rem);
  }

  :active {
    transform: translateY(0.1rem);
  }
`;

export const Links = styled.div`
  display: grid;
  grid-template-rows: repeat(2, min-content);
  row-gap: 3.5rem;
  justify-content: center;
  padding: 2.5rem 0rem;
  background-color: ${props => props.theme.colors.darkBlue};

  @media ${device.tablet} {
    grid-template-rows: 1fr;
    grid-template-columns: repeat(2, min-content);
    column-gap: 3.5rem;
    justify-content: space-between;
    padding: 2.5rem 12rem;
  }
`;

export const MainLinks = styled.ul`
  list-style: none;
  display: grid;
  grid-template-rows: repeat(4, min-content);
  row-gap: 3.5rem;
  justify-content: center;
  text-align: center;

  @media ${device.tablet} {
    grid-template-rows: 1fr;
    grid-template-columns: repeat(4, min-content);
    column-gap: 3.5rem;
    align-items: center;
  }
`;

export const TextLink = styled.li`
  font-size: 1.3rem;
  text-transform: uppercase;
  color: ${props => props.theme.colors.white};
  cursor: pointer;
  transition: color 0.2s ease-in-out;
  letter-spacing: 0.2rem;
  justify-self: center;

  :hover {
    color: ${props => props.theme.colors.softRed};
  }
`;

export const SocialMediaLinks = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(2, min-content);
  column-gap: 3.5rem;
  justify-self: center;
  align-items: center;
`;
