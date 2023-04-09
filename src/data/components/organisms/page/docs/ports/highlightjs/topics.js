/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

import { CloudDownload, QuestionMarkCircle } from "atoms/core/vectors/icons";
import { ROUTE_DOCS_PORTS_HIGHLIGHTJS_INSTALLATION } from "config/routes/mappings";

/**
 * The mapping of topics for the "Getting Started" contents cards of the "Nord highlight.js" docs page.
 * @since 0.23.0
 */
const topicsGettingStarted = [
  {
    iconComponent: CloudDownload,
    iconOutlined: true,
    title: "Install and use the theme",
    url: ROUTE_DOCS_PORTS_HIGHLIGHTJS_INSTALLATION,
  },
];

/**
 * The mapping of topics for the "References" contents cards of the "Nord highlight.js" docs page.
 * @since 0.23.0
 */
const topicsReferences = [
  {
    iconComponent: QuestionMarkCircle,
    title: "Troubleshooting Guide",
  },
];

export { topicsGettingStarted, topicsReferences };
