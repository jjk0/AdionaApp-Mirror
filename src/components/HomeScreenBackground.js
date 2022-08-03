import * as React from "react"
import Svg, { Rect, Path, Text } from "react-native-svg"
import {
  View,
} from 'native-base';

import { Dimensions } from "react-native";



const originalWidth = 420;
const originalHeight = 188;
const aspectRatio = originalWidth / originalHeight;
const windowWidth = Dimensions.get('window').width;
const SvgComponent = (props) => (
  <View style={{ width: windowWidth, aspectRatio }}>
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      preserveAspectRatio="xMidYMid" 
      viewBox={`0 0 ${originalWidth} ${originalHeight}`}
      {...props}
    >
      <Rect
        // x={6.578}
        // y={26.432}
        width={380}
        height={150}
        rx={25}
        fill="#F0420A"
      />
      <Path
        d="M310.078 18.432c-27.5-5.5-315.5 42.5-310 87s295.5 82 337.5 75.5 61-55.5 57.5-96.5-57.5-60.5-85-66Z"
        fill="#fff"
        fillOpacity={0.2}
      />
      <Path
        d="M321.796.004c-44-1-173.5 176-155 176h172.5c37.5 0 105-84 62-83s-44.5-14.5-35.5-24.5 0-67.5-44-68.5Z"
        fill="#fff"
        fillOpacity={0.1}
      />
    </Svg>
    {/* <Box style={{position:'absolute'}} width='90%'>
        <VStack>
            <HStack>
                <Icon name="alert-circle-outline" size={30} color="white" alignSelf='start' />
                <Text style={{fontFamily:'Alata'}} fontSize={25} alignSelf='center' ml='3' color='white'>Alert</Text>
            </HStack>

            <Text style={{fontFamily:'Alata'}} fontSize={20} color='white'>John might get agitated soon. Tap to see our recommendations</Text>
        </VStack>
    </Box> */}
  </View>
)

export default SvgComponent
