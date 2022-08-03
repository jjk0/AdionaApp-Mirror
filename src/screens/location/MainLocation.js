import React, {useEffect, useState} from 'react';
import {
  Box,
  VStack,
  Text,
  HStack,
  Pressable,
  View,
  Alert,
  IconButton,
  CloseIcon,
  CheckIcon,
  Center,
} from 'native-base';
import {
  StyleSheet,
  Dimensions,
  PermissionsAndroid,
  Linking,
  TouchableOpacity,
  Platform,
} from 'react-native';
import Geolocation from 'react-native-geolocation-service';

//clean up import code here
import Icon from 'react-native-vector-icons/FontAwesome5';

// import MapView from 'react-native-maps';
// import { Marker } from 'react-native-maps';
import MapView, {Marker} from 'react-native-maps';
import {useIsFocused} from '@react-navigation/native';
import Phone from '../../assets/Vector-1.svg';
import Car from '../../assets/Vector.svg';
import BackArrow from '../../assets/Back_Arrow.svg';
import {DEVICE_HEIGHT, DEVICE_WIDTH} from '../../helpers/Device';
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
      if (Platform.OS === 'android') {
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
      {showAlert ? <LocationAlert /> : []}
      <Box style={styles.appBar}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Center pr="1" style={styles.backButton}>
            <BackArrow />
          </Center>
        </TouchableOpacity>
      </Box>

      <Box
        bgColor="white"
        width={screenWidth - 40}
        borderRadius="2xl"
        position="absolute"
        alignSelf={'center'}
        justifyContent={'space-between'}
        bottom={'10'}>
        <View>
          <Text
            fontWeight="semibold"
            letterSpacing="lg"
            fontSize={20}
            alignSelf="flex-start"
            m={'3'}
            mx={'5'}>
            John is 14 minutes away
          </Text>
          <Text
            fontWeight="semibold"
            letterSpacing="lg"
            fontSize={16}
            width="50%"
            alignSelf="flex-start"
            mx={'5'}>
            1234 Main Street, San Francisco, CA
          </Text>
          <Pressable mx="6">
            <Box
              style={{elevation: 3}}
              my="3"
              p="2"
              bgColor="trueGray.100"
              width="100%"
              borderRadius="2xl">
              <HStack alignItems="center" alignSelf={'center'}>
                <Phone />
                <Text ml="2" color="black" fontSize={16} bold>
                  Call John
                </Text>
              </HStack>
            </Box>
          </Pressable>
          <Pressable
            mx="4"
            onPress={() =>
              navigation.navigate('Manage GeoFence', {
                screen: 'Add GeoFence',
                currentLatitude,
                currentLongitude,
                latitudeDelta,
                longitudeDelta,
              })
            }>
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
              <Car />
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

const styles = StyleSheet.create({
  backButton: {
    height: DEVICE_WIDTH * 0.1,
    width: DEVICE_WIDTH * 0.1,
    backgroundColor: 'white',
    borderRadius: 50,
    elevation: 20,
  },
  appBar: {
    height: DEVICE_HEIGHT * 0.08,
    width: DEVICE_WIDTH * 0.1,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    paddingLeft: DEVICE_WIDTH * 0.04,
  },
});
