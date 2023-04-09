/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

import { ROUTE_BLOG, ROUTE_COMMUNITY, ROUTE_DOCS, ROUTE_PORTS } from "config/routes/mappings";

/**
 * The mapping of navigation link item names to their target URL.
 * @since 0.3.0
 */
const navigationItems = [
  { title: "Ports", url: ROUTE_PORTS },
  { title: "Docs", url: ROUTE_DOCS },
  { title: "Blog", url: ROUTE_BLOG },
  { title: "Community", url: ROUTE_COMMUNITY },
];

export default navigationItems;
