/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

import React from "react";

/**
 * An SVG vector component rendering a decorated application illustration.
 * @since 0.9.0
 */
const Window = (props) => (
  <g {...props}>
    <path d="M1182.662 0h-690.8c-7.85 0-14.213 6.363-14.213 14.213v54.582h719.226V14.213c0-7.85-6.363-14.213-14.213-14.213z" fill="#2E3440" />
    <path d="M1182.662 379.604h-690.8c-7.85 0-14.213-6.363-14.213-14.213V68.795h719.226v296.596c0 7.849-6.363 14.213-14.213 14.213z" fill="#ECEFF4" />
    <g fill="#D8DEE9">
      <circle cx="611.553" cy="34.398" r="11.912" />
      <circle cx="573.563" cy="34.398" r="11.912" />
      <circle cx="535.573" cy="34.398" r="11.912" />
    </g>
    <path
      d="M732.941 122.336l-10.771 33.129a2.902 2.902 0 0 1-3.66 1.859l-93.879-30.5a2.921 2.921 0 0 1-1.871-3.658l10.771-33.131a2.902 2.902 0 0 1 3.66-1.859l93.879 30.5c1.52.5 2.371 2.138 1.871 3.66z"
      fill="#5E81AC"
    />
    <path
      d="M646.32 201.025l1.791-5.52-16.57-5.381-5.381 16.57 5.531 1.799-1.801 5.512-5.52-1.791-5.381 16.57 5.52 1.791-1.799 5.52-5.52-1.791-4.48 13.801c-1.49 4.57 1.01 9.49 5.59 10.98 4.57 1.479 9.48-1.031 10.971-5.602l8.068-24.84-5.52-1.799 1.791-5.52 5.529 1.799 5.381-16.57-5.52-1.797 1.791-5.521 5.529 1.79z"
      fill="#D8DEE9"
    />
    <path
      d="M756.891 133.166l-19.33-6.281-9.869 30.371c-1.48 4.568-6.41 7.08-10.98 5.59l-30.371-9.861-27.809 85.592a5.816 5.816 0 0 0 3.729 7.318c3.041.99 6.33-.68 7.32-3.729l2.691-8.281 3.59-11.039 3.59-11.051 5.52 1.791-3.59 11.049 2.76.9c4.57 1.49 9.49-1.029 10.971-5.6l3.59-11.041c1.979-6.09 8.549-9.43 14.639-7.459 6.09 1.98 9.432 8.539 7.451 14.629l-17.041 52.471a5.815 5.815 0 0 0 3.73 7.32 5.821 5.821 0 0 0 7.311-3.73l43.959-135.301c.498-1.519-.342-3.158-1.861-3.658z"
      fill="#81A1C1"
    />
    <g fill="#2E3440">
      <path d="M758.691 127.645l-19.842-6.439c-.1-3.58-2.379-6.891-5.988-8.061l-93.881-30.5c-4.561-1.479-9.48 1.031-10.971 5.59l-4.479 13.811-19.33-6.279c-7.611-2.471-15.811 1.709-18.281 9.32l-6.91 21.25c-2.148 6.609.701 13.84 6.791 17.199l50.51 27.859a8.732 8.732 0 0 1 4.07 10.32l-1.52 4.68-11.051-3.59-20.631 63.51c-2.469 7.611 1.711 15.82 9.32 18.301 7.611 2.471 15.82-1.709 18.291-9.33l20.639-63.5-11.049-3.59 1.52-4.689c2.15-6.602-.709-13.83-6.789-17.191l-50.51-27.871a8.708 8.708 0 0 1-4.068-10.311l6.898-21.25c1.49-4.57 6.41-7.08 10.98-5.59l19.32 6.27-4.48 13.811c-1.479 4.57 1.031 9.49 5.59 10.971l57.99 18.85-27.82 85.59c-1.979 6.09 1.371 12.66 7.461 14.641 6.09 1.969 12.66-1.371 14.641-7.461l2.689-8.279 1.789-5.529 2.76.898c7.611 2.471 15.82-1.709 18.301-9.32l3.58-11.039c1-3.051 4.27-4.73 7.32-3.73a5.803 5.803 0 0 1 3.721 7.311l-17.041 52.471c-1.98 6.09 1.359 12.648 7.461 14.629 6.08 1.98 12.648-1.359 14.629-7.449l43.961-135.301c1.478-4.573-1.032-9.503-5.591-10.983zm-110.58 67.861l-1.791 5.52-5.529-1.791-1.791 5.521 5.521 1.799-5.381 16.57-5.529-1.799-1.791 5.52 5.52 1.799-8.068 24.84c-1.49 4.57-6.4 7.08-10.971 5.602-4.58-1.49-7.08-6.41-5.59-10.98l4.48-13.801 5.52 1.791 1.799-5.52-5.52-1.791 5.381-16.57 5.52 1.791 1.801-5.512-5.531-1.799 5.381-16.57 16.569 5.38zm-23.48-68.682a2.921 2.921 0 0 1-1.871-3.658l10.771-33.131a2.902 2.902 0 0 1 3.66-1.859l93.879 30.5c1.52.5 2.371 2.139 1.871 3.66l-10.771 33.129a2.902 2.902 0 0 1-3.66 1.859l-93.879-30.5zm134.119 10l-43.959 135.301a5.82 5.82 0 0 1-7.311 3.73 5.814 5.814 0 0 1-3.73-7.32l17.041-52.471c1.98-6.09-1.361-12.648-7.451-14.629-6.09-1.971-12.66 1.369-14.639 7.459l-3.59 11.041c-1.48 4.57-6.4 7.09-10.971 5.6l-2.76-.9 3.59-11.049-5.52-1.791-3.59 11.051-3.59 11.039-2.691 8.281a5.815 5.815 0 0 1-7.32 3.729 5.818 5.818 0 0 1-3.729-7.318l27.809-85.592 30.371 9.861c4.57 1.49 9.5-1.021 10.98-5.59l9.869-30.371 19.33 6.281c1.521.5 2.361 2.139 1.861 3.658z" />
      <path d="M745.16 159.885l-13.449 41.41-5.531-1.789 13.461-41.42zm-122.31 94.57l-5.52-1.789 1.791-5.531 5.52 1.801zm124.111-100.09l-5.531-1.801 1.8-5.519 5.52 1.801z" />
      <path d="M624.641 248.936l-1.791 5.519-5.52-1.789 1.791-5.531zm124.109-100.09l-1.789 5.519-5.531-1.801 1.8-5.519z" />
    </g>
    <path
      d="M780.771 319.439l-142.768 69.629c-4.482 2.189-6.354 7.615-4.166 12.104l44.635 91.516c2.189 4.482 7.615 6.348 12.098 4.166l142.768-69.637c4.482-2.184 6.354-7.615 4.166-12.098l-44.635-91.514c-2.187-4.482-7.615-6.355-12.098-4.166zM708.115 481.58c-12.619 6.154-27.887.896-34.035-11.717-6.154-12.613-.902-27.887 11.717-34.037a25.452 25.452 0 0 1 12.672-2.529 3.018 3.018 0 0 1 2.832 3.191c-.01.068-.016.131-.02.199a22.59 22.59 0 0 1 5.82 2.004c.037-.053.068-.109.105-.168a3.021 3.021 0 0 1 4.199-.773 25.48 25.48 0 0 1 8.432 9.797c6.149 12.613.892 27.883-11.722 34.033zm-24.965-51.178c-12.613 6.154-27.881.896-34.035-11.717-6.154-12.615-.896-27.887 11.723-34.039 12.615-6.15 27.881-.893 34.035 11.721 6.154 12.615.891 27.883-11.723 34.035zm76.159 26.209c-12.613 6.154-27.885.896-34.033-11.717-6.154-12.615-.896-27.887 11.717-34.035 12.613-6.154 27.887-.896 34.039 11.717 6.15 12.615.892 27.883-11.723 34.035zm-24.963-51.179c-12.609 6.154-27.881.896-34.035-11.717s-.893-27.887 11.723-34.035c12.613-6.154 27.881-.896 34.035 11.719 6.154 12.613.896 27.882-11.723 34.033zm76.158 26.209c-12.613 6.154-27.881.896-34.035-11.717s-.896-27.887 11.719-34.039c12.619-6.152 27.885-.893 34.039 11.723 6.148 12.613.896 27.88-11.723 34.033zm-24.959-51.178c-12.615 6.154-27.887.896-34.041-11.717-6.148-12.615-.891-27.887 11.723-34.041 12.621-6.15 27.881-.891 34.035 11.723 6.154 12.615.902 27.881-11.717 34.035z"
      fill="#D8DEE9"
    />
    <path
      d="M663.48 390.068c-9.629 4.695-13.637 16.346-8.943 25.969 4.693 9.629 16.342 13.643 25.971 8.943 9.629-4.693 13.637-16.342 8.943-25.971-4.697-9.624-16.347-13.636-25.971-8.941z"
      fill="#BF616A"
    />
    <path
      d="M714.676 365.102c-9.625 4.693-13.639 16.342-8.945 25.967 4.699 9.629 16.348 13.637 25.973 8.943 9.629-4.693 13.637-16.342 8.943-25.973-4.694-9.623-16.348-13.637-25.971-8.937z"
      fill="#D08770"
    />
    <path
      d="M765.869 340.127c-9.623 4.697-13.637 16.348-8.938 25.971 4.693 9.629 16.342 13.641 25.971 8.943 9.625-4.693 13.637-16.348 8.943-25.971-4.697-9.625-16.347-13.636-25.976-8.943z"
      fill="#EBCB8B"
    />
    <path
      d="M701.275 436.688a3.014 3.014 0 0 1-3.17 2.631 19.44 19.44 0 0 0-9.666 1.93c-9.623 4.695-13.637 16.344-8.943 25.969 4.699 9.629 16.348 13.643 25.977 8.943 9.625-4.693 13.633-16.342 8.939-25.973a19.447 19.447 0 0 0-6.43-7.471 3.005 3.005 0 0 1-.875-4.021 22.52 22.52 0 0 0-5.832-2.008z"
      fill="#5E81AC"
    />
    <path
      d="M739.635 416.279c-9.625 4.693-13.633 16.344-8.939 25.967 4.693 9.629 16.348 13.637 25.973 8.943 9.623-4.693 13.637-16.342 8.938-25.971-4.695-9.624-16.343-13.636-25.972-8.939z"
      fill="#88C0D0"
    />
    <path
      d="M790.834 391.305c-9.625 4.699-13.637 16.348-8.943 25.973 4.693 9.629 16.348 13.639 25.971 8.943 9.629-4.693 13.637-16.348 8.943-25.973-4.694-9.623-16.348-13.637-25.971-8.943z"
      fill="#8FBCBB"
    />
    <g fill="#082947">
      <path d="M778.125 314.018l-142.768 69.631c-7.473 3.645-10.584 12.693-6.939 20.166l44.633 91.514c3.645 7.473 12.693 10.59 20.166 6.945l142.764-69.635c7.477-3.645 10.588-12.688 6.945-20.16l-44.641-91.516c-3.644-7.473-12.681-10.59-20.16-6.945zm59.379 101.101c2.188 4.482.316 9.914-4.166 12.098L690.57 496.854c-4.482 2.182-9.908.316-12.098-4.166l-44.635-91.516c-2.188-4.488-.316-9.914 4.166-12.104l142.768-69.629c4.482-2.189 9.91-.316 12.098 4.166l44.635 91.514z" />
      <path d="M660.838 384.646c-12.619 6.152-17.877 21.424-11.723 34.039 6.154 12.613 21.422 17.871 34.035 11.717 12.613-6.152 17.877-21.42 11.723-34.035-6.154-12.613-21.42-17.871-34.035-11.721zm19.67 40.334c-9.629 4.699-21.277.686-25.971-8.943-4.693-9.623-.686-21.273 8.943-25.969 9.623-4.695 21.273-.684 25.971 8.941 4.694 9.63.686 21.278-8.943 25.971zm31.525-65.3c-12.615 6.148-17.877 21.422-11.723 34.035s21.426 17.871 34.035 11.717c12.619-6.15 17.877-21.42 11.723-34.033-6.154-12.616-21.422-17.874-34.035-11.719zm19.67 40.332c-9.625 4.693-21.273.686-25.973-8.943-4.693-9.625-.68-21.273 8.945-25.967 9.623-4.699 21.277-.686 25.971 8.938 4.694 9.63.686 21.278-8.943 25.972zm31.524-65.307c-12.613 6.154-17.871 21.426-11.723 34.041 6.154 12.613 21.426 17.871 34.041 11.717 12.619-6.154 17.871-21.42 11.717-34.035-6.155-12.614-21.414-17.873-34.035-11.723zm19.675 40.336c-9.629 4.697-21.277.686-25.971-8.943-4.699-9.623-.686-21.273 8.938-25.971 9.629-4.693 21.279-.682 25.977 8.943 4.693 9.623.681 21.278-8.944 25.971zm-45.91 35.818c-12.613 6.148-17.871 21.42-11.717 34.035 6.148 12.613 21.42 17.871 34.033 11.717 12.615-6.152 17.873-21.42 11.723-34.035-6.152-12.613-21.426-17.871-34.039-11.717zm19.676 40.33c-9.625 4.693-21.279.686-25.973-8.943-4.693-9.623-.686-21.273 8.939-25.967 9.629-4.697 21.277-.686 25.971 8.939 4.7 9.63.686 21.278-8.937 25.971zm31.52-65.304c-12.615 6.152-17.873 21.426-11.719 34.039s21.422 17.871 34.035 11.717c12.619-6.152 17.871-21.42 11.723-34.033-6.155-12.616-21.42-17.876-34.039-11.723zm19.673 40.336c-9.623 4.695-21.277.686-25.971-8.943-4.693-9.625-.682-21.273 8.943-25.973 9.623-4.693 21.277-.68 25.971 8.943 4.694 9.625.686 21.279-8.943 25.973zm-100.654 12.302c-.037.059-.068.115-.105.168a3.017 3.017 0 0 0 .881 4.025 19.461 19.461 0 0 1 6.43 7.471c4.693 9.631.686 21.279-8.939 25.973-9.629 4.699-21.277.686-25.977-8.943-4.693-9.625-.68-21.273 8.943-25.969a19.44 19.44 0 0 1 9.666-1.93 3.011 3.011 0 0 0 3.17-2.631 3.016 3.016 0 0 0-2.807-3.39 25.455 25.455 0 0 0-12.672 2.529c-12.619 6.15-17.871 21.424-11.723 34.037 6.154 12.613 21.422 17.871 34.041 11.717 12.613-6.15 17.871-21.42 11.723-34.033a25.48 25.48 0 0 0-8.432-9.797 3.022 3.022 0 0 0-4.199.773z" />
    </g>
    <path
      d="M889.645 97.527h263.25c5.568 0 10.125 4.557 10.125 10.125v222.75c0 5.568-4.557 10.125-10.125 10.125h-263.25c-5.57 0-10.125-4.557-10.125-10.125v-222.75c0-5.568 4.554-10.125 10.125-10.125z"
      fill="#3B4252"
    />
    <path
      d="M1112.393 284.84H930.145a5.077 5.077 0 0 0-5.063 5.063v5.063a5.077 5.077 0 0 0 5.063 5.063h182.248a5.077 5.077 0 0 0 5.063-5.063v-5.063c-.001-2.786-2.278-5.063-5.063-5.063z"
      fill="#88C0D0"
    />
    <path
      d="M1112.393 249.402h-30.375c-2.783 0-5.063 2.279-5.063 5.063v5.063c0 2.785 2.279 5.063 5.063 5.063h30.375a5.077 5.077 0 0 0 5.063-5.063v-5.063c-.001-2.785-2.278-5.063-5.063-5.063z"
      fill="#D8DEE9"
    />
    <path
      d="M1051.645 249.402h-45.563c-2.785 0-5.063 2.279-5.063 5.063v5.063a5.077 5.077 0 0 0 5.063 5.063h45.563c2.783 0 5.063-2.277 5.063-5.063v-5.063c-.001-2.785-2.28-5.063-5.063-5.063z"
      fill="#8FBCBB"
    />
    <path
      d="M975.707 249.402h-45.563c-2.785 0-5.063 2.279-5.063 5.063v5.063a5.077 5.077 0 0 0 5.063 5.063h45.563c2.783 0 5.063-2.277 5.063-5.063v-5.063c0-2.785-2.28-5.063-5.063-5.063zm75.938-35.437h-121.5a5.077 5.077 0 0 0-5.063 5.063v5.063a5.077 5.077 0 0 0 5.063 5.063h121.5c2.783 0 5.063-2.277 5.063-5.063v-5.063c-.001-2.786-2.28-5.063-5.063-5.063z"
      fill="#5E81AC"
    />
    <path
      d="M1112.393 178.527h-91.123c-2.785 0-5.063 2.279-5.063 5.063v5.063a5.077 5.077 0 0 0 5.063 5.063h91.125c2.783 0 5.063-2.277 5.063-5.063v-5.063c-.003-2.785-2.28-5.063-5.065-5.063z"
      fill="#88C0D0"
    />
    <path
      d="M990.895 178.527h-60.75c-2.785 0-5.063 2.279-5.063 5.063v5.063a5.077 5.077 0 0 0 5.063 5.063h60.75c2.783 0 5.063-2.277 5.063-5.063v-5.063c-.001-2.785-2.28-5.063-5.063-5.063z"
      fill="#81A1C1"
    />
    <path
      d="M930.145 143.09h146.813c2.783 0 5.063 2.277 5.063 5.063v5.063c0 2.785-2.279 5.063-5.063 5.063H930.145a5.077 5.077 0 0 1-5.063-5.063v-5.063a5.076 5.076 0 0 1 5.063-5.063z"
      fill="#D8DEE9"
    />
    <path
      d="M1124.131 242.064c1.617 0 2.93-1.314 2.93-2.93s-1.313-2.928-2.93-2.928a2.93 2.93 0 0 0-2.928 2.928 2.92 2.92 0 0 0 2.928 2.93zm-5.858-17.576a2.933 2.933 0 0 0 2.93-2.93 2.938 2.938 0 0 0-2.932-2.932 2.936 2.936 0 0 0-2.93 2.93 2.936 2.936 0 0 0 2.932 2.932z"
      fill="#5E81AC"
    />
    <path
      d="M1129.988 206.91a2.933 2.933 0 0 0 2.934-2.934 2.934 2.934 0 0 0-2.93-2.928 2.938 2.938 0 0 0-2.934 2.934 2.931 2.931 0 0 0 2.93 2.928z"
      fill="#81A1C1"
    />
    <path
      d="M1295.82 221.836a2.94 2.94 0 0 1-2.93 2.93 2.943 2.943 0 0 1-2.93-2.939 2.956 2.956 0 0 1 2.93-2.932 2.942 2.942 0 0 1 2.93 2.941zm-11.718.029a2.963 2.963 0 0 1-.852 2.041 2.965 2.965 0 0 1-2.109.85l-22.279-.271a2.936 2.936 0 0 1-2.9-2.969 2.943 2.943 0 0 1 2.971-2.891l22.279.281a2.934 2.934 0 0 1 2.89 2.959z"
      fill="#2E3440"
    />
    <path
      d="M1289.961 204.244c-.371 0-.75.021-1.15.051v-.01l-47.57 2.619-5.779.012a2.975 2.975 0 0 1-2.07-.861 2.892 2.892 0 0 1-.859-2.07v-11.729c0-8.07-6.57-14.641-14.65-14.641h-52.73c-.779 0-1.52.311-2.08.859a2.944 2.944 0 0 0-.85 2.07l-.01 14.621c.01.02.01.039.01.059v67.352a2.929 2.929 0 0 0 2.93 2.93h52.73c3.91 0 7.59-1.531 10.359-4.291a14.594 14.594 0 0 0 4.291-10.359v-11.721a2.928 2.928 0 0 1 2.93-2.93h5.76l47.551 3.16h.02a17.453 17.453 0 0 0 13.59-5.109c3.33-3.32 5.16-7.74 5.16-12.43-.003-9.691-7.884-17.57-17.583-17.582zm-80.871 55.401h-41.01l-.01-8.789h20.51c.811 0 1.541-.33 2.07-.859a2.92 2.92 0 0 0 .861-2.07 2.935 2.935 0 0 0-2.932-2.93l-20.5.01v-11.73h20.5c.811 0 1.541-.33 2.07-.859a2.928 2.928 0 0 0-2.071-5h-20.5v-11.711l20.5-.01c.811.01 1.541-.32 2.07-.85a2.927 2.927 0 0 0-2.071-5h-20.5v-11.721h20.5a2.983 2.983 0 0 0 2.08-.859 2.927 2.927 0 0 0 .852-2.07 2.928 2.928 0 0 0-2.932-2.93h-20.5l-.01-8.791h41.02v76.169zm29.291-29.299h-2.92c-4.85 0-8.791 3.949-8.801 8.789v11.721a8.649 8.649 0 0 1-2.57 6.209 8.716 8.716 0 0 1-6.209 2.58h-2.93v-76.17h2.93c4.85 0 8.789 3.941 8.789 8.781v11.729c0 2.34.91 4.551 2.57 6.211s3.871 2.57 6.221 2.58h2.92v17.57zm59.859-.231c-2.209 2.221-5.15 3.43-8.279 3.43-.25 0-.51 0-.801-.02l-44.91-2.99-.01-17.92 44.891-2.471h.02c.291-.029.561-.029.811-.039 6.459.01 11.721 5.26 11.721 11.73a11.639 11.639 0 0 1-3.443 8.28z"
      fill="#2E3440"
    />
    <path
      d="M1209.09 183.475v76.17h-41.01l-.01-8.789h20.51c.811 0 1.541-.33 2.07-.859a2.92 2.92 0 0 0 .861-2.07 2.935 2.935 0 0 0-2.932-2.93l-20.5.01v-11.73h20.5c.811 0 1.541-.33 2.07-.859a2.928 2.928 0 0 0-2.071-5h-20.5v-11.711l20.5-.01c.811.01 1.541-.32 2.07-.85a2.927 2.927 0 0 0-2.071-5h-20.5v-11.721h20.5a2.983 2.983 0 0 0 2.08-.859 2.927 2.927 0 0 0 .852-2.07 2.928 2.928 0 0 0-2.932-2.93h-20.5l-.01-8.791h41.023z"
      fill="#88C0D0"
    />
    <path
      d="M1289.961 210.105c-.25.01-.52.01-.811.039h-.02l-44.891 2.471.01 17.92 44.91 2.99c.291.02.551.02.801.02 3.129 0 6.07-1.209 8.279-3.43a11.634 11.634 0 0 0 3.441-8.279c.002-6.471-5.26-11.721-11.719-11.731zm-6.711 13.801a2.965 2.965 0 0 1-2.109.85l-22.279-.271a2.936 2.936 0 0 1-2.9-2.969 2.943 2.943 0 0 1 2.971-2.891l22.279.281a2.934 2.934 0 0 1 2.891 2.959 2.973 2.973 0 0 1-.853 2.041zm9.641.86a2.943 2.943 0 0 1-2.93-2.939 2.956 2.956 0 0 1 2.93-2.932 2.944 2.944 0 0 1 2.93 2.941 2.941 2.941 0 0 1-2.93 2.93zm-54.51-11.991v17.57h-2.92c-4.85 0-8.791 3.949-8.801 8.789v11.721a8.649 8.649 0 0 1-2.57 6.209 8.716 8.716 0 0 1-6.209 2.58h-2.93v-76.17h2.93c4.85 0 8.789 3.941 8.789 8.781v11.729c0 2.34.91 4.551 2.57 6.211s3.871 2.57 6.221 2.58h2.92z"
      fill="#D8DEE9"
    />
    <path
      d="M1141.711 206.91h11.717a2.9 2.9 0 0 0 2.07-.855 2.932 2.932 0 0 0-2.071-5.004h-11.717a2.933 2.933 0 0 0-2.93 2.93 2.925 2.925 0 0 0 2.931 2.929z"
      fill="#88C0D0"
    />
    <path
      d="M1147.566 189.332l5.861.002a2.932 2.932 0 0 0 2.929-2.929 2.926 2.926 0 0 0-2.932-2.932l-5.859-.002a2.933 2.933 0 0 0-2.93 2.93 2.936 2.936 0 0 0 2.931 2.931z"
      fill="#D8DEE9"
    />
    <path
      d="M1129.99 224.488l23.439-.002a2.907 2.907 0 0 0 2.07-.855 2.931 2.931 0 0 0-2.069-5.002l-23.441.002a2.933 2.933 0 0 0-2.93 2.93 2.934 2.934 0 0 0 2.931 2.927z"
      fill="#81A1C1"
    />
    <path
      d="M1135.854 242.068h17.574a2.944 2.944 0 0 0 2.072-.861 2.918 2.918 0 0 0 .857-2.068 2.937 2.937 0 0 0-2.932-2.932l-17.576-.002a2.93 2.93 0 0 0-2.928 2.934 2.936 2.936 0 0 0 2.933 2.929z"
      fill="#D8DEE9"
    />
    <path
      d="M1147.57 259.645h5.857a2.892 2.892 0 0 0 2.07-.855 2.933 2.933 0 0 0-2.071-5.004h-5.857a2.932 2.932 0 0 0-2.93 2.93 2.924 2.924 0 0 0 2.931 2.929z"
      fill="#88C0D0"
    />
  </g>
);

export default Window;
