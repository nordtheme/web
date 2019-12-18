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
import { SectionHero, SectionSyntax, SectionUIElements, SectionSetup } from "organisms/page/ports/xcode";
import { usePortsAssets } from "hooks";

/**
 * The component that represents the landing page of the "Nord Xcode" port project.
 *
 * @author Arctic Ice Studio <development@arcticicestudio.com>
 * @author Sven Greb <development@svengreb.de>
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
