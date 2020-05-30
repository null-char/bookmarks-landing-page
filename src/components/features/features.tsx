import React, { useState } from "react";
import illustrationFeature1 from "@/assets/illustration-features-tab-1.svg";
import illustrationFeature2 from "@/assets/illustration-features-tab-2.svg";
import illustrationFeature3 from "@/assets/illustration-features-tab-3.svg";
import { animated, useTransition } from "react-spring";
import { Fade, Roll } from "react-reveal";
import Paragraph from "@/components/paragraph/paragraph.ts";
import Tab from "@/components/features/tab.tsx";
import {
  Wrapper,
  TextContent,
  MainHeading,
  SubHeading,
  Illustration,
  FeaturesList,
  FeatureItem,
} from "@/components/features/styles";

const Features: React.FC = () => {
  // defaults to the first tab: "Simple Bookmarking"
  const [activeTab, setActiveTab] = useState(1);
  const transitions = useTransition(activeTab, null, {
    from: {
      opacity: 0,
      position: "absolute",
      top: 0,
      transform: "translateX(-110%)",
    },
    enter: { opacity: 1, transform: "translateX(0%)" },
    leave: { opacity: 0, transform: "translateX(110%)" },
  });

  const tabs: { [index: number]: JSX.Element } = {
    1: (
      <Tab
        illustration={
          <Illustration
            src={illustrationFeature1}
            alt="bookmark in one click"
          />
        }
      >
        <SubHeading>Bookmark in one click</SubHeading>
        <Paragraph>
          Organize your bookmarks however you like. Our simple drag-and-drop
          interface gives you complete control over how you manage your favorite
          sites.
        </Paragraph>
      </Tab>
    ),
    2: (
      <Tab
        illustration={
          <Illustration src={illustrationFeature2} alt="intelligent search" />
        }
      >
        <SubHeading>Intelligent search</SubHeading>
        <Paragraph>
          Our powerful search feature will help you find saved sites in no time
          at all. No need to trawl through all of your bookmarks.
        </Paragraph>
      </Tab>
    ),
    3: (
      <Tab
        illustration={
          <Illustration src={illustrationFeature3} alt="share your bookmarks" />
        }
      >
        <SubHeading>Share your bookmarks</SubHeading>
        <Paragraph>
          Easily share your bookmarks and collections with others. Create a
          shareable link that you can send at the click of a button.
        </Paragraph>
      </Tab>
    ),
  };

  const onFeatureClick = (event: React.SyntheticEvent) => {
    // get the tab index attribute and parse it to int
    const tabIndex = parseInt(
      event.currentTarget.getAttribute("data-tabIndex")
    );
    setActiveTab(tabIndex);
  };

  return (
    <Wrapper>
      <TextContent>
        <Fade cascade duration={1500}>
          <MainHeading>Features</MainHeading>
          <Paragraph alignCenter>
            Our aim is to make it quick and easy for you to access your favorite
            websites. Your bookmarks sync between your devices so you can access
            them on the go.
          </Paragraph>
        </Fade>
      </TextContent>

      <FeaturesList>
        <Roll cascade delay={250}>
          <FeatureItem
            selected={activeTab === 1}
            onClick={onFeatureClick}
            data-tabIndex="1"
          >
            Simple Bookmarking
          </FeatureItem>
          <FeatureItem
            selected={activeTab === 2}
            onClick={onFeatureClick}
            data-tabIndex="2"
          >
            Speedy Searching
          </FeatureItem>
          <FeatureItem
            selected={activeTab === 3}
            onClick={onFeatureClick}
            data-tabIndex="3"
          >
            Easy Sharing
          </FeatureItem>
        </Roll>
      </FeaturesList>

      <div style={{ position: "relative", width: "100%" }}>
        {/*
            Since the parent div contains an absolutely positioned element, it will not resize according to the child's
            dimensions.

            To fix this, we simply create another div with the same
            dynamic content but with visibility set to hidden. This way
            the layout's integrity is still preserved.
          */}

        <div style={{ visibility: "hidden" }}>{tabs[activeTab]}</div>

        {transitions.map(({ item, key, props }) => (
          <animated.div key={key} style={{ ...props, width: "100%" }}>
            {tabs[item]}
          </animated.div>
        ))}
      </div>
    </Wrapper>
  );
};

export default Features;
