import styled from "styled-components";
import { animated } from "react-spring";
import device from "@/utils/media";
import Button from "@/components/button/button";

export const Wrapper = styled.div`
  font-size: 2rem;
  text-transform: uppercase;
`;

export const MobileNav = styled.nav`
  color: ${props => props.theme.colors.white};

  @media ${device.tablet} {
    display: none;
  }
`;

export const DesktopNav = styled.nav`
  display: none;
  width: 40rem;

  @media ${device.tablet} {
    display: block;
  }
`;

export const Hamburger = styled.img`
  cursor: pointer;
`;

export const MobileLogo = styled.img`
  padding-right: 1rem;
`;

// the overlay container shown when user clicks on menu icon
export const MainContainer = styled(animated.div)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 2.7rem 1.8rem;
  background-color: ${props => props.theme.colors.darkBlue};
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 2;
`;

// close icon and logo
export const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5rem;
`;

export const CloseIcon = styled.img`
  cursor: pointer;
  fill: ${props => props.theme.colors.white};
  transition: transform 0.15s ease-in-out;

  :hover {
    transform: scale(1.1);
  }
`;

export const NavLinks = styled.li`
  list-style: none;
  border-top: 1px solid rgba(255, 255, 255, 0.3);

  a {
    text-decoration: none;
    color: inherit;
  }
`;

export const DesktopNavLinks = styled(NavLinks)`
  border-top: none;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.6rem;
`;

export const DesktopLoginBtn = styled(Button)`
  text-transform: uppercase;
`;

export const NavItem = styled.ul`
  width: 100%;
  height: 6.2rem;
  letter-spacing: 0.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
  transition: color 0.2s ease-in-out;

  :hover {
    color: ${props => props.theme.colors.softRed};
  }
`;

export const DesktopNavItem = styled.ul`
  color: ${props => props.theme.colors.grayishBlue};

  ::after {
    content: "";
    display: block;
    width: 100%;
    margin-top: 0.1rem;
    height: 0.2rem;
    background-color: ${props => props.theme.colors.softRed};
    transform: scaleX(0);
    transition: transform 0.2s ease-in-out;
  }

  :hover ::after {
    transform: scaleX(1);
  }
`;

// contains social media links
export const Bottom = styled.div`
  width: 30%;
  margin: 0 auto; /* center it */
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Social = styled.img`
  cursor: pointer;
`;
