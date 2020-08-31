import * as React from "react";
import Svg, { Path } from "react-native-svg";

function MoreIc(props) {
  return (
    <Svg width={21} height={28} viewBox="0 0 21 4" fill="none" {...props}>
      <Path
        d="M12.008 2.004a1.85 1.85 0 11-3.7 0 1.85 1.85 0 013.7 0zM20.008 2.004a1.85 1.85 0 11-3.7 0 1.85 1.85 0 013.7 0zM4.008 2.004a1.85 1.85 0 11-3.7 0 1.85 1.85 0 013.7 0z"
        fill={props.active ? "#292929" : "#eee"}
      />
    </Svg>
  );
}

export default MoreIc;
