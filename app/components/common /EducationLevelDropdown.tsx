import React, { useState } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';

const EducationLevelDropdown = () => {
  const [selectedEducationLevel, setSelectedEducationLevel] = useState('');

  const screenWidth = Dimensions.get('window').width;

  const educationOptions = [
    { label: 'Primaria', value: 'primaria' },
    { label: 'Secundaria', value: 'secundaria' },
    { label: 'Bachillerato', value: 'bachillerato' },
    { label: 'Universitario', value: 'universitario' },
    { label: 'Maestría', value: 'maestria' },
    { label: 'Doctorado', value: 'doctorado' },
  ];

  return (
    <View style={[styles.dropdownContainer, { width: screenWidth }]}>
      <Dropdown
        style={styles.dropdown}
        data={educationOptions}
        labelField="label"
        valueField="value"
        placeholder="Selecciona un nivel"
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        value={selectedEducationLevel}
        onChange={item => setSelectedEducationLevel(item.value)}
        renderLeftIcon={() => (
          <View style={styles.iconContainer}>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  dropdownContainer: {
    flex: 1,
    borderRadius: 28,
    height: 50,
    borderWidth: 0.5,
    borderColor: '#CCC',
    overflow: 'hidden',
    justifyContent: 'center',
  },
  dropdown: {
    flex: 1,
    paddingHorizontal: 16,
  },
  iconContainer: {
    marginRight: 8,
  },
  placeholderStyle: {
    fontFamily: 'Inter_400Regular',
    fontSize: 16,
    color: '#222',
  },
  selectedTextStyle: {
    fontFamily: 'Inter_400Regular',
    fontSize: 16,
    color: '#222',
  },
});

export default EducationLevelDropdown;
