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
import { Amplify, Auth, Storage } from 'aws-amplify';

//clean up import code here
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import ReactNativeBlobUtil from 'react-native-blob-util';

import { VictoryBar, VictoryChart, VictoryTheme,VictoryLine,VictoryScatter,VictoryBoxPlot,Background } from "victory-native";






  Amplify.configure({
    Auth: {
        identityPoolId: 'us-east-1:948efe99-6034-4432-9423-90e156d1cc55', //REQUIRED - Amazon Cognito Identity Pool ID
        region: 'us-east-1', // REQUIRED - Amazon Cognito Region
        userPoolId: 'us-east-1_HZcKykJbc', //OPTIONAL - Amazon Cognito User Pool ID
        userPoolWebClientId: 'oo5jo4t8g05e202e06940fg84', //OPTIONAL - Amazon Cognito Web Client ID
    },
    Storage: {
        AWSS3: {
            bucket: 'processed-adiona-watch-app-data', //REQUIRED -  Amazon S3 bucket name
            region: 'us-east-1', //OPTIONAL -  Amazon service region
        }
        }
    });

    
    
    

const ActivityScreen = ({navigation}) => {

  const [hrData, setHrData] = useState()
  const [loaded, setLoaded] = useState(false)

  const getData = async () => {

    try {
    const result = await Storage.get(`/12345/hrData.json`, {download:true})
      .then(result => { 
      const getBlog = async () => {
        const text = await (new Response(result.Body)).json();
        
        const timestamps = text['heart_rate']['timestamps'].map(function(d) { return new Date(d*1000).toLocaleDateString('en-US', { day: 'numeric', month: 'numeric' })});
        const rates = text['heart_rate']['value']

        data_arr=[]
        for (let i = timestamps.length-1; i > 0;  i--) {
          let val = {'x': timestamps[i], 'y': rates[i]}
          data_arr.push(val)
        }
        setHrData(data_arr)
        setLoaded(true)

      }
      getBlog()
      
    });
    } catch (e) {
        console.log(e.message);
    }
  }

  useEffect(() => {
    getData();
    }, [])
    

    return(
        <ScrollView>
            <ScreenTop backgroundColor='#517FF3' screenTitle='Heart Health' statistic='74' supportingText='avg bpm today' progressNumber='1' iconName='heartbeat'/>
            <VStack mx='8'>
                <ClickableTextBox textColor='white' backgroundColor='#517FF3' mainText='Summary' secondaryText='Avg. Resting HR: 67 bpm Avg. HRV: 67ms'/>
                <Box bgColor='white' borderRadius='2xl' my='5'>
                    <Text color='black' my='2' fontSize={24} alignSelf='center'>John's Daily Heart Rate</Text>
                <Box borderRadius='2xl' bgColor='white'>
                    {loaded && <VictoryChart width={350}>
                        {loaded && <VictoryLine data={hrData}
                                style={{data: { stroke: "#517FF3" }}}/>}
                    </VictoryChart>}
                </Box>
                </Box>
            </VStack>
        </ScrollView>
    )
}
export default ActivityScreen