import React from "react";
import { View, StyleSheet } from "react-native";


interface CustomSliderMarkerProps {
  currentValue: number;
}

const CustomSliderMarker: React.FC<CustomSliderMarkerProps> = () => {
  return (
    <View style={styles.marker} />
  );
};


const styles = StyleSheet.create({
  marker: {
    height: 28,
    width: 28,
    borderRadius: 16,
    backgroundColor: '#fff', 
    borderWidth: 1,
    borderColor: '#B4002D',
    shadowColor: 'transparent',
  },
});

export default CustomSliderMarker;