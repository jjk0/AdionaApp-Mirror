import React, { useEffect, useState } from 'react';
import {
    Pressable,
    Circle
  } from 'native-base';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';


const BackButton = (props) => {
    const navigation = useNavigation()
    return (
        <Pressable m='5' alignSelf='flex-start' onPress={() => navigation.goBack()}>
            <Circle bgColor='white'>
                <Icon name="chevron-left" size={40} color="black" />
            </Circle>
        </Pressable>
    )
}

export default BackButton