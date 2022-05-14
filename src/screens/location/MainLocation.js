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
    Dimensions,
  } from 'react-native';


//clean up import code here
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';



import ProgressCircle from 'react-native-progress-circle'
import HomeIconButton from '../../components/HomeIconButton';
import TallIconButton from '../../components/TallIconButon';
import MapView from 'react-native-maps';

const MainLocation = () => {
    const screenHeight = Dimensions.get('window').height; 

    return (
           <ScrollView>
            <Text>Hi</Text>
            <MapView
            style={{ height:screenHeight, left:0, right: 0, top:0, bottom: 0, position: 'absolute' }}
            initialRegion={{
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
              }}>

            </MapView>
            </ScrollView>
    )
}

export default MainLocation;
