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
import { ROUTE_PORTS_JETBRAINS } from "config/routes/mappings";
import { sectionIdFor } from "utils";
import { Image } from "atoms/core/mdx-elements";
import { usePortsAssetsPropTypes } from "hooks/shared/propTypes";

import { Section } from "../../../shared";
import WaveDivider from "./styled/WaveDivider";

const SECTION_ID = sectionIdFor(ROUTE_PORTS_JETBRAINS, 2);

/**
 * The component that represents the syntax section for the landing page of the "Nord JetBrains" port project.
 *
 * @author Arctic Ice Studio <development@arcticicestudio.com>
 * @author Sven Greb <development@svengreb.de>
 * @since 0.12.0
 */
const SectionSyntax = ({ assets }) => (
  <Section id={SECTION_ID}>
    <Content centered>
      <FeatureDuo columnRatio={[2, 1]}>
        <Visualization>
          <Image
            alt="Screenshot showing the IDE code editor with a Java Spring Boot controller class"
            dropShadow
            fluid={assets.images["editor-syntax-java-spring-boot.png"]}
            rounded
          >
            <span>
              Java with <Link href="https://spring.io">Spring Boot</Link>.
            </span>
          </Image>
        </Visualization>
        <Text>
          <Headline>Beautiful code to keep focused.</Headline>
          <Subline>
            The editor color scheme supports a wide range of programming languages — From bundled plugins of both
            community and ultimate editions up to most popular third-party plugins.
          </Subline>
        </Text>
      </FeatureDuo>
      <FeatureDuo columnRatio={[1, 2]}>
        <Text>
          <Subline>
            Supportive <i>code surfing</i> features like highlighting of bracket pairs are designed to stand out well
            from the actual code.
          </Subline>
        </Text>
        <Visualization>
          <Image
            alt="Screenshot showing the IDE code editor with Java methods to process JSON data"
            dropShadow
            fluid={assets.images["editor-syntax-java.png"]}
            rounded
          >
            <span>Java methods to process JSON data.</span>
          </Image>
        </Visualization>
      </FeatureDuo>
      <FeatureDuo columnRatio={[2, 1]}>
        <Visualization>
          <Image
            alt="Screenshot showing the IDE code editor with a Java enumeration with implemented interface methods."
            dropShadow
            fluid={assets.images["editor-syntax-java-enum.png"]}
            rounded
          >
            <span>Java enumeration with implemented interface methods.</span>
          </Image>
        </Visualization>
        <Text>
          <Subline>
            Comments and source code documentations are intentionally inconspicuous and less disturbing in order to keep
            the focus on the important elements: the source code.
          </Subline>
        </Text>
      </FeatureDuo>
    </Content>
    <WaveDivider />
  </Section>
);

SectionSyntax.propTypes = usePortsAssetsPropTypes;

export default SectionSyntax;
