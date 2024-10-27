import CheckIcon from "@/assets/icons/CheckIcon";
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

interface SelectionCheckComponentProps {
  icon: JSX.Element;
  text: string;
  isActive?: boolean;
  onPress: () => void;
}

const SelectionCheckComponent: React.FC<SelectionCheckComponentProps> = ({ icon, text, isActive = false, onPress }) => {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        isActive && styles.activeContainer,
      ]}
      onPress={onPress}
    >
      <View style={styles.iconTextContainer}>
        {icon}
        <Text style={styles.text}>{text}</Text>
      </View>

      <View style={[styles.radioButton, isActive && styles.activeRadioButton]}>
        {isActive && <CheckIcon />}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 50,
    paddingHorizontal: 16,
    borderRadius: 28,
    backgroundColor: '#F6F6F6',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  activeContainer: {
    backgroundColor: '#F9EBEF',
  },
  iconTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    color: '#222',
    paddingLeft: 8,
    fontFamily: 'Inter_400Regular',
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 22,
  },
  radioButton: {
    width: 22,
    height: 22,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#CCC',
    backgroundColor: '#FFF',
  },
  activeRadioButton: {
    backgroundColor: '#B4002D',
    borderWidth: 0,
  },
});

export default SelectionCheckComponent;
