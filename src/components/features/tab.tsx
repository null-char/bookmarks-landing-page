import React from "react";
import illustrationFeature from "@/assets/illustration-features-tab-1.svg";
import Paragraph from "@/components/paragraph/paragraph.ts";
import {
  FeatureDescription,
  FeatureIllustration,
  Illustration,
  SubHeading,
  FeatureTextContent,
  MoreInfoBtn,
} from "@/components/features/styles";

// Feature tab for "Simple Bookmarking"

type TabProps = {
  /**
   * Pass JSX for displaying the appropriate illustration svg
   */
  illustration: React.ReactNode;
};

const Tab: React.FC<TabProps> = ({ illustration, children }) => (
  <FeatureDescription>
    <FeatureIllustration>{illustration}</FeatureIllustration>

    <FeatureTextContent>
      {children}
      <MoreInfoBtn primary>More Info</MoreInfoBtn>
    </FeatureTextContent>
  </FeatureDescription>
);

export default Tab;
