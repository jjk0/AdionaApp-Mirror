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
  } from 'native-base';
import {
    StyleSheet,
    Dimensions
  } from 'react-native';

import BackButton from './BackButton';
import ProgressBar from 'react-native-progress/Bar';
import ProgressBarBox from './ProgressBarBox';
import TrendScreenBackground from "./TrendScreenBackground";
import Vector14 from "./shapeSVGs/Vector14";
import Vector21 from "./shapeSVGs/Vector21";

//clean up import code here

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const ScreenTop = (props) => {

    return (
        <View>
            <Box bgColor='#517FF3'>
                <View style={{position:'absolute', top:'-30%', left:'30%'}} size='90%' >
                    <Vector14/>
                </View>
                <View style={{position:'absolute', bottom:'-30%'}} size='60%'>
                    <Vector21/>
                </View>
                    <BackButton/>
                    <Center mb='-3'>
                        <VStack>
                            <Text alignSelf='center' width='100%' color='white' fontSize={40}>{props.screenTitle}</Text>
                            <HStack>
                                <FontAwesome5 name={props.iconName} size={150} color='white' />
                                <VStack ml='10%' mt='10%'>
                                    <Text width='100%' color='white' fontSize={50}>{props.statistic}</Text>
                                    <Text width='100%' color='white' fontSize={20}>{props.supportingText}</Text>
                                </VStack>
                            </HStack>

                        </VStack>
                    </Center>
                    {props.progressNumber && 
                    <Box mb='-10'>
                        <ProgressBarBox progressNumber={props.progressNumber}/>
                    </Box>
                    }
            </Box>
        </View>
    )
}

export default ScreenTop