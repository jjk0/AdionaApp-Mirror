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
  } from 'native-base';
import {
    StyleSheet,
  } from 'react-native';


//clean up import code here
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';



import ProgressCircle from 'react-native-progress-circle'
import HomeIconButton from '../../components/HomeIconButton';
import TallIconButton from '../../components/TallIconButon';


 const submit = () => {
     console.log('submitted')
 }

 //may have to include in useState
 const date = new Date()


  const Home = ({ navigation }) => {
    
    
    return (
        <ScrollView style={styles.sectionContainer}>
            <Box bgColor='info.500' m='0'>
                <HStack>
                    <Icon name="menu" size={40} color="white" />
                    <Text ml='10' alignSelf='center' color='white' fontSize={25}>John's Wellness Score</Text>
                </HStack>
                <HStack alignSelf='center'>
                    <VStack>
                        <HStack>
                            <Text alignSelf='center' color='white' flexWrap='wrap' m='2'>{date.toDateString()}</Text>
                            <Card borderRadius='100' bg='white'>
                                <ProgressCircle
                                    percent={72}
                                    radius={100}
                                    borderWidth={18}
                                    color="#3399FF"
                                    shadowColor="#fff"
                                    bgColor="#FFFFFF"
                                >
                                    <Text alignSelf='center' color='#0ea5e9' fontSize={48}>72</Text>
                                </ProgressCircle>
                            </Card>
                        </HStack>
                    </VStack>
                </HStack>
                <Pressable borderRadius='100' m='5' bgColor='white' height='10' width='1/3' alignSelf='flex-end' onPress={() => navigation.navigate('Overall Trends')}>
                    <HStack alignSelf='center'  m='2'>
                        <Text m='0.5' color='black' fontSize='16'>See trends</Text>
                        <Icon name='arrow-right' size={28} alignSelf='flex-end' color='info.500'></Icon>
                    </HStack>
                </Pressable>
            </Box>
                <VStack px='4'>
                    <Pressable borderRadius='2xl' justifyContent='center' textAlign='center' width='100%' bg='error.700' p='25' mt='10' mb='10' onPress={submit}>
                        <HStack>
                            <Icon name="alert-circle-outline" size={30} color="white" alignSelf='start' />
                            <Text fontSize={25} alignSelf='center' ml='3' color='white'>Alert</Text>
                        </HStack>
                        <Text fontSize={20} color='white'>John might get agitated soon. Tap to see our recommendations</Text>
                    </Pressable>

                    <Pressable borderRadius='2xl' justifyContent='center' textAlign='center' width='100%' bg='warning.200' mb='10' p='25' onPress={submit}>
                        <HStack>
                            <Icon name="note-edit-outline" size={30} color="black" alignSelf='start' />
                            <Text fontSize={25} alignSelf='center' ml='3' color='black'>Info</Text>
                        </HStack>
                        <Text fontSize={20} color='black'>Tap here to log an agitation episode as it happens</Text>
                        <Text></Text>
                    </Pressable>

                    <VStack marginY='5' alignSelf='flex-start'>
                        <HomeIconButton navigateToPage='Overall Trends' buttonColor='info.500' iconTitle='trending-up' mainText='Tips and Trends' tipText='John could get more sleep'/>
                        <HomeIconButton navigateToPage='Main Location' buttonColor='info.200' iconTitle='map-marker-radius-outline' mainText='Location' tipText='1234 Main Street'/>
                        <HomeIconButton navigateToPage='Diary Main Screen'buttonColor='warning.200' iconTitle='notebook-outline' mainText='Daily Diary' tipText='Log important info here'/>
                    </VStack>

                    <HStack marginY='10'>
                        <TallIconButton iconTitle='brain' backgroundColor='info.400' buttonText='Symptoms'/>
                        <TallIconButton iconTitle='clipboard-outline' backgroundColor='warning.200' buttonText='Full Report'/>
                        <TallIconButton iconTitle='lightbulb-outline' backgroundColor='info.200' buttonText='Care Tips' navigateToPage='General Tips'/>
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
