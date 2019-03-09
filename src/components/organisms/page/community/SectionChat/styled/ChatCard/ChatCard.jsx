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

import Button from "atoms/core/Button";
import { H3, P } from "atoms/core/html-elements";

import { Card, CardLogo as Logo, cardBasePropTypes } from "../../../shared";
import Action from "./Action";

/**
 * A card component that renders information about a Nord chat platform.
 *
 * @author Arctic Ice Studio <development@arcticicestudio.com>
 * @author Sven Greb <development@svengreb.de>
 * @since 0.7.0
 */
const ChatCard = ({ children, logoColor, logoComponent: SvgLogo, title, url, ...passProps }) => (
  <Card {...passProps}>
    <Logo logoColor={logoColor}>
      <SvgLogo />
    </Logo>
    <div>
      <H3>{title}</H3>
      <P>{children}</P>
    </div>
    <Action>{url ? <Button href={url}>Join Nord on {title}</Button> : <Button disabled>Coming soon!</Button>}</Action>
  </Card>
);

ChatCard.propTypes = {
  ...cardBasePropTypes,
  children: PropTypes.node.isRequired
};

export default ChatCard;
