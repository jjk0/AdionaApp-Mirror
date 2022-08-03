import React from 'react';
import {

    ScrollView,
    VStack,
  } from 'native-base';
import {SafeAreaView} from 'react-native';


import ScreenTop from '../../components/ScreenTop';
import ClickableTextBox from '../../components/ClickableTextBox';


const GeneralTips = () => {
    return(
        <SafeAreaView style={{flex: 1}}>
        <ScrollView>
            <ScreenTop backgroundColor='#517FF3' screenTitle='Caregiver Tips' supportingText="All of Adiona's tips in one place"/>
            <VStack mx='8'>
                <ClickableTextBox textColor='white' backgroundColor='#517FF3' mainText='General Tips' secondaryText='Learn more about caregiving and dementia'/>
                <ClickableTextBox textColor='white' navigateToPage='Activity Tips' backgroundColor='#94E557' mainText='Activity Tips'/>
                <ClickableTextBox textColor='white' navigateToPage='Sleep Tips' backgroundColor='#84C1FF' mainText='Sleep Tips'/>
                <ClickableTextBox textColor='white' navigateToPage='Agitation Tips'backgroundColor='#E16547' mainText='Agitation Tips'/>
                <ClickableTextBox textColor='white' navigateToPage='Mobility Tips'backgroundColor='#FEB35F' mainText='Mobility Tips'/>
                <ClickableTextBox textColor='white' navigateToPage='Heart Tips'backgroundColor='#FE987D' mainText='Heart Health Tips'/>
                <ClickableTextBox textColor='white' navigateToPage='Respiratory Tips' backgroundColor='#A3CFFB' mainText='Respiration Tips'/>
                <ClickableTextBox textColor='white' navigateToPage='Cognition Tips' backgroundColor='#517FF3' mainText='Cognition Tips'/>
            </VStack>
        </ScrollView>
        </SafeAreaView>
    )
}

export default GeneralTips;