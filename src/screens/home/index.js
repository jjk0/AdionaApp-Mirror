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
import { constant } from 'lodash';



 const submit = () => {
     console.log('submitted')
 }

 //may have to include in useState
 const date = new Date()


  const Home = ({ navigation }) => {
    
    
    return (
        <ScrollView style={styles.sectionContainer}>
            <Box pb='5' bgColor='info.500' m='0'>
                
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
                        <HStack>
                            <Pressable borderRadius='2xl' bg='info.500' mb='5' p='25'>
                                <Icon name="trending-up" size={60} color="white" />
                            </Pressable>
                            <VStack>
                                <Text pl='6.5' fontSize={30} color='black'>Tips and Trends</Text>
                                <Text pl='6.5' fontSize={20} color='black'>John hasn't been sleep</Text>
                            </VStack>
                        </HStack>
                        <HStack>
                            <Pressable borderRadius='2xl' bg='info.200' mb='5' p='25'>
                                <Icon name="map-marker-radius-outline" size={60} color="white" />
                            </Pressable>
                            <VStack>
                                <Text pl='6.5' fontSize={30} color='black'>Tips and Trends</Text>
                                <Text pl='6.5' fontSize={20} color='black'>John hasn't been sleep</Text>
                            </VStack>
                        </HStack>
                        <HStack>
                            <Pressable borderRadius='2xl' bg='warning.200' mg='20' p='25'>
                                <Icon name="notebook-outline" size={60} color="white" />
                            </Pressable>
                            <VStack>
                                <Text pl='6.5' fontSize={30} color='black'>Tips and Trends</Text>
                                <Text pl='6.5' fontSize={20} color='black'>John hasn't been sleep</Text>
                            </VStack>
                        </HStack>
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
