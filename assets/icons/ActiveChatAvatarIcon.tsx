import React from "react";
import { View } from "react-native";
import Svg, { Circle } from "react-native-svg";



const ActiveChatAvatarIcon = () => {
  return (
    <View>
      <Svg width="7" height="7" viewBox="0 0 7 7" fill="none">
        <Circle cx="3.5" cy="3.5" r="3" fill="#55DF00"/>
      </Svg>
    </View>
  );
};


export default ActiveChatAvatarIcon;