import React from "react";
import { useStaticQuery, graphql, PageProps } from "gatsby";
import Layout from "@/components/layout";
import Navigation from "@/components/navigation/navigation.tsx";
import SEO from "@/components/seo";

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
      <Navigation />
      <h1>Bookmarks</h1>
      <p>Test</p>
      <p>Test</p>
    </Layout>
  );
};

export default IndexPage;
