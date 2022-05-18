import * as React from 'react';
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


import {
    createDrawerNavigator,
    DrawerContentScrollView,
  } from "@react-navigation/drawer";


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
        <Drawer.Navigator>
            <Drawer.Screen name="Home Screen" component={HomeScreen} />
            <Drawer.Screen name="Profile" component={ActivityScreen} />
            <Stack.Screen name="Settings" component={HeartScreen} />
        </Drawer.Navigator>
    );
    }


function App() {

    return (
    
  <NavigationContainer>
    <Stack.Navigator initialRouteName='Root' options={{ title: 'Overview' }}>
    <Stack.Screen
          name="Root"
          component={Root}
          options={{ headerShown: false }}
        />
      <Stack.Screen screenOptions={{headerShown: false}} name="Home" component={HomeScreen} />
      <Stack.Screen screenOptions={{headerShown: false}} name="Overall Trends" component={OverallTrends} />
      <Stack.Screen screenOptions={{headerShown: false}} name="Activity Screen" component={ActivityScreen} />
      <Stack.Screen screenOptions={{headerShown: false}} name="Heart Screen" component={HeartScreen} />
      <Stack.Screen screenOptions={{headerShown: false}} name="Diary Main Screen" component={DiaryMainScreen} />
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