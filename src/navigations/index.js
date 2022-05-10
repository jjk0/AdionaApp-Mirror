import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { GestureHandlerRootView,gestureHandlerRootHOC } from 'react-native-gesture-handler';
import HomeScreen from '../screens/home';



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
    </Stack.Navigator>
  </NavigationContainer>


      


)}

export default App;