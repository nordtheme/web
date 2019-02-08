/*
 * Copyright (C) 2018-present Arctic Ice Studio <development@arcticicestudio.com>
 * Copyright (C) 2018-present Sven Greb <development@svengreb.de>
 *
 * Project:    Nord Docs
 * Repository: https://github.com/arcticicestudio/nord-docs
 * License:    MIT
 */

import React, { Fragment } from "react";
import PropTypes from "prop-types";

import Button from "atoms/core/Button";
import { H3, P } from "atoms/core/HTMLElements";

import {
  CardAction as Action,
  Card,
  CardItem as Post,
  CardItemDot as Dot,
  CardItemLink as PostLink,
  CardItemWrapper as PostWrapper,
  CardItems as Posts,
  CardLine as Line,
  CardLogo as Logo,
  cardBasePropTypes
} from "../../../shared";
import MetadataAuthor from "./MetadataAuthor";
import MetadataCreationDate from "./MetadataCreationDate";
import MetadataWrapper from "./MetadataWrapper";

/**
 * A card component that renders information about Nord's Reddit platform community.
 *
 * @author Arctic Ice Studio <development@arcticicestudio.com>
 * @author Sven Greb <development@svengreb.de>
 * @since 0.7.0
 */
const RedditCard = ({ brandColor, children, logoColor, logoComponent: SvgLogo, posts, title, url, ...passProps }) => {
  const renderPosts = posts.map(({ author, created, numComments, title: postTitle, url: postUrl }) => (
    <PostWrapper key={postTitle}>
      <Dot color={logoColor}>{numComments}</Dot>
      <Post>
        <PostLink color={logoColor} href={postUrl}>
          {postTitle}
        </PostLink>
        <MetadataWrapper>
          by<MetadataAuthor color={brandColor}> {author}</MetadataAuthor>{" "}
          <MetadataCreationDate>{created}</MetadataCreationDate>
        </MetadataWrapper>
      </Post>
    </PostWrapper>
  ));
  return (
    <Card extended={posts.length > 0} {...passProps}>
      <Logo logoColor={logoColor}>
        <SvgLogo />
      </Logo>
      <div>
        <H3>{title}</H3>
        <P>{children}</P>
      </div>
      <Action>
        <Button ghost href={url} outlined quiet variant="primary">
          {posts.length > 0 ? "View more on" : "Browse Nord on"} {title}
        </Button>
      </Action>
      {posts.length > 0 && (
        <Fragment>
          <Line spacing={2.5} spreadPercent={100} />
          <Posts>{renderPosts}</Posts>
        </Fragment>
      )}
    </Card>
  );
};

RedditCard.propTypes = {
  ...cardBasePropTypes,
  brandColor: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  posts: PropTypes.shape({
    author: PropTypes.string,
    created: PropTypes.string,
    numComments: PropTypes.number,
    title: PropTypes.string,
    url: PropTypes.string
  }).isRequired
};

export default RedditCard;
