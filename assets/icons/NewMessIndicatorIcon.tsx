import React from "react";
import { View } from "react-native";
import Svg, { Circle } from "react-native-svg";



const NewMessIndicatorIcon = () => {
  return (
    <View>
      <Svg width="8" height="8" viewBox="0 0 8 8" fill="none">
        <Circle cx="4" cy="4" r="4" fill="#DC3545"/>
      </Svg>
    </View>
  );
};


export default NewMessIndicatorIcon;