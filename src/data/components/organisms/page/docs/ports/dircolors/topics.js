/*
 * Copyright (C) 2018-present Arctic Ice Studio <development@arcticicestudio.com>
 * Copyright (C) 2018-present Sven Greb <development@svengreb.de>
 *
 * Project:    Nord Docs
 * Repository: https://github.com/arcticicestudio/nord-docs
 * License:    MIT
 */

import { CloudDownload, QuestionMarkCircle, Target } from "atoms/core/vectors/icons";
import {
  ROUTE_DOCS_PORTS_DIRCOLORS_INSTALLATION,
  ROUTE_DOCS_PORTS_DIRCOLORS_TYPE_SUPPORT
} from "config/routes/mappings";

/**
 * The mapping of topics for the "Getting Started" contents cards of the "Nord dircolors" docs page.
 *
 * @author Arctic Ice Studio <development@arcticicestudio.com>
 * @author Sven Greb <development@svengreb.de>
 * @since 0.18.0
 */
const topicsGettingStarted = [
  {
    iconComponent: CloudDownload,
    iconOutlined: true,
    title: "Install and activate the theme",
    url: ROUTE_DOCS_PORTS_DIRCOLORS_INSTALLATION
  }
];

/**
 * The mapping of topics for the "References" contents cards of the "Nord dircolors" docs page.
 *
 * @author Arctic Ice Studio <development@arcticicestudio.com>
 * @author Sven Greb <development@svengreb.de>
 * @since 0.18.0
 */
const topicsReferences = [
  {
    iconComponent: Target,
    svgType: "stroke",
    title: "Supported file and node types",
    url: ROUTE_DOCS_PORTS_DIRCOLORS_TYPE_SUPPORT
  },
  {
    iconComponent: QuestionMarkCircle,
    title: "Troubleshooting Guide"
  }
];

export { topicsGettingStarted, topicsReferences };
