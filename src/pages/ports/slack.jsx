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
import { SectionHero, SectionSetup, SectionUIDetails } from "organisms/page/ports/slack";
import { usePortsAssets } from "hooks";

/**
 * The component that represents the landing page of the "Nord Slack" port project.
 *
 * @author Arctic Ice Studio <development@arcticicestudio.com>
 * @author Sven Greb <development@svengreb.de>
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
