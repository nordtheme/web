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
import { SectionLanding } from "organisms/page/community";

/**
 * The component that represents the community page.
 *
 * @author Arctic Ice Studio <development@arcticicestudio.com>
 * @author Sven Greb <development@svengreb.de>
 * @since 0.3.0
 */
const Community = props => (
  <BaseLayout {...props}>
    <SectionLanding />
  </BaseLayout>
);

export default Community;
