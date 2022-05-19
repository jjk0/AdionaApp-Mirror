import React from 'react';
import {
    ScrollView,
    VStack,
  } from 'native-base';

import ScreenTop from '../../components/ScreenTop';
import ClickableTextBox from '../../components/ClickableTextBox';


const MobilityTips = () => {
    return(
        <ScrollView>
            <ScreenTop backgroundColor='#FEB35F' screenTitle='Mobility Tips'/>
            <VStack mx='8'>
                <ClickableTextBox textColor='white' backgroundColor='#FEB35F' 
                                mainText='How exercise improves sleep' 
                                secondaryText='Exercise improves daytime activity which helps nighttime sleep'/>
                <ClickableTextBox textColor='white' backgroundColor='#FEB35F' 
                                mainText='A Few Ways to improve exercise'
                                secondaryText='Tap to find out a few ways to help John exercise'/>
            </VStack>
        </ScrollView>
    )
}

export default MobilityTips;