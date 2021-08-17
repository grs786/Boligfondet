
import React,{ useState } from 'react';
import { View,Animated,Dimensions } from 'react-native';
import {  BottomTabBar } from 'react-navigation-tabs';

const CustomBottomBar = (props) =>{
    console.log('props',props)
  
    const {width} = Dimensions.get('screen')
  
    //Create an animated value 
    const [position] = useState(new Animated.ValueXY())
  
    const animStyles = {
        position: 'absolute',
        top: 0,
        width: width/4,
        backgroundColor: 'skyblue',
        transform: position.getTranslateTransform(),

    }
  
    const animate = (value, route) =>{
        //navigate to the selected route on click
        props.navigation.navigate(route)
  
        //animate indicator
        Animated.timing(position, {
            toValue: {x: value, y: 0},
            duration: 300,
            useNativeDriver: true
        }).start()
    }
  
  
    return(
        <View style={{justifyContent:'center',}}>
        <Animated.View style={animStyles} />
        <BottomTabBar {...props} onTabPress={({route}) =>{
            switch(route.key){
                case 'Home':
                     animate(0, route.key)
                      break
                      case 'Invester':
                       animate(width/4, route.key)
                       break
                       case 'Messages':
                         animate(width - (width/2), route.key)
                         break
                         case 'More':
                           animate(width - (width/4), route.key)
                           break
            }
        }} style={{height:55,paddingHorizontal:10,justifyContent:'center',alignItems:'center'}} />
        </View>
    )
  }

  export default CustomBottomBar;