import React from "react";
import { Fade } from "react-reveal";
import Paragraph from "@/components/paragraph/paragraph.ts";
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
        <Paragraph>
          A clean and simple interface to organize your favorite websites. Open
          a new browser tab and see your sites load instantly. Try it for free.
        </Paragraph>
        <ButtonContainer>
          <StyledButton primary>Get it on Chrome</StyledButton>
          <StyledButton secondary>Get it on Firefox</StyledButton>
        </ButtonContainer>
      </Fade>
    </Content>
  </Wrapper>
);

export default Description;
