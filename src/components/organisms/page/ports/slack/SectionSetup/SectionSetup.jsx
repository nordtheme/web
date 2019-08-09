/*
 * Copyright (C) 2018-present Arctic Ice Studio <development@arcticicestudio.com>
 * Copyright (C) 2018-present Sven Greb <development@svengreb.de>
 *
 * Project:    Nord Docs
 * Repository: https://github.com/arcticicestudio/nord-docs
 * License:    MIT
 */

import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { useClipboard } from "use-clipboard-copy";

import Button from "atoms/core/Button";
import { Clipboard } from "atoms/core/vectors/icons";
import { WaveFooter } from "atoms/core/vectors/divider";
import { Content } from "containers/core/Section";
import FeatureDuo, { Actions, Headline, Subline, Text } from "molecules/page/shared/FeatureDuo";
import { ROUTE_DOCS_PORTS_SLACK, ROUTE_PORTS_SLACK } from "config/routes/mappings";
import { sectionIdFor } from "utils";
import { usePortsMetadata } from "hooks";
import { usePortsAssetsPropTypes } from "hooks/shared/propTypes";

import { ClipboardIcon, ColorValueInput, ColorValueInputBox } from "./styled";
import { Section } from "../../../shared";

const SECTION_ID = sectionIdFor(ROUTE_PORTS_SLACK, 2);

/**
 * GraphQL query that gets executed through the `gatsby-source-graphql` plugin to get the theme color values
 * from the remote GitGub repository object and make it available for other plugins like the JSON or YAML
 * transformers.
 */
const gqlQueryGitHubAPINordSlackColorsFromJSON = graphql`
  {
    github {
      repository(name: "nord-slack", owner: "arcticicestudio") {
        object(expression: "develop:colors.json") {
          ... on GitHub_Blob {
            text
          }
        }
      }
    }
  }
`;

/**
 * The component that represents the setup section for the landing page of the "Nord Slack" port project.
 *
 * @author Arctic Ice Studio <development@arcticicestudio.com>
 * @author Sven Greb <development@svengreb.de>
 * @since 0.21.0
 */
const SectionSetup = () => {
  const portMetadata = usePortsMetadata();
  const {
    github: {
      repository: {
        object: { text }
      }
    }
  } = useStaticQuery(gqlQueryGitHubAPINordSlackColorsFromJSON);
  const clipboard = useClipboard();
  const { gitHubRepositoryUrl } = portMetadata.find(port => port.name === "nord-slack");

  function handleTextInputFocus({ target }) {
    target.select();
  }

  function handleClipboardCopy() {
    clipboard.copy();
  }

  const colorValues = JSON.parse(text).colors.join(",");

  return (
    <Section id={SECTION_ID}>
      <Content centered decorated>
        <FeatureDuo verticalOnly>
          <Text verticalOnly>
            <Headline>Installation in one line of code.</Headline>
            <Subline>
              Install Nord by copying the one-liner and paste it as custom theme in your Slack sidebar configuration.
              <ColorValueInputBox
                aria-label="Copy to clipboard"
                onClick={handleClipboardCopy}
                title="Copy to clipboard"
              >
                <ClipboardIcon outlined svgComponent={Clipboard} />
                <ColorValueInput
                  ref={clipboard.target}
                  onFocus={handleTextInputFocus}
                  readOnly
                  type="text"
                  value={colorValues}
                />
              </ColorValueInputBox>
            </Subline>
            <Actions>
              <Button ghost outlined quiet to={ROUTE_DOCS_PORTS_SLACK} variant="primary">
                Learn More
              </Button>
              <Button ghost href={gitHubRepositoryUrl} outlined quiet variant="primary">
                GitHub
              </Button>
            </Actions>
          </Text>
        </FeatureDuo>
      </Content>
      <WaveFooter />
    </Section>
  );
};

SectionSetup.propTypes = usePortsAssetsPropTypes;

export default SectionSetup;
