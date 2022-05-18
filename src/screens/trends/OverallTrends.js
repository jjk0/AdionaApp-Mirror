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
  } from 'react-native';


import TrendBarIcon from '../../components/TrendBarIcon';
import BackButton from '../../components/BackButton';


//clean up import code here
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import ProgressCircle from 'react-native-progress-circle'





 //may have to include in useState
 const date = new Date()


  const OverallTrends = ({ navigation }) => {
    
    
    return (
        <ScrollView style={styles.sectionContainer}>
            <Box bgColor='info.500' m='0'>
                <BackButton/>
                <Center>
                    <HStack>
                        <VStack py='10' alignSelf='center'>
                        <Text ml='17' w='200' fontSize={20} h='10' color='white'>John's Wellness Score</Text>
                                <HStack>
                                    <Circle size={250} bg='white'>
                                        <ProgressCircle
                                            percent={72}
                                            radius={100}
                                            borderWidth={18}
                                            color="#3399FF"
                                            shadowColor="#fff"
                                            bgColor="#FFFFFF"
                                        >
                                            <Text alignSelf='center' color='blue' fontSize='48'>{72}</Text>
                                        </ProgressCircle>
                                    </Circle>
                                </HStack>
                        </VStack>
                    </HStack>
                </Center>
            </Box>
            <VStack px='10'>
                <VStack marginY='10' alignItems='flex-start'>
                    <TrendBarIcon title='Activity' iconTitle='walking' progressText='Keep going!' progressNumber='.4' iconColor="#E55CE5" navigateToPage='Activity Screen'/>
                    <TrendBarIcon title='Sleep' iconTitle='moon' progressText='John might need a nap' progressNumber='.2' iconColor="#2E6BA8"/>
                    <TrendBarIcon title='Agitation' iconTitle='exclamation-circle' progressText='None today!' progressNumber='.8' iconColor="#B97AE0" />
                    <TrendBarIcon title='Mobility' iconTitle='location-arrow' progressText="John's Balance is great" progressNumber='.8' iconColor="#D87E2A" />
                    <TrendBarIcon title='Heart' iconTitle='heartbeat' progressText='Metrics look normal' progressNumber='1.0' iconColor="#EE61A7" navigateToPage='Heart Screen'/>
                    <TrendBarIcon title='Respiratory' iconTitle='lungs' progressText='Metrics look normal' progressNumber='.9' iconColor="#5499E0" navigateToPage='Respiratory Screen'/>
                </VStack>
            </VStack>
                
        </ScrollView>
    )
  }



  const styles = StyleSheet.create({
    sectionContainer: {
      flex:1,
      backgroundColor:'white',
      paddingBottom: 50
    }
  });

  export default OverallTrends;