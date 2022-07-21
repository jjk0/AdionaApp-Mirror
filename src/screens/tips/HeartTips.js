import React from 'react';
import {
    ScrollView,
    VStack,
  } from 'native-base';
import {SafeAreaView} from 'react-native';


import ScreenTop from '../../components/ScreenTop';
import ClickableTextBox from '../../components/ClickableTextBox';


const HeartTips = () => {
    return(
        <SafeAreaView style={{flex: 1}}>
        <ScrollView>
            <ScreenTop backgroundColor='#FE987D' screenTitle='Heart Tips'/>
            <VStack mx='8'>
                <ClickableTextBox textColor='white' backgroundColor='#FE987D' 
                                mainText='How exercise improves sleep' 
                                secondaryText='Exercise improves daytime activity which helps nighttime sleep'/>
                <ClickableTextBox textColor='white' backgroundColor='#FE987D' 
                                mainText='A Few Ways to improve exercise'
                                secondaryText='Tap to find out a few ways to help John exercise'/>
            </VStack>
        </ScrollView>
        </SafeAreaView>
    )
}

export default HeartTips;