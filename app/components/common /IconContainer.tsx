import React from "react";
import { View, StyleSheet } from "react-native";

interface IconContainerProps {
  icon: React.ReactNode;
}

const IconContainer: React.FC<IconContainerProps> = ({ icon }) => {
  return (
    <View style={styles.iconContainer}>
      {icon}
    </View>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    width: 64,
    height: 64,
    backgroundColor: '#FCF3F5',
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default IconContainer;
