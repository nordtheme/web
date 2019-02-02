/*
 * Copyright (C) 2018-present Arctic Ice Studio <development@arcticicestudio.com>
 * Copyright (C) 2018-present Sven Greb <development@svengreb.de>
 *
 * Project:    Nord Docs
 * Repository: https://github.com/arcticicestudio/nord-docs
 * License:    MIT
 */

import { Code, CodeDownload, Compass, Pantone, Layout, Terminal } from "atoms/core/vectors/icons";

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
    title: "Learn about the colors and palettes"
  },
  {
    iconComponent: Pantone,
    title: "Use native swatches for your favorite applications"
  },
  {
    iconComponent: CodeDownload,
    title: "Include Nord in your own project"
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
