import {
  Box,
  Center,
  HStack,
  Pressable,
  ScrollView,
  Text,
  ZStack,
} from 'native-base';
import React, {useEffect, useState} from 'react';
import {DataStore} from 'aws-amplify';
import {GeoFence} from '../../models';
import {StyleSheet} from 'react-native';
import {DEVICE_HEIGHT, DEVICE_WIDTH} from '../../helpers/Device';
import Vector19 from '../../assets/Vector 19.svg';
import Vector20 from '../../assets/Vector 20.svg';
import MapPin from '../../assets/bx_map-pin.svg';
import BackArrow from '../../assets/Back_Arrow.svg';

const ManageGeoFence = ({navigation}) => {
  const [geoFences, setGeoFences] = useState([]);

  useEffect(() => {
    DataStore.query(GeoFence)
      .then(newGeoFences => {
        console.log(newGeoFences);
        setGeoFences(newGeoFences);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <ZStack alignItems="center">
        <ScrollView style={styles.scrollView}>
          <Text
            fontSize="xl"
            fontWeight="semibold"
            letterSpacing="lg"
            style={styles.paragraph}>
            A geofence allows you to get an alert when John leaves a certain
            area, like the house.
          </Text>

          <Box
            w={DEVICE_WIDTH - 40}
            h={DEVICE_HEIGHT * 0.2}
            bg="rgba(81, 127, 243, 0.25)"
            borderRadius={25}>
            {geoFences.map(geoFence => (
              <Box p="2" bgColor="info.200" width="100%" borderRadius="2xl">
                <HStack alignSelf="center">
                  <Text
                    ml="2"
                    color="black"
                    fontSize={16}>{`Lat: ${geoFence.lat}`}</Text>
                  <Text
                    ml="2"
                    color="black"
                    fontSize={16}>{`Lat: ${geoFence.lon}`}</Text>
                  <Text
                    ml="2"
                    color="black"
                    fontSize={16}>{`Lat: ${geoFence.radius}`}</Text>
                </HStack>
              </Box>
            ))}
          </Box>

          <Pressable onPress={() => navigation.navigate('Add GeoFence')}>
            <Center
              bgColor="rgba(81, 127, 243, 0.25)"
              h={65}
              mt={5}
              borderRadius="3xl">
              <Text ml="2" color="black" fontSize={16} fontWeight="semibold">
                + Add Geofences
              </Text>
            </Center>
          </Pressable>
        </ScrollView>
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
            },
          ]}
        />
        <Box style={styles.appBar}>
          <Center pr="1" style={styles.backButton}>
            <BackArrow />
          </Center>
        </Box>
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
      </ZStack>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    paddingHorizontal: 20,
    paddingTop: DEVICE_HEIGHT * 0.25,
    backgroundColor: 'white',
    height: DEVICE_HEIGHT,
  },
  headerBox: {
    width: DEVICE_WIDTH,
    height: DEVICE_HEIGHT * 0.25,
    backgroundColor: '#517FF3',
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
  },
  appBar: {
    height: DEVICE_HEIGHT * 0.08,
    width: DEVICE_WIDTH,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    paddingLeft: DEVICE_WIDTH * 0.04,
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
  },
  bottomBox: {
    width: DEVICE_WIDTH,
    height: DEVICE_HEIGHT * 0.25,
    alignItems: 'center',
    justifyContent: 'flex-end',
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
  paragraph: {paddingHorizontal: 30, paddingVertical: 50},
});

export default ManageGeoFence;
