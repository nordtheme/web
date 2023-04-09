/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

import React from "react";

import { locationPropTypes } from "data/pages/shared/propTypes";
import BaseLayout from "layouts/core/BaseLayout";
import { SectionConfigurations, SectionHero, SectionIntroduction, SectionPluginSupport, SectionSetup, SectionUIElements } from "organisms/page/ports/tmux";
import { usePortsAssets } from "hooks";

/**
 * The component that represents the landing page of the "Nord tmux" port project.
 * @since 0.9.0
 */
const Tmux = ({ location: { pathname } }) => {
  const assets = usePortsAssets("tmux");

  return (
    <BaseLayout pathName={pathname}>
      <SectionHero assets={assets} />
      <SectionIntroduction assets={assets} />
      <SectionUIElements assets={assets} />
      <SectionPluginSupport assets={assets} />
      <SectionConfigurations assets={assets} />
      <SectionSetup assets={assets} />
    </BaseLayout>
  );
};

Tmux.propTypes = locationPropTypes;

export default Tmux;
