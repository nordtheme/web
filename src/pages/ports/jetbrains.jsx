/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

import React from "react";

import { SectionEditorDetails, SectionHero, SectionIntroduction, SectionSetup, SectionSyntax, SectionUIElements } from "organisms/page/ports/jetbrains";
import { locationPropTypes } from "data/pages/shared/propTypes";
import BaseLayout from "layouts/core/BaseLayout";
import { usePortsAssets } from "hooks";

/**
 * The component that represents the landing page of the "Nord JetBrains" port project.
 * @since 0.9.0
 */
const JetBrains = ({ location: { pathname } }) => {
  const assets = usePortsAssets("jetbrains");

  return (
    <BaseLayout pathName={pathname}>
      <SectionHero assets={assets} />
      <SectionIntroduction assets={assets} />
      <SectionSyntax assets={assets} />
      <SectionEditorDetails assets={assets} />
      <SectionUIElements assets={assets} />
      <SectionSetup assets={assets} />
    </BaseLayout>
  );
};

JetBrains.propTypes = locationPropTypes;

export default JetBrains;
