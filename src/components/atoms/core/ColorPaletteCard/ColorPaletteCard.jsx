/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

import React from "react";
import PropTypes from "prop-types";

import { Card, CardWrapper, Color, ColorBox, FloatingTitle, Label, Palette, Title } from "./styled";

const ColorCard = ({ color, ...passProps }) => (
  <ColorBox {...passProps}>
    <Color color={color} />
    <Label>{color}</Label>
  </ColorBox>
);

ColorCard.propTypes = {
  color: PropTypes.string.isRequired,
};

const BaseCard = ({ colors, title, ...passProps }) => (
  <Card {...passProps}>
    <Palette>
      {colors.map((c) => (
        <ColorCard key={c} color={c} />
      ))}
    </Palette>
    {title && <Title>{title}</Title>}
  </Card>
);

BaseCard.propTypes = {
  colors: PropTypes.arrayOf(PropTypes.string).isRequired,
  title: PropTypes.string,
};

BaseCard.defaultProps = {
  colors: [],
  title: "",
};

/**
 * A card that renders a color box with the associated color code as label and the title of a color palette.
 * The title can either float above the card (`floatingTitle` prop) or can be placed within the card below the color code labels.
 * @since 0.6.0
 */
const ColorPaletteCard = ({ colors, floatingTitle, title, ...passProps }) => {
  if (floatingTitle) {
    return (
      <CardWrapper {...passProps}>
        <FloatingTitle>{floatingTitle}</FloatingTitle>
        <BaseCard colors={colors} title={title} />
      </CardWrapper>
    );
  }
  return <BaseCard colors={colors} title={title} {...passProps} />;
};

ColorPaletteCard.propTypes = {
  colors: PropTypes.arrayOf(PropTypes.string).isRequired,
  floatingTitle: PropTypes.string,
  title: PropTypes.string,
};

ColorPaletteCard.defaultProps = {
  colors: [],
  floatingTitle: "",
  title: "",
};

export default ColorPaletteCard;
