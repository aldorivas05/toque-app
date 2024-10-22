import React from "react";
import { View } from "react-native";
import Svg, { G, Path, Defs, ClipPath, Rect } from "react-native-svg";


const FacebookButtonIcon = () => {
  return (
    <View>
      <Svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <G clipPath="url(#clip0_19_15)">
          <Path d="M20 10C20 4.47719 15.5228 0 10 0C4.47719 0 0 4.47719 0 10C0 14.9913 3.65687 19.1284 8.4375 19.8785V12.8906H5.89844V10H8.4375V7.79688C8.4375 5.29063 9.93047 3.90625 12.2147 3.90625C13.3088 3.90625 14.4531 4.10156 14.4531 4.10156V6.5625H13.1922C11.9499 6.5625 11.5625 7.33336 11.5625 8.12422V10H14.3359L13.8926 12.8906H11.5625V19.8785C16.3431 19.1284 20 14.9913 20 10Z" fill="white"/>
          <Path d="M13.8926 12.8906L14.3359 10H11.5625V8.12422C11.5625 7.33328 11.9499 6.5625 13.1922 6.5625H14.4531V4.10156C14.4531 4.10156 13.3088 3.90625 12.2146 3.90625C9.93047 3.90625 8.4375 5.29063 8.4375 7.79688V10H5.89844V12.8906H8.4375V19.8785C8.95439 19.9595 9.4768 20.0001 10 20C10.5232 20.0001 11.0456 19.9595 11.5625 19.8785V12.8906H13.8926Z" fill="#1877F2"/>
        </G>
        <Defs>
          <ClipPath id="clip0_19_15">
            <Rect width="20" height="20" fill="white"/>
          </ClipPath>
        </Defs>
      </Svg>
    </View>
  );
};


export default FacebookButtonIcon;