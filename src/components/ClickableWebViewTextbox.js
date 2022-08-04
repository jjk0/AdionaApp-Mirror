import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  SafeAreaView,
} from 'react-native';
import {Pressable} from 'native-base'
import BeautyWebView from 'react-native-beauty-webview';
import ClickableTextBox from './ClickableTextBox'
 
const App = (props) => {
  const [visible, setVisible] = useState(false);
  const onButtonPress = () => {
    setVisible(true);
  };
 
  return (
        <SafeAreaView>
        <BeautyWebView
          visible={visible} // Reguired for open and close
          onPressClose={() => setVisible(false)} // Reguired for closing the modal
          url={props.externalLink}
          style={{ marginTop: 200 }}
          backgroundColor='#557FC3'
        />
        <ClickableTextBox textColor={props.textColor} backgroundColor={props.backgroundColor} mainText={props.mainText} secondaryText={props.secondaryText} onPress={onButtonPress}/>
        </SafeAreaView>
  );
};
 
 
export default App;