import React, { useEffect, useState } from 'react';
import {
    Box,
    VStack,
    Text,
    HStack,
    Pressable,
    Center,
  } from 'native-base';

import { useNavigation } from '@react-navigation/native';

//clean up import code here
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';





const ClickableTextBox = (props) => {
    const navigation = useNavigation();

    return (
        <Pressable onPress={() => navigation.navigate(props.navigateToPage)}>
            <Box borderRadius='2xl' mt='10' w='100%' bgColor={props.backgroundColor} pt='2'>
                <Text mx='5' color={props.textColor} bold alignItems='flex-start' fontSize={25}>{props.mainText}</Text>
                <Text mx='5' color={props.textColor} alignItems='flex-start' fontSize={25}>{props.secondaryText}</Text>
                <Box mb='2' alignSelf='flex-end'>
                        <Icon name="chevron-right" size={40} color={props.textColor} />
                </Box>
            </Box>
        </Pressable>
    )
}

export default ClickableTextBox;