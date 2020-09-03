import * as React from "react"
import Svg, { Path } from "react-native-svg"

function MarkerIcon(props) {
  return (
    <Svg width={30} height={20} viewBox="0 0 15 20" fill="none" {...props}>
      <Path
        d="M13.298 0H1.764C.824 0 0 .773 0 1.688V18.75c0 .306.085.561.223.759.164.235.428.37.712.37.268 0 .553-.12.817-.344l5.16-4.382a.975.975 0 01.627-.214c.238 0 .466.078.626.215l5.143 4.38c.265.226.53.345.798.345.453 0 .894-.349.894-1.129V1.687C15 .773 14.238 0 13.298 0z"
        fill="#7B369B"
      />
    </Svg>
  )
}

export default MarkerIcon;
