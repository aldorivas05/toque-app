import React from 'react';
import { View, TextInput, StyleSheet, TextInputProps } from 'react-native';

interface InputProfileContentProps extends TextInputProps {
  placeholder: string;
}

const InputProfileContent: React.FC<InputProfileContentProps> = ({ placeholder, ...props }) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor="#A1A1A1"
        {...props} 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
  },
  input: {
    width: '100%',
    height: 82,
    borderRadius: 12,
    borderWidth: 0.5,
    borderColor: '#CCC',
    backgroundColor: '#FFF',
    paddingHorizontal: 16,
    paddingBottom: 46,
    paddingTop: 12,
    fontFamily: 'Inter_400Regular',
    fontSize: 14,
    lineHeight: 20,
    color: '#000',
  },
});

export default InputProfileContent;

