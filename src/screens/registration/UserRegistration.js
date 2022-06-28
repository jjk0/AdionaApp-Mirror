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

const logger = new Logger('foo', 'DEBUG');

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





  

const UserRegistration = ({navigation}) => {

    // const listener = Hub.listen('datastore', async hubData => {
    //     const  { event, data } = hubData.payload;
    //     if (event === 'networkStatus') {
    //       console.log(`User has a network connection: ${data.active}`)
    //     }
    //   })
      
    //   // Remove listener
    // listener();

    
    // const restart = async () => {
    //     const user = await Auth.currentAuthenticatedUser();
    //     hubSubscription = Hub.listen([HubChannel.DataStore], (msg) = async () => { 
    //         if (msg.eventName == "ready") { 
    //             console.log('ready')
    //             const original = await DataStore.query(UserInfo, user.attributes.sub)
    //           // logic to start query to get data for rendering
    //           console.log('restarted original',original)
    //         } 
    //       }); 
    //     hubSubscription();
    //     await DataStore.start()
        
    // }

    // restart();

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

    const registerUser = async (values) => {
        try {
            // await DataStore.start()
            const user = await Auth.currentAuthenticatedUser();
            await DataStore.save(new RegisteredInfo({ 'userId':user.attributes.sub, ...values }))
            await updateFlag();
            console.log('submitted!')
        }
        catch (e) {
            logger.error('error happened', e);
        }}

    const updateFlag = async () => {
        try {
            //await DataStore.start()
            const user = await Auth.currentAuthenticatedUser();
            console.log('user in registration:',user.attributes.sub)
            const original = await DataStore.query(UserInfo, user.attributes.sub)
            console.log('original',original)
            await DataStore.save(
            UserInfo.copyOf(original, updated => {
                updated.hasPatientInfo = true;
            }))
            console.log('updated!')

        } catch (e) {
            console.log('not updated!')
            console.log(e.message);
        }
      }

    return(
        <Formik
        initialValues={{ 
          caregiverName: '', 
          caregiverRelationship: '',
          livingSituation: '',
          patientName: '',
          //   birthday: '',
          diagnosis: '' ,
          diagnosisDate : '',
          mobility: ''
        }}
        onSubmit={values => (registerUser(values))}
        validationSchema={Yup.object().shape({
            caregiverName: Yup.string()
              .required(),
            patientName: Yup.string()
              .min(3)
              .required(),
            diagnosisDate: Yup.string()
              .min(4)
              .required()
          })}
        >
            {({ values, handleChange, errors, setFieldTouched, touched, isValid, handleSubmit }) => (
            <Swiper ref={swiperRef} loop={false} dotColor="white" activeDotColor="black" showsButtons={false}>
                <View flex="1" bgColor="#517FF3">
                    <View p='5' justifyContent='center' alignItems='center' alignSelf='center' textAlign="center">
                        <Text fontSize={30} mt='32' alignSelf='center' color='white'>Adiona would like to get to know you and your loved one more so we can provide the best support possible. </Text>
                    </View>
                    <VStack mb='20' justifyContent="flex-end">
                        <NextSwipeButton onNextPressed={() => next()}/>
                    </VStack>
                </View>
                <ScrollView flex='1' bgColor="#517FF3">
                    <View alignItems='center' mb='10'>
                            <Text fontSize={30} textAlign='center' color='white'>Tell Adiona a little bit about yourself</Text>
                        <FormControl>
                            <Stack mt='5' space={5}>
                                <Stack mx='5'>
                                    <FormControl.Label>
                                        <Text color='white' fontSize={20}>First Name</Text></FormControl.Label>
                                    <Input size={20} value={values.caregiverName} onChangeText={handleChange('caregiverName')} bgColor='white' errors={errors} variant="underlined" p={2} placeholder="Name" />
                                </Stack>
                                <Stack mx='5'>
                                    <FormControl.Label>
                                            <Text color='white' fontSize={20}>Relationship to Patient</Text></FormControl.Label>
                                    <Select value={values.caregiverRelationship} size={20} onValueChange={handleChange('caregiverRelationship')} bgColor='white' placeholder="Choose relation">
                                        <Select.Item label="Child" value="Child" />
                                        <Select.Item label="Grandchild" value="Grandchild" />
                                        <Select.Item label="Spouse" value="Spouse" />
                                        <Select.Item label="Sibling" value="Sibling" />
                                        <Select.Item label="Friend" value="Friend" />
                                        <Select.Item label="Caregiver" value="Caregiver" />
                                        <Select.Item label="Other" value="Other" />

                                    </Select>
                                </Stack>
                                <Stack mx='5'>
                                    <FormControl.Label>
                                            <Text color='white' fontSize={20}>Living Situation</Text></FormControl.Label>
                                    <Select value={values.livingSituation} size={20} onValueChange={handleChange('livingSituation')} bgColor='white' placeholder="Living Situation">
                                        <Select.Item label="Same household" value="Same household" />
                                        <Select.Item label="Same neighborhood" value="Same neighborhood" />
                                        <Select.Item label="Same city" value="Same city" />
                                        <Select.Item label="Further away" value="Further away" />
                                    </Select>
                                </Stack>
                            </Stack>
                        </FormControl>
                    </View>
                    
                    <VStack flex="1" mt='16' justifyContent="flex-end">
                        <NextSwipeButton onNextPressed={() => next()}/>
                        <PrevSwipeButton onNextPressed={() => prev()}/>
                    </VStack>
                </ScrollView>
                <ScrollView flex='1' bgColor="#517FF3">
                    <View alignItems='center' mb='10'>
                            <Text fontSize={30} textAlign='center' color='white'>Tell Adiona a little bit about your loved one</Text>
                        <FormControl>
                            <Stack mt='5' space={5}>
                                <Stack mx='5'>
                                    <FormControl.Label>
                                        <Text color='white' fontSize={20}>Patient Name</Text></FormControl.Label>
                                    <Input size={20} value={values.patientName} onChangeText={handleChange('patientName')} errors={errors} bgColor='white' variant="underlined" p={2} placeholder="Name" />
                                </Stack>
                                {/* <Stack mx='5'>
                                    <FormControl.Label font>Birthday</FormControl.Label>
                                    <Input bgColor='white' value={values.birthday} variant="underlined" p={2} onChangeText={handleChange('birthday')} placeholder="mm/dd/yyyy" />
                                </Stack> */}
                                <Stack mx='5'>
                                    <FormControl.Label>
                                        <Text color='white' fontSize={20}>Diagnosis</Text></FormControl.Label>
                                    <Select size={20} value={values.diagnosis} onValueChange={handleChange('diagnosis')} bgColor='white' placeholder="Select diagnosis">
                                        <Select.Item label="Alzheimer's Disease" value="Alzheimer's Disease" />
                                        <Select.Item label="Dementia" value="Dementia" />
                                        <Select.Item label="Other" value="Other" />
                                    </Select>
                                </Stack>
                                <Stack mx='5'>
                                    <FormControl.Label>
                                        <Text color='white' fontSize={20}>Diagnosis Date</Text></FormControl.Label>
                                    <Input size={20} value={values.diagosisDate} bgColor='white' onChangeText={handleChange('diagnosisDate')} variant="underlined" p={2} placeholder="yyyy" />
                                </Stack>
                                <Stack mx='5'>
                                    <FormControl.Label>
                                        <Text color='white' fontSize={20}>Mobility</Text></FormControl.Label>
                                    <Select size={20} value={values.mobility} onValueChange={handleChange('mobility')} bgColor='white' placeholder="Select mobilty">
                                        <Select.Item label="Excellent" value="Excellent" />
                                        <Select.Item label="Good" value="Good" />
                                        <Select.Item label="Fair" value="Fair" />
                                        <Select.Item label="Poor" value="Poor" />
                                    </Select>
                                </Stack>
                                
                                
                            </Stack>
                        </FormControl>
                    </View>
                    
                    <VStack flex="1" mt='8' justifyContent="flex-end">
                    <Pressable m='2' onPress={handleSubmit}>
                        <Center>
                            <Box borderRadius='2xl' bgColor='white' height="50" width="80%">
                                <Text alignSelf="center" justifyContent="center" fontSize={26} m='1' bold color="black">Submit</Text>
                            </Box>
                        </Center>
                    </Pressable>
                        <PrevSwipeButton onNextPressed={() => prev()}/>
                    </VStack>
                </ScrollView>
            </Swiper>
            )}
        </Formik>
    )
}

export default UserRegistration;