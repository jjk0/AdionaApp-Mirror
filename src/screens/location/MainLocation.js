import React, {useEffect, useState} from 'react';
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
import {StyleSheet, Dimensions} from 'react-native';

//clean up import code here
import Icon from 'react-native-vector-icons/FontAwesome';

// import MapView from 'react-native-maps';
// import { Marker } from 'react-native-maps';
import BackButton from '../../components/BackButton';
import MapView from 'react-native-maps';
// import {Icon} from 'react-native-vector-icons/Icon';

const MainLocation = ({navigation}) => {
  const screenHeight = Dimensions.get('window').height;
  const screenWidth = Dimensions.get('window').width;
  return (
    <View style={{height: screenHeight}}>
      <MapView
        style={{height: screenHeight, width: screenWidth, position: 'absolute'}}
        region={{
          latitude: 22.258,
          longitude: 71.19,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        zoomEnabled={false}
      />

      <Box
        bgColor="white"
        width={screenWidth - 40}
        borderRadius="2xl"
        position="absolute"
        alignSelf={'center'}
        justifyContent={'space-between'}
        bottom={'10'}>
        <View>
          <Text bold fontSize={20} alignSelf="flex-start" m={'3'}>
            John is 14 minutes away
          </Text>
          <Text fontSize={20} width="50%" alignSelf="flex-start" mx={'3'}>
            1234 Main Street, San Francisco, CA
          </Text>
          <Pressable mx="4">
            <Box
              style={{elevation: 3}}
              my="3"
              p="2"
              bgColor="trueGray.100"
              width="100%"
              borderRadius="2xl">
              <HStack alignItems="center" alignSelf={'center'}>
                <Icon name="phone" size={20} />
                <Text ml="2" color="black" fontSize={16} bold>
                  Call John
                </Text>
              </HStack>
            </Box>
          </Pressable>
          <Pressable
            mx="4"
            onPress={() => navigation.navigate('Manage GeoFence')}>
            <Box
              style={{elevation: 3}}
              p="2"
              bgColor="trueGray.100"
              width="100%"
              borderRadius="2xl">
              <HStack alignSelf="center">
                <Text ml="2" color="black" fontSize={16} bold>
                  Manage Geofences
                </Text>
              </HStack>
            </Box>
          </Pressable>
        </View>
        <Pressable mt="4">
          <Box p="4" width="100%" borderRadius="2xl" bgColor="blue.500">
            <HStack alignSelf="center" alignItems={'center'}>
              {/* <Icon color="white" name="car-outline" size={30} /> */}
              <Icon name="car" size={25} color="white" />
              <Text ml="4" color="white" fontSize={20}>
                Get directions to John
              </Text>
            </HStack>
          </Box>
        </Pressable>
      </Box>
    </View>
  );
};

export default MainLocation;
