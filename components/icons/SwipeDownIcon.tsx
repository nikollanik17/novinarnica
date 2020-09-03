import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SwipeDownIcon(props) {
  return (
    <Svg width={23} height={15} viewBox="0 0 16 14" fill="none" {...props}>
      <Path
        d="M15 6.583L8.676 12.38a1 1 0 01-1.352 0L1 6.583"
        stroke="#EEE"
        strokeWidth={1.5}
      />
      <Path
        d="M15 1L8.676 6.797a1 1 0 01-1.352 0L1 1"
        stroke="#EEE"
        strokeWidth={1.5}
      />
    </Svg>
  )
}

export default SwipeDownIcon;
