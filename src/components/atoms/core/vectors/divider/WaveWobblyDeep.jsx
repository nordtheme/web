/*
 * Copyright (C) 2018-present Arctic Ice Studio <development@arcticicestudio.com>
 * Copyright (C) 2018-present Sven Greb <development@svengreb.de>
 *
 * Project:    Nord Docs
 * Repository: https://github.com/arcticicestudio/nord-docs
 * License:    MIT
 */

import React from "react";

import DividerSvg from "./DividerSvg";

/**
 * A "deep wobbly" vector wave to render a visual differentiation to the next section.
 *
 * @author Arctic Ice Studio <development@arcticicestudio.com>
 * @author Sven Greb <development@svengreb.de>
 * @since 0.9.0
 */
const WavePorts = props => (
  <DividerSvg {...props} viewBox="0 0 1920 500" xmlns="http://www.w3.org/2000/svg">
    <path d="M1920 .997c-1.8 1.275-18.636 12.149-50.506 32.62-47.804 30.707-90.085 5.886-146.8 5.886-67.738 0-106.575 45.78-123.324 62.768-37.817 38.361-36.688 62.127-84.319 117.216-47.63 55.09-119.357 37.4-159.562 66.341-46.542 33.507 10.573 96.433-37.008 128.508s-111.701-82.728-192.652-46.99c-80.95 35.739-48.65 119.128-166.048 119.269-117.928-.18-85.608-83.53-166.558-119.269-80.95-35.738-155.159 62.634-202.74 30.6-47.58-32.035 19.632-78.652-26.91-112.118-40.215-28.94-111.931-11.262-159.562-66.34-47.631-55.08-46.472-78.876-84.289-117.217-16.76-16.988-55.586-62.768-123.324-62.768-56.726 0-100.884 25.398-146.81-5.876C18.97 12.778 2.44 1.901 0 .997V501h1920V.997z" />
  </DividerSvg>
);

export default WavePorts;
