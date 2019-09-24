import React from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../hoc/Layout';

export const Sitemap = ({ data }) => {
  return (
    <Layout>
      <h1>Sitemap</h1>
      <ul>
        {data.allSitePage.edges.map(edge => (
          <li key={edge.node.path}>
            <Link to={edge.node.path}>{edge.node.path}</Link>
          </li>
        ))}
      </ul>
    </Layout>
  );
};

export const sitemapQuery = graphql`
  query Sitemap {
    allSitePage {
      edges {
        node {
          path
        }
      }
    }
  }
`;

export default Sitemap;
