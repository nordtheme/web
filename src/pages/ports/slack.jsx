/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

import React from "react";

import { locationPropTypes } from "data/pages/shared/propTypes";
import BaseLayout from "layouts/core/BaseLayout";
import { SectionHero, SectionSetup, SectionUIDetails } from "organisms/page/ports/slack";
import { usePortsAssets } from "hooks";

/**
 * The component that represents the landing page of the "Nord Slack" port project.
 * @since 0.9.0
 */
const Slack = ({ location: { pathname } }) => {
  const assets = usePortsAssets("slack");
  return (
    <BaseLayout pathName={pathname}>
      <SectionHero assets={assets} />
      <SectionUIDetails assets={assets} />
      <SectionSetup assets={assets} />
    </BaseLayout>
  );
};

Slack.propTypes = locationPropTypes;

export default Slack;
