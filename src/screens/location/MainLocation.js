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
    ZStack,
  } from 'native-base';
import {
    StyleSheet,
    Dimensions,
  } from 'react-native';


//clean up import code here
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';
import BackButton from '../../components/BackButton';


const MainLocation = () => {
    const screenHeight = Dimensions.get('window').height; 

    return (
           <ScrollView>
            <MapView
            style={{ height:screenHeight, left:0, right: 0, top:0, bottom: 0, position: 'absolute' }}
            initialRegion={{
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421
              }}>
                  <Marker
                    coordinate={{
                        latitude: 37.78825,
                        longitude: -122.4324,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                      }}
                    title={"John's Location"}
                    />
            </MapView>
            <View style={{position: "absolute", top:0}}>
                <BackButton/>
            </View>
            
            <View style={{position: "absolute", top:450, alignSelf:'center'}}>
                <Box position='relative' bgColor='white' width='100%' p='4' borderRadius='2xl'>
                    <Text bold fontSize={20} alignSelf='flex-start'>John is 14 minutes away</Text>
                    <Text fontSize={20} width='50%' alignSelf='flex-start'>1234 Main Street, San Francisco, CA</Text>
                    <Pressable mx='4'>
                        <Box my='2' p='2' bgColor='info.200' width='100%' borderRadius='2xl'>
                            <HStack alignSelf='center'>
                            <Icon name='phone' size={24}/>
                            <Text ml='2' color='black' fontSize={16}>Call John</Text>
                            </HStack>
                        </Box>
                    </Pressable>
                    <Pressable mx='4'>
                        <Box p='2' bgColor='info.200' width='100%' borderRadius='2xl'>
                            <HStack alignSelf='center'>
                            <Text ml='2' color='black' fontSize={16}>Manage Geofences</Text>
                            </HStack>
                        </Box>
                    </Pressable>
                    <Pressable mt='4'>
                        <Box p='3' width='100%' borderRadius='2xl' bgColor='info.500'>
                            <HStack alignSelf='center'>
                                <Icon color='white' name='car-outline' size={30}/>
                                <Text ml='2' color='white' fontSize={20}>Get directions to John</Text>
                            </HStack>

                        </Box>
                    </Pressable>

                </Box>
            </View>
            
            </ScrollView>
    )
}

export default MainLocation;
