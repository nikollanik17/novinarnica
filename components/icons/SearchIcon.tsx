import * as React from "react"
import Svg, { Path, Rect } from "react-native-svg"

function SearchIcon(props) {
  return (
    <Svg width={26} height={24} viewBox="0 0 26 24" fill="none" {...props}>
      <Path
        d="M19.135 15.816c-2.763 2.6-7.17 2.53-9.843-.153A6.63 6.63 0 019.45 6.1c2.762-2.6 7.17-2.53 9.843.153a6.63 6.63 0 01-.16 9.564z"
        stroke="#D5D5D5"
        strokeWidth={2}
      />
      <Rect
        width={1.965}
        height={12.456}
        rx={0.982}
        transform="matrix(.70589 .70832 -.72829 .68527 9.071 14.073)"
        fill="#D4D4D4"
      />
    </Svg>
  )
}

export default SearchIcon;