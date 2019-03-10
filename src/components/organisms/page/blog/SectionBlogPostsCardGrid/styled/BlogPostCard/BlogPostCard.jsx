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

import { contentMdxImageFluidPropTypes } from "data/graphql/fragmentPropTypes";
import { A } from "atoms/core/html-elements";

import Card from "./Card";
import Title from "./Title";
import Image from "./Image";
import TitleBox from "./TitleBox";

/**
 * The card component to represent a blog post.
 *
 * @author Arctic Ice Studio <development@arcticicestudio.com>
 * @author Sven Greb <development@svengreb.de>
 * @since 0.10.0
 */
const BlogPostCard = ({ blogPostUrl, children, coverTitleColor, fluid, large, single, ...passProps }) => (
  <Card large={large} single={single} {...passProps}>
    <A to={blogPostUrl}>
      <Image fluid={fluid} />
      <TitleBox>
        <Title coverTitleColor={coverTitleColor}>{children}</Title>
      </TitleBox>
    </A>
  </Card>
);

BlogPostCard.propTypes = {
  blogPostUrl: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  coverTitleColor: PropTypes.string,
  fluid: PropTypes.shape({ ...contentMdxImageFluidPropTypes }).isRequired,
  large: PropTypes.bool,
  single: PropTypes.bool
};

BlogPostCard.defaultProps = {
  coverTitleColor: "",
  large: false,
  single: false
};

export default BlogPostCard;
