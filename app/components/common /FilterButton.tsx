import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

interface ButtonProps {
  backgroundColor?: string;
  textColor?: string;
  text: string;
  hasBorder?: boolean;
}

const FilterScreenButton: React.FC<ButtonProps> = ({
  backgroundColor = "#FFF", 
  textColor = "#000", 
  text, 
  hasBorder = true
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        { backgroundColor: backgroundColor },
        hasBorder && { borderColor: "#B4002D", borderWidth: 1 }
      ]}
    >
      <Text style={[styles.text, { color: textColor }]}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 50,
    paddingHorizontal: 40,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    borderRadius: 25,
  },
  text: {
    textAlign: 'center',
    fontSize: 16,
    fontFamily: 'Inter_400Regular',
  }
});

export default FilterScreenButton;
