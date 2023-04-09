/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

import React from "react";

import { locationPropTypes } from "data/pages/shared/propTypes";
import BaseLayout from "layouts/core/BaseLayout";
import { SectionConfigurations, SectionHero, SectionIntroduction, SectionPackageSupport, SectionSetup, SectionUIElements } from "organisms/page/ports/atom-ui";
import { usePortsAssets } from "hooks";

/**
 * The component that represents the landing page of the "Nord Atom UI" port project.
 * @since 0.9.0
 */
const AtomUI = ({ location: { pathname } }) => {
  const assets = usePortsAssets("atom-ui");
  return (
    <BaseLayout pathName={pathname}>
      <SectionHero assets={assets} />
      <SectionIntroduction assets={assets} />
      <SectionUIElements assets={assets} />
      <SectionPackageSupport assets={assets} />
      <SectionConfigurations assets={assets} />
      <SectionSetup assets={assets} />
    </BaseLayout>
  );
};

AtomUI.propTypes = locationPropTypes;

export default AtomUI;
