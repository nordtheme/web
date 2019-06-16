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
  SectionSetup,
  SectionSyntax
} from "organisms/page/ports/emacs";
import { usePortsAssets } from "hooks";

/**
 * The component that represents the landing page of the "Nord Emacs" port project.
 *
 * @author Arctic Ice Studio <development@arcticicestudio.com>
 * @author Sven Greb <development@svengreb.de>
 * @since 0.9.0
 */
const Emacs = ({ location: { pathname } }) => {
  const assets = usePortsAssets("emacs");

  return (
    <BaseLayout pathName={pathname}>
      <SectionHero assets={assets} />
      <SectionIntroduction assets={assets} />
      <SectionSyntax assets={assets} />
      <SectionEditorDetails assets={assets} />
      <SectionConfigurations assets={assets} />
      <SectionSetup assets={assets} />
    </BaseLayout>
  );
};

Emacs.propTypes = locationPropTypes;

export default Emacs;
