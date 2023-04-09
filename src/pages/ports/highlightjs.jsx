/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

import React from "react";

import { locationPropTypes } from "data/pages/shared/propTypes";
import BaseLayout from "layouts/core/BaseLayout";
import { SectionHero, SectionSetup, SectionSyntax } from "organisms/page/ports/highlightjs";
import { usePortsAssets } from "hooks";

/**
 * The component that represents the landing page of the "Nord highlight.js" port project.
 * @since 0.9.0
 */
const HighlightJs = ({ location: { pathname } }) => {
  const assets = usePortsAssets("highlightjs");

  return (
    <BaseLayout pathName={pathname}>
      <SectionHero assets={assets} />
      <SectionSyntax assets={assets} />
      <SectionSetup assets={assets} />
    </BaseLayout>
  );
};

HighlightJs.propTypes = locationPropTypes;

export default HighlightJs;
