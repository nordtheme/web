/*
 * Copyright (C) 2018-present Arctic Ice Studio <development@arcticicestudio.com>
 * Copyright (C) 2018-present Sven Greb <development@svengreb.de>
 *
 * Project:    Nord Docs
 * Repository: https://github.com/arcticicestudio/nord-docs
 * License:    MIT
 */

/**
 * @author Arctic Ice Studio <development@arcticicestudio.com>
 * @author Sven Greb <development@svengreb.de>
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Heading_Elements
 * @since 0.3.0
 */

import PropTypes from "prop-types";
import styled, { css } from "styled-components";

import { ms } from "styles/theme";

const baseHeadingStyles = css`
  margin-top: 0;
  margin-bottom: ${({ noMargin }) => (noMargin ? 0 : "0.5rem")};
  font-weight: 500;
`;

/**
 * A base HTML component that represents a level 1 section heading.
 */
const H1 = styled.h1`
  ${baseHeadingStyles};
  font-size: ${ms(6)};
`;

/**
 * A base HTML component that represents a level 2 section heading.
 */
const H2 = styled.h2`
  ${baseHeadingStyles};
  font-size: ${ms(5)};
`;

/**
 * A base HTML component that represents a level 3 section heading.
 */
const H3 = styled.h3`
  ${baseHeadingStyles};
  font-size: ${ms(4)};
`;

/**
 * A base HTML component that represents a level 4 section heading.
 */
const H4 = styled.h4`
  ${baseHeadingStyles};
  font-size: ${ms(3)};
`;

/**
 * A base HTML component that represents a level 5 section heading.
 */
const H5 = styled.h5`
  ${baseHeadingStyles};
  font-size: ${ms(2)};
`;

/**
 * A base HTML component that represents a level 6 section heading.
 */
const H6 = styled.h6`
  ${baseHeadingStyles};
  font-size: ${ms(1)};
`;

const propTypes = {
  hasBottomMargin: PropTypes.bool
};

const defaultProps = {
  hasBottomMargin: false
};

H1.propTypes = propTypes;
H1.defaultProps = defaultProps;

H2.propTypes = propTypes;
H2.defaultProps = defaultProps;

H3.propTypes = propTypes;
H3.defaultProps = defaultProps;

H4.propTypes = propTypes;
H4.defaultProps = defaultProps;

H5.propTypes = propTypes;
H5.defaultProps = defaultProps;

H6.propTypes = propTypes;
H6.defaultProps = defaultProps;

export { H1, H2, H3, H4, H5, H6 };
