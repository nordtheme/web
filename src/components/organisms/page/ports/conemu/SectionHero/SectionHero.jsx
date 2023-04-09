/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

import React from "react";
import { css } from "styled-components";

import { WaveFooter } from "atoms/core/vectors/divider";
import { P } from "atoms/core/html-elements";
import Link from "atoms/core/Link";
import Section, { Content } from "containers/core/Section";
import EmptyState from "molecules/core/EmptyState";
import { usePortsMetadata } from "hooks";

import { emptyStateIllustrationStyles } from "../../../shared/styles";

/**
 * The component that represents the hero section for the landing page of the "Nord ConEmu" port project.
 * @since 0.9.0
 */
export default function SectionHero() {
  const portMetadata = usePortsMetadata();
  const { gitHubRepositoryUrl } = portMetadata.find((port) => port.name === "conemu");

  return (
    <Section>
      <Content centered>
        <EmptyState
          headline="Oh, there's nothing here yet"
          illustrationStyles={emptyStateIllustrationStyles}
          illustrationVariant="iglooHemisphere"
          subline="Please check back later, we're working hard on this page!"
        />
        <P
          css={css`
            text-align: center;
          `}
        >
          In the meantime, please see the official{" "}
          <Link href={gitHubRepositoryUrl} target="_blank" variant="minimal">
            repository on GitHub
          </Link>{" "}
          for information about Nord ConEmu.
        </P>
      </Content>
      <WaveFooter />
    </Section>
  );
}
