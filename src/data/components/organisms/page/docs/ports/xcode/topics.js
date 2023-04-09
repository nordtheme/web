/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

import { CloudDownload, Pantone, QuestionMarkCircle } from "atoms/core/vectors/icons";
import { ROUTE_DOCS_PORTS_XCODE_ASSET_CATALOG, ROUTE_DOCS_PORTS_XCODE_INSTALLATION } from "config/routes/mappings";

/**
 * The mapping of topics for the "Getting Started" contents cards of the "Nord Xcode" docs page.
 * @since 0.22.0
 */
const topicsGettingStarted = [
  {
    iconComponent: CloudDownload,
    iconOutlined: true,
    title: "Install and activate the theme",
    url: ROUTE_DOCS_PORTS_XCODE_INSTALLATION,
  },
];

/**
 * The mapping of topics for the "References" contents cards of the "Nord Xcode" docs page.
 * @since 0.22.0
 */
const topicsReferences = [
  {
    iconComponent: Pantone,
    title: "Use Nord as color set from the asset catalog",
    url: ROUTE_DOCS_PORTS_XCODE_ASSET_CATALOG,
  },
  {
    iconComponent: QuestionMarkCircle,
    title: "Troubleshooting Guide",
  },
];

export { topicsGettingStarted, topicsReferences };
