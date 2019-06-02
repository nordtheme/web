/*
 * Copyright (C) 2018-present Arctic Ice Studio <development@arcticicestudio.com>
 * Copyright (C) 2018-present Sven Greb <development@svengreb.de>
 *
 * Project:    Nord Docs
 * Repository: https://github.com/arcticicestudio/nord-docs
 * License:    MIT
 */

import { Brush, CloudDownload, QuestionMarkCircle, Settings2, Target } from "atoms/core/vectors/icons";
import {
  ROUTE_DOCS_PORTS_TMUX_CONFIGURATION,
  ROUTE_DOCS_PORTS_TMUX_PLUGIN_SUPPORT,
  ROUTE_DOCS_PORTS_TMUX_INSTALLATION
} from "config/routes/mappings";

/**
 * The mapping of topics for the "Getting Started" contents cards of the "Nord tmux" docs page.
 *
 * @author Arctic Ice Studio <development@arcticicestudio.com>
 * @author Sven Greb <development@svengreb.de>
 * @since 0.16.0
 */
const topicsGettingStarted = [
  {
    iconComponent: CloudDownload,
    iconOutlined: true,
    title: "Install and activate the theme",
    url: ROUTE_DOCS_PORTS_TMUX_INSTALLATION
  },
  {
    iconComponent: Settings2,
    title: "Configure the theme to fit your needs",
    url: ROUTE_DOCS_PORTS_TMUX_CONFIGURATION
  },
  {
    iconComponent: Brush,
    title: "Override styles with customizations"
  }
];

/**
 * The mapping of topics for the "References" contents cards of the "Nord tmux" docs page.
 *
 * @author Arctic Ice Studio <development@arcticicestudio.com>
 * @author Sven Greb <development@svengreb.de>
 * @since 0.16.0
 */
const topicsReferences = [
  {
    iconComponent: Target,
    svgType: "stroke",
    title: "Supported plugins and UI widgets",
    url: ROUTE_DOCS_PORTS_TMUX_PLUGIN_SUPPORT
  },
  {
    iconComponent: QuestionMarkCircle,
    title: "Troubleshooting Guide"
  }
];

export { topicsGettingStarted, topicsReferences };
