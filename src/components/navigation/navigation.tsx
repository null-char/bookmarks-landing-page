import React, { useState } from "react";
import { useTransition } from "react-spring";
import hamburgerSvg from "@/images/icon-hamburger.svg";
import { Wrapper, MobileNav, Hamburger } from "@/components/navigation/styles";

const Navigation: React.FC = () => {
  // for mobile
  const [show, setShow] = useState(false);
  const transitions = useTransition(show, null, {
    from: { opacity: 0, transformOrigin: "top right", transform: "scale(0)" },
    enter: { opacity: 1, transform: "scale(1)" },
    leave: { opacity: 0, transform: "" },
  });

  const onHamburgerClick = () => setShow(true);

  return (
    <Wrapper>
      <MobileNav>
        <Hamburger
          src={hamburgerSvg}
          alt="hamburger icon"
          onClick={onHamburgerClick}
        />
      </MobileNav>
    </Wrapper>
  );
};

export default Navigation;
