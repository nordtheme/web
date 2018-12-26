/*
 * Copyright (C) 2018-present Arctic Ice Studio <development@arcticicestudio.com>
 * Copyright (C) 2018-present Sven Greb <development@svengreb.de>
 *
 * Project:    Nord Docs
 * Repository: https://github.com/arcticicestudio/nord-docs
 * License:    MIT
 */

import React from "react";

import { WaveFooter } from "atoms/core/vectors/divider";
import Section, { Content } from "containers/core/Section";
import ErrorState404 from "molecules/core/ErrorState404";

import { errorState404IllustrationStyles } from "../../shared/styles";

/**
 * The component that represents the illustratin section of the 404 page.
 *
 * @author Arctic Ice Studio <development@arcticicestudio.com>
 * @author Sven Greb <development@svengreb.de>
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
