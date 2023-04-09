/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

import React from "react";

import Link from "atoms/core/Link";
import { Content } from "containers/core/Section";
import FeatureDuo, { Headline, Subline, Text, Visualization } from "molecules/page/shared/FeatureDuo";
import { ROUTE_PORTS_DIRCOLORS } from "config/routes/mappings";
import { sectionIdFor } from "utils";
import { Image } from "atoms/core/mdx-elements";
import { usePortsAssetsPropTypes } from "hooks/shared/propTypes";

import { Section } from "../../../shared";
import WaveDivider from "./styled/WaveDivider";

const SECTION_ID = sectionIdFor(ROUTE_PORTS_DIRCOLORS, 1);

/**
 * The component that represents the introduction section for the landing page of the "Nord dircolors" port project.
 * @since 0.18.0
 */
const SectionIntroduction = ({ assets }) => (
  <Section id={SECTION_ID} variant="secondary">
    <Content centered>
      <FeatureDuo columnRatio={[1, 2]}>
        <Text>
          <Headline>Beautiful highlighting for all your bits and bytes.</Headline>
          <Subline>Support for a wide range of data and node types — From symbolic links, executables up to file system permissions.</Subline>
        </Text>
        <Visualization>
          <Image alt="Screenshot showing different link types like symbolic and hard links" dropShadow fluid={assets.images["links.png"]} rounded>
            <span>
              Different link types like <Link href="https://en.wikipedia.org/wiki/Symbolic_link">symbolic</Link> and{" "}
              <Link href="https://en.wikipedia.org/wiki/Hard_link">hard</Link> links.
            </span>
          </Image>
        </Visualization>
      </FeatureDuo>
      <FeatureDuo columnRatio={[2, 1]}>
        <Visualization>
          <Image alt="Screenshot showing directories with different file system permissions" dropShadow fluid={assets.images["permissions.png"]} rounded>
            <span>
              Directories with different <Link href="https://en.wikipedia.org/wiki/File_system_permissions">file system permissions</Link>.
            </span>
          </Image>
        </Visualization>
        <Text>
          <Subline>
            Styles for different <Link href="https://en.wikipedia.org/wiki/File_system_permissions">file system permissions</Link>.
          </Subline>
        </Text>
      </FeatureDuo>
      <FeatureDuo columnRatio={[1, 2]}>
        <Text>
          <Subline>
            Various <Link href="https://en.wikipedia.org/wiki/Unix_file_types">Unix file types</Link> like{" "}
            <Link href="https://en.wikipedia.org/wiki/Device_file">device files</Link> and{" "}
            <Link href="https://en.wikipedia.org/wiki/Unix_domain_socket">domain sockets</Link>.
          </Subline>
        </Text>
        <Visualization>
          <Image alt="Screenshot showing various Unix file types" dropShadow fluid={assets.images["blocks-and-sockets.png"]} rounded />
        </Visualization>
      </FeatureDuo>
      <FeatureDuo columnRatio={[2, 1]}>
        <Visualization>
          <Image alt="Screenshot showing files with different capabilities." dropShadow fluid={assets.images["capabilities.png"]} rounded />
        </Visualization>
        <Text>
          <Subline>
            <Link href="https://en.wikipedia.org/wiki/Setuid">Capabilities</Link> are also styled to be more prominent.
          </Subline>
        </Text>
      </FeatureDuo>
      <FeatureDuo columnRatio={[1, 2]}>
        <Text>
          <Subline>
            Recognize <Link href="https://en.wikipedia.org/wiki/Executable">executables</Link> at a glance.
          </Subline>
        </Text>
        <Visualization>
          <Image alt="Screenshot showing executable files" dropShadow fluid={assets.images["executables.png"]} rounded />
        </Visualization>
      </FeatureDuo>
      <FeatureDuo columnRatio={[2, 1]}>
        <Visualization>
          <Image alt="Screenshot showing file extensions for multimedia files" dropShadow fluid={assets.images["extension-pattern-media.png"]} rounded />
        </Visualization>
        <Text>
          <Subline>Support for many file extensions like common multimedia files…</Subline>
        </Text>
      </FeatureDuo>
      <FeatureDuo columnRatio={[1, 2]}>
        <Text>
          <Subline>…and file ignore pattern.</Subline>
        </Text>
        <Visualization>
          <Image alt="Screenshot showing ignore pattern files" dropShadow fluid={assets.images["extension-pattern-ignore.png"]} rounded />
        </Visualization>
      </FeatureDuo>
    </Content>
    <WaveDivider />
  </Section>
);

SectionIntroduction.propTypes = usePortsAssetsPropTypes;

export default SectionIntroduction;
