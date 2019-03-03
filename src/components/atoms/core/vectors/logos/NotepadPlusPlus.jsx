/*
 * Copyright (C) 2018-present Arctic Ice Studio <development@arcticicestudio.com>
 * Copyright (C) 2018-present Sven Greb <development@svengreb.de>
 *
 * Project:    Nord Docs
 * Repository: https://github.com/arcticicestudio/nord-docs
 * License:    MIT
 */

import React from "react";
import PropTypes from "prop-types";

import { colors } from "styles/theme";

/**
 * The Notepad++ logo as SVG vector graphic component.
 *
 * @author Arctic Ice Studio <development@arcticicestudio.com>
 * @author Sven Greb <development@svengreb.de>
 * @since 0.9.0
 */
const NotepadPlusPlus = ({ fillColors, svgRef, ...passProps }) => (
  <svg {...passProps} ref={svgRef} viewBox="0 0 46 32.74" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M40.768 19.896v3.259H37.49v1.99h3.278v3.26h1.975v-3.26H46v-1.99h-3.258v-3.259h-1.974zm-10.125 0v3.259h-3.271v1.99h3.271v3.26h1.977v-3.26h3.262v-1.99H32.62v-3.259h-1.977zm-5.563-6.251c3.091 0 .313 15.751-2.35 15.722-1.476-.012-5.464-10.604-4.742-11.792-1.26 1.296-2.943 4.198-4.447 7.342-1.946 4.067-3.702 8.325-4.996 7.776-1.262-.771 1.982-5.774 4.855-10.37 2.418-3.867 3.519-7.504 5.438-7.504 2.067 0 2.215 6.863 4.66 11.389 1.622-2.582-1.066-12.563 1.582-12.563z"
      fill={fillColors.characters}
    />
    <path
      d="M12.244 24.006c-.742 0-1.055 1.408-1.055 1.408s.315-.361.637-.573c.157-.101.298-.185.418-.152.413.107.751.961.706 1.385a.327.327 0 0 0-.023.112c-.015.029-.031.058-.044.088-.297.633-.594 1.274-.88 1.87 1.155-.381 1.914-1.563 1.914-2.42 0-.36-.128-.668-.306-.927-.313-.448-.812-.729-1.256-.77-.04-.004-.073-.021-.111-.021z"
      fill={fillColors.chameleon}
    />
    <path
      d="M15.731 26.708c0-3.101-1.42-5.524-3.819-5.524-2.055 0-3.364 1.546-3.514 4.058-.037.635.205 1.205.542 1.68l1.244-.725c-.168-.344-.269-.721-.269-1.023 0-1.248.666-2.439 1.927-2.439 1.7 0 2.457 1.938 2.457 3.684l1.432.289z"
      fill={fillColors.chameleon}
    />
    <path
      d="M8.67 28.583c-4.949-6.458-.991-10.267 2.729-14.154.1.816.47 1.432 1.296 1.705.585.392 1.231-1.056 2.388-1.193.95-.115 2.025 1.236 2.752 1.363.526-.486 1.11-.766 1.327-1.115-.443-1.56-.88-2.662-2.302-2.363-.689-.298-1.302-.77-1.64-1.398 1.46-.045 2.435.059 2.695-.886 1.341.143 2.483.312 3.442.252 4.937-.321 5.103-3.4 2.193-6.848-.802-.953-1.845-.942-3.044-.943C19.207 1.549 17.413.32 14.981 0c-.132.882.244 1.721.647 2.559C10.528-2.263 4.295.698 1.914 4.475c-3.8 6.027-1.98 17.964 5.801 25.747 2.507 2.508 8.016.373 8.016-3.514 0-3.101-1.42-5.524-3.819-5.524-2.055 0-3.514 1.54-3.514 4.058 0 1.746 1.613 3.034 2.866 3.034 1.574 0 2.644-1.523 2.644-2.557 0-1.039-.955-1.705-1.672-1.705-.743 0-1.058 1.397-1.058 1.397s.701-.813 1.075-.714c.412.105.746.962.699 1.386-.053.477-1.193 1.028-1.672 1.04-.75.018-1.365-1.201-1.365-1.95 0-1.248.666-2.439 1.927-2.439 1.7 0 2.457 1.938 2.457 3.684 0 1.42-1.56 3.242-3.445 3.242-.702-.001-1.831-.616-2.184-1.077z"
      fill={fillColors.chameleon}
    />
    <path d="M21.001 5.433a1.987 1.987 0 0 1-3.973 0 1.987 1.987 0 1 1 3.973 0z" fill={fillColors.chameleonEye} />
    <path d="M20.354 5.749a.819.819 0 1 1-1.638-.002.819.819 0 0 1 1.638.002z" fill={fillColors.chameleonEyeLens} />
  </svg>
);

NotepadPlusPlus.propTypes = {
  fillColors: PropTypes.shape({
    characters: PropTypes.string,
    chameleon: PropTypes.string,
    chameleonEye: PropTypes.string,
    chameleonEyeLens: PropTypes.string
  }),
  svgRef: PropTypes.func
};

NotepadPlusPlus.defaultProps = {
  fillColors: {
    characters: colors.nord8,
    chameleon: colors.nord4,
    chameleonEye: colors.nord5,
    chameleonEyeLens: colors.nord0
  },
  svgRef: () => {}
};

export default NotepadPlusPlus;
