/*
 * Copyright (C) 2018-present Arctic Ice Studio <development@arcticicestudio.com>
 * Copyright (C) 2018-present Sven Greb <development@svengreb.de>
 *
 * Project:    Nord Docs
 * Repository: https://github.com/arcticicestudio/nord-docs
 * License:    MIT
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
 *
 * @author Arctic Ice Studio <development@arcticicestudio.com>
 * @author Sven Greb <development@svengreb.de>
 * @since 0.3.0
 */
const SectionBlogPostsCardGrid = ({ blogPosts, ...passProps }) => (
  <Section {...passProps}>
    <Content centered>
      {blogPosts.length ? (
        <Grid>
          {blogPosts.map(
            (
              { frontmatter: { title, coverTitleColor }, fields: { bannerImage, coverImage, slugParentRoute, slug } },
              idx
            ) => (
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
            )
          )}
        </Grid>
      ) : (
        <EmptyState
          headline="Oh, there's nothing here yet"
          illustrationStyles={emptyStateIllustrationStyles}
          subline="Please check back later, we're working hard on this page!"
        />
      )}
    </Content>
    <WaveFooter />
  </Section>
);

SectionBlogPostsCardGrid.propTypes = {
  blogPosts: PropTypes.arrayOf(
    PropTypes.shape({
      ...contentBlogPostPropTypes
    })
  ).isRequired
};

export default SectionBlogPostsCardGrid;
