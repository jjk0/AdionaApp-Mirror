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
    SafeAreaView
  } from 'react-native';


import { Formik } from 'formik';
import * as Yup from 'yup';


import {RegisteredInfo, UserInfo} from '../../models';
import { DataStore, Auth, Hub, Logger } from 'aws-amplify';
import { useUserContext } from '../../contexts/UserContext';
import Swiper from 'react-native-swiper'
import NextSwipeButton from '../../components/NextSwipeButton';
import PrevSwipeButton from '../../components/PrevSwipeButton';

const logger = new Logger('foo', 'DEBUG');




  

const UserRegistration = ({navigation}) => {

    const swiperRef = useRef(null);
    const { user, userChecked } =  useUserContext();
    const [postRoute, setPostRoute] = useState('');
    const [ postNavigator, setPostNavigator] = useState('');
    
    
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
        console.log('post route', postRoute)
        const user = await Auth.currentAuthenticatedUser();
        const obj = await DataStore.query(RegisteredInfo, c => c.userId("eq", user.attributes.sub))
        // const obj = DataStore.query(RegisteredInfo);
        try {
            await DataStore.save(new RegisteredInfo({ 'userId':user.attributes.sub, ...values }))
            await updateFlag()
            console.log('postRoute',postRoute)
            navigation.navigate(postRoute);
            console.log('submitted!')
            
        }
        catch (e) {
            logger.error('error happened', e);
        }}
        // if (obj.length === 0) {
        //     try {
        //         await DataStore.save(new RegisteredInfo({ 'userId':user.attributes.sub, ...values }))
        //         await updateFlag()
        //         navigation.navigate(postRoute);
        //         console.log('submitted!')
                
        //     }
        //     catch (e) {
        //         logger.error('error happened', e);
        //     }}
        // else {
        //     //continue for when registeredInfo already exists
        //     try {
        //         await DataStore.save(
        //             RegisteredInfo.copyOf(obj, updated => {new RegisteredInfo({ 'userId':user.attributes.sub, ...values })
        //             }))
        //         navigation.navigate(postRoute);
        //         console.log('updated!')
                
        //     }
        //     catch (e) {
        //         logger.error('error happened', e);
        //     }}
        // }


    const updateFlag = async () => {
        try {
            //await DataStore.start()
            const patient = await Auth.currentAuthenticatedUser();
            console.log('user in registration:',patient.attributes.sub)
            const original = await DataStore.query(UserInfo, patient.attributes.sub)
            console.log('original',user)
            await DataStore.save(
            UserInfo.copyOf(original, updated => {
                updated.hasPatientInfo = true;
            }))
            console.log('updated!')
        } catch (e) {
            console.log('not updated!')
        }}
    
    
    
    const postRouteDecider = async () => {
        if (!userChecked) return;
        if (user[0]['hasWatchSetup']) {
            setPostRoute('Home Screen');
            setPostNavigator('Root')
            return;
        }
        else {
            setPostRoute('Watch Setup');
            setPostNavigator('Root')
        }
    };
    
    useEffect(() => {
        postRouteDecider();
    }, [user, userChecked]);
    

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
              .required(),
            diagnosisDate: Yup.string()
              .min(4)
              .max(4)
              .required()
          })}
        >
            {({ values, handleChange, errors, setFieldTouched, touched, isValid, handleSubmit }) => (
            <SafeAreaView style={{flex: 1}}>
            <Swiper ref={swiperRef} loop={false} dotColor="white" activeDotColor="black" showsButtons={false}>
                <View flex="1" bgColor="#517FF3">
                    <View p='5' justifyContent='center' alignItems='center' alignSelf='center' textAlign="center">
                        <Text style={{fontFamily:'Alata'}} fontSize={30} mt='32' alignSelf='center' color='white'>Adiona would like to get to know you and your loved one more so we can provide the best support possible. </Text>
                    </View>
                    <VStack mb='20' justifyContent="flex-end">
                        <NextSwipeButton onNextPressed={() => next()}/>
                    </VStack>
                </View>
                <ScrollView flex='1' bgColor="#517FF3">
                    <View alignItems='center' mb='10'>
                            <Text style={{fontFamily:'Alata'}} fontSize={30} textAlign='center' color='white'>Tell Adiona a little bit about yourself</Text>
                        <FormControl>
                            <Stack mt='5' space={5}>
                                <Stack mx='5'>
                                    <FormControl.Label>
                                        <Text style={{fontFamily:'Alata'}} color='white' fontSize={20}>First Name</Text></FormControl.Label>
                                    <Input size={20} value={values.caregiverName} onChangeText={handleChange('caregiverName')} bgColor='white' errors={errors} variant="underlined" p={2} placeholder="Name" />
                                    {touched.caregiverName && errors.caregiverName &&
                                    <Text style={{fontFamily:'Alata'}} color='white' fontSize={12}>Please fill out your first name</Text>
                                    }   
                                </Stack>
                                <Stack mx='5'>
                                    <FormControl.Label>
                                            <Text style={{fontFamily:'Alata'}} color='white' fontSize={20}>Relationship to Patient</Text></FormControl.Label>
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
                                            <Text style={{fontFamily:'Alata'}} color='white' fontSize={20}>Living Situation</Text></FormControl.Label>
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
                <ScrollView bgColor="#517FF3" >
                    <View alignItems='center' >
                            <Text style={{fontFamily:'Alata'}} fontSize={30} textAlign='center' color='white'>Tell Adiona a little bit about your loved one</Text>
                        <FormControl>
                            <Stack mt='5' space={5}>
                                <Stack mx='5'>
                                    <FormControl.Label>
                                        <Text style={{fontFamily:'Alata'}} color='white' fontSize={20}>Patient Name</Text></FormControl.Label>
                                    <Input size={20} value={values.patientName} onChangeText={handleChange('patientName')} errors={errors} bgColor='white' variant="underlined" p={2} placeholder="Name" />
                                    {errors.patientName &&
                                    <Text style={{fontFamily:'Alata'}} color='white' fontSize={12}>Please fill out patient name</Text>
                                    }   
                                </Stack>
                                {/* <Stack mx='5'>
                                    <FormControl.Label font>Birthday</FormControl.Label>
                                    <Input bgColor='white' value={values.birthday} variant="underlined" p={2} onChangeText={handleChange('birthday')} placeholder="mm/dd/yyyy" />
                                </Stack> */}
                                <Stack mx='5'>
                                    <FormControl.Label>
                                        <Text style={{fontFamily:'Alata'}} color='white' fontSize={20}>Diagnosis</Text></FormControl.Label>
                                    <Select size={20} value={values.diagnosis} onValueChange={handleChange('diagnosis')} bgColor='white' placeholder="Select diagnosis">
                                        <Select.Item label="Alzheimer's Disease" value="Alzheimer's Disease" />
                                        <Select.Item label="Dementia" value="Dementia" />
                                        <Select.Item label="Other" value="Other" />
                                    </Select>
                                </Stack>
                                <Stack mx='5'>
                                    <FormControl.Label>
                                        <Text style={{fontFamily:'Alata'}} color='white' fontSize={20}>Diagnosis Year</Text></FormControl.Label>
                                    <Input size={20} value={values.diagnosisDate} bgColor='white' onChangeText={handleChange('diagnosisDate')} variant="underlined" p={2} placeholder="yyyy" />
                                    {errors.diagnosisDate &&
                                    <Text style={{fontFamily:'Alata'}} color='white' fontSize={12}>Please fill out the correct year of diagnosis</Text>
                                    }
                                </Stack>
                                <Stack mx='5'>
                                    <FormControl.Label>
                                        <Text style={{fontFamily:'Alata'}} color='white' fontSize={20}>Mobility</Text></FormControl.Label>
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
                    
                    <VStack flex="1" mt='8' justifyContent="flex-end" pb='10'>
                    {/* {!isValid && alert('Please check the form for error messages')} */}
                        <Pressable m='2' onPress={handleSubmit}>
                            <Center>
                                <Box borderRadius='2xl' bgColor='white' height="50" width="80%">
                                    <Text style={{fontFamily:'Alata'}} alignSelf="center" justifyContent="center" fontSize={26} m='1' bold color="black">Submit</Text>
                                </Box>
                            </Center>
                        </Pressable>
                            <PrevSwipeButton onNextPressed={() => prev()}/>
                    </VStack>
                </ScrollView>
            </Swiper>
            </SafeAreaView>
            )}
        </Formik>
    )
}

export default UserRegistration;