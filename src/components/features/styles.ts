import styled, { css, keyframes } from "styled-components";
import device from "@/utils/media";
import Button from "@/components/button/button.ts";

export const Wrapper = styled.section`
  display: grid;
  grid-template-rows: repeat(3, min-content);
  row-gap: 5rem;

  @media ${device.tablet} {
    row-gap: 8rem;
  }
`;

export const MainHeading = styled.h2`
  font-size: 3rem;
  font-weight: 500;
  text-transform: capitalize;
`;

export const TextContent = styled.div`
  display: grid;
  grid-template-rows: repeat(2, min-content);
  row-gap: 2rem;
  text-align: center;
  justify-self: center;

  @media ${device.tablet} {
    width: 60%;
  }

  @media ${device.laptop} {
    width: 40%;
  }
`;

export const FeatureTextContent = styled.div`
  display: grid;
  grid-template-rows: repeat(3, min-content);
  row-gap: 2rem;
  text-align: center;
  justify-self: center;

  @media ${device.tablet} {
    text-align: left;
    justify-self: first baseline;
    margin-top: 5rem;
    width: 90%;
  }
`;

export const FeatureDescription = styled.section`
  width: 100%;
  display: grid;
  grid-template-rows: min-content min-content;
  row-gap: 4rem;

  @media ${device.tablet} {
    grid-template-rows: 1fr;
    row-gap: 0rem;
    grid-template-columns: 1fr 1fr;
    column-gap: 12rem;
  }
`;

export const FeaturesList = styled.ul`
  list-style: none;
  width: 100%;
  border-top: 1px solid rgba(0, 0, 0, 0.2);
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;

  @media ${device.tablet} {
    grid-template-rows: 1fr;
    grid-template-columns: 1fr 1fr 1fr;
    border-top: none;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  }

  @media ${device.laptop} {
    width: 80rem;
    justify-self: center;
  }
`;

type FeatureItemProps = {
  selected: boolean;
};

export const FeatureItem = styled.li<FeatureItemProps>`
  cursor: pointer;
  position: relative;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  font-size: 1.8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  color: ${props => props.theme.colors.grayishBlue};
  transition: color 0.2s ease-in-out;

  ::after {
    content: "";
    display: block;
    position: absolute;
    bottom: 0;
    height: 0.3rem;
    background-color: ${props => props.theme.colors.softRed};
    width: 20rem;
    transform: scaleX(0);
    transition: all 0.2s ease-in-out;

    @media ${device.tablet} {
      width: 100%;
    }
  }

  :hover {
    color: ${props => props.theme.colors.darkBlue};
  }

  ${props =>
    props.selected &&
    css`
      color: ${props => props.theme.colors.darkBlue};

      ::after {
        transform: scaleX(1);
      }
    `}

  @media ${device.tablet} {
    border-bottom: none;
    padding-top: 0rem;
    padding-right: 0rem;
    padding-left: 0rem;
  }
`;

// This component will encompass the feature text (eg: "Bookmark in one click")
export const SubHeading = styled.h3`
  font-size: 2.6rem;
  font-weight: 500;
`;

export const upAndDownAnim = keyframes`
  0% {
    transform: translateY(0rem);
  }

  50% {
    transform: translateY(-0.2rem);
  }

  100% {
    transform: translateY(0rem);
  }
`;

export const FeatureIllustration = styled.div`
  position: relative;
  width: 80%;
  justify-self: center;
  cursor: pointer;
  animation: ${upAndDownAnim} 0.6s infinite paused;
  transform: translateY(0rem);

  :hover {
    animation-play-state: running;
  }

  /* ::after {
    content: "";
    display: block;
    position: absolute;
    top: 20%;
    right: 12%;
    background-color: ${props => props.theme.colors.softBlue};
    height: 100%;
    width: 100%;
    z-index: -1;
    border-top-right-radius: 8rem;
    border-bottom-right-radius: 8rem;
  } */
`;

export const Illustration = styled.img`
  width: 100%;
`;

export const MoreInfoBtn = styled(Button)`
  text-transform: capitalize;
  font-size: 1.6rem;
  width: 100%;

  @media ${device.tablet} {
    width: 13rem;
  }
`;
