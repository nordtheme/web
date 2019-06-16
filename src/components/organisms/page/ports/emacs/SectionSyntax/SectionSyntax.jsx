/*
 * Copyright (C) 2018-present Arctic Ice Studio <development@arcticicestudio.com>
 * Copyright (C) 2018-present Sven Greb <development@svengreb.de>
 *
 * Project:    Nord Docs
 * Repository: https://github.com/arcticicestudio/nord-docs
 * License:    MIT
 */

import React from "react";

import Link from "atoms/core/Link";
import { Content } from "containers/core/Section";
import FeatureDuo, { Headline, Subline, Text, Visualization } from "molecules/page/shared/FeatureDuo";
import { ROUTE_PORTS_EMACS } from "config/routes/mappings";
import { sectionIdFor } from "utils";
import { Image } from "atoms/core/mdx-elements";
import { usePortsAssetsPropTypes } from "hooks/shared/propTypes";

import { Section } from "../../../shared";
import WaveDivider from "./styled/WaveDivider";

const SECTION_ID = sectionIdFor(ROUTE_PORTS_EMACS, 2);

/**
 * The component that represents the syntax section for the landing page of the "Nord Emacs" port project.
 *
 * @author Arctic Ice Studio <development@arcticicestudio.com>
 * @author Sven Greb <development@svengreb.de>
 * @since 0.17.0
 */
const SectionSyntax = ({ assets }) => (
  <Section id={SECTION_ID}>
    <Content centered>
      <FeatureDuo columnRatio={[2, 1]}>
        <Visualization>
          <Image
            alt="Screenshot showing Java enum methods to process JSON data"
            dropShadow
            fluid={assets.images["editor-syntax-java-enum.png"]}
            rounded
          >
            <span>Java enum methods to process JSON data.</span>
          </Image>
        </Visualization>
        <Text>
          <Headline>Beautiful code to keep focused.</Headline>
          <Subline>
            The editor color scheme supports a wide range of programming languages — From bundled languages up to many
            popular syntax and UI third-party packages.
          </Subline>
        </Text>
      </FeatureDuo>
      <FeatureDuo columnRatio={[1, 2]}>
        <Text />
        <Visualization>
          <Image
            alt="Screenshot showing a JavaScript React Hook function"
            dropShadow
            fluid={assets.images["editor-syntax-javascript-react-hook.png"]}
            rounded
          >
            <span>
              JavaScript with a <Link href="https://reactjs.org/docs/hooks-intro">React Hook</Link> for{" "}
              <Link href="https://www.react-spring.io">React Spring</Link> animations.
            </span>
          </Image>
        </Visualization>
      </FeatureDuo>
      <FeatureDuo columnRatio={[2, 1]}>
        <Visualization>
          <Image
            alt="Screenshot showing a Go function with highlighted matching brackets"
            dropShadow
            fluid={assets.images["editor-bracket-matching.png"]}
            rounded
          >
            <span>Go function with highlighted matching brackets.</span>
          </Image>
        </Visualization>
        <Text>
          <Subline>
            Supportive <i>code surfing</i> features like highlighting of bracket pairs are designed to stand out well
            from the actual code.
          </Subline>
        </Text>
      </FeatureDuo>
      <FeatureDuo columnRatio={[1, 2]}>
        <Text>
          <Subline>
            Comments and reference documentations are intentionally inconspicuous and less disturbing in order to keep
            the focus on the important elements: the source code.
          </Subline>
        </Text>
        <Visualization>
          <Image
            alt="Screenshot showing multiple Go functions with corresponding documentation comments"
            dropShadow
            fluid={assets.images["editor-syntax-go-comments.png"]}
            rounded
          >
            <span>Go function with corresponding documentation comments.</span>
          </Image>
        </Visualization>
      </FeatureDuo>
    </Content>
    <WaveDivider />
  </Section>
);

SectionSyntax.propTypes = usePortsAssetsPropTypes;

export default SectionSyntax;
