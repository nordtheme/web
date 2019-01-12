/*
 * Copyright (C) 2018-present Arctic Ice Studio <development@arcticicestudio.com>
 * Copyright (C) 2018-present Sven Greb <development@svengreb.de>
 *
 * Project:    Nord Docs
 * Repository: https://github.com/arcticicestudio/nord-docs
 * License:    MIT
 */

import React, { PureComponent } from "react";
import Waypoint from "react-waypoint";
import ArcticLandscape, { POSE_DRAW, POSE_ERASE } from "arctic-landscape";

import { Content } from "containers/core/Section";
import Button from "atoms/core/Button";
import { H1 } from "atoms/core/HTMLElements";
import FeatureDuo, { Actions, Headline, Subline, Text, Visualization } from "molecules/page/landing/FeatureDuo";
import { ROUTE_DOCS, ROUTE_ROOT } from "config/routes/mappings";
import { sectionIdFor } from "utils";

import { Cloud1, Cloud2, Cloud3, DecorationCanvas, WaveDivider } from "./styled";
import { Section } from "../shared";

const SECTION_ID = sectionIdFor(ROUTE_ROOT, 0);

/**
 * The component that represents the hero section of the landing page.
 * It handles the state for the rendered "Arctic Landscape" SVG animation component that is triggered through a
 * waypoint.
 *
 * @author Arctic Ice Studio <development@arcticicestudio.com>
 * @author Sven Greb <development@svengreb.de>
 * @since 0.3.0
 */
export default class SectionHero extends PureComponent {
  state = {
    arcticLandscapePose: POSE_ERASE
  };

  handleArcticLandscapeWaypointEnter = () => this.setState({ arcticLandscapePose: POSE_DRAW });

  render() {
    const { arcticLandscapePose } = this.state;

    return (
      <Section id={SECTION_ID}>
        <DecorationCanvas>
          <Cloud1 />
          <Cloud2 />
          <Cloud3 />
        </DecorationCanvas>
        <Content centered>
          <FeatureDuo>
            <Visualization reverseRowOrder>
              <Waypoint onEnter={this.handleArcticLandscapeWaypointEnter} />
              <ArcticLandscape pose={arcticLandscapePose} />
            </Visualization>
            <Text>
              <Headline as={H1} large>
                An arctic, north-bluish color palette.
              </Headline>
              <Subline>
                Created for the clean and uncluttered design pattern to achieve a optimal focus and readability for code
                syntax highlighting and UI components.
              </Subline>
              <Actions>
                <Button to={ROUTE_DOCS} variant="primary">
                  Get Started
                </Button>
                <Button ghost outlined quiet to={ROUTE_DOCS} variant="secondary">
                  Documentation
                </Button>
              </Actions>
            </Text>
          </FeatureDuo>
        </Content>
        <WaveDivider />
      </Section>
    );
  }
}
