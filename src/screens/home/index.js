import React, { useEffect, useState } from 'react';
// import {
//     ScrollView,
//     VStack,
//     Heading,
//     Text,
//     HStack,
//     Pressable,
//     Skeleton,
//     View,
//     Image,
//     Center,
//     ChevronRightIcon,
//   } from 'native-base';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
  } from 'react-native';
  
import { TouchableOpacity } from 'react-native';


  const Home = ({ navigation }) => {
    
    
    return (
        <ScrollView style={styles.sectionContainer}>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text style={styles.text}>Home Screen</Text>
            </View>
        </ScrollView>
    )
  }



  const styles = StyleSheet.create({
    sectionContainer: {
      marginTop: 32,
      paddingHorizontal: 24,
      flex:1,
      backgroundColor:'white'
    },
    sectionTitle: {
      fontSize: 24,
      fontWeight: '600',
    },
    sectionDescription: {
      marginTop: 8,
      fontSize: 18,
      fontWeight: '400',
    },
    highlight: {
      fontWeight: '700',
    },
    text: {
      color:'#000000',
      textAlign: 'center',
    }
  });

  export default Home;
