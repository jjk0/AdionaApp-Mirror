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
    BarChart
  } from 'react-native-chart-kit'


import ProgressBar from 'react-native-progress/Bar';
import ScreenTop from '../../components/ScreenTop';
import ClickableTextBox from '../../components/ClickableTextBox';


//clean up import code here
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';




const ActivityScreen = ({navigation}) => {

    //this code can be used later to set labels for the yValues. Look into scaling further
    // function* yLabel() {
    //     yield* [minValue,4000,6000,8000];
    // }

    // const minValue = 2000;
    // const yLabelIterator = yLabel();
    // const datapoints = [2459,4392,4121,5994,6342,3111,2790].map(
    //     (datapoint) => datapoint - minValue - 1,
    // );

    return(
        <ScrollView>
            <ScreenTop backgroundColor='#4ADE80' screenTitle='Activity' statistic='7592' supportingText='steps today' progressNumber='.8' iconName='walking'/>
            <VStack mx='8'>
                <ClickableTextBox backgroundColor='success.400' mainText='Activity Tip' secondaryText='Try some of these activities to keep John Active'/>
                <Box bgColor='green.400' borderRadius='2xl' my='5'>
                    <Text color='black' mt='2' fontSize={24} alignSelf='center'>John's Step Count</Text>
                    <BarChart
                        data={{
                            labels: ['5/4','5/5','5/6','5/7','5/8','5/9','5/10'],
                            datasets: [
                            {
                                data: [2459,4392,4121,5994,6342,3111,2790],
                                //data: datapoints,
                            },
                            ],
                        }}
                        width={Dimensions.get('window').width - 64}
                        height={250}
                        fromZero={true}
                        segments={3}
                        chartConfig={{
                            backgroundColor: 'white',
                            backgroundGradientFrom: 'white',
                            backgroundGradientTo: '#ffffff',
                            fillShadowGradientFrom: '#4ADE80',
                            fillShadowGradientTo: '#4ADE80',
                            fillShadowGradientOpacity:1,
                            fillShadowGradientToOffset:.9,
                            fillShadowGradientFromOffset: 0,
                            decimalPlaces:0,
                            barPercentage:.5,
                            //formatYLabel: () => yLabelIterator.next().value,
                            color: (opacity = 2) => `rgba(0, 0, 0, ${opacity})`,
                            barRadius: 10,
                            propsForHorizontalLabels: {
                                x:40
                            }
                            
                        }}
                        showBarTops={false}
                        showValuesOnTopOfBars={true}
                        
                        style={{
                            marginVertical: 16,
                            borderRadius: 16,
                        }}
                        />
                </Box>
            </VStack>
    </ScrollView>
    )
}
export default ActivityScreen