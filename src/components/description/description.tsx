import React from "react";
import { Fade, Slide } from "react-reveal";
import illustrationHero from "@/assets/illustration-hero.svg";
import {
  Wrapper,
  Heading,
  Content,
  HeroIllustration,
  Illustration,
  StyledButton,
  ButtonContainer,
} from "@/components/description/styles";

const Description: React.FC = () => (
  <Wrapper>
    <Fade right>
      <HeroIllustration>
        <Illustration src={illustrationHero} alt="hero illustration" />
      </HeroIllustration>
    </Fade>

    <Content>
      <Fade left>
        <Heading>A simple bookmark manager</Heading>
        <p>
          A clean and simple interface to organize your favorite websites. Open
          a new browser tab and see your sites load instantly. Try it for free.
        </p>
        <ButtonContainer>
          <StyledButton primary>Get it on Chrome</StyledButton>
          <StyledButton secondary>Get it on Firefox</StyledButton>
        </ButtonContainer>
      </Fade>
    </Content>
  </Wrapper>
);

export default Description;
