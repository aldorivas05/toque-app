import React from 'react';
import {  
  Text, 
  StyleSheet, 
  TouchableOpacity,
  StyleProp,
  View,
  ViewStyle,
} from 'react-native';
import { ButtonComponentProps } from '@/App/types';


const ButtonComponent: React.FC<ButtonComponentProps> = ({ title, color, onPress, icon, borderColor, textColor }) => {

  const buttonStyle: StyleProp<ViewStyle> = [
    styles.button, 
    { backgroundColor: color },
    borderColor ? { borderColor: borderColor, borderWidth: 1 } : {},
  ];

  return (
    <TouchableOpacity style={buttonStyle} onPress={onPress}>

      {icon && <View style={styles.iconContainer}>{icon}</View>}
      <Text style={[styles.buttonText, { color: textColor || '#FFF' }]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: '100%',
    height: 50,
    padding: 10,
    borderRadius: 25,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconContainer: {
    paddingLeft: 10, 
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontFamily: 'Inter_400Regular',
    fontSize: 16,
  },
});

export default ButtonComponent;

