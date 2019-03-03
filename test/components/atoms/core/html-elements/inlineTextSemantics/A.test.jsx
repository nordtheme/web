/*
 * Copyright (C) 2018-present Arctic Ice Studio <development@arcticicestudio.com>
 * Copyright (C) 2018-present Sven Greb <development@svengreb.de>
 *
 * Project:    Nord Docs
 * Repository: https://github.com/arcticicestudio/nord-docs
 * License:    MIT
 */

import React from "react";
import { render } from "react-testing-library";

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
