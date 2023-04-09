/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

import { Brush, CloudDownload, QuestionMarkCircle, Settings2, Target } from "atoms/core/vectors/icons";
import { ROUTE_DOCS_PORTS_EMACS_CONFIGURATION, ROUTE_DOCS_PORTS_EMACS_INSTALLATION } from "config/routes/mappings";

/**
 * The mapping of topics for the "Getting Started" contents cards of the "Nord Emacs" docs page.
 * @since 0.17.0
 */
const topicsGettingStarted = [
  {
    iconComponent: CloudDownload,
    iconOutlined: true,
    title: "Install and activate the theme",
    url: ROUTE_DOCS_PORTS_EMACS_INSTALLATION,
  },
  {
    iconComponent: Settings2,
    title: "Configure the theme to fit your needs",
    url: ROUTE_DOCS_PORTS_EMACS_CONFIGURATION,
  },
  {
    iconComponent: Brush,
    title: "Override styles with customizations",
  },
];

/**
 * The mapping of topics for the "References" contents cards of the "Nord Emacs" docs page.>
 * @since 0.17.0
 */
const topicsReferences = [
  {
    iconComponent: Target,
    svgType: "stroke",
    title: "Supported languages and packages",
  },
  {
    iconComponent: QuestionMarkCircle,
    title: "Troubleshooting Guide",
  },
];

export { topicsGettingStarted, topicsReferences };
