import React from 'react';
import {  
  Text, 
  StyleSheet, 
  TouchableOpacity,
  GestureResponderEvent 
} from 'react-native';

interface ButtonComponentProps {
  title: string;
  color: string;
  iconName?: string;
  onPress: (event: GestureResponderEvent) => void;
}

const ButtonComponent: React.FC<ButtonComponentProps> = ({ title, color, onPress }) => {
  return (
    <TouchableOpacity style={[styles.button, { backgroundColor: color }]} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: '90%',
    height: 50,
    padding: 10,
    borderRadius: 25,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
});

export default ButtonComponent;
