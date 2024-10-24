import React from 'react';
import { View } from 'react-native';
import Svg, { Path } from 'react-native-svg';


const HeartProfileIcon = () => {
  return (
    <View>
      <Svg 
      width="24" 
      height="24" 
      viewBox="0 0 16 16" 
      fill="none"
      >
        <Path d="M1.3335 6.09133C1.3335 9.33333 4.0135 11.0607 5.97483 12.6073C6.66683 13.1527 7.3335 13.6667 8.00016 13.6667C8.66683 13.6667 9.3335 13.1533 10.0255 12.6067C11.9875 11.0613 14.6668 9.33333 14.6668 6.092C14.6668 2.85067 11.0002 0.55 8.00016 3.66733C5.00016 0.55 1.3335 2.84933 1.3335 6.09133Z" fill="#DC3545"/>
      </Svg> 
    </View>
  )
}

export default HeartProfileIcon;