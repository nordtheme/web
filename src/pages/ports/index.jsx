/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

import React from "react";

import { locationPropTypes } from "data/pages/shared/propTypes";
import BaseLayout from "layouts/core/BaseLayout";
import { SectionCardGridFilter, SectionHero } from "organisms/page/ports";

/**
 * The component that represents the ports landing page.
 * @since 0.3.0
 */
const Ports = ({ location: { pathname } }) => (
  <BaseLayout headerVariant="primary" pathName={pathname}>
    <SectionHero />
    <SectionCardGridFilter />
  </BaseLayout>
);

Ports.propTypes = locationPropTypes;

export default Ports;
