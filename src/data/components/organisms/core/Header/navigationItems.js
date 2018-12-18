/*
 * Copyright (C) 2018-present Arctic Ice Studio <development@arcticicestudio.com>
 * Copyright (C) 2018-present Sven Greb <development@svengreb.de>
 *
 * Project:    Nord Docs
 * Repository: https://github.com/arcticicestudio/nord-docs
 * License:    MIT
 */

/**
 * @author Arctic Ice Studio <development@arcticicestudio.com>
 * @author Sven Greb <development@svengreb.de>
 * @since 0.3.0
 */

import { ROUTE_BLOG, ROUTE_COMMUNITY, ROUTE_DOCS, ROUTE_PORTS } from "config/routes/mappings";

/**
 * The mapping of navigation link item names to their target URL.
 *
 * @since 0.3.0
 */
const navigationItems = [
  { title: "Ports", url: ROUTE_PORTS },
  { title: "Docs", url: ROUTE_DOCS },
  { title: "Blog", url: ROUTE_BLOG },
  { title: "Community", url: ROUTE_COMMUNITY }
];

export default navigationItems;
