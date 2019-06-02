/*
 * Copyright (C) 2018-present Arctic Ice Studio <development@arcticicestudio.com>
 * Copyright (C) 2018-present Sven Greb <development@svengreb.de>
 *
 * Project:    Nord Docs
 * Repository: https://github.com/arcticicestudio/nord-docs
 * License:    MIT
 */

import React from "react";

import Button from "atoms/core/Button";
import Link from "atoms/core/Link";
import { Content } from "containers/core/Section";
import FeatureDuo, { Actions, Headline, Subline, Text, Visualization } from "molecules/page/shared/FeatureDuo";
import { ROUTE_DOCS_PORTS_TMUX_CONFIGURATION, ROUTE_PORTS_TMUX } from "config/routes/mappings";
import { sectionIdFor } from "utils";
import { Code } from "atoms/core/html-elements";
import { Image } from "atoms/core/mdx-elements";
import { usePortsAssetsPropTypes } from "hooks/shared/propTypes";

import { Section } from "../../../shared";
import WaveDivider from "./styled/WaveDivider";

const SECTION_ID = sectionIdFor(ROUTE_PORTS_TMUX, 4);

/**
 * The component that represents the theme configuration section for the landing page of the "Nord tmux" port project.
 *
 * @author Arctic Ice Studio <development@arcticicestudio.com>
 * @author Sven Greb <development@svengreb.de>
 * @since 0.16.0
 */
const SectionConfigurations = ({ assets }) => (
  <Section id={SECTION_ID}>
    <Content centered>
      <FeatureDuo columnRatio={[1, 2]}>
        <Text>
          <Headline>Configure it to fit your needs.</Headline>
          <Subline>
            Theme configurations like{" "}
            <Link to={`${ROUTE_DOCS_PORTS_TMUX_CONFIGURATION}#default-status-bar-content`}>
              <Code>@nord_tmux_show_status_content</Code>
            </Link>
            …
          </Subline>
        </Text>
        <Visualization>
          <Image
            alt="Screenshot showing the tmux status bar without usage of patched font elements"
            dropShadow
            fluid={assets.images["config-no-status-bar-content.png"]}
            rounded
          />
        </Visualization>
      </FeatureDuo>
      <FeatureDuo columnRatio={[2, 1]}>
        <Visualization>
          <Image
            alt="Screenshot showing the tmux status bar without usage of patched font elements"
            dropShadow
            fluid={assets.images["config-no-patched-font.png"]}
            rounded
          >
            <span>The tmux status bar without usage of patched „powerline“ styled font elements.</span>
          </Image>
        </Visualization>
        <Text>
          <Subline>
            …or{" "}
            <Link to={`${ROUTE_DOCS_PORTS_TMUX_CONFIGURATION}#patched-font-characters`}>
              <Code>@nord_tmux_no_patched_font</Code>
            </Link>{" "}
            allow to customize the theme to match your personal preferences.
          </Subline>
          <Actions>
            <Button ghost href={ROUTE_DOCS_PORTS_TMUX_CONFIGURATION} outlined quiet variant="primary">
              Learn More
            </Button>
          </Actions>
        </Text>
      </FeatureDuo>
    </Content>
    <WaveDivider />
  </Section>
);

SectionConfigurations.propTypes = usePortsAssetsPropTypes;

export default SectionConfigurations;
