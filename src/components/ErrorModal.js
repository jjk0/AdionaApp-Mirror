import React, { useEffect, useState } from 'react';
import {
    Box,
    Button, 
    Circle,
    Card,
    ScrollView,
    VStack,
    Heading,
    Text,
    HStack,
    Pressable,
    Skeleton,
    View,
    Image,
    Center,
    ChevronRightIcon,
    Modal
  } from 'native-base';

import { useNavigation } from '@react-navigation/native';


 const ErrorModal = ({ isOpen, handleClose, errorText }) => {
    const [showModal, setShowModal] = useState(false);
    const navigation = useNavigation();

    
     const closeAllModals = () => {
        handleClose();
        setShowModal(false)
        navigation.navigate('Root')
    }

    return (
        <View>
            <Modal isOpen={isOpen} onClose={closeAllModals} size="lg">
                <Modal.Content maxWidth="350">
                <Modal.CloseButton />
                    <Modal.Body>
                        <Center my='4'>
                            <HStack>
                                <Text style={{fontFamily:'Alata'}} bold width='80%' fontSize={24}>{errorText}</Text>
                            </HStack>
                        </Center>
                        <Center>
                            <VStack justifyContent='center' width='80%'>
                                <Button m='2' py='2' borderRadius='2xl' bgColor='warning.200' onPress={() => closeAllModals()}>
                                    <Text style={{fontFamily:'Alata'}} bold alignSelf='center' fontSize={20}>Home</Text>
                                </Button>
                            </VStack>
                        </Center>
                    </Modal.Body>
                </Modal.Content>
            </Modal>
    </View>
    )
 }

export default ErrorModal;