/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

import isRouteInternal from "./isRouteInternal";

/**
 * Validates if the given path element partially matches the route.
 * @method isRoutePartiallyMatch
 * @param  {string} route The route to check.
 * @param  {string} pathElement The path element to check against the route.
 * @return {Boolean} `true` if the given path element is partially matching, `false` otherwise.
 * @since 0.3.0
 */
const isRoutePartiallyMatch = (route, pathElement) => {
  /* Don't match exact and external routes. */
  if (route === pathElement) return false;
  if (!isRouteInternal(pathElement)) return false;

  /* Split into path elements and filter out leading and pending slashes. */
  const routeTokens = route.split("/").filter((t) => t.length);
  const pathElementTokens = pathElement.split("/").filter((t) => t.length);

  const isMatch = pathElementTokens.every((t, idx) => routeTokens[idx] === t);
  /* Prevent false-positive match by only allowing the path element as exact root when current route is not the root. */
  const isPathElementExactRoot = pathElement === "/" && route !== "/";

  return isPathElementExactRoot ? false : isMatch;
};

export default isRoutePartiallyMatch;
