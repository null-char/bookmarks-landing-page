import React from "react";
import bgDots from "@/assets/bg-dots.svg";
import {
  Card,
  InstallBtn,
  BrowserLogo,
  TextContainer,
  ButtonContainer,
} from "@/components/download-section/styles";

type InstallCardProps = {
  browserSvgUrl: string;
};

const InstallCard: React.FC<InstallCardProps> = ({
  children,
  browserSvgUrl,
}) => (
  <Card>
    <BrowserLogo src={browserSvgUrl} alt="browser logo" />
    <TextContainer>{children}</TextContainer>

    <ButtonContainer>
      <img src={bgDots} alt="background dots" />
      <InstallBtn>Add & Install Extension</InstallBtn>
    </ButtonContainer>
  </Card>
);

export default InstallCard;
