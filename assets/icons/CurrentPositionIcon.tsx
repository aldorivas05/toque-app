import React from 'react';
import { View } from 'react-native';
import Svg, { Path } from 'react-native-svg';

const CurrentPositionIcon = () => {
  return (
    <View>
      <Svg 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none">
        <Path fillRule="evenodd" 
          clipRule="evenodd" 
          d="M12 1.25C12.1989 
          1.25 12.3897 1.32902 12.5303 1.46967C12.671 1.61032 12.75 1.80109 12.75 2V3.282C14.804 3.45866 16.7296 4.35488 18.1874 5.81263C19.6451 7.27038 20.5413 9.19602 20.718 11.25H22C22.1989 11.25 22.3897 11.329 22.5303 11.4697C22.671 11.6103 22.75 11.8011 22.75 12C22.75 12.1989 22.671 12.3897 22.5303 12.5303C22.3897 12.671 22.1989 12.75 22 12.75H20.718C20.5413 14.804 19.6451 16.7296 18.1874 18.1874C16.7296 19.6451 14.804 20.5413 12.75 20.718V22C12.75 22.1989 12.671 22.3897 12.5303 22.5303C12.3897 22.671 12.1989 22.75 12 22.75C11.8011 22.75 11.6103 22.671 11.4697 22.5303C11.329 22.3897 11.25 22.1989 11.25 22V20.718C9.19602 20.5413 7.27038 19.6451 5.81263 18.1874C4.35488 16.7296 3.45866 14.804 3.282 12.75H2C1.80109 12.75 1.61032 12.671 1.46967 12.5303C1.32902 12.3897 1.25 12.1989 1.25 12C1.25 11.8011 1.32902 11.6103 1.46967 11.4697C1.61032 11.329 1.80109 11.25 2 11.25H3.282C3.45866 9.19602 4.35488 7.27038 5.81263 5.81263C7.27038 4.35488 9.19602 3.45866 11.25 3.282V2C11.25 1.80109 11.329 1.61032 11.4697 1.46967C11.6103 1.32902 11.8011 1.25 12 1.25ZM12 4.75C11.0479 4.75 10.1052 4.93753 9.22554 5.30187C8.34593 5.66622 7.5467 6.20025 6.87348 6.87348C6.20025 7.5467 5.66622 8.34593 5.30187 9.22554C4.93753 10.1052 4.75 11.0479 4.75 12C4.75 12.9521 4.93753 13.8948 5.30187 14.7745C5.66622 15.6541 6.20025 16.4533 6.87348 17.1265C7.5467 17.7997 8.34593 18.3338 9.22554 18.6981C10.1052 19.0625 11.0479 19.25 12 19.25C13.9228 19.25 15.7669 18.4862 17.1265 17.1265C18.4862 15.7669 19.25 13.9228 19.25 12C19.25 10.0772 18.4862 8.23311 17.1265 6.87348C15.7669 5.51384 13.9228 4.75 12 4.75ZM12 9.75C11.4033 9.75 10.831 9.98705 10.409 10.409C9.98705 10.831 9.75 11.4033 9.75 12C9.75 12.5967 9.98705 13.169 10.409 13.591C10.831 14.0129 11.4033 14.25 12 14.25C12.5967 14.25 13.169 14.0129 13.591 13.591C14.0129 13.169 14.25 12.5967 14.25 12C14.25 11.4033 14.0129 10.831 13.591 10.409C13.169 9.98705 12.5967 9.75 12 9.75ZM8.25 12C8.25 11.0054 8.64509 10.0516 9.34835 9.34835C10.0516 8.64509 11.0054 8.25 12 8.25C12.9946 8.25 13.9484 8.64509 14.6517 9.34835C15.3549 10.0516 15.75 11.0054 15.75 12C15.75 12.9946 15.3549 13.9484 14.6517 14.6517C13.9484 15.3549 12.9946 15.75 12 15.75C11.0054 15.75 10.0516 15.3549 9.34835 14.6517C8.64509 13.9484 8.25 12.9946 8.25 12Z" fill="#A1A1A1"/>
      </Svg>
    </View>
  );
}

export default CurrentPositionIcon;
