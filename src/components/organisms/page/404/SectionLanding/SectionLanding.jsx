/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

import React from "react";

import { WaveFooter } from "atoms/core/vectors/divider";
import Section, { Content } from "containers/core/Section";
import ErrorState404 from "molecules/core/ErrorState404";

import { errorState404IllustrationStyles } from "../../shared/styles";

/**
 * The component that represents the illustration section of the 404 page.
 * @since 0.3.0
 */
const SectionLanding = () => (
  <Section>
    <Content centered compact>
      <ErrorState404
        headline="What a beautiful cold and snowy night sky…"
        illustrationStyles={errorState404IllustrationStyles}
        subline="…but that's not the place to find the page you were looking for."
      />
    </Content>
    <WaveFooter />
  </Section>
);

export default SectionLanding;
