import React from "react";
import { View } from "react-native";
import Svg, { Path } from "react-native-svg";


const SentMessageIcon = () => {
  return (
    <View>
      <Svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <Path fillRule="evenodd" clipRule="evenodd" d="M18 3C9.71573 3 3 9.71573 3 18C3 26.2843 9.71573 33 18 33C26.2843 33 33 26.2843 33 18C33 9.71573 26.2843 3 18 3ZM20.1345 26.0415L25.401 12.2925C25.5011 12.0553 25.5283 11.7937 25.479 11.5411C25.4296 11.2884 25.3061 11.0562 25.1242 10.8741C24.9422 10.692 24.7101 10.5682 24.4575 10.5187C24.2049 10.4692 23.9432 10.4961 23.706 10.596L9.957 15.8655C8.712 16.3425 8.6715 18.0885 9.897 18.4605L15.1125 20.046C15.3108 20.1061 15.4912 20.2143 15.6377 20.3608C15.7842 20.5073 15.8924 20.6877 15.9525 20.886L17.538 26.1015C17.91 27.327 19.656 27.2865 20.1345 26.0415Z" fill="#B4002D"/>
      </Svg>
    </View>

  );
};



export default SentMessageIcon;
