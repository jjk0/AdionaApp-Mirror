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
    Input,
    Button,
    KeyboardAvoidingView,
    Checkbox,
    Icon,
    //IconButton,
  } from 'native-base';
import BackButton from '../../components/BackButton';

import OldIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import ScreenTop from '../../components/ScreenTop';



const DiaryPageThree = ({navigation}) => {

    const [groupValues, setGroupValues] = useState([]);


    const checkboxOptions = ['never','occasionally','regularly','frequently']



    

    return (
        <KeyboardAvoidingView style = {{ flex: 1 }} behavior="padding" enabled   keyboardVerticalOffset={100}>
            <ScrollView pb='5'>
                    <ScreenTop backgroundColor='#517FF3' screenTitle={new Date().toDateString()} bottomText='Diary'/>

                <VStack mt='10'>
                    <Box borderRadius='16' bgColor='info.200' p='4' my='4' mx='10'>
                        <VStack alignSelf='flex-start' mx='1'>
                                <Center mt='2'>
                                    <Text alignSelf='center' bold fontSize={18}>Did John have any of the following today?</Text>
                                    <VStack m='2'>
                                        <Checkbox.Group onChange={setGroupValues} size="lg" value={groupValues}>
                                            {checkboxOptions.map((data) => {
                                                return (
                                                    <Checkbox colorSchema='blue' value={data} my={2} size='lg' icon={<Icon as={<OldIcon name="check-circle-outline" color='blue' size={30}/>} />}>
                                                <Text fontSize={16}>{data}</Text>
                                            </Checkbox>
                                                )})}
                                        </Checkbox.Group>
                                    </VStack>
                                    
                                </Center>
                                
                        </VStack>
                    </Box>
                    <Pressable>
                        <Box borderRadius='16' bgColor='info.200' p='4' my='2' mx='10'>
                            <HStack alignSelf='center'>
                                <Pressable>
                                    <Text fontSize={24}>Done</Text>
                                </Pressable>
                            </HStack>
                        </Box>
                    </Pressable>
                </VStack>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

export default DiaryPageThree;