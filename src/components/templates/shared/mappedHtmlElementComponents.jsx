/*
 * Copyright (C) 2018-present Arctic Ice Studio <development@arcticicestudio.com>
 * Copyright (C) 2018-present Sven Greb <development@svengreb.de>
 *
 * Project:    Nord Docs
 * Repository: https://github.com/arcticicestudio/nord-docs
 * License:    MIT
 */

import React from "react";

import Link from "atoms/core/Link";
import {
  Blockquote,
  Code,
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  Hr,
  Li,
  Ol,
  P,
  Pre,
  Table,
  Td,
  Th,
  Tr,
  Ul
} from "atoms/core/html-elements";

import Wrapper from "./Wrapper";

/**
 * A mapping of custom HTML components to their corresponding HTML tag for usage with the `MDXProvider`.
 *
 * @author Arctic Ice Studio <development@arcticicestudio.com>
 * @author Sven Greb <development@svengreb.de>
 * @since 0.10.0
 * @see https://mdxjs.com
 * @see https://github.com/ChristopherBiscardi/gatsby-mdx
 *
 */
const mappedHtmlElementComponents = {
  a: Link,
  blockquote: Blockquote,
  code: Code,
  h1: props => <H1 forMDX {...props} />,
  h2: props => <H2 forMDX {...props} />,
  h3: props => <H3 forMDX {...props} />,
  h4: props => <H4 forMDX {...props} />,
  h5: props => <H5 forMDX {...props} />,
  h6: props => <H6 forMDX {...props} />,
  hr: Hr,
  inlineCode: Code,
  li: props => <Li forMDX {...props} />,
  ol: Ol,
  p: props => <P forMDX {...props} />,
  pre: Pre,
  table: Table,
  td: Td,
  th: Th,
  tr: Tr,
  ul: Ul,
  wrapper: Wrapper
};

export default mappedHtmlElementComponents;
