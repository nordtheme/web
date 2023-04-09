/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

import React from "react";
import { animated } from "react-spring";

/**
 * A SVG vector component rendering the top layer of floating port project logos.
 * @since 0.9.0
 */
const LogosLayerTop = (props) => (
  <animated.g {...props}>
    <path
      d="M208.18 1.128c36.453 0 66.002 29.547 66.002 65.999 0 36.454-29.55 66.001-66.002 66.001-36.451 0-65.998-29.547-65.998-66.001.001-36.452 29.547-65.999 65.998-65.999z"
      fill="#2E3440"
    />
    <path
      d="M194.829 32.69c-.851-.024-1.651.056-2.189.237-2.606.904-4.247 2.856-5.158 6.115-.779 2.836-.756 7.943.061 12.386.143.773.291 1.477.324 1.591.044.159-.236.253-1.47.538-6.031 1.394-10.438 3.479-13.087 6.181-1.186 1.201-1.847 2.252-2.229 3.58-.268.923-.268 2.749 0 3.654.741 2.497 2.826 4.847 6.125 6.92 2.283 1.433 2.969 1.591 3.709.845.345-.351.422-.521.422-.943 0-.818-.247-1.147-1.322-1.772-6.75-3.841-7.938-7.699-3.43-11.132 2.288-1.739 5.487-3.111 9.789-4.176 1.888-.468 2.311-.528 2.311-.275 0 .341 1.388 4.836 2.107 6.781l.74 2.025-.977 1.909c-3.901 7.628-6.404 15.397-6.7 21.083-.247 4.381.532 7.514 2.442 9.457 2.085 2.111 5.021 2.562 8.796 1.338 1.427-.467 4.253-1.921 5.899-3.051 1.186-.807 1.454-1.043 1.607-1.465.16-.423.16-.561 0-.999-.235-.664-.729-1.031-1.398-1.031-.434 0-.736.143-1.861.91-2.54 1.75-4.933 2.843-6.914 3.184-2.744.471-4.505-.753-5.312-3.655-.351-1.264-.329-5.302.055-7.387.582-3.325 1.603-6.771 3.062-10.406.861-2.156 2.507-5.766 2.732-5.996.11-.133.258.07.626.938 1.887 4.284 4.763 9.516 7.583 13.752 6.711 10.092 14.07 16.655 19.732 17.599l-.06.012c2.486.405 4.588-.215 6.212-1.86 1.328-1.361 2.195-3.282 2.694-5.942.302-1.67.302-6.345 0-8.612-.917-6.799-3.37-14.58-7.035-22.345-.571-1.216-.889-1.518-1.63-1.518-.829-.005-1.498.64-1.498 1.457 0 .285.28 1.047.752 2.063 4.516 9.746 6.941 19.175 6.694 26.001-.148 4.062-1.152 6.515-3.051 7.453-.994.499-2.255.482-3.913-.066-7.617-2.606-17.933-15.651-24.579-31.088l-.659-1.542.966-1.663c1.086-1.893 3.83-6.127 5.098-7.867l.851-1.152h2.244c13.625 0 27.114 3.117 34.264 7.9 1.459.978 3.215 2.755 3.742 3.797.384.73.417.923.417 1.883 0 .944-.033 1.175-.346 1.751-.878 1.701-3.183 3.467-6.157 4.729-1.377.59-1.75.979-1.75 1.78 0 .681.445 1.25 1.103 1.454.428.126.571.104 1.333-.204 4.796-1.92 8.094-4.901 8.764-7.918.192-.817.181-2.349-.006-3.146-.362-1.558-1.646-3.55-3.111-4.895-6.552-5.946-20.44-9.782-36.919-10.177l-1.175-.039 1.377-1.561a75.423 75.423 0 0 1 2.963-3.257c4.686-4.822 9.038-7.98 12.84-9.292 1.213-.433 1.454-.481 2.711-.481 1.169 0 1.455.032 1.959.296.686.329 1.454 1.136 1.849 1.896.773 1.556 1.031 4.284.664 7.188-.126.997-.225 2.15-.225 2.551 0 .67.021.774.4 1.103.313.297.526.369.933.369.653 0 1.257-.347 1.432-.824.538-1.404.818-6.387.472-8.49-.538-3.224-1.904-5.399-4.083-6.453-3.841-1.886-9.427-.043-15.946 5.244-3.403 2.769-7.896 7.466-10.986 11.478l-.302.356-1.827.11c-1.537.087-4.039.334-6.941.686l-.626.076-.274-1.553c-.527-3.092-.571-3.559-.571-6.519 0-2.603.038-3.103.285-4.142.604-2.632 1.806-4.267 3.386-4.606 2.173-.464 4.873.637 8.665 3.481 1.213.92 2.689.135 2.502-1.317-.071-.633-.652-1.179-2.579-2.481-1.613-1.104-3.43-2.01-4.911-2.45-.73-.224-1.625-.344-2.475-.371l-.012-.018zm2.897 22.333c0 .061-.51.861-1.152 1.816a82.992 82.992 0 0 0-2.02 3.111c-.46.758-.905 1.45-.999 1.554-.121.135-.301-.23-.851-1.997-.784-2.438-1.119-3.755-1.021-3.864.172-.175 6.043-.79 6.043-.62zm11.898 9.229a4.303 4.303 0 0 0-4.302 4.308 4.303 4.303 0 0 0 4.302 4.302 4.307 4.307 0 0 0 4.307-4.302 4.308 4.308 0 0 0-4.307-4.308z"
      fill="#88C0D0"
    />
    <path
      d="M60.001 191.898c33.134 0 59.999 26.862 59.999 59.998 0 33.141-26.865 60.002-59.999 60.002C26.862 311.898 0 285.037 0 251.896c0-33.135 26.862-59.998 60.001-59.998z"
      fill="#2E3440"
    />
    <path
      d="M27.334 225.755l-1.306 1.308v2.609l1.306 1.303h3.913v50.869l1.303 1.302h3.916l57.388-53.474v-2.609l-1.306-1.308H69.07l-1.303 1.308v2.609l1.303 1.303h3.916v2.606l-28.694 26.091v-28.697h3.911l1.305-1.303v-2.609l-1.305-1.308H27.334zm40.16 31.306l-1.848 1.307-.875 2.606.977 1.303h2.819l1.851-1.303.873-2.606-.973-1.307m-9.59 7.827l-.788 2.609h2.35l-4.958 13.043h7.827l.963-2.611h-2.266l4.954-13.041m3.128 0l-.913 2.609h1.955l-4.953 13.043h6.651l.912-2.611h-1.437l2.745-7.826h5.541l-3.72 10.438h6.524l1.043-2.611h-1.431l2.738-7.826h5.213l-3.652 10.438h6.84l1.195-2.611h-1.825l3.707-10.432-2.091-2.609h-3.127l-2.608 2.609H89.03l-2.221-2.609H84.33l-2.476 2.609h-2.613l-2.345-2.609"
      fillOpacity=".1"
    />
    <path
      d="M24.781 223.2l-1.308 1.308v2.609l1.308 1.3h3.91v50.872l1.305 1.304h3.914l57.39-53.476v-2.609l-1.308-1.308H66.517l-1.303 1.308v2.609l1.303 1.3h3.916v2.61l-28.694 26.088v-28.698h3.91l1.305-1.3v-2.609l-1.305-1.308H24.781zm40.159 31.306l-1.85 1.308-.875 2.602.979 1.31h2.817l1.852-1.31.873-2.602-.973-1.308m-9.591 7.828l-.785 2.611h2.349l-4.958 13.036h7.828l.962-2.605h-2.264l4.952-13.042m3.129 0l-.915 2.611h1.957l-4.953 13.036h6.649l.913-2.605H71.6l2.743-7.831h5.543l-3.723 10.437h6.526l1.043-2.605h-1.434l2.741-7.831h5.213L86.6 277.983h6.839l1.198-2.605h-1.826l3.706-10.431-2.091-2.611H91.3l-2.61 2.611h-2.215l-2.219-2.611h-2.481l-2.472 2.611h-2.616l-2.345-2.611"
      fill="#88C0D0"
    />
    <path
      d="M152.467 382.277c32.034 0 58.002 25.971 58.002 58 0 32.035-25.969 58-58.002 58-32.029 0-57.998-25.965-57.998-58 0-32.029 25.969-58 57.998-58z"
      fill="#2E3440"
    />
    <path d="M181.463 464.235v-10.086h-30.26v10.086m-23.335-10.086l-6.915-7.334 15.563-12.839-15.563-12.839 6.915-7.334 23.345 20.173" fill="#88C0D0" />
    <path
      d="M1486.361 1.703c34.244 0 62 27.757 62 61.997 0 34.246-27.756 62.003-62 62.003-34.245 0-62-27.757-62-62.003 0-34.24 27.755-61.997 62-61.997z"
      fill="#2E3440"
    />
    <path
      d="M1523.308 38.431l-16.352-6.403-28.538 27.146-17.188-12.778-6.535 3.21-.006 33.512 6.505 3.189 17.171-12.769 28.611 27.122 16.337-6.378-.005-55.851zm-60.444 35.101l-.011-14.349 8.173 7.125-8.162 7.224zM1489 66.306l16.331-11.926.005 23.945L1489 66.306z"
      fillOpacity=".1"
    />
    <path
      d="M1520.669 35.79l-16.353-6.403-28.54 27.147-17.187-12.778-6.536 3.21-.006 33.511 6.508 3.19 17.171-12.769 28.611 27.122 16.337-6.379-.005-55.851zm-60.443 35.104l-.011-14.349 8.17 7.124-8.159 7.225zm26.135-7.231l16.331-11.922.005 23.945-16.336-12.023z"
      fill="#88C0D0"
    />
    <path
      d="M1621.839 191.938c31.479 0 56.997 25.519 56.997 56.997 0 31.483-25.519 57.003-56.997 57.003-31.484 0-57.003-25.52-57.003-57.003 0-31.479 25.518-56.997 57.003-56.997z"
      fill="#2E3440"
    />
    <path d="M1590.403 215.479h64.438v64.438h-64.438v-64.438z" fill="#3B4252" />
    <path
      d="M1615.19 227.871v-4.955h-14.876v4.955h4.961v17.347h-4.961v4.96h14.876v-4.96h-4.96v-17.347m16.338 22.262c-2.996-.346-5.101-2.297-6.987-4.019l3.01-3.397c.985 1.024 2.476 2.257 4.02 2.461 1.545.203 3.535.033 4.732-.976 1.193-1.016 1.193-2.391 1.193-4.03v-17.256h4.951l-.007 17.554c.007 3.489-1.315 5.846-2.544 7.158-1.955 2.005-4.488 2.208-6.855 2.534"
      fill="#8FBCBB"
    />
    <path d="M1595.364 267.523h24.781v4.957h-24.781v-4.957z" fill="#D8DEE9" />
    <path
      d="M1536.364 342.778c32.587 0 59 26.414 59 59.003 0 32.583-26.413 58.997-59 58.997s-59-26.414-59-58.997c0-32.589 26.413-59.003 59-59.003z"
      fill="#2E3440"
    />
    <path
      d="M1550.07 364.104h-37.842a5.38 5.38 0 0 0-5.383 5.38v64.593a5.383 5.383 0 0 0 5.383 5.38h48.272a5.383 5.383 0 0 0 5.382-5.38v-54.16l-15.812-15.813z"
      fill="#3B4252"
    />
    <path
      d="M1555.094 369.125h-37.841a5.382 5.382 0 0 0-5.381 5.387v64.587a5.384 5.384 0 0 0 5.381 5.381h48.271a5.383 5.383 0 0 0 5.38-5.381v-54.16l-15.81-15.814z"
      opacity=".1"
    />
    <path
      d="M1536.364 409.856a8.078 8.078 0 0 1-8.075-8.075 8.078 8.078 0 0 1 8.075-8.076 8.079 8.079 0 0 1 8.075 8.076 8.078 8.078 0 0 1-8.075 8.075m13.706-35.324a5.38 5.38 0 0 0 5.38 5.385h10.433l-15.813-15.813v10.428z"
      fill="#88C0D0"
    />
  </animated.g>
);

export default LogosLayerTop;
