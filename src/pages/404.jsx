/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

import React from "react";

import { locationPropTypes } from "data/pages/shared/propTypes";
import BaseLayout from "layouts/core/BaseLayout";
import { SectionLanding } from "organisms/page/404";

/**
 * The component that represents the 404 page.
 * @since 0.3.0
 */
const HttpStatus404 = ({ location: { pathname } }) => (
  <BaseLayout pathName={pathname}>
    <SectionLanding />
  </BaseLayout>
);

HttpStatus404.propTypes = locationPropTypes;

export default HttpStatus404;
