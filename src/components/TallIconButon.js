import React from 'react';
import {
    Text,
    Pressable,
  } from 'native-base';
import { useNavigation } from '@react-navigation/native';


import Icon from 'react-native-vector-icons/MaterialCommunityIcons';






const TallIconButton = (props) => {
    const navigation = useNavigation();

    return (
        <Pressable onPress={() => navigation.navigate(props.navigateToPage)} w='30%' borderRadius='2xl' bg={props.backgroundColor} height='200' m='2' p='5'>
                <Icon alignSelf='center'name={props.iconTitle} size={60} color="white" />
                <Text fontSize={16} width='80%' color='white'>{props.buttonText}</Text>
        </Pressable>
    )
}

export default TallIconButton