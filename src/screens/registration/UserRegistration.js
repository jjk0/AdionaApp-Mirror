import React, { useEffect, useState,useCallback, useRef } from 'react';
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
    Select,
    CheckIcon,
    Stack, 
    FormControl,
  } from 'native-base';
import {
    StyleSheet,
    Dimensions
  } from 'react-native';

  import {
    BarChart
  } from 'react-native-chart-kit'




//clean up import code here
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import { VictoryBar, VictoryChart, VictoryTheme,VictoryLine,VictoryScatter,VictoryBoxPlot,VictoryAxis } from "victory-native";
import { DataStore } from 'aws-amplify';

import { Auth, API, graphqlOperation} from 'aws-amplify';
import { createUserInfo } from '../../graphql/mutations';
import { getUserInfo } from '../../graphql/queries';
import { UserInfo,ActivityInfo } from '../../models';
import Swiper from 'react-native-swiper'
import NextSwipeButton from '../../components/NextSwipeButton';
import PrevSwipeButton from '../../components/PrevSwipeButton';


const styles = StyleSheet.create({
    wrapper: {},
    slide1: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#9DD6EB'
    },
    slide2: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#97CAE5'
    },
    slide3: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#92BBD9'
    },
    text: {
      color: '#fff',
      fontSize: 30,
      fontWeight: 'bold'
    },
    input: {
        backgroundColor:'white',
    },
  })
  

const UserRegistration = () => {

    const swiperRef = useRef(null);
    const next = () => {
        if (!!swiperRef) {
          swiperRef.current.scrollBy(1);
        }
      };
    const prev = () => {
        if (!!swiperRef) {
            swiperRef.current.scrollBy(-1);
        }
    };

    return(
        <Swiper ref={swiperRef} loop={false} dotColor="white" activeDotColor="black" showsButtons={false}>
            <View flex="1" bgColor="#517FF3">
                <View p='5' justifyContent='center' alignItems='center' alignSelf='center' textAlign="center">
                    <Text fontSize={30} mt='32' alignSelf='center' color='white'>Adiona would like to get to know you and your loved one more so we can provide the best support possible. </Text>
                </View>
                <VStack mb='20' justifyContent="flex-end">
                    <NextSwipeButton onNextPressed={() => next()}/>
                </VStack>
            </View>
            <ScrollView flex='1' bgColor="#517FF3">
                <View alignItems='center' mb='10'>
                        <Text fontSize={30} textAlign='center' color='white'>Tell Adiona a little bit about yourself</Text>
                    
                    <FormControl>
                        <Stack mt='5' space={5}>
                            <Stack mx='5'>
                                <FormControl.Label font>First Name</FormControl.Label>
                                <Input bgColor='white' variant="underlined" p={2} placeholder="Name" />
                            </Stack>
                            <Stack mx='5'>
                                <FormControl.Label>Relationship to Patient</FormControl.Label>
                                <Select bgColor='white' placeholder="Choose relation">
                                    <Select.Item label="Child" value="Child" />
                                    <Select.Item label="Grandchild" value="Grandchild" />
                                    <Select.Item label="Spouse" value="Spouse" />
                                    <Select.Item label="Sibling" value="Sibling" />
                                    <Select.Item label="Friend" value="Friend" />
                                    <Select.Item label="Caregiver" value="Caregiver" />
                                    <Select.Item label="Other" value="Other" />

                                </Select>
                            </Stack>
                            <Stack mx='5'>
                                <FormControl.Label>Living Situation</FormControl.Label>
                                <Select bgColor='white' placeholder="Living Situation">
                                    <Select.Item label="Same household" value="Same household" />
                                    <Select.Item label="Same neighborhood" value="Same neighborhood" />
                                    <Select.Item label="Same city" value="Same city" />
                                    <Select.Item label="Further away" value="Further away" />
                                </Select>
                            </Stack>
                        </Stack>
                    </FormControl>
                </View>
                
                <VStack flex="1" mt='32' justifyContent="flex-end">
                    <NextSwipeButton onNextPressed={() => next()}/>
                    <PrevSwipeButton onNextPressed={() => prev()}/>
                </VStack>
            </ScrollView>
            <ScrollView flex='1' bgColor="#517FF3">
                <View alignItems='center' mb='10'>
                        <Text fontSize={30} textAlign='center' color='white'>Tell Adiona a little bit about your loved one</Text>
                    
                    <FormControl>
                        <Stack mt='5' space={5}>
                            <Stack mx='5'>
                                <FormControl.Label font>First Name</FormControl.Label>
                                <Input bgColor='white' variant="underlined" p={2} placeholder="Name" />
                            </Stack>
                            <Stack mx='5'>
                                <FormControl.Label font>Birthday</FormControl.Label>
                                <Input bgColor='white' variant="underlined" p={2} placeholder="mm/dd/yyyy" />
                            </Stack>
                            <Stack mx='5'>
                                <FormControl.Label>Diagnosis</FormControl.Label>
                                <Select bgColor='white' placeholder="Select diagnosis">
                                    <Select.Item label="Alzheimer's Disease" value="Alzheimer's Disease" />
                                    <Select.Item label="Dementia" value="Dementia" />
                                    <Select.Item label="Other" value="Other" />
                                </Select>
                            </Stack>
                            <Stack mx='5'>
                                <FormControl.Label font>Year of Diagnosis</FormControl.Label>
                                <Input bgColor='white' variant="underlined" p={2} placeholder="yyyy" />
                            </Stack>
                            <Stack mx='5'>
                                <FormControl.Label>Mobility</FormControl.Label>
                                <Select bgColor='white' placeholder="Select mobilty">
                                    <Select.Item label="Excellent" value="Excellent" />
                                    <Select.Item label="Good" value="Good" />
                                    <Select.Item label="Fair" value="Fair" />
                                    <Select.Item label="Poor" value="Poor" />
                                </Select>
                            </Stack>
                            
                            
                        </Stack>
                    </FormControl>
                </View>
                
                <VStack flex="1" mt='32' justifyContent="flex-end">
                    <NextSwipeButton onNextPressed={() => next()}/>
                    <PrevSwipeButton onNextPressed={() => prev()}/>
                </VStack>
            </ScrollView>
        </Swiper>
    )
}

export default UserRegistration;