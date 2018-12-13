/*
 * Copyright (C) 2018-present Arctic Ice Studio <development@arcticicestudio.com>
 * Copyright (C) 2018-present Sven Greb <development@svengreb.de>
 *
 * Project:    Nord Docs
 * Repository: https://github.com/arcticicestudio/nord-docs
 * License:    MIT
 */

import React, { Fragment, PureComponent } from "react";
import PropTypes from "prop-types";
import { PoseGroup } from "react-pose";
import { subscribe } from "subscribe-ui-event";
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from "body-scroll-lock";

import { A } from "atoms/core/HTMLElements";
import { Menu } from "atoms/core/vectors/icons";
import { GlobalThemeMode } from "containers/core/Root";
import { ROUTE_ROOT } from "config/routes/mappings";
import navigationItems from "data/components/organisms/core/Header/navigationItems";
import { MODE_BRIGHT_SNOW_FLURRY } from "styles/theme";

import { HEADER_HEIGHT, HEADER_HEIGHT_PINNED } from "./shared/styles";
import {
  ContentBox,
  Header as StyledHeader,
  Logo,
  LogoBannerBox,
  LogoCaption,
  MoonIcon,
  Nav,
  NavLink,
  NavList,
  SlideMenuBox,
  SlideMenuNavLink,
  SlideMenuNavList,
  SlideMenuToggle,
  SunIcon,
  ThemeModeSwitch,
  TopContentPusher,
  SLIDE_MENU_NAV_LINK_CLOSED_POSE,
  SLIDE_MENU_NAV_LINK_INITIAL_POSE,
  SLIDE_MENU_NAV_LINK_OPEN_POSE,
  THEME_MODE_SWITCH_ICON_INITIAL_POSE
} from "./styled";

/**
 * Populates and renders the list of navigation links.
 *
 * @since 0.3.0
 */
const renderNavListItems = navigationItems.map(({ title, url }) => (
  <NavLink key={`${title}-${url}`} to={url}>
    {title}
  </NavLink>
));

/**
 * Populates and renders the list of slide menu navigation links.
 *
 * @since 0.3.0
 */
const renderSlideMenuNavListItems = navigationItems.map(({ title, url }) => (
  <SlideMenuNavLink key={`${title}-${url}`} initialPose={SLIDE_MENU_NAV_LINK_INITIAL_POSE} to={url}>
    {title}
  </SlideMenuNavLink>
));

/**
 * The header component that provides Nord's branding caption and logo, the main navigation and a button to toggle
 * between the availabe global theme modes.
 * The sticky position at the top of the site allows quick access to the navigation while also being inconspicuous, but
 * will change into pinned (collapsed) mode as soon as the user scrolls down. It will switch into unpinned (expanded)
 * mode again when at top of the site.
 * In unpinned mode, the height of the header is larger and the brand caption of the logo will be visible. When
 * switching into pinned mode the height will decrease and the logo caption fades out with a smooth transition
 * animation.
 *
 * @author Arctic Ice Studio <development@arcticicestudio.com>
 * @author Sven Greb <development@svengreb.de>
 * @since 0.3.0
 */
export default class Header extends PureComponent {
  static propTypes = {
    /**
     * The height of the header in pixels.
     * Will be converted to the corresponding REM value.
     */
    height: PropTypes.number,

    /**
     * The height of the header in pixels when in pinned mode.
     * Will be converted to the corresponding REM value.
     */
    heightPinned: PropTypes.number,

    /**
     * The height from the top in pixels where the header will switch to pinned mode.
     */
    pinStart: PropTypes.number
  };

  static defaultProps = {
    height: HEADER_HEIGHT,
    heightPinned: HEADER_HEIGHT_PINNED,
    pinStart: 0
  };

  state = {
    /**
     * Indicates if the header is in "pinned" mode.
     */
    isPinned: false,

    /**
     * Indicates if the slide menu is opened.
     */
    isSlideMenuOpen: false
  };

  componentDidMount() {
    this.uiSubscribers.push(subscribe("scroll", this.handleScroll, { useRAF: true, enableScrollInfo: true }));

    /* Get the slide menu element to persist scrolling when opened. */
    this.slideMenuElement = this.slideMenuRef.current;
  }

  static getDerivedStateFromProps(props, state) {
    if (typeof window !== "undefined") {
      /*
       * The default "scroll-into-view" behavior of Firefox in combination with Gatsby's builtin scroll position
       * handling causes the header to expand two times when switching from a route where the header was pinned
       * (position was scrolled) to another route where the position is at the top, chaging the header to the unpinned
       * state. As soon as the new route has been loaded the header gets mounted in unpinned mode, but due to the
       * previously scrolled site position immediately changed to pinned mode and then directly back to unpinned mode
       * again. This state changes resulting in a short, but clearly visible visual glitch.
       * The behavior is currently only reproducible for Firefox. Other tested desktop browsers like Google Chrome,
       * Chromium and Safari don't use the "scroll-into-view" technique and instead showing the correct header state
       * immediately.
       *
       * Checking for the actual scroll position and current pinning mode allows to prevent the one unnecessary state
       * change by mutating the state before the component gets commited. Note that this change is has also a posiive
       * side effect for other tested browsers without the problem: When the new routes gets loaded the header will now
       * be animated with the visual expand effect instead of just being rendered instantly.
       *
       */
      if (window.scrollY > props.pinStart && state.isPinned === false) {
        return { isPinned: true };
      }
    }
    return null;
  }

  componentWillUnmount() {
    this.uiSubscribers.map(sub => sub.unsubscribe());

    /* Ensure to release all scroll-locked elements when swithcing routes. */
    clearAllBodyScrollLocks();
  }

  slideMenuElement = null;

  slideMenuRef = React.createRef();

  uiSubscribers = [];

  /**
   * Toggles the slide menu.
   *
   * @method handleSlideMenuToggle
   * @return {void}
   */
  handleSlideMenuToggle = () => {
    const { isSlideMenuOpen } = this.state;
    if (!isSlideMenuOpen) {
      disableBodyScroll(this.slideMenuElement);
    } else {
      enableBodyScroll(this.slideMenuElement);
    }
    this.setState({ isSlideMenuOpen: !isSlideMenuOpen });
  };

  handleScroll = (event, payload) => {
    const currentScrollY = payload.scroll.top;
    const { pinStart } = this.props;
    const { isPinned } = this.state;

    if (!isPinned && currentScrollY > pinStart) {
      this.setState({ isPinned: true });
    } else if (currentScrollY <= pinStart) {
      this.setState({ isPinned: false });
    }
  };

  render() {
    const { height, heightPinned } = this.props;
    const { isSlideMenuOpen, isPinned } = this.state;

    return (
      <Fragment>
        <TopContentPusher height={height} />
        <StyledHeader height={height} heightPinned={heightPinned} isPinned={isPinned} isSlideMenuOpen={isSlideMenuOpen}>
          <ContentBox centered>
            <LogoBannerBox>
              <A to={ROUTE_ROOT}>
                <Logo size={height} />
              </A>
              <LogoCaption isPinned={isPinned}>Nord</LogoCaption>
            </LogoBannerBox>
            <Nav>
              <NavList>{renderNavListItems}</NavList>
              <SlideMenuToggle onClick={this.handleSlideMenuToggle}>
                <Menu />
              </SlideMenuToggle>
              <GlobalThemeMode>
                {({ toggleThemeMode, mode }) => (
                  <ThemeModeSwitch onClick={toggleThemeMode}>
                    <PoseGroup preEnterPose={THEME_MODE_SWITCH_ICON_INITIAL_POSE}>
                      {mode === MODE_BRIGHT_SNOW_FLURRY ? (
                        <MoonIcon key="moon" />
                      ) : (
                        <SunIcon key="sun" reverseEnterDirection />
                      )}
                    </PoseGroup>
                  </ThemeModeSwitch>
                )}
              </GlobalThemeMode>
            </Nav>
          </ContentBox>
          <SlideMenuBox
            ref={this.slideMenuElement}
            isOpen={isSlideMenuOpen}
            isPinned={isPinned}
            pose={isSlideMenuOpen ? SLIDE_MENU_NAV_LINK_OPEN_POSE : SLIDE_MENU_NAV_LINK_CLOSED_POSE}
          >
            <SlideMenuNavList>{renderSlideMenuNavListItems}</SlideMenuNavList>
          </SlideMenuBox>
        </StyledHeader>
      </Fragment>
    );
  }
}
