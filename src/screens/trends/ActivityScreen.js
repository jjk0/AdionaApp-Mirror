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


//clean up import code here
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';




const ActivityScreen = ({navigation}) => {


    function* yLabel() {
        yield* [0,2000,4000,6000,8000];
    }

    const yLabelIterator = yLabel();


    return(
        <ScrollView>
            <Box bgColor='success.400' m='0' pb='10'>
                <Pressable m='5' alignSelf='flex-start'>
                    <Circle bgColor='white'>
                        <Icon name="chevron-left" size={40} color="black" />
                    </Circle>
                </Pressable>
                <Center>
                    <VStack>
                        <Text alignSelf='center' width='100%' color='white' fontSize={40} mb='10'>Activity</Text>
                        <HStack>
                            <FontAwesome5 name='walking' size={150} color='white' />
                            <VStack ml='10%' mt='10%'>
                                <Text width='100%' color='white' fontSize={30}>7592</Text>
                                <Text width='100%' color='white' fontSize={20}>steps today</Text>
                            </VStack>
                        </HStack>

                    </VStack>
                </Center>

                <Pressable borderRadius='100' m='5' p='5' bgColor='white' alignSelf='flex-end'>
                    <Center>
                        <HStack>
                            <ProgressBar unfilledColor='#e5e5e5' borderColor='#FFFFFF' color='#E3E577' progress={.4} width={200} />
                        </HStack>
                    </Center>
                </Pressable>
            </Box>
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
                            labels: [
                            '5/4',
                            '5/5',
                            '5/6',
                            '5/7',
                            '5/8',
                            '5/9',
                            '5/10'
                            ],
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
                        xArisLabel={'Date'}
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
                            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                            
                        }}
                        formatYLabel={() => yLabelIterator.next().value()}
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