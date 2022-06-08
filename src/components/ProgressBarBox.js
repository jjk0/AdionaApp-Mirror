import React, { useEffect, useState } from 'react';
import {
    Box,
    VStack,
    Text,
    HStack,
    Pressable,
    Center,
  } from 'native-base';


import ProgressBar from 'react-native-progress/Bar';

         
         
const ProgressBarBox = (props) => {

    const [progressColor, setProgressColor] = useState('');


    useEffect(() => {
    if (props.progressNumber <=.3) {
        setProgressColor('#ED0707');
       
    } else if (props.progressNumber>.3 && props.progressNumber<.6) {
        setProgressColor('#E3E577');

    } else {
        setProgressColor("#47E169")


    }
    }, [props.progressNumber])

    return (
         
        <Pressable borderRadius='100' m='5' p='5' bgColor='white' alignSelf='flex-end'>
            <Center>
                <HStack>
                    <ProgressBar unfilledColor='#e5e5e5' borderColor='#FFFFFF' color={progressColor} progress={props.progressNumber} width={200} />
                </HStack>
            </Center>
        </Pressable>
    )

}

export default ProgressBarBox;