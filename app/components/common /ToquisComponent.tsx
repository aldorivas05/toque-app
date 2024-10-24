import ToquisIcon from "@/assets/icons/ToquisIcon";
import React from "react";
import { View, StyleSheet, Text } from "react-native";


const ToquisComponent = () => {
  return (
    <View style={styles.container}>
      <ToquisIcon />
      <Text style={styles.toquisCounter}>0</Text>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#B4002D',
    justifyContent: 'center',
    alignItems: 'center'
  },
  toquisCounter: {
    color: '#FFF',
    fontFamily: 'Inter_700Bold',
    fontSize: 12,
    lineHeight: 16
  }
})



export default ToquisComponent;