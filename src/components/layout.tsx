import React from "react";
import PropTypes from "prop-types";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import "typeface-rubik";
import lightTheme from "@/themes/light-theme";
import device from "@/utils/media";

const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
    -webkit-tap-highlight-color: transparent;
  }

  body {
    color: ${props => props.theme.colors.darkBlue};
    position: relative;
    min-height: 100%;
    font-weight: 400;
    box-sizing: border-box;
    overflow-x: hidden;
  }

  html, body {
    font-size: 10px;
    font-family: "Rubik", sans-serif;

    @media ${device.laptop} {
      font-size: 11px;
    }

    @media ${device.desktop} {
      font-size: 14px;
    }
  }
`;

const Layout: React.FC = ({ children }) => (
  <ThemeProvider theme={lightTheme}>
    <main>
      <GlobalStyles />
      {children}
    </main>
  </ThemeProvider>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
