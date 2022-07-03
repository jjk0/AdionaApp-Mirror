/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import { withAuthenticator } from 'aws-amplify-react-native';
//import { withAuthenticator } from '@aws-amplify/ui-react';
import React from 'react';
import UserContext from './src/contexts/UserContext';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import { NativeBaseProvider, Box } from "native-base";

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import Navigations from './src/navigations';


//clean up import code here
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

Icon.loadFont();
FontAwesome5.getStyledIconSet('solid').loadFont();
FontAwesome5.getStyledIconSet('regular').loadFont();
FontAwesome5.getStyledIconSet('brands').loadFont();

import {
  createDrawerNavigator,
  DrawerContentScrollView,
} from "@react-navigation/drawer";
import { AmplifyTheme } from 'aws-amplify-react-native';






const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <UserContext>
        <NativeBaseProvider>
          <Navigations></Navigations>
        </NativeBaseProvider>
      </UserContext>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
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
    marginTop: 32,
    color: Colors.white,
  }
});

const MyButton = Object.assign({}, AmplifyTheme.button, { backgroundColor: '#517FF3', alignItems: 'center', padding: 16 });
const MySectionFooter = Object.assign({}, AmplifyTheme.sectionFooterLink, { fontSize: 14, color: '#517FF3', alignItems: 'baseline',textAlign: 'center'},);
const MyTheme = Object.assign({}, AmplifyTheme, { button: MyButton, sectionFooterLink: MySectionFooter  });

const signUpConfig = {
  header: 'Adiona User Sign Up',
  //hideAllDefaults: true,
  defaultCountryCode: '1',
  signUpFields: [
    {
      label: 'Patient Name',
      key: 'custom:patientName',
      required: true,
      displayOrder: 5,
      type: 'string'
    },
    {
      label: 'Cargiver Name',
      key: 'custom:caregiverName',
      required: true,
      displayOrder: 6,
      type: 'string'
    }
  ]
};


// export default withAuthenticator(App, {
//   // Render a sign out button once logged in
//   includeGreetings: true,
//   hideAllDefaults: true,
//   signUpFields: [ { key: 'custom::patientName' }, { key: 'password' } ]
  
//   // Show only certain components
// });;
export default withAuthenticator(App, {
  includeGreetings:true,
  signUpConfig,
  theme: MyTheme
});