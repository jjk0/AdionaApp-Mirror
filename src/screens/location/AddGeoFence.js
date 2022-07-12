import {
  Box,
  CheckIcon,
  HStack,
  Pressable,
  ScrollView,
  Select,
  Text,
} from 'native-base';
import React, {useState} from 'react';
import {Dimensions, View} from 'react-native';
import {DataStore, Auth} from 'aws-amplify';
import {GeoFence} from '../../models';
import {useUserContext} from '../../contexts/UserContext';
import MapView, {Circle, Marker} from 'react-native-maps';

const GeoFenceRadius = {
  FT_50: 'FT_50',
  FT_100: 'FT_100',
  FT_200: 'FT_200',
};

const AddGeoFence = () => {
  const [lat, setLat] = useState(26.912434);
  const [lng, setLng] = useState(75.78727);
  const [radius, setRadius] = useState();
  const [step, setStep] = useState(0);
  const [geofence, setGeofence] = useState();
  const screenHeight = Dimensions.get('window').height;
  const screenWidth = Dimensions.get('window').width;
  const saveLocation = () => {
    // setLat(26.912434);
    // setLng(75.78727);
    setStep(1);
  };
  const selectRadius = () => {
    setRadius(GeoFenceRadius.FT_50);
    setStep(2);
  };

  const add = async () => {
    const user = await Auth.currentAuthenticatedUser();
    alert(user.attributes.sub);
    DataStore.save(
      new GeoFence({
        owner: user.attributes.sub,
        lon: lng,
        lat,
        radius,
      }),
    )
      .then(savedData => {
        console.log(savedData);
        alert('geolocation added successfully');
      })
      .catch(err => {
        console.log(err);
        alert('geolocation added failed');
      });
  };

  return (
    <View
      style={{
        height: screenHeight,
        width: screenWidth,
      }}>
      <MapView
        style={{height: screenHeight, width: screenWidth, position: 'absolute'}}
        region={{
          latitude: lat,
          longitude: lng,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        zoomEnabled={false}>
        <Marker
          coordinate={{latitude: lat, longitude: lng}}
          draggable={true}
          onDragStart={value => {
            console.log('start ', value);
          }}
          onDragEnd={value => {
            setLat(value.nativeEvent.coordinate.latitude);
            setLng(value.nativeEvent.coordinate.longitude);
          }}
        />
   
          <Circle center={{latitude: lat, longitude: lng}} radius={radius} />
      
      </MapView>
      {step === 0 ? (
        <Box
          position={'absolute'}
          bottom={'10'}
          width={screenWidth - 40}
          alignSelf="center"
          justifyContent={'space-between'}
          bgColor="white"
          borderRadius="2xl">
          <HStack alignSelf="center">
            <Text ml="2" color="black" fontSize={16} p={'7'} bold>
              Tap the map where you want to set up a geofence
            </Text>
          </HStack>
          <Pressable mt="4" onPress={saveLocation}>
            <Box p="4" width="100%" borderRadius="2xl" bgColor="blue.500">
              <HStack alignSelf="center" alignItems={'center'}>
                {/* <Icon color="white" name="car-outline" size={30} /> */}
                {/* <Icon name="car" size={25} color="white" /> */}
                <Text ml="4" color="white" fontSize={20}>
                  Save loaction
                </Text>
              </HStack>
            </Box>
          </Pressable>
        </Box>
      ) : (
        []
      )}
      {step === 1 ? (
        <Box
          position={'absolute'}
          width={screenWidth - 40}
          bottom={10}
          alignSelf="center"
          justifyContent={'space-between'}
          bgColor="white"
          borderRadius="2xl">
          <View>
            <Text ml="2" color="black" fontSize={16} p={'5'} bold>
              123 ABCD St. Chicago, IL 60637
            </Text>
            <Box w="3/4" maxW="300" alignSelf={'center'} my="5">
              <Select
                borderRadius="2xl"
                selectedValue={geofence}
                minWidth="200"
                accessibilityLabel="Choose Service"
                placeholder="Choose Geofence"
                _selectedItem={{
                  bg: 'teal.600',
                  endIcon: <CheckIcon size="5" />,
                }}
                mt={1}
                onValueChange={itemValue => setGeofence(itemValue)}>
                <Select.Item label="50 Ft" value={50} />
                <Select.Item label="100 Ft" value={100} />
                <Select.Item label="150 Ft" value={150} />
              </Select>
            </Box>
          </View>
          <Pressable mt="7" onPress={selectRadius}>
            <Box p="4" width="100%" borderRadius="2xl" bgColor="blue.500">
              <HStack alignSelf="center" alignItems={'center'}>
                {/* <Icon color="white" name="car-outline" size={30} /> */}
                {/* <Icon name="car" size={25} color="white" /> */}
                <Text ml="4" color="white" fontSize={20}>
                  Save Geofence
                </Text>
              </HStack>
            </Box>
          </Pressable>
        </Box>
      ) : (
        []
      )}

      {step === 2 ? (
        <Pressable mx="4" onPress={add}>
          <Box p="2" bgColor="info.200" width="100%" borderRadius="2xl">
            <HStack alignSelf="center">
              <Text ml="2" color="black" fontSize={16}>
                Save Geofence
              </Text>
            </HStack>
          </Box>
        </Pressable>
      ) : (
        []
      )}
    </View>
  );
};

export default AddGeoFence;
