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
    Checkbox,
    KeyboardAvoidingView,
    
    // Icon,
    // IconButton,
  } from 'native-base';
import BackButton from '../../components/BackButton';
import {Pressable as RNPressable} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import ScreenTop from '../../components/ScreenTop';



const DiaryEntry = ({navigation}) => {

    const [mood,setMood] = useState()
    useEffect(() => {
        console.log('mood',mood)
      }, [mood]);


    useEffect



    const iconObj = { 'emoticon-sick-outline':0,'emoticon-sad-outline':1,'emoticon-neutral-outline':2,'emoticon-happy-outline':3,'emoticon-outline':4}
    

    return (
        <KeyboardAvoidingView style = {{ flex: 1 }} behavior="padding" enabled   keyboardVerticalOffset={100}>
            <ScrollView pb='5'>
                    <ScreenTop backgroundColor='#517FF3' screenTitle={new Date().toDateString()} bottomText='Diary'/>

                <VStack mt='10'>
                    <Box borderRadius='16' bgColor='info.200' p='4' my='4' mx='10'>
                        <VStack alignSelf='flex-start'>
                                <Center mt='2'>
                                    <Text alignSelf='center' fontSize={18}>How was your mood today?</Text>
                                    
                                    <HStack m='2'>
                                        {/* <Checkbox icon={<Icon as={<OldIcon name="emoticon-sick-outline" size={50} />} />}></Checkbox> */}
                                        {/* <IconButton icon={<Icon as={<OldIcon name="emoticon-sick-outline" size={50} />} color='black' />}></IconButton> */}
                                        {Object.keys(iconObj).map((data) => {
                                            return (
                                                <RNPressable onPress={() => setMood(iconObj[data])}
                                                style={({ pressed }) => [{ borderWidth: mood===iconObj[data] ? 4 : 0 } ]}>                        
                                                {({
                                                    pressed
                                                }) => {
                                                    return <Box borderColor='black'>
                                                                <Icon name={data} size={50}/>
                                                            </Box>}}
                            
                                                </RNPressable>
                                            )})}
                                    </HStack>
                                    
                                </Center>
                                <Center>
                                    <Text alignSelf='center' fontSize={18}>Anything you want to note?</Text>
                                    <Input borderRadius='2xl' bgColor='white'></Input>
                                </Center>
                        </VStack>
                    </Box>
                    {mood && <Pressable onPress={() => navigation.navigate('Diary Page Two')}>
                        <Box borderRadius='16' bgColor='info.200' p='4' my='2' mx='10'>
                            <HStack alignSelf='center'>
                                <Pressable>
                                    <Text fontSize={24}>Next</Text>
                                </Pressable>
                            </HStack>
                        </Box>
                    </Pressable>}
                </VStack>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

export default DiaryEntry;