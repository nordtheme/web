/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

import React, { PureComponent } from "react";
import axios from "axios";
import { formatDistance, fromUnixTime } from "date-fns";

import { WaveFooter } from "atoms/core/vectors/divider";
import Section, { Content } from "containers/core/Section";
import { ROUTE_COMMUNITY } from "config/routes/mappings";
import { decodeCodeCharacterHtmlEntities, sectionIdFor } from "utils";
import { Reddit, StackOverflow } from "atoms/core/vectors/icons";
import { links, tags } from "data/project";

import { Grid, RedditCard, StackOverflowCard } from "./styled";

const SECTION_ID = sectionIdFor(ROUTE_COMMUNITY, 2);
const stackOverflowTagUrl = `https://stackoverflow.com/questions/tagged/${tags.join("+or+")}`;

/**
 * The component that represents the content section of the community page.
 *
 * The rendered grid will extend to use 2 rows only if at least one card contains fetched data. This prevents the layout problem that one card will be
 * stretched and deformed when there was a error when fetching the data while the other element card renders fetched data. For example while fetching the
 * data from the Reddit API a error about missing CORS headers might occur or the request is blocked by the browser's security features (Firefox Content
 * Blocking).
 * This would result in no data for the component showing the latest Reddit posts "stretching" it down to the size of the other component in the grid that
 * was able to fetch and render data.
 * Therefore the grid will adjust the used rows based on the result of the data fetch requests to ensure a nice layout for both elements even when only one
 * card component renders fetched data.
 * @since 0.7.0
 * @see https://stackoverflow.design/brand/logo
 * @see https://www.redditinc.com/press#publish
 */
export default class SectionContent extends PureComponent {
  state = {
    stackOverflowQuestions: [],
    redditPosts: [],
  };

  async componentDidMount() {
    const [stackOverflowQuestions, redditPosts] = await axios.all([this.fetchStackOverflowQuestions(), this.fetchRedditPosts()]);
    this.setState({ stackOverflowQuestions, redditPosts });
  }

  fetchStackOverflowQuestions = async () => {
    let questions = [];
    try {
      const latestQuestions = await axios.get("https://api.stackexchange.com/2.2/search", {
        params: {
          pagesize: 3,
          order: "desc",
          sort: "creation",
          tagged: tags.join(";"),
          site: "stackoverflow",
        },
      });
      questions = latestQuestions.data.items.map(({ answer_count: answerCount, link, tags: questionTags, title }) => ({
        answerCount,
        link,
        title: decodeCodeCharacterHtmlEntities(title),
        tags: questionTags,
      }));
    } catch (error) {
      console.error("Unexpected problems while fetching content data from Stack Overflow!", error);
    }
    return questions;
  };

  fetchRedditPosts = async () => {
    let posts = [];
    try {
      const latestPosts = await axios.get(`https://www.reddit.com/r/${links.community.reddit.id}/new.json`, {
        params: { limit: 3 },
      });
      posts = latestPosts.data.data.children.map(({ data: { author, created_utc: createdUtc, num_comments: numComments, title, url } }) => ({
        author,
        created: formatDistance(fromUnixTime(createdUtc), Date.now(), { addSuffix: true }),
        numComments,
        title,
        url,
      }));
    } catch (error) {
      console.error("Unexpected problems while fetching content data from Reddit!", error);
    }
    return posts;
  };

  render() {
    const { stackOverflowQuestions, redditPosts } = this.state;
    return (
      <Section id={SECTION_ID} variant="secondary">
        <Content centered>
          <Grid isExtended={stackOverflowQuestions.length || redditPosts.length}>
            <StackOverflowCard
              brandColor="#0095ff"
              logoColor="#ff6801"
              logoComponent={StackOverflow}
              questions={stackOverflowQuestions}
              title="Stack Overflow"
              url={stackOverflowTagUrl}
            >
              Stack Overflow is the largest, most trusted online community for developers to learn and share their knowledge to help solve coding problems,
              develop new skills and build their careers on a wide range of topics in computer programming.
            </StackOverflowCard>
            <RedditCard brandColor="#0079D3" logoColor="#FF4500" logoComponent={Reddit} posts={redditPosts} title="Reddit" url={links.community.reddit.url}>
              Reddit is home to thousands of communities, endless conversation, and authentic human connection where millions of people around the world post,
              vote, chat and comment in communities organized around their interests.
            </RedditCard>
          </Grid>
        </Content>
        <WaveFooter />
      </Section>
    );
  }
}
