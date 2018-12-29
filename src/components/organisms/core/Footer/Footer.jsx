/*
 * Copyright (C) 2018-present Arctic Ice Studio <development@arcticicestudio.com>
 * Copyright (C) 2018-present Sven Greb <development@svengreb.de>
 *
 * Project:    Nord Docs
 * Repository: https://github.com/arcticicestudio/nord-docs
 * License:    MIT
 */

import React, { Fragment } from "react";
import { css } from "styled-components";
/* eslint-disable-next-line import/no-extraneous-dependencies */
import { Match } from "@reach/router";
import { StaticQuery, graphql } from "gatsby";

import Link from "atoms/core/Link";
import { A } from "atoms/core/HTMLElements";
import { GitHub, Heart, Keybase, Reddit, Slack, Spectrum, StackOverflow, Twitter } from "atoms/core/vectors/icons";
import { ArcticIceStudio } from "atoms/core/vectors/logos";
import Section, { Content } from "containers/core/Section";
import { isRoutePartiallyMatch } from "utils";
import sitemapCategories from "data/components/organisms/core/Footer/sitemapCategories";
import { links as projectLinks } from "data/project";
import {
  COPYRIGHT_YEAR,
  GIT_BRANCH,
  GIT_COMMITHASH,
  GIT_COMMITS_AHEAD,
  VERSION,
  VERSION_CHANNEL,
  VERSION_STABILITY_STATUS
} from "config/project/constants";

import { heartIconStyles, organizationBrandLogoHeight, socialNetworkingIconStyles } from "./styles";
import {
  Category,
  Copyright,
  Grid,
  Metadata,
  OrganizationBrand,
  OrganizationBrandCaption,
  Sitemap,
  SitemapCategory,
  SitemapLink,
  SitemapList,
  SocialNetworking
} from "./styled";

/**
 * Renders the sitemap category links.
 *
 * @author Arctic Ice Studio <development@arcticicestudio.com>
 * @author Sven Greb <development@svengreb.de>
 * @since 0.5.0
 */
const renderSitemapCategories = sitemapCategories.map(({ name, url = "", links }, idx) => (
  <Sitemap key={`${name}-${url}`}>
    <SitemapCategory key={name}>
      <Match path={url}>
        {({ location, match }) => (
          <Category
            isActiveRouteMatch={
              /* The check for an empty path is required since empty strings as path would always match. */
              (!!match && match?.path !== "") || isRoutePartiallyMatch(location.pathname, url)
            }
          >
            {!url ? <Fragment>{name}</Fragment> : <A to={url}>{name}</A>}
          </Category>
        )}
      </Match>
    </SitemapCategory>
    <SitemapList column={idx + 2}>
      {links.map(({ title: linkTitle, url: linkURL }) => (
        <SitemapLink key={`${linkTitle}-${linkURL}`} to={linkURL}>
          {linkTitle}
        </SitemapLink>
      ))}
    </SitemapList>
  </Sitemap>
));

/**
 * The essential footer component that provides the Arctic Ice Studio's organization branding logo and caption,
 * networking & social media links as well as the copyright paragraph including version information.
 *
 * @author Arctic Ice Studio <development@arcticicestudio.com>
 * @author Sven Greb <development@svengreb.de>
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/footer
 * @since 0.5.0
 */
const Footer = () => (
  <StaticQuery
    query={graphql`
      {
        site {
          buildTime(formatString: "YYYY-MM-DDTHH:MM:ssZZ")
        }
      }
    `}
    /* eslint-disable react/jsx-no-bind */
    render={data => (
      <Section as="footer" variant="primary">
        <Content centered>
          <Grid categoryCount={sitemapCategories.length}>
            <Metadata categoryCount={sitemapCategories.length}>
              <OrganizationBrand>
                <ArcticIceStudio
                  css={css`
                    height: ${organizationBrandLogoHeight};
                  `}
                />
                <OrganizationBrandCaption>Arctic Ice Studio</OrganizationBrandCaption>
              </OrganizationBrand>
              <div>
                <SocialNetworking>
                  <A href={projectLinks.organization.social.github.url}>
                    <GitHub
                      css={css`
                        ${socialNetworkingIconStyles};
                      `}
                    />
                  </A>
                  <A href={projectLinks.organization.social.twitter.url}>
                    <Twitter
                      css={css`
                        ${socialNetworkingIconStyles};
                      `}
                    />
                  </A>
                  <A href={projectLinks.organization.social.reddit.url}>
                    <Reddit
                      css={css`
                        ${socialNetworkingIconStyles};
                      `}
                    />
                  </A>
                  <A href={projectLinks.organization.social.spectrum.url}>
                    <Spectrum
                      css={css`
                        ${socialNetworkingIconStyles};
                      `}
                    />
                  </A>
                  <A href={projectLinks.organization.social.keybase.url}>
                    <Keybase
                      css={css`
                        ${socialNetworkingIconStyles};
                      `}
                    />
                  </A>
                  <A href={projectLinks.organization.social.slack.url}>
                    <Slack
                      css={css`
                        ${socialNetworkingIconStyles};
                      `}
                    />
                  </A>
                  <A href={projectLinks.organization.social.stackoverflow.url}>
                    <StackOverflow
                      css={css`
                        ${socialNetworkingIconStyles};
                      `}
                    />
                  </A>
                </SocialNetworking>
                <Copyright categoryCount={sitemapCategories.length}>
                  <div>
                    &copy; 2016-
                    {COPYRIGHT_YEAR} <Link href={projectLinks.organization.url}>Arctic Ice Studio</Link> &amp;{" "}
                    <Link href="https://svengreb.de">Sven Greb</Link>
                  </div>
                  <div>
                    Made with{" "}
                    <Heart
                      css={css`
                        ${heartIconStyles};
                      `}
                    />{" "}
                    in Germany
                  </div>
                  <div>
                    <span
                      data-buildtime={data.site.buildTime}
                      data-git-branch={GIT_BRANCH}
                      data-git-commithash={GIT_COMMITHASH}
                      data-git-commits-ahead={GIT_COMMITS_AHEAD}
                      data-version-channel={VERSION_CHANNEL}
                      data-version-stability-status={VERSION_STABILITY_STATUS}
                    >
                      {VERSION}
                    </span>
                  </div>
                </Copyright>
              </div>
            </Metadata>
            {renderSitemapCategories}
          </Grid>
        </Content>
      </Section>
    )}
  />
  /* eslint-enable react/jsx-no-bind */
);

export default Footer;
