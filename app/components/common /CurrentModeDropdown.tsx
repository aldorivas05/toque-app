import HeartIcon from '@/assets/icons/HeartIcon';
import HeartProfileIcon from '@/assets/icons/HeartProfileIcon';
import React, { useState } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';

const CurrentModeDropdown = () => {
  const [selectedCurrentMode, setSelectedCurrentMode] = useState('');

  const screenWidth = Dimensions.get('window').width;

  const educationOptions = [
    { label: 'Romance', value: 'Romance' },
    { label: 'Fiesta', value: 'Fiesta' },
  ];

  return (
    <View style={[styles.dropdownContainer, { width: screenWidth }]}>
      <Dropdown
        style={styles.dropdown}
        data={educationOptions}
        labelField="label"
        valueField="value"
        placeholder="Modo romántico"
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        value={selectedCurrentMode}
        onChange={item => setSelectedCurrentMode(item.value)}
        renderLeftIcon={() => (
          <View style={styles.iconContainer}>
            <HeartProfileIcon />
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
    justifyContent: 'center',
    backgroundColor: '#FFF',
    // Sombras para iOS
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.08,
    shadowRadius: 8, 
    // Sombras para Android
    elevation: 4,
    zIndex: 1,
  },
  dropdown: {
    paddingHorizontal: 0,
    marginHorizontal: 16
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

export default CurrentModeDropdown;