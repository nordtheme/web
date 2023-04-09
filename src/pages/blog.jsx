/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";

import { contentBlogPostPropTypes } from "data/graphql/fragmentPropTypes";
import { locationPropTypes } from "data/pages/shared/propTypes";
import BaseLayout from "layouts/core/BaseLayout";
import { SectionBlogPostsCardGrid } from "organisms/page/blog";

/**
 * The component that represents the blog page.
 * @since 0.3.0
 */
const Blog = ({ data, location: { pathname } }) => {
  const blogPosts = data?.allBlogPosts?.edges?.map(({ node }) => ({ ...node })) ?? [];
  return (
    <BaseLayout pathName={pathname}>
      <SectionBlogPostsCardGrid blogPosts={blogPosts} />
    </BaseLayout>
  );
};

Blog.propTypes = {
  data: PropTypes.shape({
    allBlogPosts: PropTypes.shape({
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          ...contentBlogPostPropTypes,
        })
      ),
    }),
  }).isRequired,
  ...locationPropTypes,
};

export const pageQuery = graphql`
  {
    allBlogPosts: allMdx(
      filter: { fields: { contentSourceType: { eq: "blog" } }, frontmatter: { draft: { ne: true } } }
      sort: { fields: [fields___date, frontmatter___publishTime], order: DESC }
    ) {
      edges {
        node {
          ...contentBlogPost
        }
      }
    }
  }
`;

export default Blog;
