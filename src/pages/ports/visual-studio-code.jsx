/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

import React from "react";

import { locationPropTypes } from "data/pages/shared/propTypes";
import BaseLayout from "layouts/core/BaseLayout";
import {
  SectionEditorDetails,
  SectionHero,
  SectionIntroduction,
  SectionSetup,
  SectionSyntax,
  SectionUIElements,
} from "organisms/page/ports/visual-studio-code";
import { usePortsAssets } from "hooks";

/**
 * The component that represents the landing page of the "Nord Visual Studio Code" port project.
 * @since 0.9.0
 */
const VisualStudioCode = ({ location: { pathname } }) => {
  const assets = usePortsAssets("visual-studio-code");
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

VisualStudioCode.propTypes = locationPropTypes;

export default VisualStudioCode;
