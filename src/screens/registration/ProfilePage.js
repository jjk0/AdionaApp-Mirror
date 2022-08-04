import React, { useEffect, useState } from 'react';
import {
    Box,
    Card,
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
    Circle,
    Divider,
    FormControl,
    Stack,
    Input,
    Select
  } from 'native-base';
import BackButton from '../../components/BackButton';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import ScreenTop from '../../components/ScreenTop';
import {SafeAreaView} from 'react-native';


import { Formik } from 'formik';
import * as Yup from 'yup';


const ProfilePage = ({navigation}) => {
    return (
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
        <SafeAreaView style={{flex:1}}>
            <ScrollView>
            <BackButton/>
            <Center>
                <Text style={{fontFamily:'Alata'}} fontSize={40}>Care Team</Text>
            </Center>
            <Box m='4' p='4' pb='8' bgColor='white' borderRadius='2xl'>
                <HStack>
                    <Circle m='4' bgColor='#577FC3' size={20}></Circle>
                    <VStack mt='4' m='2'>
                        <Text style={{fontFamily:'Alata'}} fontSize={20}>Primary Caregiver: </Text>
                        <Text style={{fontFamily:'Alata'}} fontSize={20}>Jane Smith</Text>
                    </VStack>
                </HStack>
                <Divider/>
                <FormControl>
                            <Stack mt='5' space={5}>
                                <Stack mx='5'>
                                    <FormControl.Label>
                                        <Text style={{fontFamily:'Alata'}} color='black' fontSize={20}>First Name</Text></FormControl.Label>
                                    <Input size={20} value={values.caregiverName} onChangeText={handleChange('caregiverName')} bgColor='white' errors={errors} variant="underlined" p={2} placeholder="Name" />
                                    
                                </Stack>
                                <Stack mx='5'>
                                    <FormControl.Label>
                                            <Text style={{fontFamily:'Alata'}} color='black' fontSize={20}>Relationship to Patient</Text></FormControl.Label>
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
                                            <Text style={{fontFamily:'Alata'}} color='black' fontSize={20}>Living Situation</Text></FormControl.Label>
                                    <Select value={values.livingSituation} size={20} onValueChange={handleChange('livingSituation')} bgColor='white' placeholder="Living Situation">
                                        <Select.Item label="Same household" value="Same household" />
                                        <Select.Item label="Same neighborhood" value="Same neighborhood" />
                                        <Select.Item label="Same city" value="Same city" />
                                        <Select.Item label="Further away" value="Further away" />
                                    </Select>
                                </Stack>
                            </Stack>
                        </FormControl>        
            </Box>
            <Box m='4' p='4' pb='8' bgColor='white' borderRadius='2xl'>
                <HStack>
                    <Circle m='4' bgColor='#577FC3' size={20}></Circle>
                    <VStack mt='4' m='2'>
                        <Text style={{fontFamily:'Alata'}} fontSize={20}>Loved one: </Text>
                        <Text style={{fontFamily:'Alata'}} fontSize={20}>John Smith</Text>
                    </VStack>
                </HStack>
                <Divider/>
                <FormControl>
                            <Stack mt='5' space={5}>
                                <Stack mx='5'>
                                    <FormControl.Label>
                                        <Text style={{fontFamily:'Alata'}} color='black' fontSize={20}>Name</Text></FormControl.Label>
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
                                        <Text style={{fontFamily:'Alata'}} color='black' fontSize={20}>Diagnosis</Text></FormControl.Label>
                                    <Select size={20} value={values.diagnosis} onValueChange={handleChange('diagnosis')} bgColor='white' placeholder="Select diagnosis">
                                        <Select.Item label="Alzheimer's Disease" value="Alzheimer's Disease" />
                                        <Select.Item label="Dementia" value="Dementia" />
                                        <Select.Item label="Other" value="Other" />
                                    </Select>
                                </Stack>
                                <Stack mx='5'>
                                    <FormControl.Label>
                                        <Text style={{fontFamily:'Alata'}} color='black' fontSize={20}>Diagnosis Year</Text></FormControl.Label>
                                    <Input size={20} value={values.diagnosisDate} bgColor='white' onChangeText={handleChange('diagnosisDate')} variant="underlined" p={2} placeholder="yyyy" />
                                    {errors.diagnosisDate &&
                                    <Text style={{fontFamily:'Alata'}} color='white' fontSize={12}>Please fill out the correct year of diagnosis</Text>
                                    }
                                </Stack>
                                <Stack mx='5'>
                                    <FormControl.Label>
                                        <Text style={{fontFamily:'Alata'}} color='black' fontSize={20}>Mobility</Text></FormControl.Label>
                                    <Select size={20} value={values.mobility} onValueChange={handleChange('mobility')} bgColor='white' placeholder="Select mobilty">
                                        <Select.Item label="Excellent" value="Excellent" />
                                        <Select.Item label="Good" value="Good" />
                                        <Select.Item label="Fair" value="Fair" />
                                        <Select.Item label="Poor" value="Poor" />
                                    </Select>
                                </Stack>     
                            </Stack>
                        </FormControl>
            </Box>
            </ScrollView>
        </SafeAreaView>
        )}
        </Formik>
        
    )
}

export default ProfilePage;
