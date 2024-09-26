import React  from 'react';
import { 
  View, 
  TextInput, 
  StyleSheet } from 'react-native';

interface CustomInputComponentProps {
  leftIcon: JSX.Element,
  rightIcon?: JSX.Element
}

const CustomInputComponent: React.FC<CustomInputComponentProps> = ({leftIcon, rightIcon}) => {
  return (
    <View style={styles.container}>
  
      {leftIcon && <View style={styles.leftIcon}>{leftIcon}</View>}
    
      <TextInput style={styles.input} placeholder={"Buscar"}/>

      {rightIcon && <View style={styles.rightIcon}>{rightIcon}</View>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 284,
    height: 50,
    maxWidth: 320,
    maxHeight: 50,
    paddingHorizontal: 16,
    borderRadius: 28,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.2,
    shadowRadius: 16,
    elevation: 5,
  },
  input: {
    flex:1,
    height: '100%',
  },
  leftIcon: {
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  rightIcon: {
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },
});

export default CustomInputComponent;
