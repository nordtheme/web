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

import { Heart, PriceTags } from "atoms/core/vectors/icons";
import { A } from "atoms/core/HTMLElements";

import { Card as StyledCard, CardBox, CardLogo, CardMetadata, CardTitle, Icon, IconWrapper } from "./styled";

/**
 * A card component representing a port project and some of its metadata.
 *
 * @author Arctic Ice Studio <development@arcticicestudio.com>
 * @author Sven Greb <development@svengreb.de>
 * @since 0.9.0
 */
const Card = ({
  gitHubRepositoryUrl,
  name,
  projectName,
  releaseLatest,
  stargazers,
  svgComponent: SvgLogo,
  url,
  ...passProps
}) => (
  <StyledCard key={name} {...passProps}>
    <A href={url}>
      <CardBox>
        <CardLogo svgComponent={SvgLogo} />
        <CardTitle>{projectName}</CardTitle>
      </CardBox>
    </A>
    <CardMetadata>
      <A href={releaseLatest?.url} target="_blank">
        <IconWrapper>
          <Icon outlined svgComponent={PriceTags} /> {releaseLatest?.name ?? "-"}
        </IconWrapper>
      </A>
      <A href={stargazers?.url ?? "#"} target="_blank">
        <IconWrapper>
          <Icon outlined svgComponent={Heart} /> {stargazers?.count ?? null}
        </IconWrapper>
      </A>
    </CardMetadata>
  </StyledCard>
);

Card.propTypes = {
  gitHubRepositoryUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  projectName: PropTypes.string.isRequired,
  releaseLatest: PropTypes.shape({
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
  }).isRequired,
  stargazers: PropTypes.shape({
    count: PropTypes.number,
    url: PropTypes.string
  }).isRequired,
  svgComponent: PropTypes.node.isRequired,
  url: PropTypes.string.isRequired
};

export default Card;
