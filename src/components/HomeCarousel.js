import React, { useEffect, useState,useCallback, useRef } from 'react';
import {
    Box,   
    VStack,    
    Text,  
    Pressable,    
    Center,
    View,
  } from 'native-base';
import {Auth} from "aws-amplify"
import { useNavigation } from '@react-navigation/native';
import TallIconButton from "../components/TallIconButon"
import Carousel from 'react-native-snap-carousel';




export default function  HomeCarousel() {
  
    const [activeIndex,setActiveIndex] = useState(0); // search useState online
    const [carouselItems,setCarouselItems] = useState( [
          {
              navigate: "Feature1",
              text: "Symptoms",
              iconTitle:"brain",
              
          },
          {   
              navigate: "Feature2",
              text: "Full Report",
              iconTitle:"clipboard-outline",
              
          },
          {   
              navigate: "Care Tips",
              text: "Care Tips",
              iconTitle:"lightbulb-outline",
              
          },

        ]);

    const ref = useRef(null); // search useRef online

    
    const Item =({item,index})=> {
        //const navigation = useNavigation(); // Now you can use it
        return (
        <TallIconButton iconTitle={item.iconTitle} buttonText={item.text}/>

        )
    }

    return (
      
          //<View style={{ flex: 1, flexDirection:'row', justifyContent: "center" }}>
              <Carousel
                layout={"default"}
                layoutCardOffset={20}
                ref={ref}
                data={carouselItems}
                sliderWidth={100}
                inactiveSlideScale={1}
                itemWidth={300}
                renderItem={Item}
                //onSnapToItem = { index =>setActiveIndex(index) } 
                />
          //</View>
        
      );
    
  }