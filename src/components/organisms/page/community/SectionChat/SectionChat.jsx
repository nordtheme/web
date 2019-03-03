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
import { Content } from "containers/core/Section";
import { ROUTE_COMMUNITY } from "config/routes/mappings";
import { sectionIdFor } from "utils";
import { Discord, Keybase, Slack, Spectrum } from "atoms/core/vectors/icons";
import { links } from "data/project";

import { Section } from "../../shared";
import { ChatCard, Grid } from "./styled";
import WaveDivider from "./styled/WaveDivider";

const SECTION_ID = sectionIdFor(ROUTE_COMMUNITY, 1);

/**
 * The component that represents the chat channel section of the community page.
 * All logos and colors are based on the official branding guidelines of the respective brand.
 *
 * @author Arctic Ice Studio <development@arcticicestudio.com>
 * @author Sven Greb <development@svengreb.de>
 * @since 0.7.0
 * @see https://slack.com/media-kit
 * @see https://www.redditinc.com/press#publish
 */
const SectionChannelCards = () => (
  <Section gapWidth={1} id={SECTION_ID} variant="primary">
    <Content centered decorated>
      <Grid>
        <ChatCard logoColor="#7b16ff" logoComponent={Spectrum} title="Spectrum" url={links.community.spectrum.url}>
          A simple, powerful real-time chat platform to build, grow, manage and measure any kind of online communities
          by providing a modern, scaling and easy to use cross-device app.
        </ChatCard>
        <ChatCard logoColor="#4c8eff" logoComponent={Keybase} title="Keybase" url={links.community.keybase.url}>
          Keybase is a open source security platform powered by public-key cryptography providing end-to-end encrypted
          chats, file shares, team tools and many more features across all devices.
        </ChatCard>
        <ChatCard logoColor="#36c5f0" logoComponent={Slack} title="Slack">
          Slack is is where work flows &mdash; a cloud-based collaboration hub for communities that provides
          integrations, tools and services to keep teams connected and allows to easily store and share information,
          discussions and important documents in one searchable place to get things done.
        </ChatCard>
        <ChatCard logoColor="#7289DA" logoComponent={Discord} title="Discord">
          Discord is a all-in-one voice, text and video chat for communities mainly focused on gaming and{" "}
          <Link href="https://discordapp.com/open-source">open source software development</Link> that serves as a
          modern, crystal clear and secure communication channel across all devices.
        </ChatCard>
      </Grid>
    </Content>
    <WaveDivider />
  </Section>
);

export default SectionChannelCards;
