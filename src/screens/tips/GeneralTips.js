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
                <ClickableTextBox textColor='white' backgroundColor='info.500' mainText='General Tips' secondaryText='Learn more about caregiving and dementia'/>
                <ClickableTextBox textColor='white' navigateToPage='Activity Tips' backgroundColor='#E55CE5' mainText='Activity Tips'/>
                <ClickableTextBox textColor='white' navigateToPage='Sleep Tips' backgroundColor='#2E6BA8' mainText='Sleep Tips'/>
                <ClickableTextBox textColor='white' navigateToPage='Agitation Tips'backgroundColor='red.700' mainText='Agitation Tips'/>
                <ClickableTextBox textColor='white' navigateToPage='Mobility Tips'backgroundColor='#D87E2A' mainText='Mobility Tips'/>
                <ClickableTextBox textColor='white' navigateToPage='Heart Tips'backgroundColor='#EE61A7' mainText='Heart Health Tips'/>
                <ClickableTextBox textColor='white' navigateToPage='Respiratory Tips' backgroundColor='#5499E0' mainText='Respiration Tips'/>
                <ClickableTextBox textColor='white' navigateToPage='Cognition Tips' backgroundColor='emerald.600' mainText='Cognition Tips'/>
            </VStack>
        </ScrollView>
    )
}

export default GeneralTips;