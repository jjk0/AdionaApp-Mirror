import React from 'react';
import {
    Text,
    Pressable,
    Center,
  } from 'native-base';
import { useNavigation } from '@react-navigation/native';


import Icon from 'react-native-vector-icons/MaterialCommunityIcons';






const TallIconButton = (props) => {
    const navigation = useNavigation();

    return (
        <Pressable onPress={() => navigation.navigate(props.navigateToPage)} w='40%' borderRadius='2xl' bg='white' shadow='1' height='200' m='2' p='5'>
            <Center>
                <Icon alignSelf='center'name={props.iconTitle} size={60} color="#517FF3" />
                <Text style={{fontFamily:'Alata'}} fontSize={16} color='black'>{props.buttonText}</Text>
             </Center>
        </Pressable>
    )
}

export default TallIconButton