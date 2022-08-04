import {
  Box,
  Center,
  Pressable,
  ScrollView,
  Text,
  VStack,
  ZStack,
} from 'native-base';
import React, {useEffect, useState} from 'react';
import {DataStore} from 'aws-amplify';
import {GeoFence} from '../../models';
import {Platform, StyleSheet, TouchableOpacity} from 'react-native';
import {DEVICE_HEIGHT, DEVICE_WIDTH} from '../../helpers/Device';
import Vector19 from '../../assets/Vector 19.svg';
import Vector20 from '../../assets/Vector 20.svg';
import MapPin from '../../assets/bx_map-pin.svg';
import BackArrow from '../../assets/Back_Arrow.svg';

const ManageGeoFence = ({navigation, route}) => {
  const [geoFences, setGeoFences] = useState([]);
  const {currentLatitude, currentLongitude, latitudeDelta, longitudeDelta} =
    route.params;
  useEffect(() => {
    DataStore.query(GeoFence)
      .then(newGeoFences => {
        console.log('GEOFENCES: ', newGeoFences);
        setGeoFences(newGeoFences);

        // Enable this later when geocode api is enabled

        // newGeoFences.map(gf => {
        //   fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${gf.lat},${gf.lon}&key=AIzaSyDRKkgvSOHBUjgW1jDPjg6Savq2EM5fmQU`)
        //   .then((response) => response.json())
        //   .then((json) => {
        //     console.log(json);
        //     let formattedNames = [...geoFences];

        //     formattedNames.push(json[0].formatted_address);

        //     setGeoFences({
        //       lat: gf.lat,
        //       lon: gf.lon,
        //       radius: gf.radius,
        //       name: formattedNames
        //     });
        //   })
        //   .catch((error) => {
        //     console.error(error);
        //   });
        // })
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <ZStack alignItems="center">
        {/* Screen body below */}
        <ScrollView style={styles.scrollView}>
          <Text
            fontSize="xl"
            fontWeight="semibold"
            letterSpacing="lg"
            style={styles.paragraph}>
            A geofence allows you to get an alert when John leaves a certain
            area, like the house.
          </Text>
          {geoFences.map((geoFence, index) => (
            <Box
              key={index}
              w={DEVICE_WIDTH - 40}
              h={DEVICE_HEIGHT * 0.2}
              bg="rgba(81, 127, 243, 0.25)"
              borderRadius="3xl"
              mb="5">
              <VStack p="5" justifyContent="center" flex="1">
                <Text
                  color="black"
                  fontSize={20}
                  fontWeight="semibold"
                  letterSpacing="lg">{`Geofence ${index + 1}:`}</Text>
                <Text
                  color="black"
                  fontSize={16}>{`Lat: ${geoFence.lat}`}</Text>
                <Text
                  color="black"
                  fontSize={16}>{`Lng: ${geoFence.lon}`}</Text>
                <Text
                  color="black"
                  fontSize={16}>{`Radius: ${geoFence.radius}`}</Text>
              </VStack>
            </Box>
          ))}
          <Pressable
            mb={'10'}
            onPress={() =>
              navigation.navigate('Add GeoFence', {
                screen: 'Add GeoFence',
                currentLatitude,
                currentLongitude,
                latitudeDelta,
                longitudeDelta,
              })
            }>
            <Center
              bgColor="rgba(81, 127, 243, 0.25)"
              h={65}
              borderRadius="3xl">
              <Text ml="2" color="black" fontSize={16} fontWeight="semibold">
                + Add Geofences
              </Text>
            </Center>
          </Pressable>
        </ScrollView>
        {/* Custom AppBar Below */}
        <Box style={styles.headerBox} />
        <Vector19
          height={DEVICE_HEIGHT * 0.25}
          width={DEVICE_WIDTH}
          style={[
            {
              transform: [
                {translateX: -145},
                {translateY: -105},
                {scaleX: 1.3},
                {scaleY: 1.15},
              ],
              marginTop: Platform.OS === 'ios' ? DEVICE_HEIGHT * 0.05 : 0,
            },
          ]}
        />
        <Vector20
          height={DEVICE_HEIGHT * 0.25}
          width={DEVICE_WIDTH}
          style={[
            {
              transform: [
                {translateX: 125},
                {translateY: 20},
                {scaleX: 2},
                {scaleY: 1.9},
              ],
              marginTop: Platform.OS === 'ios' ? DEVICE_HEIGHT * 0.05 : 0,
            },
          ]}
        />
        <Box style={styles.centerAsset}>
          <MapPin
            height={DEVICE_HEIGHT * 0.12}
            width={DEVICE_HEIGHT * 0.12}
            style={styles.marginBottom}
          />
        </Box>
        <Box style={styles.bottomBox}>
          <Center style={styles.headerBottomBox}>
            <Text
              ml="2"
              color="black"
              fontSize={20}
              fontWeight="semibold"
              letterSpacing="lg">
              Geofences
            </Text>
          </Center>
        </Box>
        <TouchableOpacity
          onPress={() => {
            console.log('Back Button Pressed');
            navigation.goBack();
          }}
          style={{marginTop: Platform.OS === 'ios' ? DEVICE_HEIGHT * 0.05 : 0}}>
          <Box style={styles.appBar}>
            <Center pr="1" style={styles.backButton}>
              <BackArrow />
            </Center>
          </Box>
        </TouchableOpacity>
        {Platform.OS === 'ios' ? (
          <Box h={DEVICE_HEIGHT * 0.05} w={DEVICE_WIDTH} bg="#517FF3" />
        ) : (
          <> </>
        )}
      </ZStack>
      <Box style={styles.appBar}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Center pr="1" style={styles.backButton}>
            <BackArrow />
          </Center>
        </TouchableOpacity>
      </Box>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    paddingHorizontal: 20,
    backgroundColor: 'white',
    height: DEVICE_HEIGHT,
  },
  headerBox: {
    width: DEVICE_WIDTH,
    height: Platform.OS === 'ios' ? DEVICE_HEIGHT * 0.3 : DEVICE_HEIGHT * 0.25,
    backgroundColor: '#517FF3',
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
  },
  appBar: {
    height: DEVICE_HEIGHT * 0.08,
    width: DEVICE_WIDTH * 0.1,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    marginLeft: DEVICE_WIDTH * 0.04,
  },
  backButton: {
    height: DEVICE_WIDTH * 0.1,
    width: DEVICE_WIDTH * 0.1,
    backgroundColor: 'white',
    borderRadius: 50,
    elevation: 20,
  },
  centerAsset: {
    width: DEVICE_WIDTH,
    height: DEVICE_HEIGHT * 0.25,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: Platform.OS === 'ios' ? DEVICE_HEIGHT * 0.05 : 0,
  },
  bottomBox: {
    width: DEVICE_WIDTH,
    height: DEVICE_HEIGHT * 0.25,
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginTop: Platform.OS === 'ios' ? DEVICE_HEIGHT * 0.05 : 0,
  },
  marginBottom: {marginBottom: 25},
  headerBottomBox: {
    height: DEVICE_HEIGHT * 0.06,
    width: DEVICE_WIDTH * 0.65,
    backgroundColor: 'white',
    borderRadius: 50,
    elevation: 10,
    transform: [{translateY: (DEVICE_HEIGHT * 0.06) / 2}],
  },
  paragraph: {
    paddingHorizontal: 30,
    paddingVertical: 50,
    paddingTop: DEVICE_HEIGHT * 0.3,
    marginTop: Platform.OS === 'ios' ? DEVICE_HEIGHT * 0.05 : 0,
  },
});

export default ManageGeoFence;
