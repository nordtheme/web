/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

import React from "react";

import { locationPropTypes } from "data/pages/shared/propTypes";
import BaseLayout from "layouts/core/BaseLayout";
import { SectionHero, SectionIntroduction, SectionSetup } from "organisms/page/ports/dircolors";
import { usePortsAssets } from "hooks";

/**
 * The component that represents the landing page of the "Nord dircolors" port project.
 * @since 0.9.0
 */
const Dircolors = ({ location: { pathname } }) => {
  const assets = usePortsAssets("dircolors");

  return (
    <BaseLayout pathName={pathname}>
      <SectionHero assets={assets} />
      <SectionIntroduction assets={assets} />
      <SectionSetup assets={assets} />
    </BaseLayout>
  );
};

Dircolors.propTypes = locationPropTypes;

export default Dircolors;
