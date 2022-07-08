import React, { useEffect, useState,useCallback, useRef } from 'react';
import {
    Box,   
    VStack,    
    Text,  
    Pressable,    
    Center,
  } from 'native-base';
import {Auth} from "aws-amplify"

  const Logout = () => {
    async function signOut() {
        try {
          await Auth.signOut();
        } catch (error) {
          console.log('Error signing out: ', error);
        }
      }

    return(
        <Box flex bgColor="#517FF3">
            <Center>
            <Text>Are you sure you want to sign out?</Text>
            <Pressable onPress={() => signOut()}>
                <Box borderRadius='2xl' bgColor='white' p='4'>
                    <Text color='black'>Sign out </Text>
                </Box>
            </Pressable>
            </Center>
        </Box>
    )

  }


export default Logout; 