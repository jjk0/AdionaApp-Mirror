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

import { VictoryBar, VictoryChart, VictoryTheme,VictoryLine,VictoryScatter,VictoryBoxPlot } from "victory-native";


const data = [
    { date: '3/21', rate: 80 },
    { date: '3/22', rate: 60 },
    { date: '3/23', rate:  72},
    { date: '3/24', rate: 75 }
  ];



const ActivityScreen = ({navigation}) => {
    const defaultChartStyle = {
        strokeWidth:0,
        backgroundColor:
          'linear-gradient(180deg, rgba(221, 243, 255, 0) 0%, #DDF3FF 100%)',
        //shadowColor: '#000000',
        //shadowOpacity: 0.5,
        //shadowRadius: 2,
        // shadowOffset: {
        //   height: 1,
        //   width: 1,
        // },
        borderRadius: 8,
        marginLeft:0,
        //marginRight:2,
      };


    return(
        <ScrollView>
            <ScreenTop backgroundColor='#FE987D' screenTitle='Heart Health' statistic='74' supportingText='avg bpm today' progressNumber='1' iconName='heartbeat'/>
            <VStack mx='8'>
                <ClickableTextBox backgroundColor='red.300' mainText='Summary' secondaryText='Avg. Resting HR: 67 bpm Avg. HRV: 67ms'/>
                <Box bgColor='red.300' borderRadius='2xl' my='5'>
                    <Text color='black' my='2' fontSize={24} alignSelf='center'>John's Daily Heart Rate</Text>
                    {/* <LineChart
                        data={{
                            labels: ['3/20','3/27','4/3','4/10'],
                            datasets: [
                            {
                                data: [55,70,75,65,45,35,45,65,75,80,82,50],
                            },
                            ],

                        }}
                        width={Dimensions.get('window').width - 64}
                        height={250}
                        withInnerLines={true}
                        withOuterLines={false}
                        withVerticalLines={false}
                        yAxisInterval={5}
                        withScrollableDot={false}
                        scrollableDotStrokeColor={'red'}
                        chartConfig={{
                            strokeWidth:-1,
                            scrollableDotStrokeColor:"#FFFFFF",
                            backgroundGradientFrom: '#DDF3FF',
                            backgroundGradientFromOpacity: 1,
                            backgroundGradientTo: '#FFF',
                            color: () => '#FE987D',
                            useShadowColorFromDataset: false, // optional
                            decimalPlaces: 0,
                            propsForHorizontalLabels: {
                                fill:"#000000",
                            },
                            propsForBackgroundLines: {
                                stroke:"#000000",
                            },
                            propsForVerticalLabels: {
                                fill:"#000000",
                                textAnchor: 'start',
                                scale:1,
                                wordSpacing:2,
                                textLength:.1,
                                },
                                scrollableDotFill: "#fff",
                                scrollableDotRadius: 6,
                                scrollableDotStrokeColor: "#FF5500",
                                scrollableDotStrokeWidth: 3,
              
                                scrollableInfoViewStyle: {
                                  justifyContent: "center",
                                  alignContent: "center",
                                  backgroundColor: "#121212",
                                  borderRadius: 2
                                },
                                scrollableInfoTextStyle: {
                                  color: "#C4C4C4",
                                  marginHorizontal: 4,
                                  flex: 1,
                                  textAlign: "center"
                                },
                                scrollableInfoSize: { width: 65, height: 30 },
                                scrollableInfoOffset: 15
                        }}
                        getDotProps={(value) =>
                            !value
                            ? {
                                r: '0',
                                }
                            : {
                                r: '4',
                                strokeWidth: '0',
                                stroke: 'rgba(51, 217, 207, 0.1)',
                                }
                        }
                        bezier={false}
                        style={defaultChartStyle}
                        withShadow={false}
                /> */}
                <VictoryChart width={350} theme={VictoryTheme.grayscale}>
                    <VictoryLine data={data} x="date" y="rate" />
                </VictoryChart>
                </Box>
            </VStack>
    </ScrollView>
    )
}
export default ActivityScreen