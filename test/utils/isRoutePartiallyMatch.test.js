/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

import { isRoutePartiallyMatch } from "utils";
import { ROUTE_BLOG, ROUTE_DOCS, ROUTE_COMMUNITY, ROUTE_PORTS, ROUTE_ROOT } from "config/routes/mappings";
import { metadataNordDocs } from "data/project";

describe("partial routes are", () => {
  test("matching", () => {
    [
      { route: `${ROUTE_BLOG}/2018/12/06/snow-winter`, pathElement: ROUTE_BLOG },
      { route: `${ROUTE_DOCS}${ROUTE_PORTS}/vim`, pathElement: ROUTE_DOCS },
      { route: `${ROUTE_COMMUNITY}/slack`, pathElement: ROUTE_COMMUNITY },
    ].forEach(({ route, pathElement }) => expect(isRoutePartiallyMatch(route, pathElement)).toBeTruthy());
  });

  test("not matching", () => {
    [
      { route: ROUTE_ROOT, pathElement: ROUTE_ROOT },
      { route: ROUTE_ROOT, pathElement: ROUTE_BLOG },
      { route: `${ROUTE_BLOG}/2018`, pathElement: `${ROUTE_BLOG}/2018/12/06/snow-winter` },
      { route: `${ROUTE_BLOG}/2018/12/06/snow-winter`, pathElement: `${ROUTE_BLOG}/2018/12/06/snow-winter` },
    ].forEach(({ route, pathElement }) => expect(isRoutePartiallyMatch(route, pathElement)).toBeFalsy());
  });

  test("not matching exact and external routes", () => {
    [
      { route: ROUTE_ROOT, pathElement: ROUTE_ROOT },
      { route: metadataNordDocs.homepage, pathElement: ROUTE_DOCS },
      { route: metadataNordDocs.repository.url, pathElement: ROUTE_COMMUNITY },
      { route: "https://www.nordtheme.com", pathElement: ROUTE_ROOT },
    ].forEach(({ route, pathElement }) => expect(isRoutePartiallyMatch(route, pathElement)).toBeFalsy());
  });
});

test("prevents false-positive match by only allowing the path element as exact root when current route is not the root", () => {
  [
    { route: ROUTE_ROOT, pathElement: ROUTE_BLOG },
    { route: ROUTE_ROOT, pathElement: `${ROUTE_BLOG}/2018/12/06/snow-winter` },
  ].forEach(({ route, pathElement }) => expect(isRoutePartiallyMatch(route, pathElement)).toBeFalsy());
});
