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
import ProgressBar from 'react-native-progress/Bar';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


const TrendBarIcon = (props) => {

    const [progressColor, setProgressColor] = useState('');

    const navigation = useNavigation();


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
    <Pressable my='2' onPress={() => navigation.navigate((props.navigateToPage))}>
        <HStack>
            <Box borderRadius='2xl' size={70} bg={props.iconColor}>
                <Center my='4'>
                    <FontAwesome5 name={props.iconTitle} size={40} color="#E5E5E5" />
                </Center>
            </Box>
            <VStack my='-1' mx='5'>
                <Text style={{fontFamily:'Alata'}} bold fontSize={20}>{props.title}</Text>
                {/* <Text style={{fontFamily:'Alata'}} alignSelf='flex-end' italic fontSize={16}>{props.progressText}</Text> */}
                <Icon style={{alignSelf:'flex-end'}} color='black' name='arrow-right' size={25}></Icon>
                <ProgressBar unfilledColor='#e5e5e5' borderColor='#FFFFFF' color={progressColor} progress={props.progressNumber} width={200} />
            </VStack>
        </HStack>
    </Pressable>
    )
}

export default TrendBarIcon;