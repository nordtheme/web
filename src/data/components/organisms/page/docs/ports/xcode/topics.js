/*
 * Copyright (C) 2018-present Arctic Ice Studio <development@arcticicestudio.com>
 * Copyright (C) 2018-present Sven Greb <development@svengreb.de>
 *
 * Project:    Nord Docs
 * Repository: https://github.com/arcticicestudio/nord-docs
 * License:    MIT
 */

import { CloudDownload, Pantone, QuestionMarkCircle } from "atoms/core/vectors/icons";
import { ROUTE_DOCS_PORTS_XCODE_ASSET_CATALOG, ROUTE_DOCS_PORTS_XCODE_INSTALLATION } from "config/routes/mappings";

/**
 * The mapping of topics for the "Getting Started" contents cards of the "Nord Xcode" docs page.
 *
 * @author Arctic Ice Studio <development@arcticicestudio.com>
 * @author Sven Greb <development@svengreb.de>
 * @since 0.22.0
 */
const topicsGettingStarted = [
  {
    iconComponent: CloudDownload,
    iconOutlined: true,
    title: "Install and activate the theme",
    url: ROUTE_DOCS_PORTS_XCODE_INSTALLATION
  }
];

/**
 * The mapping of topics for the "References" contents cards of the "Nord Xcode" docs page.
 *
 * @author Arctic Ice Studio <development@arcticicestudio.com>
 * @author Sven Greb <development@svengreb.de>
 * @since 0.22.0
 */
const topicsReferences = [
  {
    iconComponent: Pantone,
    title: "Use Nord as color set from the asset catalog",
    url: ROUTE_DOCS_PORTS_XCODE_ASSET_CATALOG
  },
  {
    iconComponent: QuestionMarkCircle,
    title: "Troubleshooting Guide"
  }
];

export { topicsGettingStarted, topicsReferences };
