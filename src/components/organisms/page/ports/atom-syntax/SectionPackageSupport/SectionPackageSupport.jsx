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
import FeatureDuo, { Headline, Subline, Text, Visualization } from "molecules/page/shared/FeatureDuo";
import { ROUTE_PORTS_ATOM_SYNTAX } from "config/routes/mappings";
import { sectionIdFor } from "utils";
import { Video } from "atoms/core/mdx-elements";
import { usePortsAssetsPropTypes } from "hooks/shared/propTypes";

import { Section } from "../../../shared";
import WaveDivider from "./styled/WaveDivider";

const SECTION_ID = sectionIdFor(ROUTE_PORTS_ATOM_SYNTAX, 4);

/**
 * The component that represents the packages support section for the landing page of the "Nord Atom Syntax" port
 * project.
 *
 * @author Arctic Ice Studio <development@arcticicestudio.com>
 * @author Sven Greb <development@svengreb.de>
 * @since 0.19.0
 */
const SectionPackageSupport = ({ assets }) => (
  <Section id={SECTION_ID}>
    <Content centered>
      <FeatureDuo columnRatio={[1, 2]}>
        <Text>
          <Headline>Take your favorite packages with you.</Headline>
          <Subline>The theme supports many popular syntax packages for great highlighting.</Subline>
        </Text>
        <Visualization>
          <Video
            dropShadow
            loop
            poster={assets.videoPosters["package-support-indent-guide-improved.mp4.png"]}
            rounded
            sources={[assets.videos["package-support-indent-guide-improved.mp4"]]}
          >
            <span>
              A <Link href="https://reactjs.org">React</Link> JSX component with the{" "}
              <Link href="https://atom.io/packages/indent-guide-improved">indent-guide-improved</Link> package that
              draws indent guides more correctly and understandably
            </span>
          </Video>
        </Visualization>
      </FeatureDuo>
    </Content>
    <WaveDivider />
  </Section>
);

SectionPackageSupport.propTypes = usePortsAssetsPropTypes;

export default SectionPackageSupport;
