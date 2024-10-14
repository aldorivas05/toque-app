import React  from 'react';
import { 
  View, 
  TextInput, 
  StyleSheet, 
  TouchableOpacity} from 'react-native';

interface CustomInputComponentProps {
  leftIcon: JSX.Element,
  rightIcon?: JSX.Element,
  onRightIconPress?: () => void;
}

const CustomInputComponent: React.FC<CustomInputComponentProps> = ({leftIcon, rightIcon, onRightIconPress}) => {
  return (
    <View style={styles.container}>
  
      {leftIcon && <View style={styles.leftIcon}>{leftIcon}</View>}
    
      <TextInput style={styles.input} placeholder={"Buscar"} />

      {rightIcon && <TouchableOpacity onPress={onRightIconPress} style={styles.rightIcon}>{rightIcon}</TouchableOpacity>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: 50,
    paddingLeft: 16,
    paddingRight: 5,
    borderRadius: 28,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.08, 
    shadowRadius: 16,
    elevation: 5, 
    fontSize: 16,
    fontFamily: 'Inter_400Regular',
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
    marginRight: 8,
  },
  rightIcon: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 8,
  },
});

export default CustomInputComponent;
