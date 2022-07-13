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
    // Icon,
    // IconButton,
  } from 'native-base';
import BackButton from '../../components/BackButton';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import ScreenTop from '../../components/ScreenTop';



const DiaryEntry = ({navigation}) => {

    const [mood,setMood] = useState()


    const selectMood = (mood) => {
        setMood(mood)
        console.log(mood)
    }

    const iconList = ['emoticon-sick-outline','emoticon-sad-outline','emoticon-neutral-outline','emoticon-happy-outline','emoticon-outline']

    

    return (
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
                                    {iconList.map((data) => {
                                        return (
                                            <Pressable>
                                            {({
                                                isHovered,
                                                isFocused,
                                                isPressed
                                            }) => {
                                                return <Box borderColor='black' borderWidth= {isPressed? "2": "0"}>
                                                    <Icon name={data} size={50}/>
                                                </Box>}}
                        
                                            </Pressable>
                                        )})}
                                </HStack>
                            </Center>
                            <Center>
                                <Text alignSelf='center' fontSize={18}>Anything you want to note?</Text>
                                <Input borderRadius='2xl' bgColor='blue.100'></Input>
                            </Center>
                    </VStack>
                </Box>
                <Pressable>
                    <Box borderRadius='16' bgColor='info.200' p='4' my='2' mx='10'>
                        <HStack alignSelf='center'>
                            <Pressable>
                                <Text fontSize={24}>Save</Text>
                            </Pressable>
                        </HStack>
                    </Box>
                    
                </Pressable>
            </VStack>
        </ScrollView>
    )
}

export default DiaryEntry;