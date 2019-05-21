/*
 * Copyright (C) 2018-present Arctic Ice Studio <development@arcticicestudio.com>
 * Copyright (C) 2018-present Sven Greb <development@svengreb.de>
 *
 * Project:    Nord Docs
 * Repository: https://github.com/arcticicestudio/nord-docs
 * License:    MIT
 */

import React from "react";

import { locationPropTypes } from "data/pages/shared/propTypes";
import BaseLayout from "layouts/core/BaseLayout";
import {
  SectionConfigurations,
  SectionEditorDetails,
  SectionHero,
  SectionIntroduction,
  SectionPluginSupport,
  SectionSetup,
  SectionSyntax
} from "organisms/page/ports/vim";
import { usePortsAssets } from "hooks";

/**
 * The component that represents the landing page of the "Nord Vim" port project.
 *
 * @author Arctic Ice Studio <development@arcticicestudio.com>
 * @author Sven Greb <development@svengreb.de>
 * @since 0.9.0
 */
const Vim = ({ location: { pathname } }) => {
  const assets = usePortsAssets("vim");

  return (
    <BaseLayout pathName={pathname}>
      <SectionHero assets={assets} />
      <SectionIntroduction assets={assets} />
      <SectionSyntax assets={assets} />
      <SectionEditorDetails assets={assets} />
      <SectionPluginSupport assets={assets} />
      <SectionConfigurations assets={assets} />
      <SectionSetup assets={assets} />
    </BaseLayout>
  );
};

Vim.propTypes = locationPropTypes;

export default Vim;
