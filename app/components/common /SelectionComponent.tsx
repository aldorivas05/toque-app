import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

interface SelectionComponentProps {
  icon: JSX.Element;
  text: string;
  isActive?: boolean;
  onPress: () => void;
}

const SelectionComponent: React.FC<SelectionComponentProps> = ({ icon, text, isActive = false, onPress }) => {
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
      <View
        style={[
          styles.radioButton,
          isActive && styles.activeRadioButton,
        ]}
      />
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
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#CCC',
    backgroundColor: '#FFF',
  },
  activeRadioButton: {
    borderWidth: 5,
    borderColor: '#B4002D',
  },
});

export default SelectionComponent;

