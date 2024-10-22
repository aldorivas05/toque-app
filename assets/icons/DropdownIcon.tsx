import React from "react";
import { View } from "react-native";
import Svg, { Path } from "react-native-svg";


const DropdownIcon = () => {
  return (
    <View>
      <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <Path fillRule="evenodd" clipRule="evenodd" d="M4.42999 8.51206C4.49412 8.43723 4.57236 8.37578 4.66025 8.33121C4.74814 8.28664 4.84395 8.25983 4.94221 8.25231C5.04046 8.24479 5.13924 8.2567 5.23289 8.28737C5.32653 8.31804 5.41322 8.36687 5.48799 8.43106L12 14.0121L18.512 8.43106C18.6638 8.30919 18.8571 8.25113 19.0509 8.26916C19.2448 8.28719 19.424 8.3799 19.5508 8.52768C19.6775 8.67546 19.7418 8.86674 19.7301 9.06107C19.7184 9.25541 19.6316 9.43757 19.488 9.56906L12.488 15.5691C12.3521 15.6855 12.179 15.7495 12 15.7495C11.821 15.7495 11.6479 15.6855 11.512 15.5691L4.51199 9.56906C4.36118 9.43957 4.26793 9.25551 4.25274 9.05732C4.23756 8.85913 4.30167 8.66301 4.43099 8.51206" fill="#222222"/>
      </Svg>
    </View>
  );
};


export default DropdownIcon;