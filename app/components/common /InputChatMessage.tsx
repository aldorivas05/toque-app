import React  from 'react';
import { 
  View, 
  TextInput, 
  StyleSheet, 
  TouchableOpacity} from 'react-native';

interface InputChatMessageProps {
  leftIcon?: JSX.Element,
  rightIcon?: JSX.Element,
  onRightIconPress?: () => void;
}

const InputChatMessage: React.FC<InputChatMessageProps> = ({leftIcon, rightIcon, onRightIconPress}) => {
  return (
    <View style={styles.container}>
  
      {leftIcon && <View style={styles.leftIcon}>{leftIcon}</View>}
    
      <TextInput style={styles.input} placeholder={"Escribe un mensaje"} />

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
    borderWidth: 1,
    borderRadius: 28,
    backgroundColor: 'transparent',
    borderColor: '#CCC',
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

export default InputChatMessage;
