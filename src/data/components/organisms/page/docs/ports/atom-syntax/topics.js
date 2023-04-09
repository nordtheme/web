/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

import { CloudDownload, Code, QuestionMarkCircle, Target } from "atoms/core/vectors/icons";
import { ROUTE_DOCS_PORTS_ATOM_SYNTAX_DEVELOPMENT, ROUTE_DOCS_PORTS_ATOM_SYNTAX_INSTALLATION } from "config/routes/mappings";

/**
 * The mapping of topics for the "Getting Started" contents cards of the "Nord Atom Syntax" docs page.
 * @since 0.19.0
 */
const topicsGettingStarted = [
  {
    iconComponent: CloudDownload,
    iconOutlined: true,
    title: "Install and activate the theme",
    url: ROUTE_DOCS_PORTS_ATOM_SYNTAX_INSTALLATION,
  },
  {
    iconComponent: Code,
    title: "Develop the theme on your own",
    url: ROUTE_DOCS_PORTS_ATOM_SYNTAX_DEVELOPMENT,
  },
];

/**
 * The mapping of topics for the "References" contents cards of the "Nord Atom Syntax" docs page.
 * @since 0.19.0
 */
const topicsReferences = [
  {
    iconComponent: Target,
    svgType: "stroke",
    title: "Supported packages and languages",
  },
  {
    iconComponent: QuestionMarkCircle,
    title: "Troubleshooting Guide",
  },
];

export { topicsGettingStarted, topicsReferences };
