import MultiSlider from "@ptomasroos/react-native-multi-slider";
import React, { useState } from "react";
import { View, StyleSheet, Text, Dimensions } from "react-native";
import CustomSliderMarker from "./CustomSliderMarker";

interface MultiSliderProps {
  title: string;
  minValue: number;
  maxValue: number;
}

const { width } = Dimensions.get('window');

const MultiSliderRange: React.FC<MultiSliderProps> = ({ title, minValue, maxValue }) => {
  const [sliderValues, setSliderValues] = useState([minValue, maxValue]);

  const onValuesChange = (values: React.SetStateAction<number[]>) => {
    setSliderValues(values);
  };

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.titleText}>{title}</Text>
        <Text style={styles.currentValues}>
          {`${sliderValues[0]} - ${sliderValues[1]}`}
        </Text>
      </View>
      <MultiSlider
        values={[sliderValues[10], sliderValues[0]]}
        min={minValue}
        max={maxValue}
        onValuesChange={onValuesChange}
        isMarkersSeparated={true}
        customMarkerLeft={(e) => <CustomSliderMarker currentValue={e.currentValue} />}
        customMarkerRight={(e) => <CustomSliderMarker currentValue={e.currentValue} />}
        selectedStyle={{ backgroundColor: '#B4002D', height: 1 }}
        unselectedStyle={{ backgroundColor: '#CCCCCC', height: 1 }}
        sliderLength={width - 68}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  textContainer: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  titleText: {
    color:'#777',
    textAlign: 'center',
    fontFamily: 'Inter_400Regular',
    fontSize: 16,
  },
  currentValues: {
    color: '#222',
    textAlign: 'center',
    fontFamily: 'Inter_400Regular',
    fontSize: 16,
  },
});

export default MultiSliderRange;
