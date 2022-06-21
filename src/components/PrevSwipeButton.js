import React, { useEffect, useState,useCallback, useRef } from 'react';
import {
    Box,   
    VStack,    
    Text,  
    Pressable,    
    Center,
  } from 'native-base';


const SwipeButton = ({onNextPressed}) => {

    return (
            <Pressable m='2' onPress={onNextPressed}>
                <Center>
                    <Box borderRadius='2xl' bgColor='white' height="50" width="80%">
                            <Text alignSelf="center" justifyContent="center" fontSize={26} m='1' bold color="black">Previous</Text>
                    </Box>
                </Center>
            </Pressable>
    )
    
}

export default SwipeButton;