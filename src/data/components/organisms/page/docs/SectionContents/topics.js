/*
 * Copyright (C) 2018-present Arctic Ice Studio <development@arcticicestudio.com>
 * Copyright (C) 2018-present Sven Greb <development@svengreb.de>
 *
 * Project:    Nord Docs
 * Repository: https://github.com/arcticicestudio/nord-docs
 * License:    MIT
 */

import { Code, CodeDownload, Compass, Pantone, Layout, Terminal } from "atoms/core/vectors/icons";
import { ROUTE_DOCS_COLOR_AND_PALETTES, ROUTE_DOCS_SWATCHES, ROUTE_DOCS_USAGE } from "config/routes/mappings";

/**
 * The mapping of topics for the "Getting Started" contents cards.
 *
 * @author Arctic Ice Studio <development@arcticicestudio.com>
 * @author Sven Greb <development@svengreb.de>
 * @since 0.8.0
 */
const topicsGettingStarted = [
  {
    iconComponent: Compass,
    title: "Learn about the colors and palettes",
    url: ROUTE_DOCS_COLOR_AND_PALETTES
  },
  {
    iconComponent: Pantone,
    title: "Use native swatches for your favorite applications",
    url: ROUTE_DOCS_SWATCHES
  },
  {
    iconComponent: CodeDownload,
    title: "Include Nord in your own project",
    url: ROUTE_DOCS_USAGE
  }
];

/**
 * The mapping of topics for the "References" contents cards.
 *
 * @author Arctic Ice Studio <development@arcticicestudio.com>
 * @author Sven Greb <development@svengreb.de>
 * @since 0.8.0
 */
const topicsReferences = [
  {
    iconComponent: Layout,
    title: "Modern and elegant UIs"
  },
  {
    iconComponent: Code,
    title: "Beautiful code syntax"
  },
  {
    iconComponent: Terminal,
    title: "Uniform shell & terminal styles",
    svgType: "stroke"
  }
];

export { topicsGettingStarted, topicsReferences };
