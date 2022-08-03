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

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';



const OutlineBox = (props) => {
    return  (
        <View>
            <Box my='4' borderRadius='2xl' bgColor='white' borderColor={props.backgroundColor} borderWidth={4}>
                    <Center>
                    {props.shortTermText && 
                        <HStack mb='2'>
                            
                            <Icon color='black' name='clock-outline' size={36}></Icon>
                            <Text my='-1' style={{fontFamily:'Alata'}} fontSize={30} color='black'>In the moment tips</Text>
                            
                        </HStack>
                    }
                    {props.longTermText && 
                        <HStack mb='2'>
                            
                            <Icon color='black' name='timelapse' size={36}></Icon>
                            <Text my='-1' style={{fontFamily:'Alata'}} fontSize={30} color='black'>Long-term Tips</Text>
                            
                        </HStack>
                    }
                    </Center>
                    <Divider mb='2' height='1' orientation='horizontal' bgColor={props.backgroundColor}></Divider>
                    <Center mb='2'>
                        <Text style={{fontFamily:'Alata'}} fontSize={30} color='black'>{props.firstText}</Text>
                        <Text style={{fontFamily:'Alata'}} fontSize={30} color='black'>{props.secondText}</Text>
                    </Center>
                </Box>
        </View>
    )
}

export default OutlineBox