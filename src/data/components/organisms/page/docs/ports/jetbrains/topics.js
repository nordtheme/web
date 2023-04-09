/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

import { Code, CloudDownload, QuestionMarkCircle, Target } from "atoms/core/vectors/icons";
import { ROUTE_DOCS_PORTS_JETBRAINS_DEVELOPMENT, ROUTE_DOCS_PORTS_JETBRAINS_INSTALLATION } from "config/routes/mappings";

/**
 * The mapping of topics for the "Getting Started" contents cards of the "Nord JetBrains" docs page.
 * @since 0.12.0
 */
const topicsGettingStarted = [
  {
    iconComponent: CloudDownload,
    iconOutlined: true,
    title: "Install and activate the plugin",
    url: ROUTE_DOCS_PORTS_JETBRAINS_INSTALLATION,
  },
  {
    iconComponent: Code,
    title: "Develop the plugin on your own",
    url: ROUTE_DOCS_PORTS_JETBRAINS_DEVELOPMENT,
  },
];

/**
 * The mapping of topics for the "References" contents cards of the "Nord JetBrains" docs page.
 * @since 0.12.0
 */
const topicsReferences = [
  {
    iconComponent: Target,
    svgType: "stroke",
    title: "Supported languages and plugins",
  },
  {
    iconComponent: QuestionMarkCircle,
    title: "Troubleshooting Guide",
  },
];

export { topicsGettingStarted, topicsReferences };
