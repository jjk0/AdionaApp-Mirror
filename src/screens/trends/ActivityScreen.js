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
// import { DataStore } from 'aws-amplify';

import { Auth, API, graphqlOperation} from 'aws-amplify';
import { createUserInfo } from '../../graphql/mutations';
import { getUserInfo } from '../../graphql/queries';
import { UserInfo,ActivityInfo } from '../../models';


    
    



const ActivityScreen = ({navigation}) => {


    const [data,setData] = useState()


    const getUser = async () => {

        try {
        const user = await Auth.currentAuthenticatedUser();
        const models = await API.graphql({ query: getUserInfo, variables: { id: user.attributes.sub }});
        console.log('real name', models['data']['getUserInfo']['activityData'])

        setData(models['data']['getUserInfo'])

        } catch (e) {
            console.log(e.message);
        }

    }



    useEffect(() => {
        getUser();
        console.log('data',data)
        }, [])

    
    

    return(
        <ScrollView>
            <ScreenTop backgroundColor='#94E577' screenTitle='Activity' statistic='7592' supportingText='steps today' progressNumber='.8' iconName='walking'/>
            <VStack mx='8'>
                <ClickableTextBox textColor='white' backgroundColor='#517FF3' mainText='Activity Tip' secondaryText='Try some of these activities to keep John Active'/>
                <Box bgColor='white' borderRadius='2xl' my='5'>
                    {data && <Text color='black' mt='2' fontSize={24} alignSelf='center'>{data['name']}</Text>}
                    <Box bgColor='white' borderRadius='2xl'>
                        <VictoryChart width={350} theme={VictoryTheme.grayscale} domainPadding={{ x: 15 }}>
                            <VictoryAxis crossAxis />
                            <VictoryAxis dependentAxis crossAxis
                            style={{grid: {stroke:"#C3C3C3", strokeWidth:1.5 }}}/>
                            {data && <VictoryBar data={data['activityData']} x="date" y="rate" 
                            cornerRadius={{ top: ({ datum }) =>  7 }}
                            style={{data: { fill: "#94E577" }}}
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