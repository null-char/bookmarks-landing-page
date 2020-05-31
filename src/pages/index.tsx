import React from "react";
import { graphql, PageProps } from "gatsby";
import styled from "styled-components";
import Layout from "@/components/layout.tsx";
import Header from "@/components/header/header.tsx";
import Description from "@/components/description/description.tsx";
import Features from "@/components/features/features.tsx";
import DownloadSection from "@/components/download-section/download-section.tsx";
import FAQs from "@/components/faqs/faqs.tsx";
import SEO from "@/components/seo";

const GridContainer = styled.div`
  display: grid;
  grid-template-rows: repeat(5, min-content);
  row-gap: 12rem;

  p {
    line-height: 1.45;
  }
`;

type QueryData = {
  site: {
    siteMetadata: {
      title: string;
    };
  };
};

const IndexPage: React.FC<PageProps<QueryData>> = ({ data }) => (
  <Layout>
    <SEO title={data.site.siteMetadata.title} />
    <Header />
    <GridContainer>
      <Description />
      <Features />
      <DownloadSection />
      <FAQs />
    </GridContainer>
  </Layout>
);

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

export default IndexPage;
