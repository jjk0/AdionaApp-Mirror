import React, { useEffect, useState } from 'react';
import {
    Box,
    Button, 
    Circle,
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
    Modal
  } from 'native-base';
import {
    StyleSheet,
    Dimensions
  } from 'react-native';



import Carousel from 'react-native-snap-carousel';

//clean up import code here
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';



import ProgressCircle from 'react-native-progress-circle'
import HomeIconButton from '../../components/HomeIconButton';
import TallIconButton from '../../components/TallIconButon';
import AgitationModal from '../../components/AgitationModal';
// import SVGImg from '../../assets/Group 39.svg';
import Vector9 from '../../components/shapeSVGs/Vector8';
import Vector8 from '../../components/shapeSVGs/Vector9';
import ErrorModal from '../../components/ErrorModal';

import { GradientCircularProgress } from "react-native-circular-gradient-progress";


import {
    createDrawerNavigator,
    DrawerContentScrollView,
  } from "@react-navigation/drawer";
import HomeCarousel from '../../components/HomeCarousel';


 const submit = () => {
     console.log('submitted')
 }


 

 //may have to include in useState
 const date = new Date()


  const Home = ({ navigation }) => {
    const [showAgitationModal, setShowAgitationModal] = useState(false);
    const [showErrorModal , setShowErrorModal] = useState(false)
    
    return (
        <ScrollView style={styles.sectionContainer}>
            <ErrorModal isOpen={showErrorModal} handleClose={() => setShowErrorModal(false)} errorText="Sorry, an error occurred. Please try again"/>
            <DrawerContentScrollView style={{margin:-25}}/>
            <Box bgColor='#517FF3' m='0'>
                <Center>
                    <HStack>
                            <Pressable>
                                {/* <Icon name="menu" size={40} color="white" /> */}
                                <Text alignSelf='center' color='white' fontSize={27}>John's Wellness Score</Text>
                            </Pressable>
                    </HStack>
                </Center>
                <HStack alignSelf='center'>
                    <VStack>
                        <HStack>
                            <Text alignSelf='center' width='30%' fontSize={20} color='white' flexWrap='wrap' m='2'>{date.toDateString()}</Text>
                            <Circle bgColor='white' size={250}>
                                <GradientCircularProgress
                                        startColor="#517FF3"
                                        endColor='white'
                                        middleColor='#7393B3'
                                        progress={72}
                                        size={220}>
                                    <Text position='absolute' top='10' alignSelf='center' color='#517FF3' fontSize={100}>72</Text>
                                </GradientCircularProgress>
                                {/* </ProgressCircle> */}
                            </Circle>
                        </HStack>
                    </VStack>
                </HStack>
                <Pressable borderRadius='100' m='5' bgColor='white' height='10' width='1/3' alignSelf='flex-end' onPress={() => navigation.navigate('Overall Trends')}>
                    <HStack alignSelf='center'  m='2'>
                        <Text m='0.5' color='black' fontSize='16'>See trends</Text>
                        <Icon name='arrow-right' size={28} alignSelf='flex-end' color='black'></Icon>
                    </HStack>
                </Pressable>
            </Box>
                <VStack px='4' mr='2'>
                    <Pressable borderRadius='2xl' justifyContent='center' onPress={() => navigation.navigate('Overall Trends')} >
                        <Box bgColor='#F0402A' my='4' borderRadius='2xl'>
                                <View style={{position:'absolute', right:50}} size={200}>
                                    <Vector8/>
                                </View>
                                <View style={{position:'absolute', top:-100, right:-40}} size={400}>
                                    <Vector9/>
                                </View>
                            <Box my="8" mx="4" width='90%'>
                                <VStack>
                                    <HStack>
                                        <Icon name="alert-circle-outline" size={30} color="white" alignSelf='start' />
                                        <Text fontSize={25} alignSelf='center' ml='3' color='white'>Alert</Text>
                                    </HStack>

                                    <Text fontSize={20} color='white'>John might get agitated soon. Tap to see our recommendations</Text>
                                </VStack>
                            </Box>
                        </Box>
                            
                            
                    </Pressable>

                    <Pressable borderRadius='2xl' justifyContent='center' textAlign='center' width='100%' bg='warning.200' mb='10' p='25' onPress={() => setShowAgitationModal(true)}>
                        <HStack>
                            <Icon name="note-edit-outline" size={30} color="black" alignSelf='start' />
                            <Text fontSize={25} alignSelf='center' ml='3' color='black'>Info</Text>
                        </HStack>
                        <Text fontSize={20} color='black'>Tap here to log an agitation episode as it happens</Text>
                        <Text></Text>
                    </Pressable>
                    <AgitationModal
                    isOpen={showAgitationModal}
                    handleClose={() => setShowAgitationModal(false)}/>
                    <VStack marginY='5' alignSelf='flex-start'>
                        <HomeIconButton navigateToPage='Overall Trends' buttonColor='info.500' iconTitle='trending-up' mainText='Tips and Trends' tipText='John could get more sleep'/>
                        <HomeIconButton navigateToPage='Main Location' buttonColor='info.200' iconTitle='map-marker-radius-outline' mainText='Location' tipText='1234 Main Street'/>
                        <HomeIconButton navigateToPage='Diary Main Screen'buttonColor='warning.200' iconTitle='notebook-outline' mainText='Daily Diary' tipText='Log important info here'/>
                    </VStack>

                    <HStack marginY='5'>
                        <ScrollView horizontal="true" contentOffset={100}>
                            <HStack pr='5'>
                                <TallIconButton iconTitle='brain' backgroundColor='info.400' buttonText='Symptoms'/>
                                <TallIconButton iconTitle='clipboard-outline' backgroundColor='warning.200' buttonText='Full Report'/>
                                <TallIconButton iconTitle='lightbulb-outline' backgroundColor='info.200' buttonText='Care Tips' navigateToPage='General Tips'/>
                            </HStack>
                        </ScrollView>
                        {/* <HomeCarousel></HomeCarousel> */}
                    </HStack>
                </VStack>
        </ScrollView>
    )
  }

  const styles = StyleSheet.create({
    sectionContainer: {
      //paddingHorizontal: 24,
      flex:1,
      backgroundColor:'white',
      paddingBottom: 50
    },
  });

  export default Home;
