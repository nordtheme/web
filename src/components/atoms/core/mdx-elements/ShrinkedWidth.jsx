/*
 * Copyright (C) 2018-present Arctic Ice Studio <development@arcticicestudio.com>
 * Copyright (C) 2018-present Sven Greb <development@svengreb.de>
 *
 * Project:    Nord Docs
 * Repository: https://github.com/arcticicestudio/nord-docs
 * License:    MIT
 */

import styled from "styled-components";
import PropTypes from "prop-types";

/**
 * An container component that shrinks the maxiumum width for a better visual style and more readable text.
 * The maximum width in percent can be customized using the `value` prop.
 *
 * @author Arctic Ice Studio <development@arcticicestudio.com>
 * @author Sven Greb <development@svengreb.de>
 * @since 0.10.0
 */
const ShrinkedWidth = styled.div`
  max-width: ${({ value }) => `${value}%`};
  margin: 0 auto;
`;

ShrinkedWidth.propTypes = {
  value: PropTypes.number
};

ShrinkedWidth.defaultProps = {
  value: 60
};

export default ShrinkedWidth;
