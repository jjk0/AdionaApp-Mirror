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


//clean up import code here
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';




const ActivityScreen = ({navigation}) => {

    //this code can be used later to set labels for the yValues. Look into scaling further
    // function* yLabel() {
    //     yield* [minValue,4000,6000,8000,10000];
    // }

    // const minValue = 2459;
    // const yLabelIterator = yLabel();
    // const datapoints = [2459,4392,4121,5994,6342,3111,2790].map(
    //     (datapoint) => datapoint - minValue - 1,
    // );

    return(
        <ScrollView>
            <ScreenTop backgroundColor='#4ADE80' screenTitle='Activity' statistic='7592' supportingText='steps today' progressNumber='.8' iconName='walking'/>
            <VStack mx='8'>
                <Box borderRadius='2xl' mt='10' w='100%' bgColor='success.400' pt='2'>
                    <Text mx='5' bold alignItems='flex-start' fontSize={25}>Activity Tip</Text>
                    <Text mx='5' alignItems='flex-start' fontSize={25}>Try some of these activities to keep John active</Text>
                    <Pressable mb='2' alignSelf='flex-end'>
                            <Icon name="chevron-right" size={40} color="black" />
                    </Pressable>
                </Box>
                <Box mt='5'>
                    <BarChart
                        data={{
                            labels: ['5/4','5/5','5/6','5/7','5/8','5/9','5/10'],
                            datasets: [
                            {
                                data: [2459,4392,4121,5994,6342,3111,2790],
                            },
                            ],
                        }}
                        width={Dimensions.get('window').width - 64}
                        height={250}
                        fromZero={true}
                        segments={4}
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
                            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                            
                        }}
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