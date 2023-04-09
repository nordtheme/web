/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

import styled from "styled-components";
import PropTypes from "prop-types";

/**
 * An container component that shrinks the maximum width for a better visual style and more readable text.
 * The maximum width in percent can be customized using the `value` prop.
 * @since 0.10.0
 */
const ShrinkedWidth = styled.div`
  max-width: ${({ value }) => `${value}%`};
  margin: 0 auto;
`;

ShrinkedWidth.propTypes = {
  value: PropTypes.number,
};

ShrinkedWidth.defaultProps = {
  value: 60,
};

export default ShrinkedWidth;
