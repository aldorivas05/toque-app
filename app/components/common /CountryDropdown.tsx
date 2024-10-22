import React, { useState } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';

const CountryDropdown = () => {

  const [selectedCountry, setSelectedCountry] = useState('');


  const screenWidth = Dimensions.get('window').width;

  const countryOptions = [
    { label: 'United States', value: 'USA' },
    { label: 'Spain', value: 'ESP' },
    { label: 'Mexico', value: 'MEX' },
    { label: 'Colombia', value: 'COL' },
  ];

  return (
    <View style={[styles.dropdownContainer, { width: screenWidth }]}>
      <Dropdown
        style={styles.dropdown}
        data={countryOptions}
        labelField="label"
        valueField="value"
        placeholder="Seleciona tu pais"
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        value={selectedCountry}
        onChange={item => setSelectedCountry(item.value)}
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

export default CountryDropdown;
