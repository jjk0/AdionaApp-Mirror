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


const HomeIconButton = (props) => {

    const navigation = useNavigation();
    return (
        <Pressable mr='5' py='2' onPress={() => navigation.navigate((props.navigateToPage))}>
            <Box borderRadius='2xl' bg={props.buttonColor} size={100}>
                <HStack>
                    <Center>
                        <Icon name={props.iconTitle} size={90} color="white" />
                    </Center>
                    <VStack mt='2' ml='5'>
                        <Text pl='6.5' fontSize={30} w='100%' color='black'>{props.mainText}</Text>
                        <Text pl='6.5' fontSize={20} w='100%' color='black'>{props.tipText}</Text>
                    </VStack>
                </HStack>
            </Box>
        </Pressable>
    )
}

export default HomeIconButton;