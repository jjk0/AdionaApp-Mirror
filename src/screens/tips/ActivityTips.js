import React from 'react';
import {
    ScrollView,
    VStack,
  } from 'native-base';

import ScreenTop from '../../components/ScreenTop';
import ClickableTextBox from '../../components/ClickableTextBox';


const GeneralTips = () => {
    return(
        <ScrollView>
            <ScreenTop backgroundColor='success.400' screenTitle='Activity Tips'/>
            <VStack mx='8'>
                <ClickableTextBox backgroundColor='success.400' 
                                mainText='How exercise improves sleep' 
                                secondaryText='Exercise improves daytime activity which helps nighttime sleep'/>
                <ClickableTextBox backgroundColor='success.400' 
                                mainText='A Few Ways to improve exercise'
                                secondaryText='Tap to find out a few ways to help John exercise'/>
            </VStack>
        </ScrollView>
    )
}

export default GeneralTips;