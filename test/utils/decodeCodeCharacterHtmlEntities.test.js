/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

import { decodeCodeCharacterHtmlEntities } from "utils";

describe("HTML entities are", () => {
  test("correctly decoded when of type code character (numeric)", () => {
    const encodedEntities = {
      "!": "&#33;",
      '"': "&#34;",
      $: "&#36;",
      "&": "&#38;",
      "'": "&#39;",
      ")": "&#41;",
      "@": "&#64;",
      "~": "&#126;",
      "©": "&#169;",
      ä: "&#228;",
    };
    Object.entries(encodedEntities).forEach(([key, value]) => {
      expect(decodeCodeCharacterHtmlEntities(value)).toEqual(key);
      expect(decodeCodeCharacterHtmlEntities(value)).not.toBeUndefined();
    });
  });

  test("ignored when not of type code character (not numeric) or not matching", () => {
    const encodedEntities = {
      "!": "&excl;",
      '"': "&quot;",
      $: "&dollar;",
      "&": "&amp;",
      "'": "&apos;",
      ")": "&rpar;",
      "@": "&commat;",
      "~": "&tilde;",
      "©": "&copy;",
      ä: "&auml;",
    };
    Object.entries(encodedEntities).forEach(([key, value]) => {
      expect(decodeCodeCharacterHtmlEntities(value)).not.toEqual(key);
    });
  });

  test("ignored when not matching", () => {
    expect(decodeCodeCharacterHtmlEntities("not a matching string")).toEqual("not a matching string");
    expect(decodeCodeCharacterHtmlEntities("not a matching string")).not.toBeUndefined();
  });
});
