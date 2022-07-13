import * as React from 'react';
import { useEffect, useState,useCallback, useRef , useContext} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { GestureHandlerRootView,gestureHandlerRootHOC } from 'react-native-gesture-handler';
import HomeScreen from '../screens/home/HomeScreen';
import OverallTrends from '../screens/trends/OverallTrends';
import ActivityScreen from '../screens/trends/ActivityScreen';
import HeartScreen from '../screens/trends/HeartScreen';
import DiaryMainScreen from '../screens/diary/DiaryMainScreen';
import GeneralTips from '../screens/tips/GeneralTips';
import ActivityTips from '../screens/tips/ActivityTips';
import MainLocation from '../screens/location/MainLocation';
import RespiratoryScreen from '../screens/trends/RespiratorySreen';
import RespiratoryTips from '../screens/tips/RespiratoryTips';
import AgitationTips from '../screens/tips/AgitationTips';
import SleepTips from '../screens/tips/SleepTips';
import CognitionTips from '../screens/tips/CognitionTips';
import HeartTips from '../screens/tips/HeartTips';
import MobilityTips from '../screens/tips/MobilityTips';
import Logout from '../components/Logout';
import UserRegistration from '../screens/registration/UserRegistration';
import WatchRegistration from '../screens/registration/WatchRegistration';
import DiaryEntry from '../screens/diary/DiaryEntry'
import {useUserContext} from '../contexts/UserContext';

import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItem,
    DrawerItemList
  } from "@react-navigation/drawer";
import { DataStore,Auth, Logger } from 'aws-amplify';

import  {VStack,Skeleton}  from "native-base"
  


const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const backToHomeRoutes = [
    'Cognition',
    'Patient',
    'Behavior',
    'Report',
    'Caregiver',
  ];


function Root() {
    return (
        <Drawer.Navigator name='Drawer' drawerContent={props => {
          return (
            <DrawerContentScrollView {...props}>
              <DrawerItemList {...props} />
              <DrawerItem label="Logout" onPress={() => props.navigation.navigate("Logout")} />
            </DrawerContentScrollView>
          )
        }}>
            <Drawer.Screen name="Home Screen" component={HomeScreen} />
            <Drawer.Screen name="Logout" component={Logout} />
            <Drawer.Screen name="Profile" component={ActivityScreen} />
            <Drawer.Screen name="Settings" component={HeartScreen} />
            <Drawer.Screen name="Register" component={UserRegistration} />
            <Drawer.Screen name="Watch Setup" component={WatchRegistration} />
            {/* <Stack.Screen screenOptions={{headerShown: false}} name="Root" component={Root} /> */}
        </Drawer.Navigator>
    );
    }

function App() {

  const { user, userChecked } =  useUserContext();
  const [initialRoute, setInitialRoute] = useState('');


  const initialRouteDecider = async () => {
    console.log('userChecked',userChecked)
    if (!userChecked) return;
    if (user[0]['hasPatientInfo']) {
      setInitialRoute('Root');
      return;
    }
    else {
      setInitialRoute('Register');
    }
  };

  useEffect(() => {
    initialRouteDecider();
  }, [user, userChecked]);
  if (!initialRoute) {
    return (
      <VStack space={4} mt="20" ml="10%" width="80%">
        <Skeleton variant="text" height="10%" />
        <Skeleton variant="text" height="60%" />
        <Skeleton variant="text" height="10%" />
      </VStack>
    );
  }
  return (  

  <NavigationContainer>
    <Stack.Navigator name="Stack" initialRouteName={initialRoute} options={{ title: 'Overview' }}>
      <Stack.Screen screenOptions={{headerShown: false}} name="Root" component={Root}/>
      <Stack.Screen screenOptions={{headerShown: false}} name="Register" component={UserRegistration} />
      <Stack.Screen screenOptions={{headerShown: false}} name="Watch Setup" component={WatchRegistration} />
      <Stack.Screen screenOptions={{headerShown: false}} name="Home" component={HomeScreen} />
      <Stack.Screen screenOptions={{headerShown: false}} name="Overall Trends" component={OverallTrends} />
      <Stack.Screen screenOptions={{headerShown: false}} name="Activity Screen" component={ActivityScreen} />
      <Stack.Screen screenOptions={{headerShown: false}} name="Heart Screen" component={HeartScreen} />
      <Stack.Screen screenOptions={{headerShown: false}} name="Diary Main Screen" component={DiaryMainScreen} />
      <Stack.Screen screenOptions={{headerShown: false}} name="Diary Entry" component={DiaryEntry} />
      <Stack.Screen screenOptions={{headerShown: false}} name="General Tips" component={GeneralTips} />
      <Stack.Screen screenOptions={{headerShown: false}} name="Activity Tips" component={ActivityTips} />
      <Stack.Screen screenOptions={{headerShown: false}} name="Respiratory Tips" component={RespiratoryTips} />
      <Stack.Screen screenOptions={{headerShown: false}} name="Heart Tips" component={HeartTips} />
      <Stack.Screen screenOptions={{headerShown: false}} name="Mobility Tips" component={MobilityTips} />
      <Stack.Screen screenOptions={{headerShown: false}} name="Sleep Tips" component={SleepTips} />
      <Stack.Screen screenOptions={{headerShown: false}} name="Cognition Tips" component={CognitionTips} />
      <Stack.Screen screenOptions={{headerShown: false}} name="Agitation Tips" component={AgitationTips} />
      <Stack.Screen screenOptions={{headerShown: false}} name="Main Location" component={MainLocation} />
      <Stack.Screen screenOptions={{headerShown: false}} name="Respiratory Screen" component={RespiratoryScreen} />
    </Stack.Navigator>
  </NavigationContainer>
)}

export default App;