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
            <HStack>
                <Box borderRadius='2xl' bg={props.buttonColor} size={90}>
                    <Center mt='4'>
                        <Icon name={props.iconTitle} size={60} color="white" />
                    </Center>
                </Box>
                    <VStack mt='2' ml='5'>
                        <Text style={{fontFamily:'Alata'}} fontWeight="bold" pl='6.5' fontSize={30} w='100%' color='black'>{props.mainText}</Text>
                        <Text style={{fontFamily:'Alata'}} pl='6.5' fontSize={20} w='100%' color='black'>{props.tipText}</Text>
                    </VStack>
                
            </HStack>
        
        </Pressable>
    )
}

export default HomeIconButton;