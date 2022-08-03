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
    Circle,
    Divider
  } from 'native-base';
import OutlineBox from '../../components/OutlineBox';


import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import ScreenTop from '../../components/ScreenTop';
import {SafeAreaView} from 'react-native';



const FallWarning = ({navigation}) => {

    

    return (
        <SafeAreaView style={{flex:1}}>
        <ScrollView>
            <ScreenTop backgroundColor='#F0420A' screenTitle='Fall Detected' bottomText='Alert' iconName='exclamation-circle'/>
            <VStack mt='10' mx='4'>
                <OutlineBox shortTermText={true} backgroundColor='#F0420A' firstText="1. Make sure nothing's broken" secondText="2. Use furniture to help them up"/>
                <HStack my='2' mx='4'>
                    <Pressable>
                        <Box mx='2' borderRadius='2xl' backgroundColor='#F0420A'>
                            <Icon size={150} name='phone' color='black'></Icon>
                        </Box>
                            <Center>
                                <Text style={{fontFamily:'Alata'}} color='black' fontSize={30}>Call John</Text>
                            </Center>
                    </Pressable>
                    <Pressable>
                        <Box mx='2' borderRadius='2xl' backgroundColor='#F0420A'>
                            <Icon size={150} name='map-marker-alert-outline' color='black'></Icon>
                        </Box>
                            <Center>
                                <Text style={{fontFamily:'Alata'}} color='black' fontSize={30}>Location</Text>
                            </Center>
                    </Pressable>
                    
                </HStack>
                <OutlineBox longTermText={true} backgroundColor="#577FC3" firstText="Here are some tips to reduce falls"/>
                
            </VStack>
        </ScrollView>
        </SafeAreaView>
    )
}

export default FallWarning