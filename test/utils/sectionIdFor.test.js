/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

import { sectionIdFor } from "utils";
import { ROUTE_ROOT, SECTION_COMPONENT_IDS } from "config/routes/mappings";

describe("section IDs per route are", () => {
  test("correctly returned with valid parameters", () => {
    Object.entries(SECTION_COMPONENT_IDS).forEach(([route, sectionIds]) => {
      sectionIds.forEach((id, idx) => {
        expect(sectionIdFor(route, idx)).toEqual(id);
        expect(sectionIdFor(route, idx)).not.toBeUndefined();
      });
    });
  });

  test("undefined with invalid parameters", () => {
    expect(sectionIdFor(ROUTE_ROOT, "not a number")).toBeUndefined();
    expect(sectionIdFor(ROUTE_ROOT, -1)).toBeUndefined();
    expect(sectionIdFor(0, 0)).toBeUndefined();
    expect(sectionIdFor(ROUTE_ROOT, Number.MAX_VALUE)).toBeUndefined();
    expect(sectionIdFor("non-existing-route", 0)).toBeUndefined();
  });
});
