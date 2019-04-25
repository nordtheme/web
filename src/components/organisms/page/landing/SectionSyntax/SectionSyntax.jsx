/*
 * Copyright (C) 2018-present Arctic Ice Studio <development@arcticicestudio.com>
 * Copyright (C) 2018-present Sven Greb <development@svengreb.de>
 *
 * Project:    Nord Docs
 * Repository: https://github.com/arcticicestudio/nord-docs
 * License:    MIT
 */

import React, { PureComponent } from "react";
import { Waypoint } from "react-waypoint";

import Button from "atoms/core/Button";
import { Content } from "containers/core/Section";
import FeatureDuo, { Actions, Headline, Subline, Text, Visualization } from "molecules/page/shared/FeatureDuo";
import { ROUTE_DOCS, ROUTE_ROOT } from "config/routes/mappings";
import { sectionIdFor } from "utils";

import { Section } from "../../shared";
import { CodeSyntaxLines, WaveDivider, POSE_DRAW, POSE_ERASE } from "./styled";

const SECTION_ID = sectionIdFor(ROUTE_ROOT, 5);

/**
 * The component that represents the code syntax section of the landing page.
 *
 * @author Arctic Ice Studio <development@arcticicestudio.com>
 * @author Sven Greb <development@svengreb.de>
 * @since 0.6.0
 */
export default class SectionSyntax extends PureComponent {
  state = {
    codeSyntaxLinesPose: POSE_ERASE
  };

  handleCodeSyntaxLinesWaypointEnter = () => this.setState({ codeSyntaxLinesPose: POSE_DRAW });

  render() {
    const { codeSyntaxLinesPose } = this.state;

    return (
      <Section gapWidth={2} id={SECTION_ID} variant="secondary">
        <Content centered>
          <FeatureDuo>
            <Visualization>
              <Waypoint onEnter={this.handleCodeSyntaxLinesWaypointEnter} topOffset="50%" />
              <CodeSyntaxLines pose={codeSyntaxLinesPose} />
            </Visualization>
            <Text>
              <Headline>Beautiful code to keep focused.</Headline>
              <Subline>
                Each color is carefully designed with a syntax meaning and an balanced color distribution for syntax
                elements to help to keep the focus on the important aspects.
              </Subline>
              <Actions>
                <Button ghost outlined quiet to={ROUTE_DOCS} variant="primary">
                  Learn more
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
