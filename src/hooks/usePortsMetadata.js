/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

import { useMemo } from "react";
import { graphql, useStaticQuery } from "gatsby";

import projectPorts from "data/ports";
import { ROUTE_PORTS } from "config/routes/mappings";

/**
 * GraphQL query for GitHub repository data of all port projects using GitHub's advanced search syntax.
 * This query gets executed through the `gatsby-source-graphql` Gatsby plugin that stitches remote schemas together by adding a type that wraps the remote
 * schema Query type and putting it under field of Gatsby GraphQL Query.
 */
const gqlQueryPortsGitHubRepositoriesSearchAllByPrefixedName = graphql`
  {
    github {
      search(query: "-repo:nordtheme/.github -repo:nordtheme/assets -repo:nordtheme/nord org:nordtheme sort:stars-desc", type: REPOSITORY, first: 100) {
        repositoryCount
        edges {
          node {
            ... on GitHub_Repository {
              id
              name
              releases(last: 1) {
                edges {
                  node {
                    name
                    url
                  }
                }
              }
              stargazers {
                totalCount
              }
              url
            }
          }
        }
      }
    }
  }
`;

/**
 * A hook to fetch repository metadata from GitHub's GraphQL API that'll be merged with the project's static port metadata.
 *
 * @method usePortsMetadata
 * @param {string} idProperty The name of the property the two to be merged metadata objects should be identified by.
 * @return {Array<Object>} The fetched GitHub API metadata merged with the project's static port metadata.
 * @since 0.9.0
 * @see https://docs.github.com/en/search-github/getting-started-with-searching-on-github/understanding-the-search-syntax#exclude-certain-results
 * @see https://docs.github.com/en/search-github/getting-started-with-searching-on-github/sorting-search-results
 * @see https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-source-graphql
 * @see https://www.gatsbyjs.com/docs/graphql
 * @see https://graphql.org
 */
export default function usePortsMetadata(idProperty = "name") {
  const gitHubApi = useStaticQuery(gqlQueryPortsGitHubRepositoriesSearchAllByPrefixedName);

  /**
   * The computed array of objects that gets memoized since the received GitHub API data won't change (static query).
   * @see https://react.dev/reference/react/useMemo
   */
  const mergedMetadata = useMemo(() => {
    const merged = projectPorts.map((port) => {
      const gh = gitHubApi.github.search.edges.find((ghRepo) => ghRepo.node[idProperty] === port[idProperty]);
      const { releases, stargazers, url, ...ghRepoData } = gh.node;
      return {
        gitHubRepositoryUrl: url,
        stargazers: { count: stargazers.totalCount, url: `${url}/stargazers` },
        releaseLatest: releases.edges[0]?.node,
        url: `${ROUTE_PORTS}/${gh.node.name}`,
        ...ghRepoData,
        ...port,
      };
    });
    return merged.sort((md1, md2) => md1.stargazers.count < md2.stargazers.count);
  }, [gitHubApi.github.search.edges, idProperty]);

  return mergedMetadata;
}
