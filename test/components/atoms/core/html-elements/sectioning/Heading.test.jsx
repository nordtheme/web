/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

import React, { Fragment } from "react";
import { stripUnit } from "polished";

import { renderWithTheme } from "nord-web-test-utils";
import { H1, H2, H3, H4, H5, H6 } from "atoms/core/html-elements";

describe("theme styles", () => {
  test("matches the snapshot", () => {
    const { container } = renderWithTheme(
      <Fragment>
        <H1>Heading Level 1</H1>
        <H2>Heading Level 2</H2>
        <H3>Heading Level 3</H3>
        <H4>Heading Level 4</H4>
        <H5>Heading Level 5</H5>
        <H6>Heading Level 6</H6>
      </Fragment>
    );
    expect(container).toMatchSnapshot();
  });

  test("matches the snapshot with adjusted margin", () => {
    const { container } = renderWithTheme(
      <Fragment>
        <H1 compact>Heading Level 1</H1>
        <H2 compact>Heading Level 2</H2>
        <H3 compact>Heading Level 3</H3>
        <H4 compact>Heading Level 4</H4>
        <H5 compact>Heading Level 5</H5>
        <H6 compact>Heading Level 6</H6>
      </Fragment>
    );
    expect(container).toMatchSnapshot();
  });

  test("has explicit font size definitions", () => {
    const { container } = renderWithTheme(
      <Fragment>
        <H1 compact>Heading Level 1</H1>
        <H2 compact>Heading Level 2</H2>
        <H3 compact>Heading Level 3</H3>
        <H4 compact>Heading Level 4</H4>
        <H5 compact>Heading Level 5</H5>
        <H6 compact>Heading Level 6</H6>
      </Fragment>
    );
    expect(
      Object.values(container.children)
        .map((headingElement) => getComputedStyle(headingElement).fontSize)
        .filter(Boolean).length
    ).toEqual(container.children.length);
  });

  test("has no top margin", () => {
    const { container } = renderWithTheme(<H1>Nord</H1>);
    expect(container.firstChild).toHaveStyleRule("margin-top", "0");
  });

  test("adjusts bottom margin based on passed props", () => {
    const { container } = renderWithTheme(<H1 compact>Nord</H1>);
    expect(container.firstChild).toHaveStyleRule("margin-bottom", "0");
  });

  test("Ensure descending font sizes between all heading levels", () => {
    const { container } = renderWithTheme(
      <Fragment>
        <H1 compact>Heading Level 1</H1>
        <H2 compact>Heading Level 2</H2>
        <H3 compact>Heading Level 3</H3>
        <H4 compact>Heading Level 4</H4>
        <H5 compact>Heading Level 5</H5>
        <H6 compact>Heading Level 6</H6>
      </Fragment>
    );

    expect(
      /* Get the font sizes as numbers of all heading components in rendered order. */
      Object.values(container.children)
        .map((headingElement) => stripUnit(getComputedStyle(headingElement).fontSize))
        /* Ensure descending font sizes by comparing a higher level heading with the next lower one. */
        .reduce((acc, cur) => (acc > cur ? cur : 0))
    ).toBeGreaterThan(0);
  });
});
