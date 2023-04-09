/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

import { Brush, Code, CloudDownload, QuestionMarkCircle, Target } from "atoms/core/vectors/icons";
import {
  ROUTE_DOCS_PORTS_VISUAL_STUDIO_CODE_CUSTOMIZATION,
  ROUTE_DOCS_PORTS_VISUAL_STUDIO_CODE_DEVELOPMENT,
  ROUTE_DOCS_PORTS_VISUAL_STUDIO_CODE_INSTALLATION,
} from "config/routes/mappings";

/**
 * The mapping of topics for the "Getting Started" contents cards of the "Nord Visual Studio Code" docs page.
 * @since 0.15.0
 */
const topicsGettingStarted = [
  {
    iconComponent: CloudDownload,
    iconOutlined: true,
    title: "Install and activate the extension",
    url: ROUTE_DOCS_PORTS_VISUAL_STUDIO_CODE_INSTALLATION,
  },
  {
    iconComponent: Brush,
    title: "Override styles with customizations",
    url: ROUTE_DOCS_PORTS_VISUAL_STUDIO_CODE_CUSTOMIZATION,
  },
  {
    iconComponent: Code,
    title: "Develop the extension on your own",
    url: ROUTE_DOCS_PORTS_VISUAL_STUDIO_CODE_DEVELOPMENT,
  },
];

/**
 * The mapping of topics for the "References" contents cards of the "Nord Visual Studio Code" docs page.
 * @since 0.15.0
 */
const topicsReferences = [
  {
    iconComponent: Target,
    svgType: "stroke",
    title: "Supported languages and extensions",
  },
  {
    iconComponent: QuestionMarkCircle,
    title: "Troubleshooting Guide",
  },
];

export { topicsGettingStarted, topicsReferences };
