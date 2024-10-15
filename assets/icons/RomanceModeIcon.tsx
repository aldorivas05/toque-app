import React from "react";
import { View } from "react-native";
import Svg, { Path, Rect } from "react-native-svg";



const RomanceModeIcon = () => {
  return (
    <View>
      <Svg width="28" height="28" viewBox="0 0 28 28" fill="transparent">
        <Rect x="1" y="1" width="26" height="26" rx="13" fill="#DC3545"/>
        <Rect x="1" y="1" width="26" height="26" rx="13" stroke="white" strokeWidth="2"/>
        <Path d="M7.3335 12.0913C7.3335 15.3333 10.0135 17.0607 11.9748 18.6073C12.6668 19.1527 13.3335 19.6667 14.0002 19.6667C14.6668 19.6667 15.3335 19.1533 16.0255 18.6067C17.9875 17.0613 20.6668 15.3333 20.6668 12.092C20.6668 8.85067 17.0002 6.55 14.0002 9.66733C11.0002 6.55 7.3335 8.84933 7.3335 12.0913Z" fill="white"/>
      </Svg>
    </View>
  )
}


export default RomanceModeIcon;