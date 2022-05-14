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
  } from 'react-native';

import BackButton from './BackButton';
import ProgressBar from 'react-native-progress/Bar';
import ProgressBarBox from './ProgressBarBox';


//clean up import code here
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';


const ScreenTop = (props) => {

    return (
        <View>
            <Box bgColor={props.backgroundColor}>
                    <BackButton/>
                    <Center>
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