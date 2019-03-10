<p align="center"><a href="https://develop.nordtheme.com"><img src="https://raw.githubusercontent.com/arcticicestudio/nord-docs/develop/assets/repository-hero.svg?sanitize=true"/></a></p>

<p align="center"><a href="https://github.com/arcticicestudio/nord-docs/releases/latest"><img src="https://img.shields.io/github/release/arcticicestudio/nord-docs.svg?style=flat-square&label=Release&logo=github&logoColor=eceff4&colorA=4c566a&colorB=88c0d0"/></a></p>

<p align="center"><a href="https://nordtheme.com"><img src="https://img.shields.io/badge/Deployment-production-88c0d0.svg?style=flat-square&logoColor=eceff4&colorA=4c566a&colorB=88c0d0&logo=netlify"/></a> <a href="https://develop.nordtheme.com"><img src="https://img.shields.io/badge/Deployment-development-88c0d0.svg?style=flat-square&logoColor=eceff4&colorA=4c566a&colorB=88c0d0&logo=netlify"/></a></p>

<p align="center">Changelog for the official <a href="https://github.com/arcticicestudio/nord" alt="Nord">Nord</a> website and documentation</p>

<!-- lint disable no-duplicate-headings -->

# 0.10.0

![Release Date: 2019-03-10](https://img.shields.io/badge/Release_Date-2019--03--10-88c0d0.svg?style=flat-square&colorA=4c566a) [![Project Board](https://img.shields.io/badge/Project_Board-0.10.0-88c0d0.svg?style=flat-square&colorA=4c566a&logo=github&logoColor=eceff4)](https://github.com/arcticicestudio/nord-docs/projects/12) [![Milestone](https://img.shields.io/badge/Milestone-0.10.0-88c0d0.svg?style=flat-square&colorA=4c566a&logo=github&logoColor=eceff4)](https://github.com/arcticicestudio/nord-docs/milestone/10)

<p align="center"><img src="https://raw.githubusercontent.com/arcticicestudio/nord-docs/master/src/assets/images/metadata-banner.svg?sanitize=true" width="60%"/></p>

<p align="center"><strong>Initial website launch ahead!</strong></p>

This version finally marks the last release before the long awaited initial website launch. It mainly focused on the [MDX integration for blog posts and docs pages][gh-129] to finish the last remaining base routes in order to start the migration of Nord's documentation and poject asset content.

I'm really hyped and happy to announce this great milestone. It's been a long time, but finally all essential parts are done and it is ready to see the light of the production environment.

More details and information can also be found in the [tweet thread of the initial website announcement][tw-arcticicestudio-announce-initial-launch].

## Features

<p align="center"><img src="https://user-images.githubusercontent.com/7836623/48676311-39475300-eb65-11e8-9654-16c24c1c9a94.png" width="12%"/></p>

The following issues are related to the [“Components”][gh-63] and [“Responsive Web”][gh-52] design concepts to adjust the rendered content based on the available width and provide an optimal UX on smaller viewports.

**MDX Integration for docs and blog pages** — #129 ⇄ #130 (⊶ 05d32115)
↠ Integrated [MDX][] with [gh-gatsby-mdx] including the implementation of the logic, layout and style for blog posts and docs pages (`/docs` and `/blog` routes).

### MDX

MDX is used to handle the actual content of the documentation and blog posts.
Gatsby allows to use Markdown for content that comes with the nice side effect that the already existing documentations can simply be adapted and reused, but unfortunately it is limited to it's reduced and simplified syntax.

To also use the great power of React for content and not only layout and design this project makes use of the [MDX specification][gh-mdx-spec], a new language and abstract syntax tree definition.

> In order to ensure a vibrant ecosystem and community, tooling needs to exist for formatting, linting, and plugins. This tooling requires a foundational specification and abstract syntax tree so that parsing is properly handled before transforming to JSX/Hyperscript/React/etc and potentially leveraging existing plugin ecosystems.

We're using the official implementation, the [fully-featured MDX parser, loader and JSX renderer][mdx] together with the great Gatsby plugin [gh-gatsby-mdx][] to allow to seamlessly use JSX in Markdown documents by importing components and export metadata or any other ECMAScript compliant data structures like _frontmatter_.

> - 💻 **Everything is a component**: Use existing components inside your MDX and import other MDX files as plain components.
> - 🔧 **Customizable**: Decide which component is rendered for each Markdown element ({ h1: MyHeading }).
> - 📚 **Markdown-based**: The simplicity and elegance of Markdown remains, you interleave JSX only when you want to.
> - 🔥 **Blazingly blazing fast**: MDX has no runtime, all compilation occurs during the build stage.

To integrate MDX Gatsby's [`onCreateNode`][gatsby-docs-api-node-ocn] and [`createPages`][gatsby-docs-api-node-cps] APIs are implemented to handle the generation of the GraphQL MDX nodes and the subsequent automated creation of the docs pages and blog posts.

More details are provided by the [official MDX][mdx] and [gh-gatsby-mdx][] websites that include documentations to get started, usage examples and advanced configuration and customization information.

### Image Processing

To get the [best performance and quality for images][gatsby-docs-images] Gatsby's awesome support for the [high performance Node.js image processing library “Sharp“][gh-lovell/sharp] is used through [`gatsby-plugin-sharp`][gh-gatsby-p-sharp], [`gatsby-transformer-sharp`][gh-gatsby-t-sharp] and [gatsby-image][gh-gatsby-image].

To automatically process all images the transformer provides GraphQL query fragments like `GatsbyImageSharpFluid`. They are used within custom fragments that have been implemented to fit the project structure.

### Custom Content Components

In order to create great documentations and blog posts with interactive elements a new `mdx-elements` atom core package was created that initially includes some custom React components that can be imported and placed in MDX based content:

- `Image` — An Gatsby image that extends `GatsbyImage` and is wrapped in a `<figure>` element with an optional caption.
- `Video` — An `<video>` element that uses the `Image` component to render a `poster` with Gatsby's image rendering mechanism while the media file is being loaded to prevent layout shifting. It is also wrapped in a `<figure>` element with an optional caption.
- `ShinkedWidth` — An container component that shrinks the maxiumum width for a better visual style and more readable text.

<p align="center"><img src="https://user-images.githubusercontent.com/7836623/54077408-019d1c00-42b8-11e9-928a-27e580cd9fc5.gif" /></p>

To reduce the requirement of imports and "logical Markdown" almost all HTML elements supported by the official Markdown as well as the [GitHub Flavored Markdown Specification][gfm] the [`MDXProvider`][mdx-docs-provider] component is used to map the project's base components to their specific HTML elements.

### Docs Pages

The design of docs pages imitate a paper sheet where the overall styles using a darker background so that the white paper stands out for a clear and sharp content visualization.

### Blog Posts

The last remaining main page is `/blog` which presents an overview of Nord's blog posts in a three-column grid of card components sorted descending by their publish date.

<p align="center"><img src="https://user-images.githubusercontent.com/7836623/54077409-019d1c00-42b8-11e9-916f-c26138947d4e.jpg" /></p>

<p align="center"><img src="https://user-images.githubusercontent.com/7836623/54077410-019d1c00-42b8-11e9-94e3-7ef5466e9f4b.jpg" /></p>

Each card consists of an cover image together with the title of the post. The latest post spans over two columns at the top for a nice visual structure and better recognizability.
While a one-column card uses a cover image the latest post uses a _banner_ that will either be the same image with a larger width, a variant of it or a completly different one.

<p align="center"><img src="https://user-images.githubusercontent.com/7836623/54077411-019d1c00-42b8-11e9-9968-ba1a3a6e4666.gif" /></p>

A blog post itself makes use of the MDX features and the custom MDX components mentioned in the paragraph above.
To simplify the usage of the _cover_ and _banner_ image they are be processed with Gatsby's [`onCreateNode`][gatsby-docs-api-node-ocn] API in combination with [Gatsby's `mapping` configuration feature][gatsby-docs-conf-mapping]. This allows to map the paths of images to a `File` node that is then handled by the [Gatsby image processing plugin workflow][gatsby-docs-images] also documented in the [Image Processing](#image-processing) section above.

Another required node is the `heroImage` field that queries for a `hero.(png|jpg|jpeg)` image that is used as the hero of a blog post.
To also allow the usage of videos in blog posts or even as header a custom `Video` the custom MDX component has been implemented including the optional `heroVideo` and `heroVideoPoster` GraphQL node fields.

All together that results in the following required and optional images/videos mapped to specific node fields with **reserved file names per blog post directory** for simple usage via GraphQL queries:

- `bannerImage` ↹ `banner.(png|jpg|jpeg)` — The **required** banner image of a blog post card (used when currently the latest two-column wide post placed on top of the grid).
- `coverImage` ↹ `cover.(png|jpg|jpeg)` — The **required** cover image of a one-column blog post.
- `heroImage` ↹ `hero.(png|jpg|jpeg)` — The **required** hero image of a blog post.
- `heroVideo` ↹ `hero.(mp4|webm)` — The **optional** hero video of a blog post.
- `heroVideoPoster` ↹ `heroposter.(png|jpg|jpeg)` — The **optional** poster image of a blog post `heroVideo`.

### Known Problems

To prevent the [`unknwon field` GraphQL error during build time][gh-gatsbyjs/gatsby#3344] (e.g. when there are no blog posts yet) a _dummy_/_placeholder_ blog post and docs page has been created.
Anyway, they will be removed as soon as there is finally the first blog post and docs page. Later on the project will migrate to the shiny [new schema customization API][gatsby-blog-custom-schemes].

## Tasks

**New official Nord Spectrum community** — #131 (⊶ d71e4f98)
↠ Updated all URLs and references to the new [official Nord Spectrum community][spectrum-nord] that is available as of 2019-03-03.
Previously the official [Arctic Ice Studio][spectrum-ais] community was used with it's channels for Nord projects.

<p align="center"><img src="https://user-images.githubusercontent.com/7836623/53745393-3a478a80-3e9f-11e9-938b-3758158dbbe0.png" width="45%" /> <img src="https://user-images.githubusercontent.com/7836623/53745380-36b40380-3e9f-11e9-84a7-947eea4e923a.png" width="45%" /></p>

# 0.9.0

![Release Date: 2019-03-03](https://img.shields.io/badge/Release_Date-2019--03--03-88c0d0.svg?style=flat-square&colorA=4c566a) [![Project Board](https://img.shields.io/badge/Project_Board-0.9.0-88c0d0.svg?style=flat-square&colorA=4c566a&logo=github&logoColor=eceff4)](https://github.com/arcticicestudio/nord-docs/projects/11) [![Milestone](https://img.shields.io/badge/Milestone-0.9.0-88c0d0.svg?style=flat-square&colorA=4c566a&logo=github&logoColor=eceff4)](https://github.com/arcticicestudio/nord-docs/milestone/9)

This version mainly focused on the [sections of the ports page][gh-119] to represent Nord's port projects. The implementation was limited to the “landing” page components and currently doesn't include any prot specific pages, but will be implemented later on when the actual documentations are being migrated.

## Features

<p align="center"><img src="https://user-images.githubusercontent.com/7836623/48676311-39475300-eb65-11e8-9654-16c24c1c9a94.png" width="12%"/></p>

The following issues are related to the [“Components” design concept][gh-63] and the [“Responsive Web” design concept][gh-52] to adjust the rendered content based on the available width and provide an optimal UX on smaller viewports.

<p align="center"><img src="https://user-images.githubusercontent.com/7836623/52519841-ee1f7680-2c61-11e9-91fa-b7e41ab30145.png" width="30%"/></p>

**Ports Page Sections** — #119 ⇄ #126 (⊶ 606f805a)
↠ Implemented all port page sections including required changes to involved components and new dependencies.

<p align="center"><img src="https://user-images.githubusercontent.com/7836623/53166036-83145f00-35d4-11e9-8158-3008657ce4ff.png"/></p>

<p align="center"><img src="https://user-images.githubusercontent.com/7836623/53166795-96282e80-35d6-11e9-8ed8-5b81ed3fe41f.png"/></p>

### Hero

The first section contains a _feature duo_ container with the pages heading and a summary about Nord's ports.
Underneath the static vector graphic that was placed in the port section of the landing (`/`) page has been implemented as interactive animated component. It uses a 3D depth effect for the port project's logos by moving against the direction of the current mouse position where the larger logos will move more to give the impression that they are closer.

<p align="center"><img src="https://user-images.githubusercontent.com/7836623/53166647-33369780-35d6-11e9-9130-fde7e4cdadd1.gif"/></p>

### Grid Filter

The second section consists of a input field that allows to filter available port projects by predefined search terms. Underneath a animated grid of card components reacts to the input field by filtering non-matching ports projects.
Each card represents one port project and consists of the logo, the name (with the _Nord_ prefix) as well as a card footer that contains the version of the latest release of the respective project and the number of stars of the GitHub repository.

To prevent UI freezes/frame drops when typing in the input field, while the grid reacts to the change immediately, it was considered to use _debounce_ that waits some milliseconds before actually filtering the grid by the given search term. This hasn't been implemented yet but might be added later on when there are performance problems. To get the best performance [Lodash][] can be used through [gatsby-plugin-lodash][gh-gatsby-p-lodash] which sets up [babel-plugin-lodash][gh-babel-plugin-lodash] and [lodash-webpack-plugin][gh-lodash-webpack-plugin].

<p align="center"><img src="https://user-images.githubusercontent.com/7836623/53166646-33369780-35d6-11e9-94ea-b5758691f47f.gif"/></p>

### GitHub GraphQL API

To view the metadata about the port project repositories [Gatsby's fantastic GraphQL integration][gatsby-docs-gql] is used through the awesome [gatsby-source-graphql][gh-gatsby-s-graphql] plugin. It allows to fire queries that'll get executed and stitches remote schemas together by adding a type that wraps the remote schema Query type and putting it under field of Gatsby GraphQL Query.

### Interactive Animations

To implement components with an interactive animation the awesome [react-spring][] project is used which allows, like the already used fantastic [react-pose][] library, to use spring-physics based animations.
The advantage of react-spring is that it bails out of the React renderer to avoid unnecessary renders and instead uses native methods to get the best performance even for complex animations.
It comes with [first-class support for Hooks][react-spring-basic], a great and extensive documentation and [a lot of examples for inspirations][react-spring-ex].

**React Hooks Support** — #121 ⇄ #122 (⊶ c1bf2dbe)
↠ Since the [latest stable React version finally comes with the long-awaited Hooks][react-b-16.8.0] the project now added support for the new features.
To simplify the usage and import of [custom Hooks][react-docs-hooks-ch] a new `hooks` import alias has been added that allows to import custom hooks from the new `src/hooks` Hooks base directory.

<p align="center"><img src="https://user-images.githubusercontent.com/7836623/48658871-4707b600-ea49-11e8-8a08-39e1a318c442.png" width="25%"/></p>

The ESLint plugin [eslint-plugin-react-hooks][npm-eslint-react-hooks] provided by the React core team has been added to enforce the [rules of Hooks][react-docs-hooks-roh]. This is a temporary integration until the [eslint-config-arcticicestudio][npm-eslint-config-arcticicestudio] package has been updated to support and include the plugin.

The plugin is configured by following the [official documentation about the rules of Hooks][react-docs-hooks-roh].
Since React Hooks are making use of inline arrow functions the [react/jsx-no-bind][eslint-p-react/jsx-no-bind] rule has been disabled to avoid noisy false-positive errors.

<p align="center"><img src="https://user-images.githubusercontent.com/7836623/52774423-6d83c000-303d-11e9-83cb-4704419c63c6.png" width="25%"/></p>

**git-crypt** — #123 ⇄ #124 (⊶ 475c6956)
↠ Integrated [git-crypt][] into the repository to allow to encrypt specific files using [GPG][].
_git-crypt_ is a stable and production proven concept that works safely and allows to use a transparent encryption with Git.

Nord Docs uses it to encrypt [Gatsby environment variables][gatsby-docs-env] stored in `.env*` files that are handled by [dotenv][]. Another way would be to use [Circle CI's environment variables features][circleci-docs-env] to make sensitive data available during build time, but using git-crypt ensures that all required project data is stored in the repository and tracked by Git without the need to manually configure CI/CD providers and servers.

Unfortunately Netlify currently doesn't provide a way to customize the Docker container configuration so that it was not possible to set up GPG and git-crypt to import the CI/CD GPG secret key, decrypt the files and build the project. An attempted solution was to use [Netlify's awesome “Functions” feature][netlify-docs-func] to run a function that executes shell commands using the `deploy-building` trigger to set up GPG and git-crypt, but there is no way to install `git-crypt` in the container so this doesn't work.

Therefore is was necessary to manually set required environment variables via [Netlify's web app UI for build environment variables][netlify-docs-env]:

- `NORD_DOCS_GOOGLE_UNIVERSAL_ANALYTICS_TRACKING_ID` — Stores the “Google Universal Analytics” tracking ID.

The following steps have been performed to integrate git-crypt for the current code base:

1. Add files to `.gitattributes` and configure `filter` and `diff` to use `git-crypt` setup
2. Initialize `git-crypt` for the repository: `git-crypt init` (default key)
3. Add the GPG keys of all core team members keys and Nord theme CI/CD virtual user: `git-crypt add-gpg-user --trusted --no-commit <ID>` (`--no-commit` flag prevents automatic commit of generated files while `--trusted` assumes the GPG user IDs are trusted)
4. Commit the new generated `.git-crypt` folder
5. Unlock the repository: `git-crypt unlock`
6. Ensure all target files are tracked to be encrypted: `git-crypt status`
7. Commit all encrypted target files
8. Validate the encryption works by locking the repository again: `git-crypt lock`
9. Implement Circle CI build configuration jobs and commands to handle GPG key import, file decryption and clean up after successful build
10. Document required manual steup steps for Netlify deployment configuration in `netlify.toml` file

## Improvements

**Interactive illustration for ports section of landing page** — #127 (⊶ f79f4ac3)
↠ #126 improved the already existing “Nordify” SVG illustration by making it an interactive components that animates the floating logos in the opposite direction of the current mouse cursor's position.

The new component is now also used for the [port section of the landing page][env-dev-landing-ports] replacing the static SVG illustration/image.

<p align="center"><img src="https://user-images.githubusercontent.com/7836623/53172428-9da30400-35e5-11e9-96a5-f787247b467a.gif" /></p>

## Tasks

**Dependency Update January 2018** — #120 (⊶ cb09058a)
↠ Performed the regular batch update for outdated dependencies.
It includes the long awaited React version [16.8.0][react-b-16.8.0] finally brings the stable [Hooks API][react-docs-hooks] as well as great performance improvements and bug fixes!

Updated Jest's configuration since version `>=24.0.0` [deprecated `setupTestFrameworkScriptFile` in favor of the new `setupFilesAfterEnv`][facebook/jest#7119] option.

The ESLint plugin `eslint-plugin-react` includes a lot of improvements and bug fixes regarding the parsing of code structures for better prop validation and display name detection. This resulted in the requirement to implement currently missing prop types and display names in various SFC and class components in the project.

Gatsby and all plugins have been updated to the latest versions to include the latest improvements and bug fixes. The `gatsby-plugin-manifest` plugin now sets the [`legacy` option to `true` by default][gatsbyjs/gatsby#11203] to include Apple touch icons since the assumption was wrong that iOS supports the icons from the web manifest.

As of version 3.3 the [“Inter UI” font typeface has been renamed and is now “Inter”][rsms/inter#v3.3], without the “UI” part. This change has been ported to the used [inter-ui][npm-inter-ui] package. The import has been adjusted to match the renamed `inter.css` main file and all references to the “Inter UI” name have been adjusted by removing “UI”.

[Prettier version 1.16.0][prettier-b-1.16.0] comes with support for React Hooks and features for TypeScript and HTML as well as many other improvements and bug fixes.

[React Pose][react-pose] includes an important fix that also [animates all other children when items are moving][popmotion/popmotion#682] when using the `PoseGroup` component.

**Gatsby 2.1.0 with React Hooks Support** — #125 (⊶ cf578797)
↠ Updated to [Gatsby v2.1.0 which introduces `useStaticQuery`][gatsby-docs-usestq], a new Gatsby feature that provides the ability to use a [React Hook][react-docs-hooks] to query with GraphQL at _build time_. It provides the same functionality like the [`StaticQuery`][gatsby-docs-stq] component, but as a Hook rather than a component that takes a render prop.

**Update to React 16.8.3** — #128 (⊶ f4c9b45d)
↠ The latest React version [16.8.3][facebook/react#v16.8.3] has been released including important bug fixes for incorrect state behaviors with the `useState` hook as well as a fix for `<input>` elements that discarded state updates during the render phase and reduced the performance.
The update is [strongly recommended for any 16.8 release][tw-dan_abramov-react-v16.8.3] by the core team.

This bug fix release version might fix some problems that were encountered during development of the search filter `<input>` for #119.

# 0.8.0

![Release Date: 2019-02-03](https://img.shields.io/badge/Release_Date-2019--02--03-88c0d0.svg?style=flat-square&colorA=4c566a) [![Project Board](https://img.shields.io/badge/Project_Board-0.8.0-88c0d0.svg?style=flat-square&colorA=4c566a&logo=github&logoColor=eceff4)](https://github.com/arcticicestudio/nord-docs/projects/10) [![Milestone](https://img.shields.io/badge/Milestone-0.8.0-88c0d0.svg?style=flat-square&colorA=4c566a&logo=github&logoColor=eceff4)](https://github.com/arcticicestudio/nord-docs/milestone/8)

This version mainly focused on the [sections of the docs page][gh-117] to represent Nord's documentation categories and their topics. The implementation was limited to the “landing” page components and style and currently doesn't include any documentation, the actual docs will be implemented and imported later on using the [GraphQL API and MDX][gh-24].

## Features

<p align="center"><img src="https://user-images.githubusercontent.com/7836623/48676311-39475300-eb65-11e8-9654-16c24c1c9a94.png" width="12%"/></p>

The following issues are related to the [“Components” design concept][gh-63].

**Community Page Sections** — #117 ⇄ #118 (⊶ a0b9f5bc)
↠ Implemented all docs page sections including required changes to other components.
All sections follow the [“Responsive Web” design concept][gh-52] to adjust the rendered content based on the available width and provide an optimal UX on smaller viewports.

<p align="center"><img src="https://user-images.githubusercontent.com/7836623/52166394-eb2a0080-270c-11e9-9979-17aeee02043d.png"/></p>

### Hero

The first section is the “hero” of the docs page that renders a description about the page's purpose.

### Contents Cards

The 2nd section is about Nord's documentation contents where each category is represented as card rendered in a two-column grid layout. Each card contains a topic icon, colorized with a accent color from Nord's palettes and a short summary about the topic's links.

As of now there are two cards for the categories “Getting Started” and “References” that provide links to the various topics.

# 0.7.0

![Release Date: 2019-01-26](https://img.shields.io/badge/Release_Date-2019--01--26-88c0d0.svg?style=flat-square&colorA=4c566a) [![Project Board](https://img.shields.io/badge/Project_Board-0.7.0-88c0d0.svg?style=flat-square&colorA=4c566a&logo=github&logoColor=eceff4)](https://github.com/arcticicestudio/nord-docs/projects/9) [![Milestone](https://img.shields.io/badge/Milestone-0.7.0-88c0d0.svg?style=flat-square&colorA=4c566a&logo=github&logoColor=eceff4)](https://github.com/arcticicestudio/nord-docs/milestone/7)

This version mainly focused on the [sections of the community page][gh-115] to represent Nord's community chat channels as well as the content & knowledge bases.

## Features

<p align="center"><img src="https://user-images.githubusercontent.com/7836623/48676311-39475300-eb65-11e8-9654-16c24c1c9a94.png" width="12%"/></p>

The following issues are related to the [“Components” design concept][gh-63] and the [“Responsive Web” design concept][gh-52] to adjust the rendered content based on the available width and provide an optimal UX on smaller viewports.

**Community Page Sections** — #115 ⇄ #116 (⊶ 5fb775c7)
↠ Implemented all community page sections including required dependencies, components and illustrations.

<p align="center"><img src="https://user-images.githubusercontent.com/7836623/51789079-bb677f80-2185-11e9-8069-782a098c3d50.png"/></p>

### Hero

The first section is the “hero” of the community page that renders a description about the page's purpose and an animated SVG component.

<p align="center"><img src="https://user-images.githubusercontent.com/7836623/51789084-bb677f80-2185-11e9-8f01-06d2d1b24b5a.png"/></p>

<p align="center"><img src="https://user-images.githubusercontent.com/7836623/51789085-bc001600-2185-11e9-8711-fc6c7a082405.png"/></p>

<p align="center"><img src="https://user-images.githubusercontent.com/7836623/51789098-da661180-2185-11e9-86af-cfafc58395f3.gif"/></p>

### Chats

The 2nd section is about Nord's community chats where each platform is represented as card rendered in a two-column grid layout. Each card contains the platforms official logo, colorized with colors of the respective brand guidelines, a short summary about the platform/service and a link component that'll forward to the community within the platform.
Next to the official main channel each platform also provides sub-channels for all port projects

As of now the following community chats of Nord are represented:

- Arctic Ice Studio's official community on [Spectrum][spectrum-ais]
- Nord's official [Keybase team chat][kb-chat-nord]
- Nord's official [Slack][slack-ais] workspace
- Nord's official [Discord][] space

<p align="center"><img src="https://user-images.githubusercontent.com/7836623/51789080-bb677f80-2185-11e9-8c28-5d429bfa14e0.png"/></p>

<p align="center"><img src="https://user-images.githubusercontent.com/7836623/51789081-bb677f80-2185-11e9-9a81-b00b77af90e9.png"/></p>

### Content

The 3th and also currently last section presents platforms where the community can create content and ask questions for and about Nord. Next to the official documentation these content & knowledge bases are also powered by community.

Like the chat platforms in the previous section each platform/service is represented as card including the same information, rendered by the same components, and also structured in a two-column grid layout.
Next to this, each card includes the latest three items (questions, posts etc.) of the platform's community rendered as link component with the item's title and metadata like tags, the name of the author and the relative creation date/time.

As of now the following community platforms of Nord are represented:

- Latest questions from [Stack Overflow][stof-nord-tagged] tagged with `nord` or `nordtheme`
- Nord's official [/r/nordtheme][] subreddit

All data is fetched from the official REST APIs of the respective platform using [axios][gh-axios].
The processing of any date/time data is handled with [date-fns][gh-date-fns], a modern and more lightweight ES6+ library with tree-shaking support that'll be used project-wide for Nord Docs to handle any other date/time data like e.g. blog posts metadata.

<p align="center"><img src="https://user-images.githubusercontent.com/7836623/51789082-bb677f80-2185-11e9-99f3-5cb9387fcefa.png"/></p>

<p align="center"><img src="https://user-images.githubusercontent.com/7836623/51789083-bb677f80-2185-11e9-9920-64914402da26.png"/></p>

# 0.6.0

![Release Date: 2019-01-13](https://img.shields.io/badge/Release_Date-2019--01--13-88c0d0.svg?style=flat-square&colorA=4c566a) [![Project Board](https://img.shields.io/badge/Project_Board-0.6.0-88c0d0.svg?style=flat-square&colorA=4c566a&logo=github&logoColor=eceff4)](https://github.com/arcticicestudio/nord-docs/projects/8) [![Milestone](https://img.shields.io/badge/Milestone-0.6.0-88c0d0.svg?style=flat-square&colorA=4c566a&logo=github&logoColor=eceff4)](https://github.com/arcticicestudio/nord-docs/milestone/6)

This version focused on the [sections of the landing page][gh-112] including the new [`Button` core atom component][gh-110] that represents the `<button>` HTML element.

## Features

<p align="center"><img src="https://user-images.githubusercontent.com/7836623/48676311-39475300-eb65-11e8-9654-16c24c1c9a94.png" width="12%"/></p>

The following issues are related to the [“Components” design concept][gh-63] and the [“Responsive Web” design concept][gh-52] to adjust the rendered content based on the available width and provide an optimal UX on smaller viewports.

**Core HTML Element Atom: “Button”** — #110 ⇄ #111 (⊶ 41ce16fa)
↠ Implemented the core atom `Button` that represents a [`<button>`][mdn-button] base HTML element. It can also render as [core atom `A`][gh-70] with `Button` styles when the `href` or `to` props are passed with an internal and external URL.

It provides multiple variations:

- `primary` — uses the primary color `nord8` for background/border/text colorization.
- `secondary` — uses the secondary color `nord9` for background/border/text colorization.
- `simple` — uses the _Snow Storm_ and _Polar Night_ palettes for background/border/text colorization.
- `subtle` — only colorizes the background on hover using the _Snow Storm_ and _Polar Night_ palettes for background/border/text colorization.

Next to variations there are additional props to toggle more styles:

- `dashed` — uses the `dashed` property for the CSS [`border-style`][mdn-css-bs] attribute.
- `ghost` — only uses a border instead of a background color.
- `outlined` — uses uses a border in addition to a background color.
- `quiet` — keeps the initial text colorization on hover.

<p align="center"><img src="https://user-images.githubusercontent.com/7836623/50845511-50d4d800-136d-11e9-98cf-7906148ff0ef.gif" width="30%"/></p>

<p align="center"><img src="https://user-images.githubusercontent.com/7836623/50845521-57634f80-136d-11e9-9c85-68da2e9cab1c.gif" width="30%"/></p>

<p align="center"><img src="https://user-images.githubusercontent.com/7836623/50845522-57634f80-136d-11e9-8b7b-f34c5445411c.gif" width="30%"/></p>

<p align="center"><img src="https://user-images.githubusercontent.com/7836623/50845538-5fbb8a80-136d-11e9-84b0-b81d7d5c2e94.png" width="30%"/></p>

**Landing Page Sections** — #112 ⇄ #113 (⊶ 339d3b8f)
↠ Implemented all landing page sections including required dependencies, components and illustrations.
All sections follow the [“Responsive Web” design concept][gh-52] to adjust the rendered content based on the available width and provide an optimal UX on smaller viewports.

### Hero

The first sections is the “hero” of the landing page that renders a short project description and the animated [Arctic Landscape][gh-arcland] SVG component. The animation will be triggered through the [React Waypoint][gh-rw] project.

### Color Palettes

The 2nd and 3rd sections are about Nord's color palettes and provide information about the modularity and contrast. All palettes are visualized through a new "color palette card" component that consists of the actual colors as small, rounded boxes and the associated color code as label using the hexadecimal format.

### “Nordify”

The 4th section presents Nord's port projects which can be used by users to “nordify” their favorite apps and platforms. It consists of the text content as well as a new illustration that might also be animated later on using a 3D parallax effect that reacts and moves based on the current mouse position in the section.

### Color Swatches

The 5th section is about Nord's “native” color swatches. It consists of the same elements like the 4th section, but renders a new non-animated illustration showing a application UI with Nord loaded as color palette.

### Syntax Highlighting

The 6th section is all about Nord's features to highlight code. Next to the text content and summary it renders a new and animated illustration, too.

### Community

The 7th and also last section presents details about Nord's communities. It renders the animated [Arctic Ocean Fractal][gh-arcocfrac] SVG component and a short summary about how to join, contribute and develop Nord's community.

## Bug Fixes

**Landing page decoration container blocks mouse pointer events** — #114 (⊶ 4ce828cb)
↠ Fixed the container for decoration components of the landing page (implemented in #112) blocking all mouse/pointer events since it covers the whole section size. Therefore all underlying elements like buttons and links couldn't be clicked/pressed because the pointer was focused on the decoration container.

# 0.5.0

![Release Date: 2018-12-29](https://img.shields.io/badge/Release_Date-2018--12--29-88c0d0.svg?style=flat-square&colorA=4c566a) [![Project Board](https://img.shields.io/badge/Project_Board-0.5.0-88c0d0.svg?style=flat-square&colorA=4c566a&logo=github&logoColor=eceff4)](https://github.com/arcticicestudio/nord-docs/projects/7) [![Milestone](https://img.shields.io/badge/Milestone-0.5.0-88c0d0.svg?style=flat-square&colorA=4c566a&logo=github&logoColor=eceff4)](https://github.com/arcticicestudio/nord-docs/milestone/5)

This version focused on the essential [footer][gh-106] as well as a styled [link component][gh-105]. It also includes the integration of the Webpack [size-plugin][gh-109] to print the gzipped sizes of assets and the changes since the last production build.

## Features

<p align="center"><img src="https://user-images.githubusercontent.com/7836623/48676311-39475300-eb65-11e8-9654-16c24c1c9a94.png" width="12%"/></p>

The following issues are related to the [“Components” design concept][gh-63] and the [“Responsive Web” design concept][gh-52] to adjust the rendered content based on the available width and provide an optimal UX on smaller viewports.

**Core Atom: “Link”** — #105 ⇄ #107 (⊶ cf1f1184)
↠ Implemented the core atom `Link` that wraps the [base HTML element atom component the `A`][gh-70] and adds matching brand styles to it.

**Core Organism Component: “Footer”** — #106 ⇄ #108 (⊶ 9a6c0496)
↠ Implemented the core organism component `Footer` which represent the `<footer>` element and is an essential part of _Nord Docs_. It provides a sitemap, the Arctic Ice Studio organization branding logo and caption, networking & social media links as well as the copyright paragraph including version information.

### Layout

The footer uses a CSS [flexbox][mdn-flexbox] and [grid][mdn-grids] layout consisting of two container components with the maximum of flexible space between both. The left-side container contains the branding and link components while the right-side container contains the sitemap like documented in the sections below.

#### Wave Divider

For a nice and smooth transition between the last section/element of a page a new SVG vector graphic divider in form of multiple “overlapping waves” has been added. It must be rendered by the last component/element (in most cases a `Section`/`<section>`) to ensure the transparent background of the wave's container matches the last components background by rendering it in the bounds.

#### Sitemap

To allow users to simply navigate around the site, next to the main header, the component provides the quickly accessible sitemap. This container uses the [flexbox][mdn-flexbox] layout where each base route of the site is added as one category represented as a column. Each of these consists of an heading, the name of the route, and the corresponding sub-routes.

As of now the following base routes are included:

- “Nord” — links to `/` and includes all sections of the main landing page.
- “Ports” — links to `/ports` and includes all sections of the Nord port projects.
- “Docs” — links to `/docs` and includes all sections of Nord's documentation.
- “Blog” — links to `/blog` and includes all sections of Nord's blog.
- “Community” — links to `/community` and includes all sections of the Nord community channels.

#### Organization Branding

To represent Arctic Ice Studio's branding, the left-sided container contains the logo with the caption that'll link to the organization website. It is placed in one line with the category heading of the sitemap like documented in the section above.

#### Social Media & Networking Links

The left-side container also contains the social media & networking links where each link is represented through the icon of the corresponding site/service. They are placed in one line with a flexible layout to adust based on the available width.

#### Version Information

The last elements of the left-side container is a paragraph providing version information about the site like the currently running version (with _commits ahead_ metadata when required) and the build & deployment date. It also has additional Git metadata added as `data-` attributes and a `<time>` HTML element.

<p align="center"><strong>Full Width</strong><br><img src="https://user-images.githubusercontent.com/7836623/50536955-88b47200-0b5a-11e9-9456-00e4253ae206.png" /></p>

<p align="center"><strong>Reduced Width</strong><br><img src="https://user-images.githubusercontent.com/7836623/50536956-894d0880-0b5a-11e9-8cff-c8f03d8c2691.png" /></p>

<p align="center"><strong>Small Width</strong><br><img src="https://user-images.githubusercontent.com/7836623/50536957-894d0880-0b5a-11e9-8328-de4c6efb7d23.png" /></p>

### Responsive Design

For reduced width views (responsive design) the footer adjusts several styles and composed components. For really small view ports the grid layout be switches to a flexbox layout.

**Core Organism Component: “Footer”** — #109 (⊶ 75435d07)
↠ Integrated the Webpack [size-plugin][gh-sp] that prints the gzipped sizes of assets and the changes since the last build added through [gatsby-plugin-webpack-size][gh-gatsby-p-wps].

<p align="center"><img src="https://user-images.githubusercontent.com/7836623/50536175-ea241300-0b51-11e9-85d6-41350ce8017b.png" width="40%" /></p>

# 0.4.0

![Release Date: 2018-12-23](https://img.shields.io/badge/Release_Date-2018--12--23-88c0d0.svg?style=flat-square&colorA=4c566a) [![Project Board](https://img.shields.io/badge/Project_Board-0.4.0-88c0d0.svg?style=flat-square&colorA=4c566a&logo=github&logoColor=eceff4)](https://github.com/arcticicestudio/nord-docs/projects/6) [![Milestone](https://img.shields.io/badge/Milestone-0.4.0-88c0d0.svg?style=flat-square&colorA=4c566a&logo=github&logoColor=eceff4)](https://github.com/arcticicestudio/nord-docs/milestone/4)

This version focused on [analytics & statistics][gh-86] as well as [SEO & social media representation][gh-100]. This includes the integration of [Google Analytics][gh-87], requirements of a [PWA][gdev-web-pwa] ([Progressive Web App][wiki-pwa]) like a [Web App Manifest][gh-91], _offline_ resistance and availability through a [service worker][gh-94] and [improved caching strategies and usage of advanced techniques like HTTP/2 server push][gh-89].

Several implementation for SEO have been made with automated generation of web standard resources like the [sitemap.xml][gh-96] and [robots.txt][gh-98] files. A new [`SiteMetadata` component][gh-101] has been added to allow to provide metadata for several specifications like the [Open Graph Protocol][ogp], [Twitter Cards][tw-docs-cards] and [schema.org][].

## Features

<p align="center"><img src="https://user-images.githubusercontent.com/7836623/50167256-14bbd380-02e9-11e9-8aca-a31baf745cd8.png" width="12%" /></p>

<p align="center"><img src="https://user-images.githubusercontent.com/7836623/50167593-c824c800-02e9-11e9-9b70-84b6fc40c05f.png " width="10%"/></p>

**Google Analytics** — #87 ⇄ #88 (⊶ 7aed8952)
↠ Integrated [Google Analytics][ga-mark] like documented in the [“Analytics & Statistics” design concept][gh-86] through the Gatsby plugin [gatsby-plugin-google-gtag][gh-gatsby-p-gtag].

It is a stable and proven service tool to collect and analyze data with a lot of useful configurable features and a reliable persistence.

_Nord Docs_ uses the latest and recommended [gtag.js][gdev-ga-gtag] library that optionally allows, next to Google Analytics itself, the integration of almost all Google Marketing services like e.g. [Google Tag Manager][gdev-tm].

To protect the privacy of users and to be compatible with various privacy and data legal guidelines all [IP addresses are anonymized][gsup-ga-anonip].

<p align="center"><img src="https://user-images.githubusercontent.com/7836623/48661237-35d1a000-ea6f-11e8-8e16-f48948969be6.png" width="12%" /></p>

**Gatsby Plugin "Netlify"** — #89 ⇄ #90 (⊶ b4a91fd9)
↠ Added [gatsby-plugin-netlify][npm-gatsby-plugin-netlify] to automatically generate a `_headers` file and a `_redirects` file at the root of the public folder to configure [HTTP headers][netlify-docs-headers] and [redirects][netlify-docs-rd] on Netlify.
One of the main advantages is that it also enables HTTP/2 server push of critical Gatsby assets through the `Link` headers. By default, the plugin adds HTTP/2 assets to server push the critical Gatsby scripts (ones that have the `preload` attribute already) and additionally adds basic security and caching headers.

See the [“Hosting & Continuous Deployment” design concept][gh-46] for more details.

<p align="center"><img src="https://user-images.githubusercontent.com/7836623/50234314-aee94d80-03b5-11e9-8eda-e56b9b632b22.png" width="12%" /></p>

**Gatsby Plugin "Web App Manifest"** — #91 ⇄ #93 (⊶ 6415ddc5)
↠ Integrated [gatsby-plugin-manifest][npm-gatsby-plugin-manifest] that adds support for generating and shipping a [web app (PWA) `manifest.webmanifest`][mdn-web-mf]. It allows users to save _Nord Docs_ as web application to their desktops / task bars and smartphone home screens so it behaves similar to native apps.

See the great Google Developer documentation about [the web app manifest][gdev-fund-wamf] and the [official W3 Web App Manifest specification][w3-spec-mf].

Note that it is **recommended to use this plugin together with** [gatsby-plugin-offline][npm-gatsby-plugin-offline] ([#94][gh-94]), but ensure that **this plugin is listed before the offline plugin** so that it can cache the created `manifest.webmanifest` file!

<p align="center"><img src="https://user-images.githubusercontent.com/7836623/50229928-b86db800-03ab-11e9-89ad-07075d659574.png" width="12%" /></p>

**Gatsby Plugin "Offline" Service Worker** — #94 ⇄ #95 (⊶ e381f366)
↠ Integrated [gatsby-plugin-offline][gh-gatsby-p-offline] that adds drop-in support for making a Gatsby site work offline and more resistant to bad network connections. It creates a service worker for the site using the great [Workbox][] project and loads the service worker into the client.

Note that it is **recommended to use this plugin together with** [gatsby-plugin-manifest][gh-gatsby-p-manifest] ([#91][gh-94]), but ensure that **this plugin is listed after the offline plugin** so that the created `manifest.webmanifest` file can be included in the service worker!

The plugin comes with optimal configurations out-of-the-box™. Note that the offline support can break when changing these options.

<p align="center"><img src="https://user-images.githubusercontent.com/7836623/50330182-920a6280-04fa-11e9-825d-157168c2eb93.png" width="12%" /></p>

**Gatsby Plugin "Sitemap"** — #96 ⇄ #97 (⊶ 1cf69f42)
↠ Integrated [gatsby-plugin-sitemap][gh-gatsby-p-sitemap] that automatically generates a [sitemap.xml][wiki-sitemap] file including all of _Nord Docs_ pages, except the ones excluded by default and custom configured routes.

Note that by default the plugin assumes that the default Gatsby config object field `siteMetadata.siteUrl` is set to the site's URL.

<p align="center"><img src="https://user-images.githubusercontent.com/7836623/50345701-4ecae680-0530-11e9-9cff-7b42a99dd673.png" width="12%" /></p>

**Gatsby Plugin "robots.txt"** — #98 ⇄ #99 (⊶ ca4ed675)
↠ Integrated [gatsby-plugin-robots-txt][gh-gatsby-p-robots-txt] that automatically generates a [robots.txt][wiki-robotstxt] file.

Note that by default the plugin assumes that the default Gatsby config object field `siteMetadata.siteUrl` is used and set to the site's URL. It also uses the default path `${siteMetadata.siteUrl/sitemap.xml}` for the sitemap file ([#96][gh-96]).

<p align="center"><img src="https://user-images.githubusercontent.com/7836623/50351078-59da4280-0541-11e9-97ec-b983c43bbedc.png" width="12%" /> <img src="https://user-images.githubusercontent.com/7836623/50351088-6199e700-0541-11e9-831d-0b9200abfbe9.png" width="12%" /></p>

**Site Metadata Component** — #101 ⇄ #102 (⊶ a8fb8edd)
↠ Implemented the core atom `SiteMetadata` that injects global metadata. Next to general data like the page title and canonical URL it will include data for the [Open Graph Protocol][ogp], [Twitter Cards][tw-docs-cards] and the [schema.org][] structured data format [JSON-LD][].
The component doesn't render any UI, but injects the elements into the `<head>` using [React Helmet][gh-react-helmet].

For more details read the [“SEO & Social Media Representation” design concept][gh-100] and the great documentation about [SEO with Gatsby][gatsby-docs-seo].

## Tasks

**Dependency Update December 2018** — #103 ⇄ #104 (⊶ 1c4ba796)
↠ Performed the regular batch update for outdated dependencies which raises React to version [16.7.0][react-rln-16.7.0] to include an important performance bug fix for `React.lazy`.

Babel has been updated to the latest minor version [7.2.0][babel-rln-7.2.0] (including official plugins) that comes with a lot of improvements and bug fixes for TypeScript and Flow as well as support for _private instance methods_ and “smart” pipeline operator parsing.

The `babel-plugin-styled-components` plugin now also supports the new `css` prop of the also updated `styled-components` package.

Gatsby and all plugins have been updated to the latest versions to include the latest improvements and bug fixes.

Note that packages marked with an :exclamation: have been affected by the security incident!

###### Production Dependencies

- gatsby `2.0.55` ➔ `2.0.75`
- gatsby-plugin-canonical-urls `2.0.7` ➔ `2.0.8`
- gatsby-plugin-catch-links `2.0.8` ➔ `2.0.9`
- gatsby-plugin-react-helmet `3.0.2` ➔ `3.0.5`
- gatsby-plugin-remove-trailing-slashes `2.0.5` ➔ `2.0.6`
- gatsby-source-filesystem `2.0.9` ➔ `2.0.12`
- gatsby-transformer-yaml `2.1.5` ➔ `2.1.6`
- inter-ui `3.0.0` ➔ `3.1.0`
- react `16.6.3` ➔ `16.7.0`
- react-dom `16.6.3` ➔ `16.7.0`
- styled-components `4.1.2` ➔ `4.1.3`

###### Development Dependencies

- @babel/core `7.1.6` ➔ `7.2.2`
- @babel/plugin-proposal-class-properties `7.1.0` ➔ `7.2.3`
- @babel/plugin-proposal-export-default-from `7.0.0` ➔ `7.2.0`
- @babel/plugin-proposal-nullish-coalescing-operator `7.0.0` ➔ `7.2.0`
- @babel/plugin-proposal-optional-chaining `7.0.0` ➔ `7.2.0`
- babel-plugin-styled-components `1.9.2` ➔ `1.10.0`
- babel-plugin-transform-react-remove-prop-types `0.4.20` ➔ `0.4.21`
- babel-preset-gatsby `0.1.4` ➔ `0.1.6`
- eslint `5.9.0` ➔ `5.11.0`
- husky `1.2.0` ➔ `1.2.1`
- jest-dom `2.1.1` ➔ `3.0.0`
- prettier `1.15.2` ➔ `1.15.3`
- react-testing-library `5.3.0` ➔ `5.4.2`

# 0.3.0

![Release Date: 2018-12-18](https://img.shields.io/badge/Release_Date-2018--12--18-88c0d0.svg?style=flat-square&colorA=4c566a) [![Project Board](https://img.shields.io/badge/Project_Board-0.3.0-88c0d0.svg?style=flat-square&colorA=4c566a&logo=github&logoColor=eceff4)](https://github.com/arcticicestudio/nord-docs/projects/5) [![Milestone](https://img.shields.io/badge/Milestone-0.3.0-88c0d0.svg?style=flat-square&colorA=4c566a&logo=github&logoColor=eceff4)](https://github.com/arcticicestudio/nord-docs/milestone/3)

This version focused on the [responsive web design][gh-52], [core & base component][gh-63] as well as [base HTML elements as components][gh-69] of _Nord Docs_. It includes the [base layout][gh-66] which initially consists of the [header][gh-64] that provides the global navigation links.
Another focus was the handling of exceptional & special states like [empty states][gh-78] and the [404 error state][gh-84].

## Features

<p align="center"><img src="https://user-images.githubusercontent.com/7836623/49325616-f1053900-f545-11e8-9725-0b8f5af8d1e2.png" width="12%" /></p>

**Base Media Query Setup** — #61 ⇄ #62 (⊶ 6b78d691)
↠ The basic setup for components with responsive styles through media queries has been implemented based on the [“Responsive Web Design” design concept][gh-52].

### Media Query Generator

To simplify the usage of [media queries][mdn-mq] with [styled-components][gh-51], a utility function to generate [media templates][stc-docs-mqt]has been implemented. It uses the `min-width` parameter to fulfill the used _mobile-first_ approach. The base size that is used has been implemented as theme property in [#54][gh-55-diff-r49].

### Initial Media Queries

> Always adjust media queries to the content individually and not vice-versa.
> The design supports the content. Not the other way around.

Like documented in the #52, _Nord Docs_ uses the _mobile-first_ pattern and follows the great [“Google Developer Responsive Web Design” guidelines][gdev-web-fund-rwd]. The recommended way is to create media queries not based on any device sizes but individually based on the content which is unique for each project. This is the best practice and, contrary to most popular CSS framework like Bootstrap, the correct way since each site is different and there are thousands of devices and in the future new sizes will appear.
The following media query template functions have been implemented:

- `phonePortrait` — `max-width: 479px`
- `phoneLandscape` — `max-width: 480px`
- `tabletPortrait` — `max-width: 600px`
- `tabletLandscape` — `max-width: 900px`
- `desktop` — `max-width: 1200px`
- `desktopPlus` — `max-width: 1800px`

<p align="center"><img src="https://user-images.githubusercontent.com/7836623/48676311-39475300-eb65-11e8-9654-16c24c1c9a94.png" width="15%"/></p>

**Core Layout Component: BaseLayout** — #66 ⇄ #68 (⊶ 208c9ac0)
↠ Implemented the `BaseLayout` core layout component, the default layout of _Nord Docs_. It consists of the [`Root` core container][gh-36] as root element and the core components representing the [header][gh-64], the main [page container][gh-65] and in the future the _footer_.

**Core Container Component: Page** — #65 ⇄ #67 (⊶ 701ec43d)
↠ Implemented the core container component `Page`, the base wrapper for page content of _Nord Docs_. It renders the [HTML `<main>` element][mdn-html-el-main] to wrap page content and is used in layout components like [`BaseLayout`][gh-66].

**Core Atom HTML Element: P** — #79 ⇄ #80 (⊶ ad995b0a)
↠ Implemented the core atom `P` that represents the [text content][mdn-html-el-tc] HTML element [`<p>`][mdn-html-el-p]. It uses adjusted styles instead of browser defaults to match _Nord Docs_ brand style.

**Core Atom HTML Element: Heading** — #81 ⇄ #82 (⊶ c4e1aa84)
↠ Implemented the core atoms `H1`-`H6` that represent the [content sectioning][mdn-html-el-cs] HTML elements [`<h1>`-`<h6>`][mdn-html-el-h]. They use custom styles instead of browser defaults and allow to disable the bottom margin via the `noMargin` prop. The font style like size, modular scale and family adhere to the [“Typography” design concept][gh-2].

**Core Atom HTML Element: A** — #70 ⇄ #71 (⊶ 75d0e49c)
↠ Implemented the core atom `A` that represents the [inline text semantic][mdn-html-el-inl-txt-sem] HTML element [`<a>`][mdn-html-el-a]. This is a special dynamic and _failsafe_ component because it internally uses the [Gatsby `Link`][gatsby-docs-link] component to route within the site (internal links) while also being able to link to external data.

### URL Routing Utilities

To handle the logic of conditionally rendering a Gatsby `Link` or a basic `<a>`, based on the passed target URL (internal & external), utility functions has been implemented to evaluate the passed target.

**Core Organism Component: Header** — #64 ⇄ #75 (⊶ d6f0fef2)
↠ Implemented the essential core organism component `Header` that provides the main site navigation and a user action component to [toggle between the global theme modes][gh-57].

### Layout

The header uses the CSS _flexbox_ layout consisting of two container components with the maximum of flexible space between both. The containers contain the branding and the navigation components like described in the sections below.

### Navigation

To allow users to simply navigate around the site, the component provides the quickly accessible navigation. It is placed in the right-sided container and currently contains the following items:

- “Ports” — links to `/ports`, the landing page for all Nord port projects.
- “Docs” — links to `/docs`, the landing page for Nord's documentation.
- “Blog” — links to `/blog`, the landing page for Nord's blog.
- “Community” — links to `/community`, the landing page of the Nord community channels.

### Branding

To represent Nord's branding, the left-sided container contains the Nord logo with the caption. It links the landing page to allow quick access to the root (`/`) page.

### Theme Mode Switcher

The user action component mentioned in the introduction paragraph above allows to toggle between the available global theme modes. Both modes are represented through icons where a sun is used for the “bright snow flurry” and a moon for the “dark night frost” mode. They are implemented using the awesome [React Pose][react-pose] project to animate the switching. The icons “fly out and in” within the bounds of the component that takes the form of a button.

Like documented in the [“Iconography” design concept][gh-74], the awesome [Eva Icons][eva-icons] project is for icons.

### Responsive Design

For reduced width views (responsive design) the header adjusts several styles and composed components.

#### Slide Menu

The main navigation link list will be hidden and replaced by a user action element (button) that toggles an animated slide down menu containing the navigation links. The drop down starts right below the header and takes up the available height and width to cover the full screen. As soon as the animation starts all scroll events will be removed from the underlying content (body) using the [body-scroll-lock][gh-bsl] project. This prevents users from scrolling the content below the menu when the menu itself overflows the Y-axis and shows a scroll bar.

<p align="center"><img src="https://user-images.githubusercontent.com/7836623/49829535-fc026980-fd8e-11e8-9cba-d5d6e8149c10.png" width="15%"/></p>

### Behavior

To allow quick access while also being inconspicuous, the component is _sticky_ at the top of the site, but collapses as soon as the user scrolls down and only switches back into expanded mode when at top of the site.
In expanded mode, the height of the header is larger and the caption of the logo is visible. As soon as switching into collapsed mode the height decreases and the logo caption fades out with a smooth transition animation.

To achieve the resizing animation based on the scroll position the [subscribe-ui-event][gh-sue] project is used to listen to scroll events. It provides throttling by default, only calls `document.body.scrollTop` and `window.innerWidth` once and uses `requestAnimationFrame` for a better performance.

**Empty State Component** — #78 ⇄ #83 (⊶ 2079c056)
↠ Implemented the `EmptyState` molecule component to represent an [empty state][md-com-es]. It consists an vector illustration, a headline and the corresponding subline.

<p align="center"><img src="https://user-images.githubusercontent.com/7836623/50157534-f696a900-02d1-11e9-9d04-80a813da9e6c.png" width="12%"/></p>

<p align="center"><img src="https://user-images.githubusercontent.com/7836623/50157551-0615f200-02d2-11e9-898f-611ebd20621e.png" width="12%"/></p>

There are initially 3 different illustrations available that can be selected through the `illustrationVariant` prop. The headline informs the user about the purpose of the illustration and the reason why it is currently shown while the subline can include additional information and helpful instructions.

The empty state component has been placed within a base HTML component that represents a [`<section>`][mdn-html-el-sec] with multiple base style variants and is now initially used by the new base page components for the [header navigation links][gh-64].

**404 Page Components** — #84 ⇄ #85 (⊶ a39649fa)
↠ Implemented the [404][wiki-404] page and illustration components to handle requested but non-existing routes and resources.

<p align="center"><img src="https://user-images.githubusercontent.com/7836623/50157486-d23acc80-02d1-11e9-9ed9-628174d012c9.png" width="15%"/></p>

It aligns with _Nord Docs_ brand and can use a humorous image and tagline that conveys the purpose of the screen, without appearing actionable.
Also see the [great Gatsby documentation about 404 pages][gatsby-docs-404] for more details.

<p align="center"><img src="https://user-images.githubusercontent.com/7836623/49604267-bceaa780-f98d-11e8-932a-05ee4b952a83.png" width="15%" /></p>

**SVGR Integration** — #72 ⇄ #73 (⊶ 39c13041)
↠ Integrated [SVGR][], a transformer for SVG into ready to use React components. It is part of [create-react-app][cra] and makes SVG integration into React projects easy.

All configurations are placed in the `svgr.config.js` file instead of passing them to the corresponding Gatsby plugin for the Webpack loader that is described in the section below.

### Webpack Loader

To directly import SVG's as React component the [@svgr/webpack][gh-svgr-wpl] package is used to simply integrate SVGR as Webpack plugin. It has been added through [gatsby-plugin-svgr][npm-gp-svgr] which adjusts the required Webpack configurations by adding the loader and removing the default `.svg` file loader/handler.

<p align="center"><img src="https://user-images.githubusercontent.com/7836623/48661206-c0fe6600-ea6e-11e8-8142-4c65c82b9927.png" /></p>
<p align="center"><img src="https://user-images.githubusercontent.com/7836623/48837384-7ab64900-ed85-11e8-829c-3fd6efe86c60.png" width="15%"/></p>

**Jest utilities for Styled Components** — #76 ⇄ #77 (⊶ 47010b8c)
↠ Integrated [jest-styled-components][gh-jsc], a set of utilities for testing [Styled Components][styled-components] with [Jest][] that improves the snapshot testing experience and provides a brand new matcher to make expectations on the style rules.
Instead of storing the generated class names in snapshots it allows to track the actual CSS rules and attributes for **better comparison what changed** and **if the change is even really related to the affected component**.

This is the officially [recommended library to use Jest with styled-components][stc-docs-tooling-jest].

```js
const Button = styled.button`
  color: red;
`;
```

```js
exports[`snapshot`] = `
<button
  className="sc-bdVaJa rOCEJ"
/>
`;
```

**Before**

```diff
- Snapshot
+ Received

 <button
-  className="sc-bdVaJa rOCEJ"
+  className="sc-bdVaJa hUzqNt"
 />
```

**After**

```diff
- Snapshot
+ Received

+.c0 {
+  color: green;
+}
+
 <button
-  className="sc-bdVaJa rOCEJ"
+  className="c0"
 />
```

The package has been added in the setup file defined in Jest's `setupTestFrameworkScriptFile` field (#39) to enable all included features.

### Custom Style Matcher

The [custom `toHaveStyleRule` matcher][gh-jsc-matcher] is useful to test if a given rule is applied to a component. It is added to the extended global `except` object when the main package file is being imported.

# 0.2.0

![Release Date: 2018-12-04](https://img.shields.io/badge/Release_Date-2018--12--04-88c0d0.svg?style=flat-square&colorA=4c566a) [![Project Board](https://img.shields.io/badge/Project_Board-0.2.0-88c0d0.svg?style=flat-square&colorA=4c566a&logo=github&logoColor=eceff4)](https://github.com/arcticicestudio/nord-docs/projects/4) [![Milestone](https://img.shields.io/badge/Milestone-0.2.0-88c0d0.svg?style=flat-square&colorA=4c566a&logo=github&logoColor=eceff4)](https://github.com/arcticicestudio/nord-docs/milestone/2)

This version focused on the [typography][gh-2], the [brand design & styling][gh-51] and _theme modes_ of _Nord Docs_. It includes the globally used [typefaces][gh-54], a React context [provider and consumer component for the available theme modes][gh-57] as well as some initial [global base styles][gh-59].

## Features

<p align="center"><img src="https://user-images.githubusercontent.com/7836623/48346100-5e762600-e67a-11e8-8f9d-86a633c69043.png" width="60%" /></p>

**Typefaces** — #54 ⇄ #55 (⊶ 81a5b238)
↠ Integrated globally available open source typefaces like documented in the [“Typograhpy” design concept][gh-2] and implemented the `typography` module to define style properties and configurations. The font size and units are based on the used [modular scale][modularscale-majorsecond] documented in #2.

[Rubik][gf-rubik] — the main stylistic and visualization sans-serif font installed through through the [typeface-rubik][npm-typeface-rubik] package.

<p align="center"><img src="https://user-images.githubusercontent.com/7836623/49332499-28a7cb80-f5ae-11e8-976f-8dc2bbabaf94.png" width="60%"/></p>

[Inter UI][inter-ui] — the sans-serif font for documentations as well as technical and factual content. It is installed through the [inter-ui][npm-inter-ui] package. Note that the font is currently not available through [Google Fonts][gf] yet, but might be added in the future very soon due to its large popularity and perfect implementation.

<p align="center"><img src="https://user-images.githubusercontent.com/7836623/49332633-e9c74500-f5b0-11e8-9690-2f473df739ba.png" width="60%"/></p>

<p align="center"><img src="https://user-images.githubusercontent.com/7836623/49332647-298e2c80-f5b1-11e8-8ba1-bbcc0f72c50d.png" width="60%"/> <img src="hhttps://user-images.githubusercontent.com/7836623/49332648-298e2c80-f5b1-11e8-8c75-29cf754d481e.png" width="60%"/> <img src="https://user-images.githubusercontent.com/7836623/49332649-298e2c80-f5b1-11e8-9fc8-a880fa0c78e1.png" width="60%"/></p>

[Source Code Pro][gf-source-code-pro] — the main monospace font for all code elements installed through the [typeface-source-code-pro][npm-typeface-source-code-pro] package.

<p align="center"><img src="https://user-images.githubusercontent.com/7836623/49332718-93f39c80-f5b2-11e8-8be6-13755cb333eb.png" width="40%"/></p>

<p align="center"><img src="https://user-images.githubusercontent.com/7836623/49332737-ce5d3980-f5b2-11e8-95bb-5b32855f8322.png" width="60%"/></p>

**Base Style & Theme Setup** — #53 ⇄ #56 (⊶ 85498ca0)
↠ Implemented the basic style & theme setup like documented in the [“Brand Design & Styling” design concept][gh-51] using the CSS-in-JS library [styled-components][] for component representations. To use uniform global theme definitions and to simplify CSS styling, the [styled-theming][gh-styled-theming] and [polished][] libraries are also integrated next to some useful and required specific Babel & Gatsby plugins.

##### Default Browser Style Normalization

Integrated the great project [modern-normalize][gh-modern-normalize] that normalizes the default styles of browsers for a consistent appearance across different modern browsers. For the best usage with _styled-components_ the [npm-styled-modern-normalize][npm-styled-modern-normalize] project is used. It exports the styles via the `css` API and has been added to the created global styles component mentioned below.

##### CSS Tools

To simplify the CSS styling, the [polished][] package is used that provides a lightweight toolset for writing styles in JavaScript (CSS-in-JS).

##### CSS Base Styles

Global and normalization CSS styles have been implemented using _styled-components_ `css` API. They extend _modern-normalize_ and define, next to the browser normalization, styles of the available global themes like documented in the sections below.

In order to use fonts in _Nord Docs_ style & themes (implemented in #54) the basic properties and values have been added and integrated into this CSS base styles.

<p align="center"><img src="https://user-images.githubusercontent.com/7836623/48661206-c0fe6600-ea6e-11e8-8142-4c65c82b9927.png" /></p>

##### Global Styles

To inject global styles, _styled-components_ v4 [`createGlobalStyle`][stc-docs-api-cgs] API is used to create a `<GlobalStyle>` component to inject various styles globally.

##### Global Themes

To [provide the global theme][stc-docs-theming], the [`ThemeProvider`][stc-docs-api-thp] component has been added to the _Nord Docs_ [`Root` core container component][gh-36]. The global theme is now passed to the provider.

##### Simplified Theme Usage

To simplify the usage of _styled-theming's_ [`theme()`][gh-stth-api-th] and `theme.variants()` API functions, two utility functions have been implemented:

- `themeMode(modeStyles : object)` — Shorthand function for the `theme` API to define styles based on the global theme mode(s).
- `themedModeVariant(modeStyles : object, variantPropName : string)` — Shorthand function for the `theme.variants` API to define variant styles based on the global theme mode(s).

##### Available Themes

Initially _Nord Docs_ will be build with the “bright snow flurry” and “dark night frost” _theme modes_. The names have been implemented as constants with values `BRIGHT_SNOW_FLURRY` and `DARK_NIGHT_FROST` that are used with the utility functions mentioned above to define the styles of a component for each available global theme.

##### Plugins

[_styled-components_ great Babel plugin][stc-docs-tool-babel] adds support for server-side rendering, minification of styles, and a nicer debugging experience. It has been integrated via the [corresponding Gatsby's plugin][npm-gatsby-plugin-styled-components].

##### Nord Colors

Since the main [JavaScript implementation of Nord][gh-nord-36] is currently not completed and released yet, the colors and palettes have been provided "manually" via the `nord` and `palettes` modules. As soon as the implementation has been done they will be replaced through imports from the official package.

##### Motion

Some basic configurations for motion related styles like animations have been implemented, inspired by [Material Designs][md] great documentation and guide about [motion speed][md-motion-speed]. This includes values for speed like transition durations for the global theme modes. It'll be used to set the CSS transition for the base background and font color within the `globals` CSS style module.

<p align="center"><img src="https://user-images.githubusercontent.com/7836623/49328407-a4832300-f570-11e8-8613-21c78267b558.png" width="20%" /></p>

**Theme Mode Context** — #57 ⇄ #58 (⊶ 86edb920)
↠ Implemented a [`React.Context` provider and consumer][react-docs-context] for the global theme modes. It provides the name of the currently active theme and a function to toggle through available themes.

##### Context Provider & Consumer

Both the context consumer and provider components have been implemented in the [`Root` core container component][gh-36]. The consumer is exported and can then be imported in any component to consume the provided values.

The `Root` component has beene changed from a SFC to a class component to store the currently active state and handle the theme mode toggle logic through a function. It migrated the currently used simple [styled-component theme][stc-docs-theming] (provided through the `<ThemeProvider` component) to the [styled-theming theme][gh-styled-theming] that provides the initially implemented theme (#53).

##### Session Storage

To persist the current active theme mode when changing the route (which unmounts the `Root` component and therefore resets the state), the value is written to the browser's [session storage][mdn-ss]. The storage type has been preferred over the [local storage][mdn-ls] since this would persist the active theme mode even when the user closes the tab, but the desired behavior is to optimize the site for the “bright snow flurry” aura theme mode that is set as default theme.

To simplify the read- and write handling as well as prevent possible errors due to wrong storage keys, two utility functions have also been implemented:

- `readSessionCache(key : string)` — Reads the value of the given key from the session storage (if available).
- `writeSessionCache(key : string, value : any)` — Writes the given key-value pair to the session storage (if available).

**Theme Global Base Styles** — #59 ⇄ #60 (⊶ 2c545da1)
↠ Implemented some basic theme styles like font and background colors. They are initially used in the global theme styles implemented in #53. This includes a transition for both attributes (`background-color` and `color`) to ensure a smooth theme mode transition.

# 0.1.0

![Release Date: 2018-11-29](https://img.shields.io/badge/Release_Date-2018--11--29-88c0d0.svg?style=flat-square&colorA=4c566a) [![Project Board](https://img.shields.io/badge/Project_Board-0.1.0-88c0d0.svg?style=flat-square&colorA=4c566a&logo=github&logoColor=eceff4)](https://github.com/arcticicestudio/nord-docs/projects/3) [![Milestone](https://img.shields.io/badge/Milestone-0.1.0-88c0d0.svg?style=flat-square&colorA=4c566a&logo=github&logoColor=eceff4)](https://github.com/arcticicestudio/nord-docs/milestone/1)

This is the initial release version of _Nord Docs_.
It represents the basic project setup, structure and development workflow with an deployable state. There are many initial implementations and configurations for the documented design concepts. They are covered in the following sections of this version changelog to introduce used technologies and explain why several decisions have been made.

To get an overview of the general project plan, read the [“Design Concept & Initial Launch Plan”][gh-1] documentation which describes the project's justification, it's goals, the architecture, the tech stack and the “UI Design & Branding“ concept.

## Features

### Basic Project Setup

<p align="center"><img src="https://upload.wikimedia.org/wikipedia/commons/d/db/Npm-logo.svg?sanitize=true" width="100" /></p>

**NPM configuration file** — #4 (⊶ f4df27cb)
↠ Added the [NPM `.npmrc` file][npm-docs-rc] to ensure specific configurations are set project-wide for all core team members and contributors. This includes the usage of the [lockfile][npm-docs-lock] and exact (dev)dependency package versions.

<p align="center"><img src="https://upload.wikimedia.org/wikipedia/commons/e/e0/Git-logo.svg" width="100" /></p>

**Git mail mapping** — #9 (⊶ e5629109)
↠ Added a Git [mailmap][git-docs-mailmap] file to link to in documentations and allow contributors to send mails regarding security issues. This prevents unnecessary overhead of updating all documents when new core team and members and contributors are added and additionally adds the main functionality of the file: Mapping commits when someone uses a different email address.

<p align="center"><img src="https://editorconfig.org/logo.png" width="100" /></p>

**EditorConfig** — #11 (⊶ 4fa30ce4)
↠ Added the [EditorConfig][] file to define and maintain consistent coding styles between different editors and IDEs.

<p align="center"><img src="https://user-images.githubusercontent.com/7836623/49230107-35ca8c00-f3ef-11e8-9e83-6f4e5f1fcbfe.png" width="100" /></p>

**GitHub code owners** — #7 (⊶ 05ded0c2)
↠ Adapted to GitHub's [code owners][gh-blog-intro-code-owners] feature to define matching pattern for project paths to automatically add all required reviewers of the core team and contributors to new PRs. Read the [GitHub Help article][gh-help-code-owners] for more details.

![](https://user-images.githubusercontent.com/2513/27803645-87c9a9c8-5ff8-11e7-91d7-2fa0718e6871.png)

![](https://user-images.githubusercontent.com/2513/27803663-a4bb073e-5ff8-11e7-9c45-2c3cbdc999cd.png)

![](https://user-images.githubusercontent.com/2513/27803610-544ba222-5ff8-11e7-9313-e4062315fb0c.png)

<p align="center"><img src="https://opensource.guide/assets/images/illos/beginners.svg?sanitize=true" width="200" /></p>

**GitHub Open Source community standards** — #8 ⇄ #12 (⊶ 262f731e)
↠ Inspired _Nord Docs_ project philosophy using GitHub's features for [recommended community standards][gh-blog-intro-comm-tools]. It adheres to the great [Open Source Guides][ossg] and adapted to the recommendations to complete the projects [community profile][gh-community-profile].

<p align="center"><img src="https://opensource.guide/assets/images/illos/coc.svg?sanitize=true" width="200" /></p>

To facilitate a healthy and constructive community behavior, _Nord Docs_ also introduced and enforces a [code of conduct][gh-help-coc].
Read the [GitHub Help article][gh-help-coc] for more details about the provided integrations.

The added [contribution guidelines][gh-blog-intro-contrib-gl] help to build a community that [encourages people to use, contribute to][ossg-contrib], and evangelize the project.

<p align="center"><img src="https://opensource.guide/assets/images/illos/contribute.svg?sanitize=true" width="200" /></p>

It includes sections about

- how to get started
- bug reports
- enhancement suggestions
- pull requests
- style guides
  - [JavaScript Style Guide][gh-styleguide-js]
  - [Markdown Style Guide][gh-styleguide-md]
  - [Git Style Guide][gh-styleguide-git]
- credits

Read the [GitHub introduction blog post][gh-blog-intro-contrib-gl] and the [GitHub Help article][gh-help-contrib-gl] for more details about the provided integrations.

**GitHub issue and pull request templates** — #10 ⇄ #13 (⊶ c3c7b8af)
↠ Integrated GitHub's feature to define [multiple issue templates][gh-blog-multi-issue-templ] while the [initial template file][gh-blog-intro-issue-templ] is used as a fallback/generic template to link to the specific ones.

<p align="center"><img src="https://user-images.githubusercontent.com/7321362/35420642-8e5271e2-01f3-11e8-8109-0d21ddb89011.png" width="80%" /></p>

<p align="center"><img src="https://blog.github.com/assets/img/2018-04-30-issue-templates/new-issue-page-with-multiple-templates.png" width="80%" /></p>

Read the [GitHub Help article][gh-help-issue-templ] for more details about issue and pull request templates. Also check out how to manually create [issue templates][gh-help-pr-templ], a [pull request template][gh-help-issue-templ-repo]. and the guide on [how to create the (deprecated) fallback/generic issue template][gh-help-issue-templ-depr].

<p align="center"><img src="https://raw.githubusercontent.com/remarkjs/remark-lint/02295bc/logo.svg?sanitize=true" width="100" /></p>

**Introducing _remark-lint_** — #14 ⇄ #19 (⊶ 1d2959ca)
↠ Integrated [remark-lint][gh-remark-lint], a linter built on [remark][], the powerful Markdown processor powered by plugins such as remark-lint.
It is used through [remark-cli][npm-remark-cli] with [remark-preset-lint-arcticicestudio][gh-remark-preset-lint-arcticicestudio], the custom preset that implements the [Arctic ice Studio Markdown Style Guide][styleguide-markdown].

To lint all Markdown sources within the project the `lint:md` NPM script has been added which will be picked up by the main `lint` script.

<p align="center"><img src="https://user-images.githubusercontent.com/7836623/48658871-4707b600-ea49-11e8-8a08-39e1a318c442.png" width="400" /></p>

**Introducing _ESLint_** — #15 ⇄ #20 (⊶ d4bd7833)
↠ Integrated [ESLint][], the pluggable and de-facto standard linting utility for JavaScript using the configuration preset [eslint-config-arcticicestudio][gh-eslint-config-arcticicestudio] which implements the [Arctic Ice Studio JavaScript Style][styleguide-javascript].
Read #15 for more details about the configuration and setup as well as included plugins.

To lint all JavaScript sources within the project the `lint:js` NPM script has been added which will be picked up by the main `lint` script. The second script `format:js` allows to make use of ESLint's great [auto-fixing][eslint-docs-auto-fix] feature.

<p align="center"><img src="https://user-images.githubusercontent.com/7836623/48644231-4556d780-e9e2-11e8-862e-e8ce630fd0ba.png" width="100" /></p>

**Introducing _Prettier_** — #16 ⇄ #21 (⊶ 39af1daf)
↠ Integrated [Prettier][], the opinionated code formatter with support for many languages and integrations with most editors. It ensures that all outputted code conforms to a consistent style and provides the best and recommended style configurations of-out-the-box™.
Read #16 for more details about the configuration and setup as well as included plugins.

To format all compatible sources within the project the `format:pretty` NPM script has been added which will be picked up by the main `format` script.

<p align="center"><img src="https://user-images.githubusercontent.com/7836623/48658851-01e38400-ea49-11e8-911e-d859eefe6dd5.png" width="100" /></p>

**Introducing _lint-staged_** — #17 ⇄ #22 (⊶ 6ab10911)
↠ Integrated [lint-staged][gh-lint-staged] to run linters against staged Git files and prevent adding code that violates any style guide into the code base.

Read #17 for more details about the configuration and setup.

<p align="center"><img src="https://user-images.githubusercontent.com/7836623/48658801-30ad2a80-ea48-11e8-9323-16bb0b25002b.png" width="100" /></p>

**Introducing _Husky_** — #18 ⇄ #23 (⊶ 16e90c34)
↠ Integrated [Husky][gh-husky], the tool that make Git hooks easy and can prevent bad Git commits, pushes and more _woof_!

Read #18 for more details about the configuration and setup.

**Project repository README** — #49 (⊶ f8561505)
↠ Wrote the project's repository README that initially contains the hero and various badges provided by the great [shields.io][] project. Further documentations about the design concept, architecture and technologies as well as guides for contributions to develop, run and maintain the project will be documented within the docs itself. Minimal instructions might be added later on within a “Getting Started” / “Quick Start” section.

<p align="center"><img src="https://user-images.githubusercontent.com/7836623/48669288-c5c02a00-eb01-11e8-8dc9-00142b4abce1.png" width="200" /></p>

### Design Concept: JAMstack

The following sections include details about implemented requirements for the three key criteria of the [“JAMstack” design concept][gh-24].

<p align="center"><img src="https://user-images.githubusercontent.com/74381/34074079-93ac0420-e25c-11e7-9c0a-642986b2aa58.png" width="200"/></p>

The [“Gatsby” design concept][gh-25] defines process steps and aspects for the static site generator that is used to build _Nord Docs_ like the Gatsby core configuration, Gatsby API implementations, required Gatsby plugins, custom configurations for [Babel][] and [Webpack][] and many more.

**Gatsby initial configuration** — #27 ⇄ #28 (⊶ 3cda2621)
↠ Initially implemented the [core configuration of Gatsby][gatsby-docs-config] through the `gatsby-config.js` file. It defines project-wide site metadata that can be used through the GraphQL API and configures all used plugins.

Read #27 for more details about the configuration and setup as well as included plugins. There have also been some tickets for bug fixe

<p align="center"><img src="https://user-images.githubusercontent.com/7836623/48694124-c3ca9980-ebdb-11e8-9cc3-1379d9ed4a20.png" width="100"/></p>

**Babel configuration** — #29 ⇄ #30 (⊶ b288befb)
↠ Implemented the configuration for [Babel][] even when Gatsby comes with an already optimized setup to create SSR “static” websites and apps, but there are also use cases that require to modify and extend this configuration to e.g. add a new Babel [plugin for the latest syntax feature/proposal][babel-docs-plug] support.

Read #29 for more details about the configuration and setup as well as included plugins.

<p align="center"><img src="https://user-images.githubusercontent.com/7836623/48711809-761a5500-ec0c-11e8-8ba7-dc4acbd5d64c.png" width="100"/></p>

**Webpack configuration** — #31 ⇄ #32 (⊶ 7734d052)
↠ Implemented the configuration for [Webpack][] to add useful production bundle plugins and development workflow optimizations by using Gatsby's [Node API][gatsby-docs-api-node].

Read #31 for more details about the configuration and setup as well as included plugins.

<p align="center"><img src="https://user-images.githubusercontent.com/7836623/48669377-c0fc7580-eb03-11e8-82e8-4853fb0ed52c.png" width="100" /></p>

**Introduce React** — #33 (⊶ 24aecae9)
↠ Initially added [React's][react] currently latest stable [version 16.6.3][npm-react-v16.6.3]. Since Gatsby v2, [React][npm-react] and [React DOM][npm-react-dom] are a peer dependencies which allows users to freely choose the version they'd like to use.

**Introduce React “prop-types”** — #35 (⊶ 4fe54731)
↠ To support type validation and checking, _Nord Docs_ initially uses [React prop types][react-docs-typecheck-pt] through the [prop-types][npm-prop-types] package. This technique is sufficient for the beginning of the project and might be revised and refactored later on by migrating to [TypeScript][] or integrating [Flow][].

<p align="center"><img src="https://user-images.githubusercontent.com/7836623/48676311-39475300-eb65-11e8-9654-16c24c1c9a94.png" width="100"/></p>

### Design Concept: Component & Project Structure

The following sections include details about implemented requirements for the [“Component & Project Structure” design concept][gh-26].

**Implemented the `Root` core container component (data provider)** — #36 ⇄ #37 (⊶ 0465f375)
↠ The `Root` core container is the first and one of the important main data provider React components of this project. It represents the base element and entry point that wraps the all custom application components and serves as a data provider later on. Some of the tasks in the future will be to

- provide context _props_ and functions for the global [styled-components][] theme through the [`ThemeProvider`][stc-docs-thprov] component
- inject global styles through _styled-components_ [`createglobalstyle`][stc-docs-globstyle] function including typography (#2) related data like application-wide used fonts
- possibly data stores for state management libraries like [MobX][]

This initial implementation only renders a `React.Fragment`.

<p align="center"><img src="https://user-images.githubusercontent.com/7836623/48822935-24ceaa80-ed5f-11e8-8328-eec53dfc68f9.png" width="100"/></p>

### Design Concept: Testing

The following sections include details about implemented requirements for the [“Testing” design concept][gh-38].

**Set up the basic testing setup** — #39 ⇄ #42 (⊶ 7a4d356c)
↠ To start writing tests the basic testing environment has been set up. This includes the [Gatsby specific configurations][gatsby-docs-testing], the base setup for [Jest][] as well as the fantastic [react-testing-library][gh-rtl] and [just-dom's custom matchers][gh-jest-dom-matcher].

Read #39 for more details about the configuration and setup as well as included plugins.

<p align="center"><img src="https://user-images.githubusercontent.com/7836623/48966346-26eb7000-efd0-11e8-818b-80035dd538ca.png" width="100"/></p>

### Design Concept: Continuous Integration & Testing

The following sections include details about implemented requirements of the workflow for the [“Continuous Integration & Testing” design concept][gh-43].

**Basic continuous integration & testing setup** — #44 ⇄ #45 (⊶ 2d0000e3)
↠ To ensure a great project quality, the stable and proven continuous integration & testing providers [Circle CI][circleci] and [Codecov][] have been set up to automate the CI process pipelines and provide code coverage reports.

Read #44 for more details about the configuration and setup as well as available automated pipelines.

<p align="center"><img src="https://user-images.githubusercontent.com/7836623/48661237-35d1a000-ea6f-11e8-8e16-f48948969be6.png" width="100" /></p>

### Design Concept: Hosting & Continuous Deployment

The following sections include details about implemented requirements of the workflow for the [“Hosting & Continuous Deployment” design concept][gh-46].

**Basic [Netlify][] configuration** — #48 (⊶ f03dc824)
↠ Implemented [Netlify's configuration file][netlify-docs-toml-ref] to define the `command` and `publish` path for production builds.

Read #48 and the design concept for more details about the configuration and setup as well as automated deployment pipelines.

## Bug Fixes

**Added missing “React Helmet” dependency** — #34 (⊶ b63bab36)
↠ Implemented the configuration for [Babel][] even when Gatsby comes with an already optimized setup to create SSR “static” websites and apps, but there are also use cases that require to modify and extend this configuration to e.g. add a new Babel [plugin for the latest syntax feature/proposal][babel-docs-plug] support.

During the initial implementation of Gatsby (#27) the [gatsby-plugin-react-helmet][npm-gatsby-plugin-react-helmet] has been added, but the required [react-helmet][npm-react-helmet] main package was accidentally forgotten to be added too.

**Fix invalid Webpack resolve alias for `pages`** — #40 (⊶ d2e72e39)
↠ Fixed the [Webpack resolve alias][webpack-docs-resv-alias] `pages` for Gatsby pages that was configured to the invalid `src/components/pages` path instead of the correct `src/pages` path.

**Fixed overridden ESLint `import/no-extraneous-dependencies` rule** — #41 (⊶ 7eccff4b)
↠ The [import/no-extraneous-dependencies][eslint-p-import/no-extraneous-dependencies] rule allows to define a array of glob pattern that are allowed to define import `devDependencies`. In #15 the rule was overridden to include the project specific path `**/.gatsby/**` which whitelists all Gatsby specific scripts. Unfortunately this removed all glob pattern defined in the used [eslint-config-arcticicestudio][npm-eslint-config-arcticicestudio] (rule is defined in the `-base` package) resulting in errors in other projects paths like tests.
It has been fixed by importing the paths defined in the preset from the [eslint-config-arcticicestudio-base][npm-eslint-config-arcticicestudio-base] package and merge it with the additional `**/.gatsby/**` path.

## Tasks

<p align="center"><img src="https://upload.wikimedia.org/wikipedia/commons/d/db/Npm-logo.svg?sanitize=true" width="100" /></p>

**NPM package initialization** — #3 (⊶ ff99b861)
↠ Initialized the [NPM `package.json` file][npm-docs-pkg] that contains the project's metadata and dependency definitions.

**Dependency update including security incident** — #47 (⊶ 43204f06)
↠ Performed the first regular batch update for outdated dependencies that includes an important update since it for the hijacked package [event-stream][npm-event-stream] that [includes malicious code which has been revealed yesterday][snyk-blog-malicious-event-stream]. _Nord Docs_ was affected passively because the package was a traverse dependency of the used package [npm-run-all][npm-npm-run-all]. The maintainer has reacted quickly and released the fix version [4.1.5][gh-npm-run-all-rln-4.1.5].

Note that packages marked with an double exclamation mark `‼` have been affected by the security incident!

###### Production Dependencies

- gatsby `2.0.50` ➔ `2.0.55`
- gatsby-source-filesystem `2.0.8` ➔ `2.0.9`

###### Development Dependencies

- husky `1.1.4` ➔ `1.2.0`
- lint-staged `8.0.5` ➔ `8.1.0`
- ‼ npm-run-all `4.1.3` ➔ `4.1.50`

<p align="center"><img src="https://opensource.org/files/osi_symbol.png" width="100" /></p>

**MIT license** — #5 (⊶ a6b4e4e1)
↠ Added the `LICENSE.md` file for the [MIT license][mit-lic].

<p align="center"><img src="https://upload.wikimedia.org/wikipedia/commons/e/e0/Git-logo.svg" width="100" /></p>

**Git ignore and attribute pattern** — #6 (⊶ 6b265454)
↠ Added the [`.gitattributes`][git-docs-gitattributes] and [`.gitignore`][git-docs-gitignore] configuration files to define the pattern.

**Using `binary` Git attribute for “Adobe Illustrator” artwork project files** — #50 (⊶ f524be00)
↠ [“Adobe Illustrator“][wikip-ai] `.ai` artwork project files have been changed to be handled with the `binary` Git attribute instead of “normal” plain text to prevent encoding problems and noisy diff views.

---

<!--
+------------------+
+ Symbol Reference +
+------------------+
↠ (U+21A0): Start of a log section description
— (U+2014): Separator between a log section title and the metadata
⇄ (U+21C4): Separator between a issue ID and pull request ID in a log metadata
⊶ (U+22B6): Icon prefix for the short commit SHA checksum in a log metadata
-->

<!-- lint disable final-definition -->

<!-- Base Links -->

[/r/nordtheme]: https://www.reddit.com/r/nordtheme
[babel-docs-plug]: https://babeljs.io/docs/en/plugins
[babel]: https://babeljs.io
[circleci-docs-env]: https://circleci.com/docs/2.0/env-vars
[circleci]: https://circleci.com
[codecov]: https://codecov.io
[cra]: https://facebook.github.io/create-react-app
[discord]: https://discordapp.com
[dotenv]: https://github.com/motdotla/dotenv
[editorconfig]: https://editorconfig.org
[env-dev-landing-ports]: https://develop.nordtheme.com/#ports
[eslint-docs-auto-fix]: https://eslint.org/docs/user-guide/command-line-interface#fixing-problems
[eslint-p-import/no-extraneous-dependencies]: https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-extraneous-dependencies.md
[eslint-p-react/jsx-no-bind]: https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-bind.md
[eslint]: https://eslint.org
[eva-icons]: https://akveo.github.io/eva-icons
[flow]: https://flow.org
[ga-mark]: https://marketingplatform.google.com/about/analytics
[gatsby-docs-404]: https://www.gatsbyjs.org/docs/add-404-page
[gatsby-docs-api-node-cps]: https://www.gatsbyjs.org/docs/node-apis/#createPages
[gatsby-docs-api-node-ocn]: https://www.gatsbyjs.org/docs/node-apis/#onCreateNode
[gatsby-docs-api-node]: https://www.gatsbyjs.org/docs/node-apis
[gatsby-docs-conf-mapping]: https://www.gatsbyjs.org/docs/gatsby-config/#mapping-node-types
[gatsby-docs-config]: https://gatsbyjs.org/docs/gatsby-config
[gatsby-docs-env]: https://www.gatsbyjs.org/docs/environment-variables
[gatsby-docs-gql]: https://www.gatsbyjs.org/docs/querying-with-graphql
[gatsby-docs-images]: https://www.gatsbyjs.org/docs/working-with-images
[gatsby-docs-link]: https://www.gatsbyjs.org/docs/gatsby-link
[gatsby-docs-seo]: https://www.gatsbyjs.org/docs/seo
[gatsby-docs-stq]: https://www.gatsbyjs.org/docs/static-query
[gatsby-docs-testing]: https://www.gatsbyjs.org/docs/testing
[gatsby-docs-usestq]: https://www.gatsbyjs.org/docs/use-static-query
[gdev-fund-wamf]: https://developers.google.com/web/fundamentals/web-app-manifest
[gdev-ga-gtag]: https://developers.google.com/analytics/devguides/collection/gtagjs
[gdev-tm]: https://developers.google.com/tag-manager
[gdev-web-fund-rwd]: https://developers.google.com/web/fundamentals/design-and-ux/responsive
[gdev-web-pwa]: https://developers.google.com/web/progressive-web-apps
[gf-rubik]: https://fonts.google.com/specimen/Rubik
[gf-source-code-pro]: https://fonts.google.com/specimen/Source+Code+Pro
[gfm]: https://github.github.com/gfm
[gh-1]: https://github.com/arcticicestudio/nord-docs/issues/1
[gh-100]: https://github.com/arcticicestudio/nord-docs/issues/100
[gh-101]: https://github.com/arcticicestudio/nord-docs/issues/101
[gh-105]: https://github.com/arcticicestudio/nord-docs/issues/105
[gh-106]: https://github.com/arcticicestudio/nord-docs/issues/106
[gh-109]: https://github.com/arcticicestudio/nord-docs/issues/109
[gh-110]: https://github.com/arcticicestudio/nord-docs/issues/110
[gh-112]: https://github.com/arcticicestudio/nord-docs/issues/112
[gh-115]: https://github.com/arcticicestudio/nord-docs/issues/112
[gh-117]: https://github.com/arcticicestudio/nord-docs/issues/117
[gh-119]: https://github.com/arcticicestudio/nord-docs/issues/119
[gh-129]: https://github.com/arcticicestudio/nord-docs/issues/129
[gh-2]: https://github.com/arcticicestudio/nord-docs/issues/2
[gh-24]: https://github.com/arcticicestudio/nord-docs/issues/24
[gh-25]: https://github.com/arcticicestudio/nord-docs/issues/25
[gh-26]: https://github.com/arcticicestudio/nord-docs/issues/26
[gh-36]: https://github.com/arcticicestudio/nord-docs/issues/36
[gh-38]: https://github.com/arcticicestudio/nord-docs/issues/38
[gh-43]: https://github.com/arcticicestudio/nord-docs/issues/43
[gh-46]: https://github.com/arcticicestudio/nord-docs/issues/46
[gh-51]: https://github.com/arcticicestudio/nord-docs/issues/51
[gh-52]: https://github.com/arcticicestudio/nord-docs/issues/52
[gh-54]: https://github.com/arcticicestudio/nord-docs/issues/54
[gh-57]: https://github.com/arcticicestudio/nord-docs/issues/57
[gh-59]: https://github.com/arcticicestudio/nord-docs/issues/59
[gh-63]: https://github.com/arcticicestudio/nord-docs/issues/63
[gh-64]: https://github.com/arcticicestudio/nord-docs/issues/64
[gh-65]: https://github.com/arcticicestudio/nord-docs/issues/65
[gh-66]: https://github.com/arcticicestudio/nord-docs/issues/66
[gh-69]: https://github.com/arcticicestudio/nord-docs/issues/69
[gh-70]: https://github.com/arcticicestudio/nord-docs/issues/70
[gh-74]: https://github.com/arcticicestudio/nord-docs/issues/74
[gh-78]: https://github.com/arcticicestudio/nord-docs/issues/78
[gh-84]: https://github.com/arcticicestudio/nord-docs/issues/84
[gh-86]: https://github.com/arcticicestudio/nord-docs/issues/86
[gh-87]: https://github.com/arcticicestudio/nord-docs/issues/87
[gh-89]: https://github.com/arcticicestudio/nord-docs/issues/89
[gh-91]: https://github.com/arcticicestudio/nord-docs/issues/91
[gh-94]: https://github.com/arcticicestudio/nord-docs/issues/94
[gh-96]: https://github.com/arcticicestudio/nord-docs/issues/96
[gh-98]: https://github.com/arcticicestudio/nord-docs/issues/98
[gh-arcland]: https://github.com/arcticicestudio/arctic-landscape
[gh-arcocfrac]: https://www.npmjs.com/package/arctic-ocean-fractal
[gh-axios]: https://github.com/axios/axios
[gh-babel-plugin-lodash]: https://github.com/lodash/babel-plugin-lodash
[gh-bsl]: https://github.com/willmcpo/body-scroll-lock
[gh-community-profile]: https://github.com/arcticicestudio/nord-docs/community
[gh-date-fns]: https://github.com/date-fns/date-fns
[gh-eslint-config-arcticicestudio]: https://github.com/arcticicestudio/eslint-config-arcticicestudio
[gh-gatsby-image]: https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-image
[gh-gatsby-mdx]: https://github.com/ChristopherBiscardi/gatsby-mdx
[gh-gatsby-p-lodash]: https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-plugin-lodash
[gh-gatsby-p-sharp]: https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-plugin-sharp
[gh-gatsby-p-wps]: https://github.com/axe312ger/gatsby-plugin-webpack-size
[gh-gatsby-s-graphql]: https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-source-graphql
[gh-gatsby-t-sharp]: https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-transformer-sharp
[gh-help-coc]: https://help.github.com/articles/adding-a-code-of-conduct-to-your-project
[gh-help-code-owners]: https://help.github.com/articles/about-codeowners
[gh-help-contrib-gl]: https://help.github.com/articles/setting-guidelines-for-repository-contributors
[gh-help-issue-templ-depr]: https://help.github.com/articles/manually-creating-a-single-issue-template-for-your-repository
[gh-help-issue-templ-repo]: https://help.github.com/articles/creating-issue-templates-for-your-repository
[gh-help-issue-templ]: https://help.github.com/articles/about-issue-and-pull-request-templates
[gh-help-pr-templ]: https://help.github.com/articles/creating-a-pull-request-template-for-your-repository
[gh-husky]: https://github.com/typicode/husky
[gh-jest-dom-matcher]: https://github.com/gnapse/jest-dom#custom-matchers
[gh-jsc]: https://github.com/styled-components/jest-styled-components
[gh-lint-staged]: https://github.com/okonet/lint-staged
[gh-lodash-webpack-plugin]: https://github.com/lodash/lodash-webpack-plugin
[gh-lovell/sharp]: https://github.com/lovell/sharp
[gh-mdx-spec]: https://github.com/mdx-js/specification
[gh-react-helmet]: https://github.com/nfl/react-helmet
[gh-remark-lint]: https://github.com/remarkjs/remark-lint
[gh-remark-preset-lint-arcticicestudio]: https://github.com/arcticicestudio/remark-preset-lint-arcticicestudio
[gh-rtl]: https://github.com/kentcdodds/react-testing-library
[gh-rw]: https://github.com/brigade/react-waypoint
[gh-sp]: https://github.com/GoogleChromeLabs/size-plugin
[gh-styleguide-git]: https://github.com/arcticicestudio/styleguide-git
[gh-styleguide-js]: https://github.com/arcticicestudio/styleguide-javascript
[gh-styleguide-md]: https://github.com/arcticicestudio/styleguide-markdown
[gh-sue]: https://github.com/yahoo/subscribe-ui-event
[git-crypt]: https://github.com/AGWA/git-crypt
[git-docs-gitattributes]: https://git-scm.com/docs/gitattributes
[git-docs-gitignore]: https://git-scm.com/docs/gitignore
[git-docs-mailmap]: https://git-scm.com/docs/git-shortlog#_mapping_authors
[gpg]: https://www.gnupg.org
[inter-ui]: https://rsms.me/inter
[jest]: https://jestjs.io
[json-ld]: https://json-ld.org
[kb-chat-nord]: https://keybase.io/team/nord.chat
[lodash]: https://lodash.com
[md-com-es]: https://material.io/design/communication/empty-states.html
[md-motion-speed]: https://material.io/design/motion/speed.html
[md]: https://material.io
[mdn-button]: https://developer.mozilla.org/de/docs/Web/HTML/Element/button
[mdn-css-bs]: https://developer.mozilla.org/en-US/docs/Web/CSS/border-style
[mdn-flexbox]: https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox
[mdn-grids]: https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Grids
[mdn-html-el-a]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a
[mdn-html-el-cs]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element#Content_sectioning
[mdn-html-el-h]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Heading_Elements
[mdn-html-el-inl-txt-sem]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element#Inline_text_semantics
[mdn-html-el-main]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/main
[mdn-html-el-p]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/p
[mdn-html-el-sec]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/section
[mdn-html-el-tc]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element#Text_content
[mdn-ls]: https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage
[mdn-mq]: https://developer.mozilla.org/de/docs/Web/CSS/Media_Queries/Using_media_queries
[mdn-ss]: https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage
[mdn-web-mf]: https://developer.mozilla.org/en-US/docs/Web/Manifest
[mdx-docs-provider]: https://mdxjs.com/getting-started/#mdxprovider
[mdx]: https://mdxjs.com
[mit-lic]: https://opensource.org/licenses/MIT
[mobx]: https://mobx.js.org
[netlify-docs-env]: https://www.netlify.com/docs/continuous-deployment/#build-environment-variables
[netlify-docs-func]: https://www.netlify.com/docs/functions
[netlify-docs-headers]: https://www.netlify.com/docs/headers-and-basic-auth
[netlify-docs-rd]: https://www.netlify.com/docs/redirects
[netlify-docs-toml-ref]: https://www.netlify.com/docs/netlify-toml-reference
[netlify]: https://www.netlify.com
[npm-docs-lock]: https://docs.npmjs.com/files/package-locks
[npm-docs-pkg]: https://docs.npmjs.com/files/package.json
[npm-docs-rc]: https://docs.npmjs.com/files/npmrc
[npm-eslint-config-arcticicestudio-base]: https://www.npmjs.com/package/eslint-config-arcticicestudio-base
[npm-eslint-config-arcticicestudio]: https://www.npmjs.com/package/eslint-config-arcticicestudio
[npm-eslint-react-hooks]: https://www.npmjs.com/package/eslint-plugin-react-hooks
[npm-gatsby-plugin-react-helmet]: https://www.npmjs.com/package/gatsby-plugin-react-helmet
[npm-npm-run-all]: https://www.npmjs.com/package/npm-run-all
[npm-prop-types]: https://www.npmjs.com/package/prop-types
[npm-react-dom]: https://www.npmjs.com/package/react-dom
[npm-react-helmet]: https://www.npmjs.com/package/react-helmet
[npm-react]: https://www.npmjs.com/package/react
[npm-remark-cli]: https://www.npmjs.com/package/remark-cli
[ogp]: http://ogp.me
[ossg-contrib]: https://opensource.guide/how-to-contribute
[ossg]: https://opensource.guide
[polished]: https://polished.js.org
[prettier]: https://prettier.io
[react-docs-context]: https://reactjs.org/docs/context.html
[react-docs-hooks-ch]: https://reactjs.org/docs/hooks-custom.html
[react-docs-hooks-roh]: https://reactjs.org/docs/hooks-rules.html
[react-docs-hooks]: https://reactjs.org/docs/hooks-intro.html
[react-docs-typecheck-pt]: https://reactjs.org/docs/typechecking-with-proptypes.html
[react-pose]: https://popmotion.io/pose
[react-spring-basic]: https://www.react-spring.io/docs/hooks/basics
[react-spring-ex]: https://www.react-spring.io/docs/hooks/examples
[react-spring]: https://www.react-spring.io
[react]: https://reactjs.org
[remark]: https://remark.js.org
[schema.org]: https://schema.org
[slack-ais]: https://arcticicestudio.slack.com
[spectrum-ais]: https://spectrum.chat/arcticicestudio
[spectrum-nord]: https://spectrum.chat/arcticicestudio
[stc-docs-globstyle]: https://www.styled-components.com/docs/api#createglobalstyle
[stc-docs-mqt]: https://www.styled-components.com/docs/advanced#media-templates
[stc-docs-thprov]: https://www.styled-components.com/docs/api#themeprovider
[stc-docs-tooling-jest]: https://www.styled-components.com/docs/tooling#jest-integration
[stof-nord-tagged]: https://stackoverflow.com/questions/tagged/nord+or+nordtheme
[styled-components]: https://styled-components.com
[styleguide-javascript]: https://arcticicestudio.github.io/styleguide-javascript
[styleguide-markdown]: https://arcticicestudio.github.io/styleguide-markdown
[svgr]: https://www.smooth-code.com/open-source/svgr
[tw-docs-cards]: https://developer.twitter.com/en/docs/tweets/optimize-with-cards/guides/getting-started.html
[typescript]: https://www.typescriptlang.org
[w3-spec-mf]: https://www.w3.org/TR/appmanifest
[webpack-docs-resv-alias]: https://webpack.js.org/configuration/resolve/#resolve-alias
[webpack]: https://webpack.js.org
[wiki-404]: https://en.wikipedia.org/wiki/HTTP_404
[wiki-pwa]: https://en.wikipedia.org/wiki/Progressive_web_applications
[wiki-robotstxt]: https://en.wikipedia.org/wiki/Robots_exclusion_standard
[wiki-sitemap]: https://en.wikipedia.org/wiki/Site_map
[workbox]: https://developers.google.com/web/tools/workbox

<!-- v0.1.0 -->

[gh-blog-intro-code-owners]: https://github.com/blog/2392-introducing-code-owners
[gh-blog-intro-comm-tools]: https://github.com/blog/2380-new-community-tools
[gh-blog-intro-contrib-gl]: https://github.com/blog/1184-contributing-guidelines
[gh-blog-intro-issue-templ]: https://blog.github.com/2016-02-17-issue-and-pull-request-templates
[gh-blog-multi-issue-templ]: https://blog.github.com/2018-01-25-multiple-issue-and-pull-request-templates
[gh-npm-run-all-rln-4.1.5]: https://github.com/mysticatea/npm-run-all/releases/tag/v4.1.5
[npm-event-stream]: https://www.npmjs.com/package/event-stream
[npm-react-v16.6.3]: https://www.npmjs.com/package/react/v/16.6.3
[shields.io]: https://shields.io
[snyk-blog-malicious-event-stream]: https://snyk.io/blog/malicious-code-found-in-npm-package-event-stream
[wikip-ai]: https://en.wikipedia.org/wiki/Adobe_Illustrator_Artwork

<!-- v0.2.0 -->

[gf]: https://fonts.google.com
[gh-modern-normalize]: https://github.com/sindresorhus/modern-normalize
[gh-nord-36]: https://github.com/arcticicestudio/nord/issues/36
[gh-stth-api-th]: https://github.com/styled-components/styled-theming#themename-values
[gh-styled-theming]: https://github.com/styled-components/styled-theming
[modularscale-majorsecond]: https://www.modularscale.com/?1&em&1.125
[npm-gatsby-plugin-styled-components]: https://www.npmjs.com/package/gatsby-plugin-styled-components
[npm-inter-ui]: https://www.npmjs.com/package/inter-ui
[npm-styled-modern-normalize]: https://www.npmjs.com/package/styled-modern-normalize
[npm-typeface-rubik]: https://www.npmjs.com/package/typeface-rubik
[npm-typeface-source-code-pro]: https://www.npmjs.com/package/typeface-source-code-pro
[stc-docs-api-cgs]: https://www.styled-components.com/docs/api#createglobalstyle
[stc-docs-api-thp]: https://www.styled-components.com/docs/api#themeprovider
[stc-docs-theming]: https://www.styled-components.com/docs/advanced#theming
[stc-docs-tool-babel]: https://www.styled-components.com/docs/tooling#babel-plugin

<!-- v0.3.0 -->

[gh-55-diff-r49]: https://github.com/arcticicestudio/nord-docs/pull/55/files#diff-90a2aa45c339ce4720a7fbbd23c65e3eR49
[gh-jsc-matcher]: https://github.com/styled-components/jest-styled-components#tohavestylerule
[gh-svgr-wpl]: https://github.com/smooth-code/svgr/tree/master/packages/webpack
[npm-gp-svgr]: https://www.npmjs.com/package/gatsby-plugin-svgr

<!-- v0.4.0 -->

[babel-rln-7.2.0]: https://babeljs.io/blog/2018/12/03/7.2.0
[gh-gatsby-p-gtag]: https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-plugin-google-gtag
[gh-gatsby-p-manifest]: https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-plugin-manifest
[gh-gatsby-p-offline]: https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-plugin-offline
[gh-gatsby-p-robots-txt]: https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-plugin-robots-txt
[gh-gatsby-p-sitemap]: https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-plugin-sitemap
[gsup-ga-anonip]: https://support.google.com/analytics/answer/2763052
[npm-gatsby-plugin-manifest]: https://www.npmjs.com/package/gatsby-plugin-manifest
[npm-gatsby-plugin-netlify]: https://www.npmjs.com/package/gatsby-plugin-netlify
[npm-gatsby-plugin-offline]: https://www.npmjs.com/package/gatsby-plugin-offline
[react-rln-16.7.0]: https://reactjs.org/blog/2018/12/19/react-v-16-7.html

<!-- v0.9.0 -->

[facebook/jest#7119]: https://github.com/facebook/jest/pull/7119
[facebook/react#v16.8.3]: https://github.com/facebook/react/releases/tag/v16.8.3
[gatsbyjs/gatsby#11203]: https://github.com/gatsbyjs/gatsby/pull/11203
[popmotion/popmotion#682]: https://github.com/Popmotion/popmotion/issues/682
[prettier-b-1.16.0]: https://prettier.io/blog/2019/01/20/1.16.0.html
[react-b-16.8.0]: https://reactjs.org/blog/2019/02/06/react-v16.8.0.html
[rsms/inter#v3.3]: https://github.com/rsms/inter/releases/tag/v3.3
[tw-dan_abramov-react-v16.8.3]: https://twitter.com/dan_abramov/status/1098691583292133376

<!-- v0.10.0 -->

[gatsby-blog-custom-schemes]: https://www.gatsbyjs.org/blog/2019-03-04-new-schema-customization
[gh-gatsbyjs/gatsby#3344]: https://github.com/gatsbyjs/gatsby/issues/3344
[tw-arcticicestudio-announce-initial-launch]: https://twitter.com/arcticicestudio/status/1104494647383068673
