import React, { useEffect, useState } from 'react';
import {
    Box,
    Card,
    ScrollView,
    VStack,
    Heading,
    Text,
    HStack,
    Pressable,
    Skeleton,
    View,
    Image,
    Center,
    ChevronRightIcon,
    Circle
  } from 'native-base';
import {
    StyleSheet,
    Dimensions
  } from 'react-native';

  import {
    LineChart,
    BarChart
  } from 'react-native-chart-kit'


import ProgressBar from 'react-native-progress/Bar';
import ScreenTop from '../../components/ScreenTop';
import ClickableTextBox from '../../components/ClickableTextBox';


//clean up import code here
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import { VictoryBar, VictoryChart, VictoryTheme,VictoryLine,VictoryScatter,VictoryBoxPlot,Background } from "victory-native";


const data = [
    { date: '3/21', rate: 80 },
    { date: '3/22', rate: 60 },
    { date: '3/23', rate:  72},
    { date: '3/24', rate: 75 }
  ];



const ActivityScreen = ({navigation}) => {
    

    return(
        <ScrollView>
            <ScreenTop backgroundColor='#FE987D' screenTitle='Heart Health' statistic='74' supportingText='avg bpm today' progressNumber='1' iconName='heartbeat'/>
            <VStack mx='8'>
                <ClickableTextBox backgroundColor='red.300' mainText='Summary' secondaryText='Avg. Resting HR: 67 bpm Avg. HRV: 67ms'/>
                <Box bgColor='red.300' borderRadius='2xl' my='5'>
                    <Text color='black' my='2' fontSize={24} alignSelf='center'>John's Daily Heart Rate</Text>
                <Box borderRadius='2xl' bgColor='white'>
                    <VictoryChart width={350}>
                        <VictoryLine data={data} x="date" y="rate" 
                                style={{data: { stroke: "#FE987D" }}}/>
                    </VictoryChart>
                </Box>
                </Box>
            </VStack>
        </ScrollView>
    )
}
export default ActivityScreen