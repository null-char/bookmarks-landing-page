import React from "react";
import { Flip } from "react-reveal";
import chromeLogo from "@/assets/logo-chrome.svg";
import firefoxLogo from "@/assets/logo-firefox.svg";
import operaLogo from "@/assets/logo-opera.svg";
import { Fade } from "react-reveal";
import Paragraph from "@/components/paragraph/paragraph.ts";
import InstallCard from "@/components/download-section/install-card.tsx";
import {
  Wrapper,
  CardsContainer,
  MainHeading,
  TextContent,
  SubHeading,
} from "@/components/download-section/styles";

const DownloadSection = () => (
  <Wrapper>
    <TextContent>
      <Fade cascade>
        <MainHeading>Download the extension</MainHeading>
        <Paragraph alignCenter>
          We've got more browsers in the pipeline. Please do let us know if
          you've got a favorite you'd like us to prioritize.
        </Paragraph>
      </Fade>
    </TextContent>

    <CardsContainer>
      <Flip left fraction={0.7}>
        <InstallCard browserSvgUrl={chromeLogo}>
          <SubHeading>Add to Chrome</SubHeading>
          <Paragraph>Minimum version 62</Paragraph>
        </InstallCard>

        <InstallCard browserSvgUrl={firefoxLogo}>
          <SubHeading>Add to Firefox</SubHeading>
          <Paragraph>Minimum version 55</Paragraph>
        </InstallCard>

        <InstallCard browserSvgUrl={operaLogo}>
          <SubHeading>Add to Opera</SubHeading>
          <Paragraph>Minimum version 46</Paragraph>
        </InstallCard>
      </Flip>
    </CardsContainer>
  </Wrapper>
);

export default DownloadSection;
