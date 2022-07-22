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
    Dimensions,
    SafeAreaView,
    Text as OGText,
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



 const date = new Date()


  const Home = ({ navigation }) => {
    const [showAgitationModal, setShowAgitationModal] = useState(false);
    const [showErrorModal , setShowErrorModal] = useState(false)
    
    return (
        <SafeAreaView style={{flex:1}}>
            <ScrollView style={styles.sectionContainer}>
                <ErrorModal isOpen={showErrorModal} handleClose={() => setShowErrorModal(false)} errorText="Sorry, an error occurred. Please try again"/>
                
                <DrawerContentScrollView style={{margin:-25}}/>
                <Box bgColor='#517FF3' m='0' borderBottomLeftRadius={50}>
                    <HStack justifyContent='space-between'>
                    <Pressable onPress={()=>navigation.toggleDrawer()}>
                        <Box m='2'>
                            <Icon color='white' name='menu' size={25}></Icon>
                        </Box>
                    </Pressable>
                    <Center>
                                <Pressable>
                                    <Text style={{fontFamily:'Alata'}} fontWeight={400} fontStyle="normal"  alignSelf='center' p='2' color='white' fontSize={27}>{date.toDateString()}</Text>
                                </Pressable> 
                    </Center>
                    </HStack>
                    <HStack alignSelf='center'>
                        <VStack>
                            <HStack>
                                <Text style={{fontFamily:'Alata'}} alignSelf='center' width='30%' fontSize={20} color='white' flexWrap='wrap' m='2'>John's Wellness Score</Text>
                                <Circle bgColor='white' size={250}>
                                    <GradientCircularProgress
                                            startColor="#517FF3"
                                            endColor='white'
                                            middleColor='#6699CC'
                                            progress={72}
                                            strokeWidth={4}
                                            size={220}>
                                        <Text style={{fontFamily:'Alata'}} position='absolute' top='10' alignSelf='center' color='#517FF3' fontSize={100}>72</Text>
                                    </GradientCircularProgress>
                                    {/* </ProgressCircle> */}
                                </Circle>
                            </HStack>
                        </VStack>
                    </HStack>
                    <Pressable borderRadius='100' m='5' bgColor='white' height='10' width='1/3' alignSelf='flex-end' onPress={() => navigation.navigate('Overall Trends')}>
                        <HStack alignSelf='center'  m='2'>
                            <Text style={{fontFamily:'Alata'}} m='0.5' color='black' fontSize='16'>See trends</Text>
                            <Icon name='arrow-right' size={28} alignSelf='flex-end' color='black'></Icon>
                        </HStack>
                    </Pressable>
                </Box>
                    <VStack px='4' >
                        <Pressable borderRadius='2xl' justifyContent='center' onPress={() => navigation.navigate('Fall Warning')} >
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
                                            <Text style={{fontFamily:'Alata'}} fontSize={25} alignSelf='center' ml='3' color='white'>Alert</Text>
                                        </HStack>

                                        <Text style={{fontFamily:'Alata'}} fontSize={20} color='white'>John might get agitated soon. Tap to see our recommendations</Text>
                                    </VStack>
                                </Box>
                            </Box>
                                
                                
                        </Pressable>

                        <Pressable borderRadius='2xl' justifyContent='center' textAlign='center' width='100%' bg='#FFC684' mb='10' p='25' onPress={() => setShowAgitationModal(true)}>
                            <HStack>
                                <Icon name="note-edit-outline" size={30} color="black" alignSelf='start' />
                                <Text style={{fontFamily:'Alata'}} fontSize={25} alignSelf='center' ml='3' color='black'>Info</Text>
                            </HStack>
                            <Text style={{fontFamily:'Alata'}} fontSize={20} color='black'>Tap here to log an agitation episode as it happens</Text>
                            <Text style={{fontFamily:'Alata'}}></Text>
                        </Pressable>
                        <AgitationModal
                        isOpen={showAgitationModal}
                        handleClose={() => setShowAgitationModal(false)}/>
                        <VStack marginY='5' alignSelf='flex-start'>
                            <HomeIconButton navigateToPage='Overall Trends' buttonColor='#517FF3' iconTitle='trending-up' mainText='Tips and Trends' tipText='John could get more sleep'/>
                            <HomeIconButton navigateToPage='Main Location' buttonColor='#8AC4FF' iconTitle='map-marker-radius-outline' mainText='Location' tipText='1234 Main Street'/>
                            <HomeIconButton navigateToPage='Diary Main Screen'buttonColor='#FFC684' iconTitle='notebook-outline' mainText='Daily Diary' tipText='Log important info here'/>
                        </VStack>

                        <HStack>
                            <ScrollView  _contentContainerStyle={{w: "120%", paddingRight:120}} horizontal="true">
                                <HStack>
                                    <TallIconButton iconTitle='brain' backgroundColor='info.400' buttonText='Symptoms'/>
                                    <TallIconButton iconTitle='clipboard-outline' backgroundColor='warning.200' buttonText='Full Report'/>
                                    <TallIconButton iconTitle='lightbulb-outline' backgroundColor='info.200' buttonText='Care Tips' navigateToPage='General Tips'/>
                                </HStack>
                            </ScrollView>
                            {/* <HomeCarousel></HomeCarousel> */}
                        </HStack>
                    </VStack>
            </ScrollView>
        </SafeAreaView>
    )
  }

  const styles = StyleSheet.create({
    sectionContainer: {
      //paddingHorizontal: 24,
      flex:1,
      backgroundColor:'white',
      paddingBottom: 50
    },
    // sidewaysContainer: {
    //     flex:1,
    //     backgroundColor:'white',
    //     paddingRight: 100
    //   },
  });

  export default Home;
