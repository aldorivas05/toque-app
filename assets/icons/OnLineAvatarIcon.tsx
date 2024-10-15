import React from "react";
import { View } from "react-native";
import Svg, { Circle } from "react-native-svg";


const ActiveAvatarIcon = () => {
  return (
    <View>
      <Svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <Circle cx="8" cy="8" r="7" fill="#20C997" stroke="white" strokeWidth="2"/>
      </Svg>
    </View>
  )
} 



export default ActiveAvatarIcon;