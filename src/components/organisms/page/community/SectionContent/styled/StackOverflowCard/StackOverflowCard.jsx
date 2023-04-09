/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

import React from "react";
import PropTypes from "prop-types";

import Button from "atoms/core/Button";
import { H3, P } from "atoms/core/html-elements";

import {
  CardAction as Action,
  Card,
  CardItem as Question,
  CardItemDot as Dot,
  CardItemLink as QuestionLink,
  CardItemWrapper as QuestionWrapper,
  CardItems as Questions,
  CardLine as Line,
  CardLogo as Logo,
  cardBasePropTypes,
} from "../../../shared";
import Tag from "./Tag";

/**
 * A card component that renders information about Nord's Stack Overflow platform community.
 * @since 0.7.0
 */
const StackOverflowCard = ({ brandColor, children, logoColor, logoComponent: SvgLogo, questions, title, url, ...passProps }) => {
  const renderQuestions = questions.map(({ answerCount, link, tags: questionTags, title: questionTitle }) => (
    <QuestionWrapper key={questionTitle}>
      <Dot color={logoColor}>{answerCount}</Dot>
      <Question>
        <QuestionLink color={logoColor} href={link}>
          {questionTitle}
        </QuestionLink>
        <div>
          {questionTags.map((tag) => (
            <Tag key={tag} color={brandColor}>
              {tag}
            </Tag>
          ))}
        </div>
      </Question>
    </QuestionWrapper>
  ));
  return (
    <Card extended={questions.length > 0} {...passProps}>
      <Logo logoColor={logoColor}>
        <SvgLogo />
      </Logo>
      <div>
        <H3>{title}</H3>
        <P>{children}</P>
      </div>
      <Action>
        <Button ghost href={url} outlined quiet variant="primary">
          {questions.length > 0 ? "View more on" : "Browse Nord on"} {title}
        </Button>
      </Action>
      {questions.length > 0 && <Line spacing={2.5} spreadPercent={100} />}
      <Questions>{renderQuestions}</Questions>
    </Card>
  );
};

StackOverflowCard.propTypes = {
  ...cardBasePropTypes,
  brandColor: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  questions: PropTypes.shape({
    answerCount: PropTypes.number,
    link: PropTypes.string,
    tags: PropTypes.arrayOf(PropTypes.string),
    title: PropTypes.string,
  }).isRequired,
};

export default StackOverflowCard;
