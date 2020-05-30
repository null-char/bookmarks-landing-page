import styled from "styled-components";
import device from "@/utils/media";
import Button from "@/components/button/button";

export const Wrapper = styled.section`
  display: grid;
  grid-template-rows: repeat(2, min-content);
  row-gap: 5rem;
  justify-content: center;
`;

export const CardsContainer = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  justify-content: center;
  row-gap: 3rem;
  padding: 0rem 1.3rem;

  @media ${device.laptop} {
    grid-template-rows: 1fr;
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 3rem;
  }
`;

const cardPadding = 2; // in rem units
export const Card = styled.div`
  width: 100%;
  padding: ${cardPadding}rem;
  height: fit-content;
  display: grid;
  grid-template-rows: repeat(3, min-content);
  grid-template-columns: 100%;
  row-gap: 3.3rem;
  justify-content: center;
  background-color: ${props => props.theme.colors.white};
  border-radius: 1rem;
  box-shadow: 0rem 0.3rem 0.6rem rgba(0, 0, 0, 0.1);
  transition: all 0.2s ease-in-out;

  :hover {
    transform: translateY(-0.1rem);
    box-shadow: 0rem 0.6rem 1rem rgba(0, 0, 0, 0.1);
  }

  @media ${device.tablet} {
    width: 30rem;
  }
`;

export const TextContainer = styled.div`
  display: grid;
  grid-template-rows: repeat(2, min-content);
  row-gap: 0.4rem;
  justify-content: center;

  p {
    font-size: 1.38rem;
    text-align: center;
  }
`;

// will contain the install button and an img
export const ButtonContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-rows: repeat(2, min-content);
  row-gap: 2rem;
  justify-content: center;

  img {
    width: 100%;
  }
/* 
  @media ${device.tablet} {
    width: 30rem;
  } */
`;

export const InstallBtn = styled(Button)`
  width: 100%;
  font-size: 1.35rem;
  padding: 1.3rem 2rem;
  justify-self: center;
`;

export const TextContent = styled.div`
  display: grid;
  grid-template-rows: repeat(2, min-content);
  row-gap: 2rem;
  justify-self: center;

  @media ${device.tablet} {
    width: 60%;
  }

  @media ${device.laptop} {
    width: 40%;
  }
`;

export const MainHeading = styled.h2`
  font-size: 3rem;
  font-weight: 500;
  text-align: center;
`;

export const SubHeading = styled.h3`
  font-size: 2.2rem;
  font-weight: 500;
  text-align: center;
`;

export const BrowserLogo = styled.img`
  width: 9.3rem;
  height: 9.3rem;
  justify-self: center;
`;
