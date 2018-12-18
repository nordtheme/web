/*
 * Copyright (C) 2018-present Arctic Ice Studio <development@arcticicestudio.com>
 * Copyright (C) 2018-present Sven Greb <development@svengreb.de>
 *
 * Project:    Nord Docs
 * Repository: https://github.com/arcticicestudio/nord-docs
 * License:    MIT
 */

import React from "react";

import BaseLayout from "layouts/core/BaseLayout";
import { SectionHero } from "organisms/page/landing";

/**
 * The landing page component representing the root/index of the site.
 *
 * @author Arctic Ice Studio <development@arcticicestudio.com>
 * @author Sven Greb <development@svengreb.de>
 * @since 0.1.0
 */
const Landing = () => (
  <BaseLayout>
    <SectionHero />
  </BaseLayout>
);

export default Landing;
