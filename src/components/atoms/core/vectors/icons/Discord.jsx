/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

import React from "react";
import styled from "styled-components";

import { ReactComponent as DiscordSVG } from "assets/images/icons/simple-icons/discord.svg";

import { iconDefaultProps, iconPropTypes, themeModeFillColorStyles } from "../shared";

const DiscordIcon = styled(DiscordSVG)`
  ${themeModeFillColorStyles};
`;

/**
 * The "Discord" logo icon from the "Simple Icons" project as styled SVG vector graphic component.
 * By default, it uses the fill color and transition based on the current active global theme mode.
 * @since 0.5.0
 * @see https://simpleicons.org
 */
const Discord = ({ className, svgRef }) => <DiscordIcon className={className} svgRef={svgRef} />;

Discord.propTypes = iconPropTypes;

Discord.defaultProps = iconDefaultProps;

export default Discord;
