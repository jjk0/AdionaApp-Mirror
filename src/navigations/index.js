import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { GestureHandlerRootView,gestureHandlerRootHOC } from 'react-native-gesture-handler';
import HomeScreen from '../screens/home/HomeScreen';
import OverallTrends from '../screens/trends/OverallTrends';
import ActivityScreen from '../screens/trends/ActivityScreen';
import DiaryMainScreen from '../screens/diary/DiaryMainScreen';
import GeneralTips from '../screens/tips/GeneralTips';
import ActivityTips from '../screens/tips/ActivityTips';


const Stack = createNativeStackNavigator();

const backToHomeRoutes = [
    'Cognition',
    'Patient',
    'Behavior',
    'Report',
    'Caregiver',
  ];


function App() {

    return (
    
  <NavigationContainer>
    <Stack.Navigator initialRouteName='Home' options={{ title: 'Overview' }}>
      <Stack.Screen screenOptions={{headerShown: false}} name="Home" component={HomeScreen} />
      <Stack.Screen screenOptions={{headerShown: false}} name="Overall Trends" component={OverallTrends} />
      <Stack.Screen screenOptions={{headerShown: false}} name="Activity Screen" component={ActivityScreen} />
      <Stack.Screen screenOptions={{headerShown: false}} name="Diary Main Screen" component={DiaryMainScreen} />
      <Stack.Screen screenOptions={{headerShown: false}} name="General Tips" component={GeneralTips} />
      <Stack.Screen screenOptions={{headerShown: false}} name="Activity Tips" component={ActivityTips} />
    </Stack.Navigator>
  </NavigationContainer>


      


)}

export default App;