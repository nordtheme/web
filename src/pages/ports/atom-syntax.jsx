/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

import React from "react";

import { locationPropTypes } from "data/pages/shared/propTypes";
import BaseLayout from "layouts/core/BaseLayout";
import { SectionEditorDetails, SectionHero, SectionIntroduction, SectionPackageSupport, SectionSetup, SectionSyntax } from "organisms/page/ports/atom-syntax";
import { usePortsAssets } from "hooks";

/**
 * The component that represents the landing page of the "Nord Atom Syntax" port project.
 * @since 0.9.0
 */
const AtomSyntax = ({ location: { pathname } }) => {
  const assets = usePortsAssets("atom-syntax");
  return (
    <BaseLayout pathName={pathname}>
      <SectionHero assets={assets} />
      <SectionIntroduction assets={assets} />
      <SectionSyntax assets={assets} />
      <SectionEditorDetails assets={assets} />
      <SectionPackageSupport assets={assets} />
      <SectionSetup assets={assets} />
    </BaseLayout>
  );
};

AtomSyntax.propTypes = locationPropTypes;

export default AtomSyntax;
