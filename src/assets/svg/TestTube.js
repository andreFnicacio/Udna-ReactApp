import React from 'react';
import Svg, { Path, Circle } from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg viewBox="0 0 128 128" width={128} height={128} {...props}>
      <Path
        d="M81.5 4h-35c-2.8 0-5 2.2-5 5s2.2 5 5 5H49v95c0 8.3 6.7 15 15 15s15-6.7 15-15V14h2.5c2.8 0 5-2.2 5-5s-2.2-5-5-5z"
        fill="#FFF"
      />
      <Path
        d="M64 124c-8.3 0-15-6.7-15-15V44h30v65c0 8.3-6.7 15-15 15z"
        fill="#90D3EA"
      />
      <Circle cx={62.5} cy={52} fill="#FFF" r={4} />
      <Circle cx={72.5} cy={71.5} fill="#FFF" r={3.5} />
      <Circle cx={62.5} cy={89.5} fill="#FFF" r={1.5} />
      <Circle cx={70.5} cy={99} fill="#FFF" r={1} />
      <Path
        d="M64 125.2c-9 0-16.2-7.3-16.2-16.2V15.2h-1.2c-3.4 0-6.2-2.8-6.2-6.2s2.8-6.2 6.2-6.2h35c3.4 0 6.2 2.8 6.2 6.2s-2.8 6.2-6.2 6.2h-1.2V109c-.2 9-7.4 16.2-16.4 16.2zM46.5 5.2c-2.1 0-3.8 1.7-3.8 3.8s1.7 3.8 3.8 3.8H49c.7 0 1.2.6 1.2 1.2v95c0 7.6 6.2 13.8 13.8 13.8 7.6 0 13.8-6.2 13.8-13.8V14c0-.7.6-1.2 1.2-1.2h2.5c2.1 0 3.8-1.7 3.8-3.8s-1.7-3.8-3.8-3.8h-35z"
        fill="#502D4B"
      />
      <Path fill="#502D4B" opacity={0.2} d="M49 14h30v6H49z" />
      <Path
        d="M79 15.2H49c-.7 0-1.2-.6-1.2-1.2s.6-1.2 1.2-1.2h30c.7 0 1.2.6 1.2 1.2s-.5 1.2-1.2 1.2z"
        fill="#502D4B"
      />
      <Path
        d="M64 120.5c-6.3 0-11.5-5.2-11.5-11.5V19c0-1.4 1.1-2.5 2.5-2.5s2.5 1.1 2.5 2.5v90c0 3.6 2.9 6.5 6.5 6.5 1.4 0 2.5 1.1 2.5 2.5s-1.1 2.5-2.5 2.5z"
        fill="#FFF"
        opacity={0.8}
      />
    </Svg>
  );
}

const MemoSvgComponent = React.memo(SvgComponent);
export default MemoSvgComponent;
