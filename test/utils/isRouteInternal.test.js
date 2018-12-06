/*
 * Copyright (C) 2018-present Arctic Ice Studio <development@arcticicestudio.com>
 * Copyright (C) 2018-present Sven Greb <development@svengreb.de>
 *
 * Project:    Nord Docs
 * Repository: https://github.com/arcticicestudio/nord-docs
 * License:    MIT
 */

import { isRouteInternal } from "utils";
import { ROUTE_BLOG, ROUTE_DOCS, ROUTE_COMMUNITY, ROUTE_PORTS, ROUTE_ROOT } from "config/routes/mappings";
import { metadataNordDocs } from "data/project";

describe("internal routes are", () => {
  test("matching", () => {
    [
      "#",
      ROUTE_ROOT,
      `${ROUTE_ROOT}#`,
      `${ROUTE_ROOT}?port=atom`,
      ROUTE_BLOG,
      ROUTE_DOCS,
      ROUTE_COMMUNITY,
      ROUTE_PORTS
    ].forEach(route => expect(isRouteInternal(route)).toBeTruthy());
  });

  test("not matching", () => {
    [
      `${metadataNordDocs.homepage}`,
      `${metadataNordDocs.repository.url}`,
      "https://github.com/arcticicestudio",
      "https://www.nordtheme.com",
      "https://nordtheme.com",
      "https://nordtheme.com",
      "//nordtheme.com",
      "file:///etc/hosts",
      "mailto:support@nordtheme.com"
    ].forEach(route => expect(isRouteInternal(route)).toBeFalsy());
  });
});
