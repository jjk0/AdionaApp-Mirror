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
import BackButton from '../../components/BackButton';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import ScreenTop from '../../components/ScreenTop';
import {SafeAreaView} from 'react-native';


const ProfilePage = ({navigation}) => {
    return (
        <SafeAreaView style={{flex:1}}>
            <BackButton/>
            <Center>
                <Text style={{fontFamily:'Alata'}} fontSize={40}>Care Team</Text>
            </Center>
            <Box m='4' p='4' bgColor='white' borderRadius='2xl'>
                <Center>
                    <Circle m='4' bgColor='#577FC3' size={20}></Circle>
                    <HStack m='2'>
                        <Text style={{fontFamily:'Alata'}} fontSize={20}>Primary Caregiver:</Text>
                        <Text style={{fontFamily:'Alata'}} fontSize={20}>Jane Smith</Text>
                    </HStack>
                    <Divider></Divider>
                </Center>
            </Box>
        </SafeAreaView>
        
    )
}

export default ProfilePage;
