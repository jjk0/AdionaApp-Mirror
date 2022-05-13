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
            <ScreenTop backgroundColor='info.600' screenTitle='Caregiver Tips' supportingText="All of Adiona's tips in one place"/>
            <VStack mx='8'>
                <ClickableTextBox backgroundColor='info.500' mainText='General Tips' secondaryText='Learn more about caregiving and dementia'/>
                <ClickableTextBox navigateToPage='Activity Tips' backgroundColor='success.400' mainText='Activity Tips'/>
                <ClickableTextBox backgroundColor='lightBlue.300' mainText='Sleep Tips'/>
                <ClickableTextBox backgroundColor='error.500' mainText='Agitation Tips'/>
                <ClickableTextBox backgroundColor='orange.300' mainText='Mobility Tips'/>
                <ClickableTextBox backgroundColor='red.300' mainText='Heart Health Tips'/>
                <ClickableTextBox backgroundColor='blue.300' mainText='Respiration Tips'/>
                <ClickableTextBox backgroundColor='purple.300' mainText='Cognition Tips'/>
            </VStack>
        </ScrollView>
    )
}

export default GeneralTips;