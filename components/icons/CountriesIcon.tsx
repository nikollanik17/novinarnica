import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

function CountriesIcon(props) {
  return (
    <Svg width={30}height={22} viewBox="0 0 22 22" fill="none" {...props}>
      <G clipPath="url(#prefix__clip0)" fill="#000">
        <Path d="M11 0c4.265 0 7.734 3.47 7.734 7.734 0 1.441-.399 2.848-1.154 4.068l-6.14 9.893a.645.645 0 01-.547.305h-.006a.644.644 0 01-.547-.313l-5.983-9.99a7.725 7.725 0 01-1.091-3.963C3.266 3.47 6.736 0 11 0zM5.463 11.035l5.44 9.082 5.581-8.995a6.437 6.437 0 00.97-3.388c0-3.554-2.9-6.454-6.454-6.454s-6.45 2.9-6.45 6.454a6.44 6.44 0 00.913 3.301z" />
        <Path d="M11 3.867a3.872 3.872 0 013.867 3.867A3.862 3.862 0 0111 11.602a3.86 3.86 0 01-3.867-3.868A3.872 3.872 0 0111 3.867zm0 6.454a2.589 2.589 0 002.587-2.587A2.596 2.596 0 0011 5.148a2.592 2.592 0 00-2.582 2.586A2.584 2.584 0 0011 10.321z" />
      </G>
      <Defs>
        <ClipPath id="prefix__clip0">
          <Path
            fill="#fff"
            transform="matrix(-1 0 0 1 22 0)"
            d="M0 0h22v22H0z"
          />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default CountriesIcon;