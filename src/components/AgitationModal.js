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
import {
    StyleSheet,
  } from 'react-native';


 const AgitationModal = ({ isOpen, handleClose }) => {
    const [showModal, setShowModal] = useState(false);
    const [showModal2, setShowModal2] = useState(false);
    const [showModal3, setShowModal3] = useState(false);

    const showSecondModal = () => {
        setShowModal(false)
        setShowModal2(true)
        setShowModal3(false)
    }
    
     const showThirdModal = () => {
         setShowModal(false)
         setShowModal2(false)
         setShowModal3(true)
     }
    
     const closeAllModals = () => {
        handleClose();
        setShowModal(false)
        setShowModal2(false)
        setShowModal3(false)
    }

    return (
        <View>
            <Modal isOpen={isOpen} onClose={closeAllModals} size="lg">
                <Modal.Content maxWidth="350">
                <Modal.CloseButton />
                    <Modal.Body>
                        <Center my='4'>
                            <HStack>
                                <Text bold width='80%' fontSize={24}>Want to log a behavioral episode?</Text>
                            </HStack>
                        </Center>
                        <Center>
                            <VStack justifyContent='center' width='80%'>
                                <Button m='2' py='2' borderRadius='2xl' bgColor='warning.200' onPress={() => showSecondModal()}>
                                    <Text bold alignSelf='center' fontSize={20}>Yes</Text>
                                </Button>
                                <Button variant='outline' m='2' py='2' borderRadius='2xl' borderWidth='3' borderColor='warning.200' onPress={() => (showThirdModal())}>
                                    <Text bold alignSelf='center' fontSize={20}>No</Text>
                                </Button>
                                
                            </VStack>
                        </Center>
                    </Modal.Body>
                </Modal.Content>
            </Modal>
        <Modal isOpen={showModal2} onClose={closeAllModals} size="lg">
            <Modal.Content maxWidth="350">
            <Modal.CloseButton />
            <Modal.Body>
                <Center my='4'>
                    <HStack>
                        <Text bold width='80%' fontSize={24}>When did the episode happen?</Text>
                    </HStack>
                </Center>
                <Center>
                    <VStack justifyContent='center' width='80%'>
                        <Button m='2' py='2' borderRadius='2xl' bgColor='warning.200' onPress={() => (showThirdModal())}>
                            <Text bold alignSelf='center' fontSize={20}>Just now</Text>
                        </Button>
                        <Button variant='outline' m='2' py='2' borderRadius='2xl' borderWidth='3' borderColor='warning.200' onPress={() => (showThirdModal())}>
                            <Text bold alignSelf='center' fontSize={20}>5 minutes ago</Text>
                        </Button>
                        <Button m='2' py='2' borderRadius='2xl' bgColor='warning.200' onPress={() => (showThirdModal())}>
                            <Text bold alignSelf='center' fontSize={20}>10 minutes ago</Text>
                        </Button>
                        <Button variant='outline' m='2' py='2' borderRadius='2xl' borderWidth='3' borderColor='warning.200' onPress={() => (showThirdModal())}>
                            <Text bold alignSelf='center' fontSize={20}>15 minutes ago</Text>
                        </Button>
                        <Button m='2' py='2' borderRadius='2xl' bgColor='warning.200' onPress={() => (showThirdModal())}>
                            <Text bold alignSelf='center' fontSize={20}>Other</Text>
                        </Button>
                        
                    </VStack>
                </Center>
            </Modal.Body>
            </Modal.Content>
        </Modal>
        <Modal isOpen={showModal3} onClose={closeAllModals} size="lg">
            <Modal.Content maxWidth="350">
            <Modal.CloseButton />
            <Modal.Body>
                <Center my='4'>
                    <HStack>
                        <Text bold width='80%' fontSize={24}>All done!</Text>
                    </HStack>
                </Center>
                <Center>
                    <VStack justifyContent='center' width='80%'>
                        <Button m='2' py='2' borderRadius='2xl' bgColor='warning.200'>
                            <Text bold alignSelf='center' fontSize={20}>Tap here for more info!</Text>
                        </Button>
                        
                    </VStack>
                </Center>
            </Modal.Body>
            </Modal.Content>
        </Modal>
    </View>
    )
 }

export default AgitationModal;