import React from "react";
import PropTypes from "prop-types";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import "typeface-rubik";
import lightTheme from "@/themes/light-theme";

const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }

  body {
    font-size: 10px;
    font-family: "Rubik", sans-serif;
    color: ${props => props.theme.colors.darkBlue};
    position: relative;
    min-height: 100%;
    font-weight: 400;
    box-sizing: border-box;
  }
`;

const Layout: React.FC = ({ children }) => (
  <ThemeProvider theme={lightTheme}>
    <GlobalStyles />
    <main>{children}</main>
  </ThemeProvider>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
