/*
 * Copyright (C) 2018-present Arctic Ice Studio <development@arcticicestudio.com>
 * Copyright (C) 2018-present Sven Greb <development@svengreb.de>
 *
 * Project:    Nord Docs
 * Repository: https://github.com/arcticicestudio/nord-docs
 * License:    MIT
 */

import { CloudDownload, Code, QuestionMarkCircle, Target, Settings2 } from "atoms/core/vectors/icons";
import {
  ROUTE_DOCS_PORTS_ATOM_UI_CONFIGURATION,
  ROUTE_DOCS_PORTS_ATOM_UI_DEVELOPMENT,
  ROUTE_DOCS_PORTS_ATOM_UI_INSTALLATION
} from "config/routes/mappings";

/**
 * The mapping of topics for the "Getting Started" contents cards of the "Nord Atom UI" docs page.
 *
 * @author Arctic Ice Studio <development@arcticicestudio.com>
 * @author Sven Greb <development@svengreb.de>
 * @since 0.19.0
 */
const topicsGettingStarted = [
  {
    iconComponent: CloudDownload,
    iconOutlined: true,
    title: "Install and activate the theme",
    url: ROUTE_DOCS_PORTS_ATOM_UI_INSTALLATION
  },
  {
    iconComponent: Settings2,
    title: "Configure the theme to fit your needs",
    url: ROUTE_DOCS_PORTS_ATOM_UI_CONFIGURATION
  },
  {
    iconComponent: Code,
    title: "Develop the theme on your own",
    url: ROUTE_DOCS_PORTS_ATOM_UI_DEVELOPMENT
  }
];

/**
 * The mapping of topics for the "References" contents cards of the "Nord Atom UI" docs page.
 *
 * @author Arctic Ice Studio <development@arcticicestudio.com>
 * @author Sven Greb <development@svengreb.de>
 * @since 0.19.0
 */
const topicsReferences = [
  {
    iconComponent: Target,
    svgType: "stroke",
    title: "Supported packages and languages"
  },
  {
    iconComponent: QuestionMarkCircle,
    title: "Troubleshooting Guide"
  }
];

export { topicsGettingStarted, topicsReferences };
