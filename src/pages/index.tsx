import React from "react";
import { useStaticQuery, graphql, PageProps } from "gatsby";
import styled from "styled-components";
import Layout from "@/components/layout";
import Header from "@/components/header/header.tsx";
import Description from "@/components/description/description.tsx";
import SEO from "@/components/seo";

const GridContainer = styled.div`
  display: grid;
  grid-template-rows: repeat(5, min-content);
  row-gap: 5rem;

  p {
    line-height: 1.45;
  }
`;

const IndexPage: React.FC<PageProps> = () => {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <Layout>
      <SEO title={site.siteMetadata.title} />
      <Header />
      <GridContainer>
        <Description />
      </GridContainer>
    </Layout>
  );
};

export default IndexPage;
