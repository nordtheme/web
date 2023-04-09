/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

import React from "react";
import { render } from "@testing-library/react";

import { A } from "atoms/core/html-elements";
import { ROUTE_DOCS } from "config/routes/mappings";
import { metadataNordDocs } from "data/project";

describe("logical behavior", () => {
  test("renders inernal URLs with `to` prop", () => {
    const { container } = render(<A to={ROUTE_DOCS}>Docs</A>);
    expect(container.firstChild).toHaveAttribute("href", ROUTE_DOCS);
    expect(container.firstChild).toMatchSnapshot();
  });

  test("renders inernal URLs with `href` prop", () => {
    const { container } = render(<A href={ROUTE_DOCS}>Docs</A>);
    expect(container.firstChild).toHaveAttribute("href", ROUTE_DOCS);
    expect(container.firstChild).toMatchSnapshot();
  });

  test("renders external URLs with `href` prop", () => {
    const { container } = render(<A href={metadataNordDocs.homepage}>Docs</A>);
    expect(container.firstChild).toHaveAttribute("href", metadataNordDocs.homepage);
    expect(container.firstChild).toMatchSnapshot();
  });

  test("renders external URLs with `to` prop", () => {
    const { container } = render(<A to={metadataNordDocs.homepage}>Docs</A>);
    expect(container.firstChild).toHaveAttribute("href", metadataNordDocs.homepage);
    expect(container.firstChild).toMatchSnapshot();
  });
});
