import React from 'react';
import Svg, { Defs, Path } from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: style, title */

function SvgComponent(props) {
  return (
    <Svg
      id="prefix__Layer_1"
      data-name="Layer 1"
      viewBox="0 0 1750 500"
      width={1750 / 7}
      height={500 / 7}
      {...props}
    >
      <Defs />
      <Path
        className="prefix__cls-1"
        d="M58.46 441.54Q0 382.92 0 300h100q0 41.38 29.4 70.6Q158.63 400 200 400t70.6-29.4Q300 341.37 300 300V100h100v200q0 82.92-58.63 141.54Q282.73 500 200 500q-82.92 0-141.54-58.46zM0 100h100v100H0zM750 0v300q0 41.38-29.4 70.6Q691.37 400 650 400t-70.6-29.4Q550 341.37 550 300t29.4-70.6Q608.63 200 650 200V100q-82.92 0-141.54 58.63Q450 217.27 450 300q0 82.92 58.46 141.54Q567.08 500 650 500q82.72 0 141.37-58.46Q850 382.92 850 300V0zM1241.37 158.63Q1182.73 100 1100 100q-82.92 0-141.54 58.63Q900 217.27 900 300v200h100V300q0-41.36 29.4-70.6 29.23-29.4 70.6-29.4t70.6 29.4q29.4 29.23 29.4 70.6v200h100V300q0-82.72-58.63-141.37zM1691.37 158.63Q1632.73 100 1550 100q-82.92 0-141.54 58.63Q1350 217.27 1350 300q0 82.92 58.46 141.54Q1467.08 500 1550 500V400q-41.38 0-70.6-29.4-29.4-29.23-29.4-70.6t29.4-70.6q29.23-29.4 70.6-29.4t70.6 29.4q29.4 29.23 29.4 70.6v200h100V300q0-82.72-58.63-141.37z"
        fill="#5a3d8a"
      />
    </Svg>
  );
}

const MemoSvgComponent = React.memo(SvgComponent);
export default MemoSvgComponent;
