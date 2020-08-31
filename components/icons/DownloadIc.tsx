import * as React from "react";
import Svg, { Path } from "react-native-svg";

function DownloadIc(props) {
  return (
    <Svg width={28} height={28} viewBox="0 0 28 28" fill="none" {...props}>
      <Path
        d="M25.813 17.117v7.602c0 .603-.491 1.093-1.094 1.093H3.28c-.603 0-1.094-.49-1.094-1.093v-7.602H0v7.602A3.285 3.285 0 003.281 28H24.72A3.285 3.285 0 0028 24.719v-7.602h-2.188z"
        fill={props.active ? "#292929" : "#eee"}
      />
      <Path
        d="M19.25 12.89l-4.156 4.157V0h-2.188v17.047L8.75 12.891l-1.547 1.546L14 21.235l6.797-6.797-1.547-1.546z"
        fill={props.active ? "#292929" : "#eee"}
      />
    </Svg>
  );
}

export default DownloadIc;
