/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

import React from "react";

import Link from "atoms/core/Link";
import { Content } from "containers/core/Section";
import FeatureDuo, { Headline, Subline, Text, Visualization } from "molecules/page/shared/FeatureDuo";
import { ROUTE_PORTS_HIGHLIGHTJS } from "config/routes/mappings";
import { sectionIdFor } from "utils";
import { Code } from "atoms/core/html-elements";
import { Image } from "atoms/core/mdx-elements";
import { usePortsAssetsPropTypes } from "hooks/shared/propTypes";

import { Section } from "../../../shared";
import WaveDivider from "./styled/WaveDivider";

const SECTION_ID = sectionIdFor(ROUTE_PORTS_HIGHLIGHTJS, 1);

/**
 * The component that represents the syntax section for the landing page of the "Nord highlight.js" port project.
 * @since 0.23.0
 */
const SectionSyntax = ({ assets }) => (
  <Section id={SECTION_ID} variant="secondary">
    <Content centered>
      <FeatureDuo columnRatio={[2, 1]}>
        <Visualization>
          <Image alt="Screenshot showing a Go function with corresponding comments" dropShadow fluid={assets.images["go-comments.png"]} rounded>
            <span>
              Syntax highlighting for{" "}
              <Link href="https://golang.org" target="_blank">
                Go
              </Link>
              .
            </span>
          </Image>
        </Visualization>
        <Text>
          <Headline>Beautiful code to keep focused.</Headline>
          <Subline>
            Support for a wide range of{" "}
            <Link href="https://en.wikipedia.org/wiki/List_of_programming_languages_by_type" target="_blank">
              language types
            </Link>
            .
          </Subline>
        </Text>
      </FeatureDuo>
      <FeatureDuo columnRatio={[1, 2]}>
        <Text />
        <Visualization>
          <Image alt="Screenshot showing a JavaScript React Hook function" dropShadow fluid={assets.images["javascript-react-hook.png"]} rounded>
            <span>
              JavaScript with a{" "}
              <Link href="https://reactjs.org/docs/hooks-intro" target="_blank">
                React Hook
              </Link>{" "}
              for{" "}
              <Link href="https://www.react-spring.io" target="_blank">
                React Spring
              </Link>{" "}
              animations.
            </span>
          </Image>
        </Visualization>
      </FeatureDuo>
      <FeatureDuo columnRatio={[2, 1]}>
        <Visualization>
          <Image alt="Screenshot showing a simple Go function" dropShadow fillSize={80} fluid={assets.images["go-function.png"]} rounded>
            <span>
              A simple{" "}
              <Link href="https://golang.org" target="_blank">
                Go
              </Link>{" "}
              function.
            </span>
          </Image>
        </Visualization>
        <Text />
      </FeatureDuo>
      <FeatureDuo columnRatio={[1, 2]}>
        <Text />
        <Visualization>
          <Image alt="Screenshot showing a React component with forwarded ref export" dropShadow fluid={assets.images["javascript-react-jsx.png"]} rounded>
            <span>
              <Link href="https://reactjs.org" target="_blank">
                React
              </Link>{" "}
              component with{" "}
              <Link href="https://reactjs.org/docs/forwarding-refs.html" target="_blank">
                forwarded <Code>ref</Code>
              </Link>
              .
            </span>
          </Image>
        </Visualization>
      </FeatureDuo>
    </Content>
    <WaveDivider />
  </Section>
);

SectionSyntax.propTypes = usePortsAssetsPropTypes;

export default SectionSyntax;
