import React from "react";
import { View } from "react-native";
import Svg, { Path, Rect } from "react-native-svg";



const PartyModeIcon = () => {
  return (
    <View>
      <Svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <Rect x="1" y="1" width="26" height="26" rx="13" fill="#FFC107"/>
        <Rect x="1" y="1" width="26" height="26" rx="13" stroke="white" strokeWidth="2"/>
        <Path d="M13.9998 20C16.9452 20 19.3332 17.7627 19.3332 15.0027C19.3332 12.5087 17.9765 10.5587 17.0412 9.62932C16.8678 9.45732 16.5785 9.53332 16.4812 9.75532C15.9825 10.882 14.9452 12.504 13.6192 12.504C12.7978 12.614 11.5445 11.912 12.5565 8.43266C12.6478 8.11932 12.3132 7.86732 12.0572 8.07666C10.6032 9.26999 8.6665 11.674 8.6665 15.0027C8.6665 17.7627 11.0545 20 13.9998 20Z" fill="white"/>
      </Svg> 
    </View>
  )
}


export default PartyModeIcon;