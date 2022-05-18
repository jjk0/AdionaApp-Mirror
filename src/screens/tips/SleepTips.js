import React from 'react';
import {
    ScrollView,
    VStack,
  } from 'native-base';

import ScreenTop from '../../components/ScreenTop';
import ClickableTextBox from '../../components/ClickableTextBox';


const SleepTips = () => {
    return(
        <ScrollView>
            <ScreenTop backgroundColor='#2E6BA8' screenTitle='Sleep Tips'/>
            <VStack mx='8'>
                <ClickableTextBox textColor='white' backgroundColor='blue.200' 
                                mainText='How exercise improves sleep' 
                                secondaryText='Exercise improves daytime activity which helps nighttime sleep'/>
                <ClickableTextBox textColor='white' backgroundColor='blue.200' 
                                mainText='A Few Ways to improve exercise'
                                secondaryText='Tap to find out a few ways to help John exercise'/>
            </VStack>
        </ScrollView>
    )
}

export default SleepTips;