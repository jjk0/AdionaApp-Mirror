import React, { useEffect, useState } from 'react';
import {
    Box,
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

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


import ProgressCircle from 'react-native-progress-circle'



 const submit = () => {
     console.log('submitted')
 }
  


  const Home = ({ navigation }) => {
    
    
    return (
        <ScrollView style={styles.sectionContainer}>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <ProgressCircle
                percent={72}
                radius={120}
                borderWidth={18}
                color="#3399FF"
                shadowColor="#999"
                bgColor="#fff"
        >
            <Text alignSelf='center' fontSize='48'>{72}</Text>
        </ProgressCircle>
        <Icon name="map-marker-radius-outline" size={30} color="black" />
                <Pressable borderRadius='2xl' justifyContent='center' textAlign='center' width='100%' bg='danger.400' p='50' m='10' onPress={submit}>
                    <Text fontSize='24' alignSelf='center' color='black'>Alert</Text>
                </Pressable>
                <Pressable borderRadius='2xl' bg='warning.100' p='50' m='10'>
                    <Text color='black'>Info</Text>
                </Pressable>
            </View>
        </ScrollView>
    )
  }



  const styles = StyleSheet.create({
    sectionContainer: {
      marginTop: 32,
      paddingHorizontal: 24,
      flex:1,
      backgroundColor:'white'
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
