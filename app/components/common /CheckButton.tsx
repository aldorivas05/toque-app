import React, { useState } from 'react';
import { CheckBox } from 'react-native-elements';
import { View, StyleSheet } from 'react-native';

const CheckButton = () => {
  const [checked, setChecked] = useState(false);

  return (
    <View style={styles.container}>
      <CheckBox
        checked={checked}
        onPress={() => setChecked(!checked)}
        containerStyle={styles.checkBoxContainer}
        checkedColor="#FFF"
        uncheckedColor="#CCC"
        checkedIcon="check-square-o"
        uncheckedIcon="square-o"
        iconType="font-awesome"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkBoxContainer: {
    width: 20,
    height: 20,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#CCC',
    backgroundColor: '#FFF',
  },
});

export default CheckButton;
