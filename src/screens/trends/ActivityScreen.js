import React, { useEffect, useState,useCallback } from 'react';
import { useFocusEffect } from '@react-navigation/native';
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


import ScreenTop from '../../components/ScreenTop';
import ClickableTextBox from '../../components/ClickableTextBox';


//clean up import code here
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import { VictoryBar, VictoryChart, VictoryTheme,VictoryLine,VictoryScatter,VictoryBoxPlot,VictoryAxis } from "victory-native";
import { DataStore } from 'aws-amplify';
import { UserInfo,ActivityInfo } from '../../models';


    
    



const ActivityScreen = ({navigation}) => {


    const [data,setData] = useState()


    async function addItem() {
        const models = await DataStore.query(UserInfo,"94887492-1853-42e6-a259-e37ebd2b33e9");
        setData((models['activityData']))
    }

    useEffect(() => {
            addItem();
          }, [])
    

    return(
        <ScrollView>
            <ScreenTop backgroundColor='#E55CE5' screenTitle='Activity' statistic='7592' supportingText='steps today' progressNumber='.8' iconName='walking'/>
            <VStack mx='8'>
                <ClickableTextBox backgroundColor='#F9A8D4' mainText='Activity Tip' secondaryText='Try some of these activities to keep John Active'/>
                <Box bgColor='pink.300' borderRadius='2xl' my='5'>
                    <Text color='black' mt='2' fontSize={24} alignSelf='center'>John's Step Count</Text>
                    <Box bgColor='white' borderRadius='2xl'>
                        <VictoryChart width={350} theme={VictoryTheme.grayscale} domainPadding={{ x: 15 }}>
                            <VictoryAxis crossAxis />
                            <VictoryAxis dependentAxis crossAxis
                            style={{grid: {stroke:"#C3C3C3", strokeWidth:1.5 }}}/>
                            {data && <VictoryBar data={data} x="date" y="rate" 
                            cornerRadius={{ top: ({ datum }) =>  7 }}
                            style={{
                                data: { fill: "#E55CE5" }
                                }}
                            >
                            </VictoryBar>}
                        </VictoryChart>
                    </Box>
                </Box>
            </VStack>
    </ScrollView>
    )
}
export default ActivityScreen