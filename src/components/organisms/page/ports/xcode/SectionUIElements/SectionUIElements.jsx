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
import { Image, Video } from "atoms/core/mdx-elements";
import { Content } from "containers/core/Section";
import FeatureDuo, { Headline, Subline, Text, Visualization } from "molecules/page/shared/FeatureDuo";
import { ROUTE_PORTS_XCODE } from "config/routes/mappings";
import { sectionIdFor } from "utils";
import { usePortsAssetsPropTypes } from "hooks/shared/propTypes";

import { Section } from "../../../shared";
import WaveDivider from "./styled/WaveDivider";

const SECTION_ID = sectionIdFor(ROUTE_PORTS_XCODE, 2);

/**
 * The component that represents the UI elements section for the landing page of the "Nord Xcode" port project.
 *
 * @author Arctic Ice Studio <development@arcticicestudio.com>
 * @author Sven Greb <development@svengreb.de>
 * @since 0.22.0
 */
const SectionUIElements = ({ assets }) => (
  <Section id={SECTION_ID}>
    <Content centered>
      <FeatureDuo columnRatio={[1, 2]}>
        <Text>
          <Headline>Nord as color set.</Headline>
          <Subline>
            Use the{" "}
            <Link
              href="https://developer.apple.com/library/archive/documentation/Xcode/Reference/xcode_ref-Asset_Catalog_Format"
              target="_blank"
            >
              asset catalog{" "}
            </Link>{" "}
            color set in the{" "}
            <Link href="https://developer.apple.com/xcode/interface-builder" target="_blank">
              Interface Builder
            </Link>{" "}
            and programmatically.
          </Subline>
        </Text>
        <Visualization>
          <Image
            alt="Screenshot showing the Nord color set in the Xcode asset catalog"
            dropShadow
            fluid={assets.images["ui-asset_catalog.png"]}
            rounded
          >
            <span>
              The Nord color set in the Xcode{" "}
              <Link
                href="https://developer.apple.com/library/archive/documentation/Xcode/Reference/xcode_ref-Asset_Catalog_Format"
                target="_blank"
              >
                asset catalog
              </Link>
              .
            </span>
          </Image>
        </Visualization>
      </FeatureDuo>
      <FeatureDuo columnRatio={[2, 1]}>
        <Visualization>
          <Video
            dropShadow
            loop
            poster={assets.videoPosters["ui-asset_catalog.mp4.png"]}
            rounded
            sources={[assets.videos["ui-asset_catalog.mp4"]]}
          >
            <span>
              The Xcode{" "}
              <Link
                href="https://developer.apple.com/library/archive/documentation/Xcode/Reference/xcode_ref-Asset_Catalog_Format"
                target="_blank"
              >
                asset catalog
              </Link>
              .
            </span>
          </Video>
        </Visualization>
        <Text>
          <Subline>All Nord colors right at your hand.</Subline>
        </Text>
      </FeatureDuo>
      <FeatureDuo columnRatio={[1, 2]}>
        <Text>
          <Headline>Build beautiful UI elements with Nord.</Headline>
          <Subline>
            Create UI elements in the Xcode{" "}
            <Link href="https://developer.apple.com/xcode/interface-builder" target="_blank">
              Interface Builder
            </Link>{" "}
            using Nord colors.
          </Subline>
        </Text>
        <Visualization>
          <Image
            alt="Screenshot showing the Xcode interface builder with UI elements styled with Nord"
            dropShadow
            fluid={assets.images["ui-interface_builder.png"]}
            rounded
          >
            <span>
              The Xcode{" "}
              <Link href="https://developer.apple.com/xcode/interface-builder" target="_blank">
                Interface Builder
              </Link>{" "}
              with UI elements styled with Nord.
            </span>
          </Image>
        </Visualization>
      </FeatureDuo>
    </Content>
    <WaveDivider />
  </Section>
);

SectionUIElements.propTypes = usePortsAssetsPropTypes;

export default SectionUIElements;
