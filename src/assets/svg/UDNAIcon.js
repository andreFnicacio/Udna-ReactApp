import React from 'react';
import Svg, { Defs, Path } from 'react-native-svg';

import colors from '../../styles/colors';
/* SVGR has dropped some elements not supported by react-native-svg: style, title */

function SvgComponent(props) {
  return (
    <Svg
      id="prefix__Layer_1"
      data-name="Layer 1"
      viewBox="0 0 500 500"
      width={25}
      height={25}
      {...props}
    >
      <Defs />
      <Path
        fill={colors.primary}
        className="prefix__cls-1"
        d="M73.08 426.92Q0 353.65 0 250h125q0 51.72 36.75 88.25Q198.29 375 250 375t88.25-36.75Q375 301.71 375 250V0h125v250q0 103.65-73.29 176.92Q353.41 500 250 500q-103.65 0-176.92-73.08zM0 0h125v125H0z"
      />
    </Svg>
  );
}

const MemoSvgComponent = React.memo(SvgComponent);
export default MemoSvgComponent;
