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


 const submit = () => {
     console.log('submitted')
 }

 //may have to include in useState
 const date = new Date()


  const Home = ({ navigation }) => {
    
    
    return (
        <ScrollView style={styles.sectionContainer}>
            <Box bgColor='info.500' m='0'>
                
                <HStack alignSelf='center'>
                    <VStack>
                    <Icon name="menu" size={40} color="white" />
                        <HStack>
                            <Text alignSelf='center' justifySelf='center' color='white' flexWrap='wrap' m='2'>{date.toDateString()}</Text>
                            <Card borderRadius='100' bg='white'>
                                <ProgressCircle
                                    percent={72}
                                    radius={100}
                                    borderWidth={18}
                                    color="#3399FF"
                                    shadowColor="#fff"
                                    bgColor="#FFFFFF"
                                >
                                    <Text alignSelf='center' color='info.500' fontSize='48'>{72}</Text>
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
                    <Pressable borderRadius='2xl' justifyContent='center' textAlign='center' width='100%' bg='danger.400' p='25' mt='10' mb='10' onPress={submit}>
                        <HStack>
                            <Icon name="alert-circle-outline" size={30} color="white" alignSelf='start' />
                            <Text fontSize='20' alignSelf='center' ml='3' color='white'>Alert</Text>
                        </HStack>
                    </Pressable>

                    <Pressable borderRadius='2xl' justifyContent='center' textAlign='center' width='100%' bg='warning.200' mb='10' p='25' onPress={submit}>
                        <HStack>
                            <Icon name="note-edit-outline" size={30} color="white" alignSelf='start' />
                            <Text fontSize='20' alignSelf='center' ml='3' color='white'>Info</Text>
                        </HStack>
                    </Pressable>

                    <VStack marginY='5' alignSelf='flex-start'>
                        <HomeIconButton navigateToPage='Overall Trends' buttonColor='info.500' iconTitle='trending-up' mainText='Tips and Trends' tipText='John could get more sleep'/>
                        <HomeIconButton buttonColor='info.200' iconTitle='map-marker-radius-outline' mainText='Tips and Trends' tipText='John could get more sleep'/>
                        <HomeIconButton buttonColor='warning.200' iconTitle='notebook-outline' mainText='Tips and Trends' tipText='John could get more sleep'/>
                    </VStack>

                    <HStack marginY='10'>
                        <Pressable borderRadius='2xl' bg='info.500' height='200' m='2' p='5'>
                                <FontAwesome5 alignSelf='center'name="brain" size={60} color="white" />
                        </Pressable>
                        <Pressable borderRadius='2xl' bg='warning.200' height='200' m='2' p='5'>
                                <Icon alignSelf='center'name='clipboard-outline' size={60} color="white" />
                        </Pressable>
                        <Pressable borderRadius='2xl' bg='info.200' height='200' m='2' p='5'>
                                <Icon alignSelf='center'name='lightbulb-outline' size={60} color="white" />
                        </Pressable>

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
    sectionTitle: {
      fontSize: 24,
      fontWeight: '600',
    },
    sectionDescription: {
      marginTop: 8,
      fontSize: 18,
      fontWeight: '400',
    },
    highlight: {
      fontWeight: '700',
    },
    text: {
      color:'#000000',
      textAlign: 'center',
    }
  });

  export default Home;
