import React, { useEffect, useState } from 'react';
import {
    Box,
    VStack,
    Text,
    HStack,
    Pressable,
    Center,
  } from 'native-base';

//clean up import code here
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import ProgressBar from 'react-native-progress/Bar'

const TrendBarIcon = (props) => {

    const [progressColor, setProgressColor] = useState('');


    useEffect(() => {
    if (props.progressNumber <=.3) {
        setProgressColor('#ED0707');
    } else if (props.progressNumber>.3 && props.progressNumber<.6) {
        setProgressColor('#E3E577');
    } else {
        setProgressColor("#47E169")

    }
    }, [props.progressNumber])

    return (
    <Pressable my='2'>
        <HStack>
            <Box borderRadius='2xl' size={70} bg='muted.200'>
                <Center my='4'>
                    <FontAwesome5 name={props.iconTitle} size={40} color={props.iconColor} />
                </Center>
            </Box>
            <VStack my='-1' mx='5'>
                <Text bold fontSize={20}>{props.title}</Text>
                <Text alignSelf='flex-end' italic fontSize={16}>{props.progressText}</Text>
                <ProgressBar unfilledColor='#e5e5e5' borderColor='#FFFFFF' color={progressColor} progress={props.progressNumber} width={200} />
            </VStack>
        </HStack>
    </Pressable>
    )
}

export default TrendBarIcon;