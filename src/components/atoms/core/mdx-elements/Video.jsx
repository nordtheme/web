/*
 * Copyright (C) 2018-present Arctic Ice Studio <development@arcticicestudio.com>
 * Copyright (C) 2018-present Sven Greb <development@svengreb.de>
 *
 * Project:    Nord Docs
 * Repository: https://github.com/arcticicestudio/nord-docs
 * License:    MIT
 */

import React, { useRef, useState } from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

import { Figure } from "atoms/core/html-elements";
import { contentMdxImageFluidPropTypes, contentMdxMediaFilePropTypes } from "data/graphql/fragmentPropTypes";
import { mixinDropShadowAmbientLight, mixinDropShadowDirectLight, transitionThemedModeSwitch } from "styles/shared";

import FigCaption from "./shared/FigCaption";
import Image from "./Image";

const Vid = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: block;
  max-width: ${({ fillSize }) => fillSize}%;
  margin: ${({ hasCaption }) => `0 auto ${hasCaption ? "2em" : "6em"} auto`};
  border-radius: ${({ rounded }) => rounded && "8px"};
  box-shadow: ${({ dropShadow }) =>
    dropShadow &&
    css`
      ${mixinDropShadowDirectLight()}, ${mixinDropShadowAmbientLight()}
    `};
`;

const Container = styled(Figure)`
  position: relative;
`;

const PosterImage = styled(Image)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: ${({ videoLoaded }) => (videoLoaded ? 0 : 1)};
  transition: ${transitionThemedModeSwitch("opacity", 0, "ease")};
`;

/**
 * An video wrapped in a `<figure>` element with an optional caption.
 * Note that the video is muted and blocked for autoplay (deconstructed `autoPlay` prop) by default to prevent problems
 * with browser-specific autoplay blocking mechanisms. The autoplay logic is handled by the component to allow to make
 * use of "Gatsby Sharp" for a responsive poster image.
 *
 * @author Arctic Ice Studio <development@arcticicestudio.com>
 * @author Sven Greb <development@svengreb.de>
 * @since 0.10.0
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video
 * @see https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/canplaythrough_event
 * @see https://developers.google.com/web/updates/2016/03/play-returns-promise
 */
const Video = ({ autoPlay, children, dropShadow, fillSize, poster, rounded, sources, ...passProps }) => {
  const videoRef = useRef(null);
  const [videoLoaded, setVideoLoaded] = useState(false);

  function playVideo() {
    return videoRef.current.play();
  }

  function handleOnVideoLoaded() {
    setVideoLoaded(true);
    playVideo();
  }

  return (
    <Container>
      <Vid
        ref={videoRef}
        dropShadow={dropShadow}
        fillSize={fillSize}
        hasCaption={!!children}
        muted
        onCanPlayThrough={handleOnVideoLoaded}
        onTouchStart={playVideo}
        playsInline
        rounded={rounded}
        {...passProps}
      >
        {sources.map(src => (
          <source key={src.publicURL} src={src?.publicURL} type={`video/${src.extension}`} />
        ))}
      </Vid>
      <PosterImage
        dropShadow={dropShadow}
        fillSize={fillSize}
        fluid={poster}
        rounded={rounded}
        videoLoaded={videoLoaded}
      />
      {children && <FigCaption>{children}</FigCaption>}
    </Container>
  );
};

Video.propTypes = {
  autoPlay: PropTypes.bool,
  children: PropTypes.node,
  dropShadow: PropTypes.bool,
  fillSize: PropTypes.number,
  poster: PropTypes.shape({ ...contentMdxImageFluidPropTypes }).isRequired,
  rounded: PropTypes.bool,
  sources: PropTypes.arrayOf(PropTypes.shape({ ...contentMdxMediaFilePropTypes })).isRequired
};

Video.defaultProps = {
  autoPlay: false,
  children: null,
  dropShadow: false,
  fillSize: 100,
  rounded: false
};

export default Video;
