import * as React from "react"
import Svg, { G, Rect, Path, Mask, Defs, ClipPath  } from "react-native-svg"
import {
  View,
} from 'native-base';

import { Dimensions } from "react-native";



const originalWidth = 414;
const originalHeight = 320;
const windowWidth = Dimensions.get('window').width;
const aspectRatio = originalWidth / originalHeight;
const SvgComponent = (props) => (
  <View style={{ aspectRatio }}>
    <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox={`0 0 ${originalWidth} ${originalHeight}`}
    {...props}
  >
    <Mask
      id="a"
      style={{
        maskType: "alpha",
      }}
      maskUnits="userSpaceOnUse"
      x={0}
      y={0}
      width={414}
      height={320}
    >
      <Path fill="#D9D9D9" d="M0 0h414v320H0z" />
    </Mask>
    <G mask="url(#a)">
      <Path
        d="M0 5C0-8.807 11.193-20 25-20h364c13.807 0 25 11.193 25 25v290c0 13.807-11.193 25-25 25H25c-13.807 0-25-11.193-25-25V5Z"
        fill="#517FF3"
      />
      <Path
        d="M319.215 289.217c3.77-32.588-315.8-10.619-330.877 39.544-15.078 50.163 100.938 88.609 165.438 112.043 64.501 23.434 184.705-12.083 214.861 0 30.156 12.083 22.198-46.135 70.364-64.809 48.166-18.674-123.555-54.191-119.786-86.778Zm90.305-462.968c3.568-51.345-298.979-16.73-313.254 62.305C81.992-32.41 191.828 28.164 252.893 65.087c61.065 36.921 174.867-19.038 203.416 0 28.55 19.037 21.016-72.69 66.616-102.112 45.601-29.422-116.974-85.382-113.405-136.726Z"
        fill="#fff"
        fillOpacity={0.1}
      />
    </G>
  </Svg>
  </View>
)

export default SvgComponent
