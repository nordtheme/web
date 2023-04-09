/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

import { CloudDownload, Code, QuestionMarkCircle, Target } from "atoms/core/vectors/icons";
import { ROUTE_DOCS_PORTS_SUBLIME_TEXT_DEVELOPMENT, ROUTE_DOCS_PORTS_SUBLIME_TEXT_INSTALLATION } from "config/routes/mappings";

/**
 * The mapping of topics for the "Getting Started" contents cards of the "Nord Sublime Text" docs page.
 * @since 0.20.0
 */
const topicsGettingStarted = [
  {
    iconComponent: CloudDownload,
    iconOutlined: true,
    title: "Install and activate the theme",
    url: ROUTE_DOCS_PORTS_SUBLIME_TEXT_INSTALLATION,
  },
  {
    iconComponent: Code,
    title: "Develop the theme on your own",
    url: ROUTE_DOCS_PORTS_SUBLIME_TEXT_DEVELOPMENT,
  },
];

/**
 * The mapping of topics for the "References" contents cards of the "Nord Sublime Text" docs page.
 * @since 0.20.0
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
