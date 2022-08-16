/**
 * @format
 */
import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import { Amplify, AuthModeStrategyType } from 'aws-amplify'
import awsconfig from './src/aws-exports'
Amplify.configure({
    ...awsconfig,
    DataStore: {
      authModeStrategyType: AuthModeStrategyType.MULTI_AUTH
    }});
//import { Amplify} from "@aws-amplify/core";
//Amplify.configure({ config: { awsconfig } });


AppRegistry.registerComponent(appName, () => App);
