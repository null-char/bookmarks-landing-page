import React from "react";
import Navigation from "@/components/navigation/navigation.tsx";
import bookmarkLogo from "@/assets/logo-bookmark.svg";
import { Wrapper, Logo } from "./styles";

const Header: React.FC = () => (
  <Wrapper>
    <Logo src={bookmarkLogo} alt="bookmark logo" />
    <Navigation />
  </Wrapper>
);

export default Header;
