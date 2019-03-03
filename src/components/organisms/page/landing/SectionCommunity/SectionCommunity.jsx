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
import ArcticOceanFractal, { POSE_HIDE, POSE_SHOW } from "arctic-ocean-fractal";

import { WaveFooter } from "atoms/core/vectors/divider";
import Button from "atoms/core/Button";
import Section, { Content } from "containers/core/Section";
import FeatureDuo, { Actions, Headline, Subline, Text, Visualization } from "molecules/page/shared/FeatureDuo";
import { ROUTE_COMMUNITY, ROUTE_ROOT } from "config/routes/mappings";
import { sectionIdFor } from "utils";

const SECTION_ID = sectionIdFor(ROUTE_ROOT, 6);

/**
 * The component that represents the community section of the landing page.
 * It handles the state for the rendered "Arctic Ocean Fractal" SVG animation component that is triggered through a
 * waypoint with a bottom offset.
 *
 * @author Arctic Ice Studio <development@arcticicestudio.com>
 * @author Sven Greb <development@svengreb.de>
 * @since 0.6.0
 */
export default class SectionCommunity extends PureComponent {
  state = {
    arcticOceanFractalPose: POSE_HIDE
  };

  handleArcticOceanFractalWaypointEnter = () => this.setState({ arcticOceanFractalPose: POSE_SHOW });

  render() {
    const { arcticOceanFractalPose } = this.state;

    return (
      <Section id={SECTION_ID}>
        <Content centered>
          <FeatureDuo>
            <Text>
              <Headline>Never swim alone in the big arctic ocean.</Headline>
              <Subline>
                Join the community for news and updates around Nord and chat with many other developers & designers,
                submit your ideas or ask for help.
              </Subline>
              <Actions>
                <Button ghost outlined quiet to={ROUTE_COMMUNITY} variant="primary">
                  Communities
                </Button>
              </Actions>
            </Text>
            <Visualization>
              <Waypoint onEnter={this.handleArcticOceanFractalWaypointEnter} topOffset="60%" />
              <ArcticOceanFractal pose={arcticOceanFractalPose} />
            </Visualization>
          </FeatureDuo>
        </Content>
        <WaveFooter />
      </Section>
    );
  }
}
