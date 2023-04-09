/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

import React from "react";
import PropTypes from "prop-types";

import { A, H3, P } from "atoms/core/html-elements";

import {
  ArrowIcon,
  Card,
  CardIcon as Icon,
  CardItem as Topic,
  CardItemContent as TopicContent,
  CardItemIcon as TopicIcon,
  CardItems as Topics,
  CardItemTag as TopicTag,
  CardItemTitle as TopicTitle,
} from "../../../shared";
import { cardBasePropTypes } from "../../../shared/propTypes";

/**
 * A card component that renders information about a docs category and its topics.
 * @since 0.8.0
 */
const ContentsCard = ({ accentColor, children, topics, logoComponent: SvgLogo, svgType, title, ...passProps }) => {
  const renderedTopics = topics.map(({ url, title: topicTitle, iconComponent: SvgIcon, svgType: topicIconSvgType }) => (
    <Topic key={topicTitle} as={url && A} href={url} inProgress={!url}>
      <TopicContent>
        <TopicIcon accentColor={accentColor} iconComponent={SvgIcon} svgType={topicIconSvgType} />
        <TopicTitle color={accentColor} inProgress={!url}>
          {topicTitle}
        </TopicTitle>
      </TopicContent>
      {!url ? <TopicTag accentColor={accentColor}>In Progress</TopicTag> : <ArrowIcon />}
    </Topic>
  ));
  return (
    <Card {...passProps}>
      <Icon accentColor={accentColor} iconComponent={SvgLogo} svgType={svgType} />
      <div>
        <H3>{title}</H3>
        <P>{children}</P>
      </div>
      <Topics>{renderedTopics}</Topics>
    </Card>
  );
};

ContentsCard.propTypes = {
  ...cardBasePropTypes,
  accentColor: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  svgType: PropTypes.string,
  topics: PropTypes.arrayOf(
    PropTypes.shape({
      iconComponent: PropTypes.oneOfType([PropTypes.element, PropTypes.func, PropTypes.node]).isRequired,
      svgType: PropTypes.string,
      title: PropTypes.string,
      url: PropTypes.string,
    })
  ).isRequired,
};

ContentsCard.defaultProps = {
  svgType: "fill",
};

export default ContentsCard;
