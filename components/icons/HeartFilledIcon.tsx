import * as React from "react"
import Svg, { Path } from "react-native-svg"

function HeartFilledIcon(props) {
  return (
    <Svg width={30} height={19} viewBox="0 0 21 19" fill="none" {...props}>
      <Path
        d="M15.181 0c-1.121 0-2.15.355-3.056 1.057-.87.672-1.448 1.528-1.789 2.15-.34-.622-.919-1.478-1.788-2.15A4.894 4.894 0 005.49 0C2.361 0 0 2.56 0 5.956c0 3.668 2.945 6.178 7.404 9.978.757.645 1.615 1.376 2.507 2.156a.645.645 0 00.85 0c.893-.78 1.75-1.511 2.508-2.157 4.458-3.799 7.404-6.309 7.404-9.977C20.673 2.561 18.312 0 15.18 0z"
        fill="#E44545"
      />
    </Svg>
  )
}

export default HeartFilledIcon;
