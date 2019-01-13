/*
 * Copyright (C) 2018-present Arctic Ice Studio <development@arcticicestudio.com>
 * Copyright (C) 2018-present Sven Greb <development@svengreb.de>
 *
 * Project:    Nord Docs
 * Repository: https://github.com/arcticicestudio/nord-docs
 * License:    MIT
 */

import React from "react";
import { waitForElement } from "react-testing-library";

import { renderWithTheme } from "nord-docs-test-utils";
import Button from "atoms/core/Button";
import { ROUTE_DOCS } from "config/routes/mappings";
import { metadataNordDocs } from "data/project";

const handleOnClickMock = jest.fn();

const assertBaseButtonStyles = element => {
  const { color } = getComputedStyle(element);

  expect(element).toHaveStyleRule("display", "inline-flex");
  expect(element).toHaveStyleRule("align-items", "center");
  expect(element).toHaveStyleRule("text-align", "center");
  expect(element).toHaveStyleRule("vertical-align", "middle");
  expect(element).toHaveStyleRule("white-space", "nowrap");
  expect(element).toHaveStyleRule("border-radius", expect.stringContaining("em"));
  expect(element).toHaveStyleRule("padding", expect.stringContaining("em"));
  expect(element).toHaveStyleRule("user-select", "none");
  expect(element).toHaveStyleRule("cursor", "pointer", {
    modifier: ":hover:not(:disabled)"
  });
  expect(element).toHaveStyleRule("outline", "none", {
    modifier: ":active"
  });
  expect(element).toHaveStyleRule("outline", "none", {
    modifier: ":focus"
  });
  expect(element).toHaveStyleRule("cursor", "not-allowed", {
    modifier: ":disabled"
  });
  expect(element).toHaveStyleRule("color", expect.not.stringMatching(color), {
    modifier: ":disabled"
  });
};

const assertBackgroundColorStyle = element => {
  const { backgroundColor } = getComputedStyle(element);

  expect(element).toHaveStyleRule("background-color", expect.not.stringMatching(backgroundColor), {
    modifier: ":active:not(:disabled)"
  });
  expect(element).toHaveStyleRule("background-color", expect.not.stringMatching(backgroundColor), {
    modifier: ":hover:not(:disabled)"
  });
};

describe("theme styles", () => {
  test("matches the snapshot with 'primary' variant", () => {
    const { container } = renderWithTheme(
      <Button onClick={handleOnClickMock} variant="primary">
        Nord
      </Button>
    );

    assertBaseButtonStyles(container.firstChild);
    assertBackgroundColorStyle(container.firstChild);
    expect(container.firstChild).toMatchSnapshot();
  });

  test("matches the snapshot with 'secondary' variant", () => {
    const { container } = renderWithTheme(
      <Button onClick={handleOnClickMock} variant="secondary">
        Nord
      </Button>
    );

    assertBaseButtonStyles(container.firstChild);
    assertBackgroundColorStyle(container.firstChild);
    expect(container.firstChild).toMatchSnapshot();
  });

  test("matches the snapshot with 'simple' variant", () => {
    const { container } = renderWithTheme(
      <Button onClick={handleOnClickMock} variant="simple">
        Nord
      </Button>
    );

    assertBaseButtonStyles(container.firstChild);
    assertBackgroundColorStyle(container.firstChild);
    expect(container.firstChild).toMatchSnapshot();
  });

  test("matches the snapshot with 'subtle' variant", () => {
    const { container } = renderWithTheme(
      <Button onClick={handleOnClickMock} variant="subtle">
        Nord
      </Button>
    );

    assertBaseButtonStyles(container.firstChild);
    assertBackgroundColorStyle(container.firstChild);
    expect(container.firstChild).toMatchSnapshot();
  });

  test("has borders with 'outlined' prop", () => {
    const { container } = renderWithTheme(
      <Button onClick={handleOnClickMock} outlined>
        Nord
      </Button>
    );

    assertBaseButtonStyles(container.firstChild);
    assertBackgroundColorStyle(container.firstChild);
    expect(container.firstChild).toHaveStyleRule("border", expect.stringContaining("solid"));
    expect(container.firstChild).toMatchSnapshot();
  });

  test("has borders with 'dashed' and 'outlined' props", () => {
    const { container } = renderWithTheme(
      <Button dashed onClick={handleOnClickMock} outlined>
        Nord
      </Button>
    );

    assertBaseButtonStyles(container.firstChild);
    assertBackgroundColorStyle(container.firstChild);
    expect(container.firstChild).toHaveStyleRule("border", expect.stringContaining("dashed"));
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe("logical behavior", () => {
  test("renders inernal URLs with `to` prop", () => {
    const { container } = renderWithTheme(<Button to={ROUTE_DOCS}>Nord</Button>);
    expect(container.firstChild).toHaveAttribute("href", ROUTE_DOCS);
    expect(container.firstChild).toMatchSnapshot();
  });

  test("renders inernal URLs with `href` prop", () => {
    const { container } = renderWithTheme(<Button href={ROUTE_DOCS}>Nord</Button>);
    expect(container.firstChild).toHaveAttribute("href", ROUTE_DOCS);
    expect(container.firstChild).toMatchSnapshot();
  });

  test("renders external URLs with `href` prop", () => {
    const { container } = renderWithTheme(<Button href={metadataNordDocs.homepage}>Nord</Button>);
    expect(container.firstChild).toHaveAttribute("href", metadataNordDocs.homepage);
    expect(container.firstChild).toMatchSnapshot();
  });

  test("renders external URLs with `to` prop", () => {
    const { container } = renderWithTheme(<Button to={metadataNordDocs.homepage}>Nord</Button>);
    expect(container.firstChild).toHaveAttribute("href", metadataNordDocs.homepage);
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe("rendering", () => {
  test("renders with text", async () => {
    const { getByText } = renderWithTheme(<Button onClick={handleOnClickMock}>Nord</Button>);

    await waitForElement(() => getByText(/Nord/i));
  });
});
