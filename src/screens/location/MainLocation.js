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
  Alert,
  IconButton,
  CloseIcon,
  CheckIcon,
} from 'native-base';
import {
  StyleSheet,
  Dimensions,
  PermissionsAndroid,
  Linking,
  Platform,
} from 'react-native';
import Geolocation from 'react-native-geolocation-service';

//clean up import code here
import Icon from 'react-native-vector-icons/FontAwesome';

// import MapView from 'react-native-maps';
// import { Marker } from 'react-native-maps';
import BackButton from '../../components/BackButton';
import MapView, {Marker} from 'react-native-maps';
import {set} from 'react-native-reanimated';
import {useIsFocused} from '@react-navigation/native';
// import {Icon} from 'react-native-vector-icons/Icon';

const MainLocation = ({navigation}) => {
  const screenHeight = Dimensions.get('window').height;
  const screenWidth = Dimensions.get('window').width;
  const [currentLatitude, setCurrentLatitude] = useState(31.053226);
  const [currentLongitude, setCurrentLongitude] = useState(-99.231307);
  const [longitudeDelta, setLongitudeDelta] = useState(50);
  const [latitudeDelta, setLatitudeDelta] = useState(50);
  const [showAlert, setShowAlert] = useState(false);
  const isFocused = useIsFocused();
  const LocationAlert = () => {
    return (
      <Alert w="100%" status={'warning'}>
        <VStack space={2} flexShrink={1} w="100%">
          <HStack flexShrink={1} space={2} justifyContent="space-between">
            <HStack space={2} flexShrink={1}>
              <Alert.Icon mt="1" />
              <Text fontSize="md" color="coolGray.800">
                {'Please turn on location permission'}
              </Text>
            </HStack>
            <IconButton
              onPress={() => Linking.openSettings()}
              variant="unstyled"
              _focus={{
                borderWidth: 0,
              }}
              icon={<CheckIcon size="3" color="coolGray.600" />}
            />
            <IconButton
              onPress={() => setShowAlert(false)}
              variant="unstyled"
              _focus={{
                borderWidth: 0,
              }}
              icon={<CloseIcon size="3" color="coolGray.600" />}
            />
          </HStack>
        </VStack>
      </Alert>
    );
  };

  useEffect(() => {
    if (isFocused) {
      requestLocationPermission();
    }
  }, [isFocused]);

  const requestLocationPermission = async () => {
    try {
      if(Platform.OS === 'android') {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          {
            title: 'Location Permission',
            message:
              'we need to access you location ' +
              'in order to give our best service.',

            buttonNegative: 'Ask Me Later',
            buttonPositive: 'Allow',
          },
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          Geolocation.getCurrentPosition(
            position => {
              setCurrentLatitude(position.coords.latitude);
              setCurrentLongitude(position.coords.longitude);
              setLatitudeDelta(0.0922);
              setLongitudeDelta(0.0421);
              console.log('Current location captured');
              setShowAlert(false);
            },
            error => {
              setShowAlert(true);
              // See error code charts below.
              console.log('error : ', error.code, error.message);
            },
            {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
          );
          console.log('You can use the location');
          setShowAlert(false);
        } else {
          console.log('loaction permission denied');
          setShowAlert(true);
        }
      }
    } catch (err) {
      console.warn(err);
    }
  };
  return (
    <View style={{height: screenHeight}}>
      <MapView
        style={{height: screenHeight, width: screenWidth, position: 'absolute'}}
        region={{
          latitude: currentLatitude,
          longitude: currentLongitude,
          latitudeDelta: latitudeDelta,
          longitudeDelta: longitudeDelta,
        }}
        showsUserLocation={true}
        followsUserLocation={true}
        zoomEnabled={true}>
        {currentLatitude !== 31.053226 ? (
          <Marker
            coordinate={{
              latitude: currentLatitude,
              longitude: currentLongitude,
            }}
            draggable={true}
          />
        ) : (
          []
        )}
      </MapView>

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
      {showAlert ? <LocationAlert /> : []}
    </View>
  );
};

export default MainLocation;
