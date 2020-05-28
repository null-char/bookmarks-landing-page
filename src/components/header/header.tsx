import React from "react";
import Navigation from "@/components/navigation/navigation.tsx";
import bookmarkLogo from "@/assets/logo-bookmark.svg";
import { Wrapper } from "./styles";

const Header: React.FC = () => (
  <Wrapper>
    <img src={bookmarkLogo} alt="bookmark logo" />
    <Navigation />
  </Wrapper>
);

export default Header;
