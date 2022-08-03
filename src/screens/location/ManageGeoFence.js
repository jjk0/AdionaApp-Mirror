import {Box, HStack, Pressable, ScrollView, Text} from 'native-base';
import React, {useEffect, useState} from 'react';
import {DataStore} from 'aws-amplify';
import {GeoFence} from '../../models';

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
    <ScrollView
      style={{
        paddingHorizontal: 20,
      }}>
      <Text bold>
        A geofence allows you to get an alert when John leaves a certain area,
        like the house.
      </Text>

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

      <Pressable mx="4" onPress={() => navigation.navigate('Add GeoFence')}>
        <Box p="2" bgColor="info.200" width="100%" borderRadius="2xl">
          <HStack alignSelf="center">
            <Text ml="2" color="black" fontSize={16}>
              Add Geofences
            </Text>
          </HStack>
        </Box>
      </Pressable>
    </ScrollView>
  );
};

export default ManageGeoFence;
