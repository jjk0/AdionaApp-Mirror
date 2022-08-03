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
import BackButton from '../../components/BackButton';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import ScreenTop from '../../components/ScreenTop';



const DiaryMainScreen = ({navigation}) => {

    

    return (
        <ScrollView>
                <ScreenTop backgroundColor='#517FF3' screenTitle='Daily Diary' bottomText='Diary' iconName='book-reader'/>

            <VStack mt='10'>
                <Box mx='10'>
                    <Text style={{fontFamily:'Alata'}} alignSelf='center' fontSize={24}> Log important info about John. This can help you and your doctor. It can also help Adiona better support you. </Text>
                </Box>
                <Pressable>
                    <Box borderRadius='16' bgColor='info.200' p='4' mt='8' mx='10'>
                        <HStack alignSelf='center'>
                            <Text style={{fontFamily:'Alata'}} fontSize={24}>Add new entry</Text>
                        </HStack>
                    </Box>
                </Pressable>
                <Box borderRadius='16' bgColor='info.200' p='4' my='4' mx='10'>
                    <VStack alignSelf='flex-start'>
                        <Text style={{fontFamily:'Alata'}} fontSize={20}>Daily Snapshots:</Text>
                            <Center mt='2'>
                                <Text style={{fontFamily:'Alata'}} alignSelf='center' fontSize={18}>John's average mood this week:</Text>
                                <Icon name='emoticon-happy-outline' size={64}/>
                            </Center>
                            <Center>
                                <Text style={{fontFamily:'Alata'}} alignSelf='center' fontSize={18}>Dementia Scale Rating Score:</Text>
                                <Icon name='emoticon-happy-outline' size={64}/>
                            </Center>
                    </VStack>
                </Box>
                <Pressable>
                    <Box borderRadius='16' bgColor='info.200' p='4' my='2' mx='10'>
                        <HStack alignSelf='center'>
                            <Text style={{fontFamily:'Alata'}} fontSize={24}>See past entries</Text>
                        </HStack>
                    </Box>
                </Pressable>
            </VStack>
        </ScrollView>
    )
}

export default DiaryMainScreen