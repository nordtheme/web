/*
 * Copyright (C) 2018-present Arctic Ice Studio <development@arcticicestudio.com>
 * Copyright (C) 2018-present Sven Greb <development@svengreb.de>
 *
 * Project:    Nord Docs
 * Repository: https://github.com/arcticicestudio/nord-docs
 * License:    MIT
 */

import React from "react";

import {
  SectionEditorDetails,
  SectionHero,
  SectionIntroduction,
  SectionSetup,
  SectionSyntax,
  SectionUIElements
} from "organisms/page/ports/jetbrains";
import { locationPropTypes } from "data/pages/shared/propTypes";
import BaseLayout from "layouts/core/BaseLayout";
import { usePortsAssets } from "hooks";

/**
 * The component that represents the landing page of the "Nord JetBrains" port project.
 *
 * @author Arctic Ice Studio <development@arcticicestudio.com>
 * @author Sven Greb <development@svengreb.de>
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
