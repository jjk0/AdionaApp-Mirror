import React, { useEffect, useState } from 'react';
import {
    Box,
    VStack,
    Text,
    HStack,
    Pressable,
    Center,
    Circle
  } from 'native-base';

import { useNavigation } from '@react-navigation/native';
import {Linking } from 'react-native'

//clean up import code here
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';





const ClickableTextBox = (props) => {
    const navigation = useNavigation();



    return (
        <Pressable onPress={() => props.onPress()}>
            <Box borderRadius='2xl' mt='10' w='100%' bgColor={props.backgroundColor} pt='2'>
                <Text style={{fontFamily:'Alata'}} mx='5' color={props.textColor} bold alignItems='flex-start' fontSize={25}>{props.mainText}</Text>
                <Text style={{fontFamily:'Alata'}} mx='5' color={props.textColor} alignItems='flex-start' fontSize={25}>{props.secondaryText}</Text>
                <Circle mb='-5' mr='10' alignSelf='flex-end' bgColor='white'>
                        <Icon name="chevron-right" size={40} color='black' />
                </Circle>
            </Box>
        </Pressable>
    )
}

export default ClickableTextBox;