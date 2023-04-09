/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

import easings from "./easings";
import speed, { duration } from "./speed";

const motion = { easings, speed };

/**
 * @file Provides motion related values like animations inspired by Material Design Guidelines.
 * @since 0.2.0
 */

export { easings, speed, duration };
export default motion;
