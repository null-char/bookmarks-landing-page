import React, { useState } from "react";
import { useTransition } from "react-spring";
import hamburgerSvg from "@/assets/icon-hamburger.svg";
import logo from "@/assets/logo-bookmark-white.svg";
import closeSvg from "@/assets/icon-close.svg";
import facebookIcon from "@/assets/icon-facebook.svg";
import twitterIcon from "@/assets/icon-twitter.svg";
import {
  Wrapper,
  MobileNav,
  Hamburger,
  MobileLogo,
  MainContainer,
  DesktopNavLinks,
  Top,
  CloseIcon,
  NavLinks,
  NavItem,
  Bottom,
  Social,
  DesktopNav,
  DesktopNavItem,
  DesktopLoginBtn,
} from "@/components/navigation/styles";

const Navigation: React.FC = () => {
  // for mobile
  const [show, setShow] = useState(false);
  const transitions = useTransition(show, null, {
    from: { opacity: 0, transformOrigin: "top right", transform: "scale(0)" },
    enter: { opacity: 1, transform: "scale(1)" },
    leave: { opacity: 0 },
  });

  const onHamburgerClick = () => setShow(true);
  const onCloseClick = () => setShow(false);

  return (
    <Wrapper>
      <MobileNav>
        <Hamburger
          src={hamburgerSvg}
          alt="hamburger icon"
          onClick={onHamburgerClick}
        />

        {transitions.map(
          ({ item, key, props }) =>
            item && (
              <MainContainer key={key} style={props}>
                <div>
                  <Top>
                    <MobileLogo src={logo} alt="bookmark logo" />
                    <CloseIcon
                      src={closeSvg}
                      alt="close menu icon"
                      onClick={onCloseClick}
                    />
                  </Top>

                  <NavLinks>
                    <NavItem>
                      <a href="#">Features</a>
                    </NavItem>
                    <NavItem>
                      <a href="#">Pricing</a>
                    </NavItem>
                    <NavItem>
                      <a href="#">Contact</a>
                    </NavItem>
                    <NavItem>
                      <a href="#">Login</a>
                    </NavItem>
                  </NavLinks>
                </div>

                <Bottom>
                  <Social src={facebookIcon} alt="facebook logo" />
                  <Social src={twitterIcon} alt="twitter logo" />
                </Bottom>
              </MainContainer>
            )
        )}
      </MobileNav>

      <DesktopNav>
        <DesktopNavLinks>
          <DesktopNavItem>
            <a href="#">Features</a>
          </DesktopNavItem>
          <DesktopNavItem>
            <a href="#">Pricing</a>
          </DesktopNavItem>
          <DesktopNavItem>
            <a href="#">Contact</a>
          </DesktopNavItem>
          <DesktopLoginBtn tertiary>Login</DesktopLoginBtn>
        </DesktopNavLinks>
      </DesktopNav>
    </Wrapper>
  );
};

export default Navigation;
