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

import { VictoryBar, VictoryChart, VictoryTheme,VictoryLine,VictoryScatter,VictoryBoxPlot,VictoryCandlestick } from "victory-native";


const data = [
  { x: new Date(2016, 6, 1), open: 15, close: 10, high: 15, low: 10 },
  { x: new Date(2016, 6, 2), open: 10, close: 15, high: 15, low: 10 },
  { x: new Date(2016, 6, 3), open: 15, close: 20, high: 20, low: 15 },
  { x: new Date(2016, 6, 4), open: 22, close: 10, high: 22, low: 10 },
  { x: new Date(2016, 6, 5), open: 20, close: 10, high: 20, low: 10 },
  { x: new Date(2016, 6, 6), open: 24, close: 16, high: 24, low: 16 },
  { x: new Date(2016, 6, 7), open: 22, close: 19, high: 22, low: 19 },
  { x: new Date(2016, 6, 8), open: 23, close: 10, high: 23, low: 10 },
  { x: new Date(2016, 6, 9), open: 25, close: 12, high: 25, low: 12 },
  { x: new Date(2016, 6, 10), open: 20, close: 10, high: 20, low: 10 },
  { x: new Date(2016, 6, 11), open: 20, close: 10, high: 20, low: 10},
  { x: new Date(2016, 6, 5), open: 10, close: 8, high: 10, low: 8 }
  ];



const RespiratoryScreen = () => {
    return (
        <ScrollView>
            <ScreenTop backgroundColor='#517FF3' screenTitle='Respiratory Health' statistic='97' supportingText='% SpO2' progressNumber='.9' iconName='lungs'/>
            <VStack mx='8'>
                <ClickableTextBox backgroundColor='blue.200' mainText='Summary' secondaryText='Avg. SpO2: 96% Avg. Breathing Rate: 21/min'/>
                <Box bgColor='blue.200' borderRadius='2xl' my='5'>
                    <Text color='black' my='2' fontSize={24} alignSelf='center'>John's SpO2</Text>
                <Box borderRadius='2xl' bgColor='white'>
                    <VictoryChart width={350} domainPadding={{ x: 15 }}>
                        <VictoryCandlestick data={data} 
                                cornerRadius={{ bottom: ({ datum }) =>  10 }}
                                style={{data: { stroke: "black", cornerRadius: { bottom: () =>  10 }}}}
                                candleColors={{ positive: "black", negative: "black" }}/>
                    </VictoryChart>
                </Box>
                </Box>
            </VStack>
        </ScrollView>
    )
}

export default RespiratoryScreen