import * as React from "react"
import Svg, { Path } from "react-native-svg"

const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 307 132"
    {...props}
  >
    <Path
      d="M396.597-86.984c4.5-44.5-377-14.5-395 54s120.5 121 197.5 153 220.5-16.5 256.5 0 26.5-63 84-88.5-147.5-74-143-118.5Z"
      fill="#fff"
      fillOpacity={0.1}
    />
  </Svg>
)

export default SvgComponent