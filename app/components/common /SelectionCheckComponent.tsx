import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

interface SelectionCheckComponentProps {
  icon: JSX.Element;
  text: string;
}

const SelectionCheckComponent: React.FC<SelectionCheckComponentProps> = ({ icon, text }) => {
  return (
    <View style={styles.container}>
      <View style={styles.iconTextContainer}>
        {icon}
        <Text style={styles.text}>{text}</Text>
      </View>

      <TouchableOpacity style={styles.radioButton} />
    </View>
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
    display: 'flex',
    width: 22,
    height: 22,
    alignItems: 'center',
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#CCC',
    backgroundColor: '#FFF',
  },
});

export default SelectionCheckComponent;
