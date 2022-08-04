import React from 'react';
import {
    ScrollView,
    VStack,
  } from 'native-base';
import {SafeAreaView} from 'react-native';

import ScreenTop from '../../components/ScreenTop';
import ClickableTextBox from '../../components/ClickableTextBox';


const AgitationTips = () => {
    return(
        <SafeAreaView style={{flex: 1}}>
        <ScrollView>
            <ScreenTop backgroundColor='#E16547' screenTitle='Agitation Tips'/>
            <VStack mx='8'>
                <ClickableTextBox textColor='white' backgroundColor='#E16547' 
                                mainText='How exercise improves sleep' 
                                secondaryText='Exercise improves daytime activity which helps nighttime sleep'/>
                <ClickableTextBox textColor='white' backgroundColor='#E16547' 
                                mainText='A Few Ways to improve exercise'
                                secondaryText='Tap to find out a few ways to help John exercise'/>
            </VStack>
        </ScrollView>
        </SafeAreaView>
    )
}

export default AgitationTips;