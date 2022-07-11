import React, { useEffect, useState,useCallback, useRef } from 'react';
import {
    Box,
    ScrollView,
    VStack,
    Text,
    HStack,
    Pressable,
    View,
    Image,
    Center,
    Input,
    Select,
    Stack, 
    FormControl,
  } from 'native-base';
import {
    StyleSheet,
  } from 'react-native';


import { Formik } from 'formik';
import * as Yup from 'yup';


import {RegisteredInfo, UserInfo} from '../../models';
import { DataStore, Auth, Hub, Logger } from 'aws-amplify';
//Amplify.Logger.LOG_LEVEL = 'DEBUG';
import Swiper from 'react-native-swiper'
import NextSwipeButton from '../../components/NextSwipeButton';
import PrevSwipeButton from '../../components/PrevSwipeButton';

const styles = StyleSheet.create({
    wrapper: {},
    slide1: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#9DD6EB'
    },
    slide2: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#97CAE5'
    },
    slide3: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#92BBD9'
    },
    text: {
      color: '#fff',
      fontSize: 30,
      fontWeight: 'bold'
    },
    input: {
        backgroundColor:'white',
    },
  })



  

const WatchRegistration = ({navigation}) => {

    const swiperRef = useRef(null);
    const next = () => {
        if (!!swiperRef) {
          swiperRef.current.scrollBy(1);
        }
      };
    const prev = () => {
        if (!!swiperRef) {
            swiperRef.current.scrollBy(-1);
        }
    };


    return(
            <Swiper ref={swiperRef} loop={false} dotColor="white" activeDotColor="black" showsButtons={false}>
                <View flex="1" bgColor="#517FF3">
                    <View p='5' justifyContent='center' alignItems='center' alignSelf='center' textAlign="center">
                        <Text fontSize={30} mt='32' alignSelf='center' color='white'>Setup your watch here to begin viewing analytics</Text>
                    </View>
                    <VStack mb='20' justifyContent="flex-end">
                        <NextSwipeButton onNextPressed={() => next()}/>
                    </VStack>
                </View>
                
              
            </Swiper>
    )
}

export default WatchRegistration;