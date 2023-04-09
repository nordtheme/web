/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

import React from "react";
import PropTypes from "prop-types";

import { contentBlogPostPropTypes } from "data/graphql/fragmentPropTypes";
import { WaveFooter } from "atoms/core/vectors/divider";
import Section, { Content } from "containers/core/Section";
import EmptyState from "molecules/core/EmptyState";

import { BlogPostCard, Grid } from "./styled";
import { emptyStateIllustrationStyles } from "../../shared/styles";

/**
 * The component that represents the landing section of the blog posts page.
 * @since 0.3.0
 */
const SectionBlogPostsCardGrid = ({ blogPosts, ...passProps }) => (
  <Section {...passProps}>
    <Content centered>
      {blogPosts.length ? (
        <Grid>
          {blogPosts.map(({ frontmatter: { title, coverTitleColor }, fields: { bannerImage, coverImage, slugParentRoute, slug } }, idx) => (
            <BlogPostCard
              key={title}
              blogPostUrl={`${slugParentRoute}${slug}`}
              coverTitleColor={coverTitleColor}
              fluid={idx === 0 ? bannerImage?.childImageSharp?.fluid : coverImage?.childImageSharp?.fluid}
              large={idx === 0}
              single={blogPosts.length === 1}
            >
              {title}
            </BlogPostCard>
          ))}
        </Grid>
      ) : (
        <EmptyState
          headline="Oh, there's no blog post here yet"
          illustrationStyles={emptyStateIllustrationStyles}
          subline="Please check back later, we're busy writing some amazing content!"
        />
      )}
    </Content>
    <WaveFooter />
  </Section>
);

SectionBlogPostsCardGrid.propTypes = {
  blogPosts: PropTypes.arrayOf(
    PropTypes.shape({
      ...contentBlogPostPropTypes,
    })
  ).isRequired,
};

export default SectionBlogPostsCardGrid;
