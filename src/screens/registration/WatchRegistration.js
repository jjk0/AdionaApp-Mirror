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
import { DataStore, Auth, Hub, Logger, Storage } from 'aws-amplify';
//Amplify.Logger.LOG_LEVEL = 'DEBUG';
import Swiper from 'react-native-swiper'
import NextSwipeButton from '../../components/NextSwipeButton';
import PrevSwipeButton from '../../components/PrevSwipeButton';
import { useUserContext } from '../../contexts/UserContext';


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
    

    const [code,setCode] = useState()

    const getUniqueCode = async () => {
      try {
        const keys = []
        const buckets = await Storage.list("")
        console.log('buckets',buckets)
        for (let i = buckets.length-1; i > 0;  i--) {
          const val = buckets[i];
          const match = val.key.match(/\b\d{5}\b/g)
          if (!keys.includes(match[0])) {keys.push(match[0])}
        }
        var num = Math.floor(Math.random()*90000) + 10000;

        while (keys.includes(num)) {
          num = Math.floor(Math.random()*90000) + 10000;
      }
        setCode(num.toString())
      }
      catch (e) {
        console.log('error happened',e);
        }
      }


    
    const updateUserInfo = async () => {
      try {
        const user = await Auth.currentAuthenticatedUser();
        const original = await DataStore.query(UserInfo, user.attributes.sub)
        console.log('original',original)
        await DataStore.save(
        UserInfo.copyOf(original, updated => {
            updated.hasWatchSetup = true;
        }))


        console.log('updated!')

      }

      catch (e) {
        console.log('error happened',e )
      }
    }


    const updateRegisteredInfo = async () => {
        try {
          const user = await Auth.currentAuthenticatedUser();
          const original = await DataStore.query(RegisteredInfo, c => c.userId("eq", user.attributes.sub))
          //const original = await DataStore.query(RegisteredInfo)
          console.log('registeredInfo',original)
          await DataStore.save(
          RegisteredInfo.copyOf(original[0], updated => {
              updated.bucketNumber = code;
          }))
  
  
          console.log('updated!')
  
        }
  
        catch (e) {
          console.log('error happened',e )
        }
      }
    

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

    useEffect(() => {
      getUniqueCode();
  }, []);
  useEffect(() => {
    updateUserInfo();
    updateRegisteredInfo();
}, [code]);


    return(
            <Swiper ref={swiperRef} loop={false} dotColor="white" activeDotColor="black" showsButtons={false}>
                <View flex="1" bgColor="#517FF3">
                    <View p='5' justifyContent='center' alignItems='center' alignSelf='center' textAlign="center">
                        <Text style={{fontFamily:'Alata'}} fontSize={30} mt='32' alignSelf='center' color='white'>Setup your watch here to begin viewing analytics</Text>
                    </View>
                    <VStack mb='20' justifyContent="flex-end">
                        <NextSwipeButton onNextPressed={() => next()}/>
                    </VStack>
                </View>
                <View flex="1" bgColor="#517FF3">
                    <View p='5' justifyContent='center' alignItems='center' alignSelf='center' textAlign="center">
                        <Text style={{fontFamily:'Alata'}} fontSize={30} mt='32' alignSelf='center' color='white'>Go to the Apple Watch app on the phone you’d like to pair with the Apple Watch to set it up. Come back when you’re done and click next.</Text>
                    </View>
                    <VStack mb='20' justifyContent="flex-end">
                        <NextSwipeButton onNextPressed={() => next()}/>
                        <PrevSwipeButton onNextPressed={() => prev()}/>
                    </VStack>
                </View>
                <View flex="1" bgColor="#517FF3">
                    <View p='5' justifyContent='center' alignItems='center' alignSelf='center' textAlign="center">
                        <Center>
                          <Text style={{fontFamily:'Alata'}} color='white' fontSize={40}>Your code is:</Text> 
                        </Center>
                        <Box bgColor='white' p='2' borderRadius="2xl">
                            {code &&
                            <Center>
                              <Text style={{fontFamily:'Alata'}} color='black' fontSize={45}>
                                  {code}
                              </Text>
                            </Center>}
                        </Box>
                        <Center>
                          <Text style={{fontFamily:'Alata'}} color='white' fontSize={35} p='2'>
                            Enter this code into your watch and then hit "next"
                          </Text>
                        </Center>
                    </View>
                    <VStack mb='20' justifyContent="flex-end">
                        <NextSwipeButton onNextPressed={() => next()}/>
                        <PrevSwipeButton onNextPressed={() => prev()}/>
                    </VStack>
                </View>
                <View flex="1" bgColor="#517FF3">
                    <View p='5' justifyContent='center' alignItems='center' alignSelf='center' textAlign="center">
                        <Text style={{fontFamily:'Alata'}} fontSize={50} mt='32' alignSelf='center' color='white'>You're all set!</Text>
                    </View>
                    <VStack mb='20' justifyContent="flex-end">
                        <NextSwipeButton onNextPressed={() => navigation.navigate("Home")}/>
                    </VStack>
                </View>
                
              
            </Swiper>
    )
}

export default WatchRegistration;