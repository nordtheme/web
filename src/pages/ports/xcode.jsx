/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

import React from "react";

import { locationPropTypes } from "data/pages/shared/propTypes";
import BaseLayout from "layouts/core/BaseLayout";
import { SectionHero, SectionSyntax, SectionUIElements, SectionSetup } from "organisms/page/ports/xcode";
import { usePortsAssets } from "hooks";

/**
 * The component that represents the landing page of the "Nord Xcode" port project.
 * @since 0.9.0
 */
const Xcode = ({ location: { pathname } }) => {
  const assets = usePortsAssets("xcode");
  return (
    <BaseLayout pathName={pathname}>
      <SectionHero assets={assets} />
      <SectionSyntax assets={assets} />
      <SectionUIElements assets={assets} />
      <SectionSetup assets={assets} />
    </BaseLayout>
  );
};

Xcode.propTypes = locationPropTypes;

export default Xcode;
