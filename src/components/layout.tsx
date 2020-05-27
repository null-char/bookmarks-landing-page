import React from "react";
import PropTypes from "prop-types";
import { createGlobalStyle } from "styled-components";
import "typeface-rubik";

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
    font-weight: 400;
    box-sizing: border-box;
  }
`;

const Layout: React.FC = ({ children }) => (
  <>
    <GlobalStyles />
    <main>{children}</main>
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
