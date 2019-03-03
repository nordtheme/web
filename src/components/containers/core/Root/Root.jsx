/*
 * Copyright (C) 2018-present Arctic Ice Studio <development@arcticicestudio.com>
 * Copyright (C) 2018-present Sven Greb <development@svengreb.de>
 *
 * Project:    Nord Docs
 * Repository: https://github.com/arcticicestudio/nord-docs
 * License:    MIT
 */

import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import modernNormalize from "styled-modern-normalize";

import theme, {
  globals,
  normalize,
  MODE_BRIGHT_SNOW_FLURRY,
  MODE_DARK_NIGHT_FROST,
  THEME_KEY_MODE
} from "styles/theme";
import { SESSIONSTORAGE_KEY_THEME_MODE } from "config/stores/caches/constants";
import { readSessionCache, writeSessionCache } from "utils";

import "inter-ui/inter.css";
import "typeface-rubik/index.css";
import "typeface-source-code-pro/index.css";

/**
 * A React component that injects global CSS inline styles in page headers.
 *
 * @see https://www.styled-components.com/docs/api#createglobalstyle
 * @since 0.2.0
 */
const GlobalStyle = createGlobalStyle`
  ${modernNormalize};
  ${globals};
  ${normalize};
`;

/**
 * The context provider component for global theme mode consumers.
 *
 * @since 0.2.0
 */
const GlobalThemeModeContext = React.createContext(MODE_BRIGHT_SNOW_FLURRY);

/**
 * The context consumer component for the global theme mode.
 *
 * @since 0.2.0
 */
const GlobalThemeMode = GlobalThemeModeContext.Consumer;

/**
 * The root container with injected global theme mode and CSS styles.
 *
 * @author Arctic Ice Studio <development@arcticicestudio.com>
 * @author Sven Greb <development@svengreb.de>
 * @since 0.1.0
 */
export default class Root extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired
  };

  /**
   * Constructs the compnent with the given `props` and persists the default theme mode if the key is not already stored
   * in the session storage.
   *
   * @method constructor
   * @param {object} props The React component's `props`.
   * @since 0.2.0
   */
  constructor(props) {
    super(props);
    if (!readSessionCache(SESSIONSTORAGE_KEY_THEME_MODE)) {
      writeSessionCache(SESSIONSTORAGE_KEY_THEME_MODE, MODE_BRIGHT_SNOW_FLURRY);
    }
  }

  state = {
    themeMode: readSessionCache(SESSIONSTORAGE_KEY_THEME_MODE) || MODE_BRIGHT_SNOW_FLURRY
  };

  /**
   * Toggles the global theme mode and persists it in the browser's session storage.
   * The function is exposed through the global theme mode context provider component.
   *
   * @method toggleThemeMode
   * @return {void}
   * @since 0.2.0
   */
  toggleThemeMode = () => {
    /* eslint-disable-next-line babel/no-unused-expressions */
    readSessionCache(SESSIONSTORAGE_KEY_THEME_MODE) === MODE_BRIGHT_SNOW_FLURRY
      ? writeSessionCache(SESSIONSTORAGE_KEY_THEME_MODE, MODE_DARK_NIGHT_FROST)
      : writeSessionCache(SESSIONSTORAGE_KEY_THEME_MODE, MODE_BRIGHT_SNOW_FLURRY);
    this.setState(({ themeMode }) => ({
      themeMode: themeMode === MODE_BRIGHT_SNOW_FLURRY ? MODE_DARK_NIGHT_FROST : MODE_BRIGHT_SNOW_FLURRY
    }));
  };

  render() {
    const { children } = this.props;
    const { themeMode } = this.state;

    const themeModeContextValue = {
      toggleThemeMode: this.toggleThemeMode,
      [THEME_KEY_MODE]: themeMode
    };
    const composedTheme = {
      ...themeModeContextValue,
      ...theme
    };

    return (
      <Fragment>
        <GlobalThemeModeContext.Provider value={themeModeContextValue}>
          <GlobalStyle theme={themeModeContextValue} />
          <ThemeProvider theme={composedTheme}>{children}</ThemeProvider>
        </GlobalThemeModeContext.Provider>
      </Fragment>
    );
  }
}

export { GlobalThemeMode };
